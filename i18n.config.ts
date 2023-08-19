export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'hu', 'ru', 'gr', 'sr']
} as const

export type Locale = (typeof i18n)['locales'][number]