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

function getTranslation(locale, slug) {
  const translations = require(`./locales/${locale}`)
  return translations[slug] || null
}

module.exports = { LOCALES, SUNO_SLUGS, getTranslation }
