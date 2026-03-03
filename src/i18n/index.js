const LOCALES = {
  zh: { code: "zh", name: "中文" },
  fr: { code: "fr", name: "Français" },
  ru: { code: "ru", name: "Русский" },
  es: { code: "es", name: "Español" },
  de: { code: "de", name: "Deutsch" },
  it: { code: "it", name: "Italiano" },
  pt: { code: "pt", name: "Português" },
  nl: { code: "nl", name: "Nederlands" },
  ja: { code: "ja", name: "日本語" },
}

const SUNO_SLUGS = [
  "suno-ai-chord-progressions",
  "suno-ai-prompt-guide",
  "suno-vs-udio",
  "suno-ai-tips",
]

const ALL_BLOG_SLUGS = [
  ...SUNO_SLUGS,
  "how-to-learn-music-theory",
  "7-reasons-why-you-should-learn-music-theory",
  "dont-give-up-on-music-theory",
  "cadences",
  "how-to-find-new-music",
  "whats-new-in-solfej-v-1.3",
  "is-betapage-worth-it",
  "5-beautiful-color-palette-generators-for-your-next-design-project",
  "the-4-best-ear-training-apps-for-2019",
]

function getTranslation(locale, slug) {
  const translations = require(`./locales/${locale}`)
  return translations[slug] || null
}

function getTranslatedStrings(locale) {
  const translations = require(`./locales/${locale}`)
  return translations.ui || null
}

function getPageContent(locale, page) {
  const translations = require(`./locales/${locale}`)
  return translations[page] || null
}

const { translateName } = require('./translateName')

module.exports = { LOCALES, SUNO_SLUGS, ALL_BLOG_SLUGS, getTranslation, getTranslatedStrings, getPageContent, translateName }
