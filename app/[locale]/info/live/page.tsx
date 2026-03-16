import { useTranslations } from 'next-intl';

export default function LivePage() {
  const t = useTranslations('info');

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold">{t('live')}</h1>
      <p className="font-body text-lg opacity-70">
        Live-Daten von NASA und ESA kommen bald! 📡
      </p>
    </div>
  );
}
