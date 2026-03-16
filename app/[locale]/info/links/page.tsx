import { useTranslations } from 'next-intl';

export default function LinksPage() {
  const t = useTranslations('info');

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold">{t('links')}</h1>
      <p className="font-body text-lg opacity-70">
        Links & Tipps werden bald hier erscheinen! 🔭
      </p>
    </div>
  );
}
