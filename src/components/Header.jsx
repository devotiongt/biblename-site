import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <h1>BibleNames</h1>
          </Link>
          <div className="nav-right">
            <ul className="nav-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/support">{t('nav.support')}</Link></li>
              <li><Link to="/terms">{t('nav.terms')}</Link></li>
            </ul>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
