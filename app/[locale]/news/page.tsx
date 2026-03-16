import { useTranslations } from 'next-intl';

export default function NewsPage() {
  const t = useTranslations('nav');

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold">{t('news')}</h1>
      <p className="font-body text-lg opacity-70">
        Hier erscheinen bald Neuigkeiten vom Astro-Club! 🚀
      </p>
    </div>
  );
}
