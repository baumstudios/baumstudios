import en from './en.json';
import hr from './hr.json';

export const languages = {
  en: 'English',
  hr: 'Hrvatski'
};

export const defaultLang = 'en';

const translations = {
  en,
  hr,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
