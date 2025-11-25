import { useTranslation } from 'react-i18next'
import './Terms.css'
import { DocumentIcon, ShieldIcon } from '../components/Icons'

function Terms() {
  const { t } = useTranslation()

  return (
    <div className="terms">
      <section className="terms-hero">
        <div className="container">
          <DocumentIcon className="hero-icon" />
          <h1>{t('terms.title')}</h1>
          <p>{t('terms.lastUpdated')}</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <div className="section-header">
              <DocumentIcon className="section-icon" />
              <h2>{t('terms.tos.title')}</h2>
            </div>

            <h3>{t('terms.tos.section1.title')}</h3>
            <p>{t('terms.tos.section1.text')}</p>

            <h3>{t('terms.tos.section2.title')}</h3>
            <p>{t('terms.tos.section2.text')}</p>

            <h3>{t('terms.tos.section3.title')}</h3>
            <p>{t('terms.tos.section3.text')}</p>
            <ul>
              {t('terms.tos.section3.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t('terms.tos.section4.title')}</h3>
            <p>{t('terms.tos.section4.text')}</p>

            <h3>{t('terms.tos.section5.title')}</h3>
            <p>{t('terms.tos.section5.text')}</p>

            <h3>{t('terms.tos.section6.title')}</h3>
            <p>{t('terms.tos.section6.text')}</p>

            <h3>{t('terms.tos.section7.title')}</h3>
            <p>{t('terms.tos.section7.text')}</p>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <ShieldIcon className="section-icon" />
              <h2>{t('terms.privacy.title')}</h2>
            </div>

            <h3>{t('terms.privacy.section1.title')}</h3>
            <p>{t('terms.privacy.section1.text')}</p>
            <ul>
              {t('terms.privacy.section1.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('terms.privacy.section1.note')}</p>

            <h3>{t('terms.privacy.section2.title')}</h3>
            <p>{t('terms.privacy.section2.text')}</p>
            <ul>
              {t('terms.privacy.section2.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('terms.privacy.section2.note')}</p>

            <h3>{t('terms.privacy.section3.title')}</h3>
            <p>{t('terms.privacy.section3.text')}</p>

            <h3>{t('terms.privacy.section4.title')}</h3>
            <p>{t('terms.privacy.section4.text')}</p>

            <h3>{t('terms.privacy.section5.title')}</h3>
            <p>{t('terms.privacy.section5.text')}</p>

            <h3>{t('terms.privacy.section6.title')}</h3>
            <p>{t('terms.privacy.section6.text')}</p>

            <h3>{t('terms.privacy.section7.title')}</h3>
            <p>{t('terms.privacy.section7.text')}</p>
            <ul>
              {t('terms.privacy.section7.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t('terms.privacy.section8.title')}</h3>
            <p>{t('terms.privacy.section8.text')}</p>

            <h3>{t('terms.privacy.section9.title')}</h3>
            <p>
              {t('terms.privacy.section9.text')}{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>
            </p>
          </div>

          <div className="terms-section">
            <h2>{t('terms.appStore.title')}</h2>
            <p>{t('terms.appStore.text')}</p>
            <ul>
              {t('terms.appStore.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="terms-section">
            <h2>{t('terms.intellectual.title')}</h2>
            <p>{t('terms.intellectual.text')}</p>
          </div>

          <div className="terms-section">
            <h2>{t('terms.contentDisclaimer.title')}</h2>
            <p>{t('terms.contentDisclaimer.text')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
