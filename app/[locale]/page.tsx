import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const sections = [
    { href: `/${locale}/news`, emoji: '📰', label: tNav('news') },
    { href: `/${locale}/info`, emoji: '🔭', label: tNav('info') },
    { href: `/${locale}/games`, emoji: '🎮', label: tNav('games') },
    { href: `/${locale}/fun`, emoji: '🎨', label: tNav('fun') },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/logo-astro-club-300x300.png"
          alt="Astro Club Logo"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
        <h1 className="font-heading text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          {t('title')}
        </h1>
        <p className="font-heading text-xl text-[var(--accent)]">{t('subtitle')}</p>
        <p className="max-w-lg font-body text-lg text-[var(--foreground)] opacity-80">
          {t('description')}
        </p>
      </section>

      {/* Section Quick Links */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="no-underline">
            <Card rotate className="flex flex-col items-center gap-2 text-center hover:bg-[var(--muted)]">
              <span className="text-4xl">{section.emoji}</span>
              <span className="font-heading text-lg font-bold">{section.label}</span>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
