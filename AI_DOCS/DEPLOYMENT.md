# Deployment & Environment Variables

## Overview

This project requires several API keys and secrets for authentication, CMS, and external APIs. This document explains how to configure them locally and on the Ionos VPS production server.

## Local Development

Copy `.env.local` (already provided in the repo root) and fill in the values:

```bash
cp .env.local .env.local  # already exists, just edit it
```

For local development, the Auth0 dummy admin works without real credentials — the app detects unconfigured Auth0 env vars and falls back to a hardcoded dev admin.

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `AUTH0_SECRET` | Yes | Random string (min 32 chars) for session encryption. Generate with: `openssl rand -hex 32` |
| `AUTH0_DOMAIN` | Yes | Your Auth0 tenant domain (e.g., `your-tenant.eu.auth0.com`) |
| `AUTH0_CLIENT_ID` | Yes | Auth0 application Client ID |
| `AUTH0_CLIENT_SECRET` | Yes | Auth0 application Client Secret |
| `APP_BASE_URL` | Yes | Your app's base URL (`http://localhost:3000` locally, `https://www.ollis-astro-club.com` in prod) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Later | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Later | Sanity dataset name (usually `production`) |
| `SANITY_API_TOKEN` | Later | Sanity API token (read access) |
| `NASA_API_KEY` | Later | NASA API key (free at https://api.nasa.gov) |
| `DATABASE_URL` | Later | MySQL connection string for Ionos VPS |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public site URL |

## Setting Up API Keys on Ionos VPS

### 1. SSH into the VPS

```bash
ssh user@your-ionos-vps-ip
```

### 2. Create the environment file

Navigate to the project directory and create the production `.env.local`:

```bash
cd /path/to/ollis-astro-club--next-js

# Create the env file with restricted permissions (readable only by owner)
touch .env.local
chmod 600 .env.local
```

### 3. Edit the environment file

```bash
nano .env.local
```

Add all production values:

```bash
# Auth0 (v4 SDK) — get these from https://manage.auth0.com
AUTH0_SECRET=<generate-with-openssl-rand-hex-32>
AUTH0_DOMAIN=your-tenant.eu.auth0.com
AUTH0_CLIENT_ID=<your-client-id>
AUTH0_CLIENT_SECRET=<your-client-secret>
APP_BASE_URL=https://www.ollis-astro-club.com

# Sanity — get these from https://www.sanity.io/manage
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your-read-token>

# NASA — register at https://api.nasa.gov
NASA_API_KEY=<your-nasa-api-key>

# MySQL on Ionos VPS
DATABASE_URL=mysql://user:password@localhost:3306/astro_club

# App
NEXT_PUBLIC_SITE_URL=https://www.ollis-astro-club.com
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X` in nano).

### 4. Verify file permissions

```bash
ls -la .env.local
# Should show: -rw------- 1 user user ... .env.local
```

Only the owner should be able to read the file. This prevents other users on the VPS from seeing your secrets.

### 5. Alternative: Use systemd environment files

If running the app as a systemd service, you can store env vars in the service's environment file:

```bash
sudo nano /etc/systemd/system/astro-club.service
```

```ini
[Unit]
Description=Olli's Astro Club Next.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/ollis-astro-club--next-js
EnvironmentFile=/path/to/ollis-astro-club--next-js/.env.local
ExecStart=/usr/bin/node node_modules/.bin/next start -p 3000
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable astro-club
sudo systemctl start astro-club
```

### 6. Alternative: Use PM2 with ecosystem config

If using PM2 as process manager:

```bash
npm install -g pm2
```

Create `ecosystem.config.js` (do **not** commit this file):

```javascript
module.exports = {
  apps: [{
    name: 'astro-club',
    script: 'node_modules/.bin/next',
    args: 'start -p 3000',
    env: {
      NODE_ENV: 'production',
    },
    // PM2 automatically loads .env.local if dotenv is configured,
    // or you can specify env vars here directly
  }],
};
```

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # auto-start on reboot
```

## Security Best Practices

- **Never commit `.env.local`** — it is already in `.gitignore`
- **Use `chmod 600`** on the env file so only the owner can read it
- **Rotate secrets regularly** — especially `AUTH0_SECRET` and API tokens
- **Use separate Auth0 applications** for development and production
- **Generate `AUTH0_SECRET`** with: `openssl rand -hex 32`
- **Use a dedicated database user** for the MySQL connection with minimal required permissions
- **Back up env vars** securely (e.g., in a password manager), not in the repo

## Obtaining API Keys

### Auth0
1. Go to https://manage.auth0.com
2. Create a new application (Regular Web Application)
3. Note the Domain, Client ID, and Client Secret
4. Set Allowed Callback URLs: `https://www.ollis-astro-club.com/auth/callback`
5. Set Allowed Logout URLs: `https://www.ollis-astro-club.com`
6. Set Allowed Web Origins: `https://www.ollis-astro-club.com`

### NASA API
1. Go to https://api.nasa.gov
2. Register for a free API key
3. The default `DEMO_KEY` works for development (rate-limited)

### Sanity.io
1. Go to https://www.sanity.io/manage
2. Create a new project
3. Get the Project ID from project settings
4. Create an API token with read access under Settings → API → Tokens
