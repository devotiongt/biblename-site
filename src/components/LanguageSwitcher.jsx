import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      {i18n.language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
    </button>
  )
}

export default LanguageSwitcher
