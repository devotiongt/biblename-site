import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BibleNames</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.links')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/support">{t('nav.support')}</Link></li>
              <li><Link to="/terms">{t('nav.terms')}</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <p>Email: krakendevgt@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BibleNames. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
