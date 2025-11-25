import { useTranslation } from 'react-i18next'
import './Support.css'
import { QuestionIcon, MailIcon, LightningIcon, AcademicCapIcon } from '../components/Icons'

function Support() {
  const { t } = useTranslation()

  return (
    <div className="support">
      <section className="support-hero">
        <div className="container">
          <QuestionIcon className="hero-icon" />
          <h1>{t('support.title')}</h1>
          <p>{t('support.subtitle')}</p>
        </div>
      </section>

      <section className="support-content">
        <div className="container">
          <div className="support-section">
            <div className="section-header">
              <QuestionIcon className="section-icon" />
              <h2>{t('support.faq.title')}</h2>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q1.question')}</h3>
              <p>{t('support.faq.q1.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q2.question')}</h3>
              <p>{t('support.faq.q2.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q3.question')}</h3>
              <p>{t('support.faq.q3.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q4.question')}</h3>
              <p>{t('support.faq.q4.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q5.question')}</h3>
              <p>{t('support.faq.q5.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q6.question')}</h3>
              <p>{t('support.faq.q6.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('support.faq.q7.question')}</h3>
              <p>{t('support.faq.q7.answer')}</p>
            </div>
          </div>

          <div className="support-section">
            <div className="section-header">
              <LightningIcon className="section-icon" />
              <h2>{t('support.gettingStarted.title')}</h2>
            </div>
            <ol className="guide-list">
              <li><strong>{t('support.gettingStarted.step1')}</strong></li>
              <li><strong>{t('support.gettingStarted.step2')}</strong></li>
              <li><strong>{t('support.gettingStarted.step3')}</strong></li>
              <li><strong>{t('support.gettingStarted.step4')}</strong></li>
              <li><strong>{t('support.gettingStarted.step5')}</strong></li>
            </ol>
          </div>

          <div className="support-section">
            <div className="section-header">
              <MailIcon className="section-icon" />
              <h2>{t('support.contact.title')}</h2>
            </div>
            <p>{t('support.contact.text')}</p>
            <div className="contact-info">
              <div className="contact-item">
                <MailIcon className="contact-icon" />
                <h4>{t('support.contact.emailSupport')}</h4>
                <p>
                  <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>
                </p>
                <p className="contact-note">
                  {t('support.contact.responseTime')}
                </p>
              </div>
            </div>
          </div>

          <div className="support-section">
            <div className="section-header">
              <QuestionIcon className="section-icon" />
              <h2>{t('support.reportProblem.title')}</h2>
            </div>
            <p>
              {t('support.reportProblem.text')}{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a> {t('support.reportProblem.with')}
            </p>
            <ul className="report-list">
              <li>{t('support.reportProblem.item1')}</li>
              <li>{t('support.reportProblem.item2')}</li>
              <li>{t('support.reportProblem.item3')}</li>
              <li>{t('support.reportProblem.item4')}</li>
            </ul>
          </div>

          <div className="support-section">
            <div className="section-header">
              <AcademicCapIcon className="section-icon" />
              <h2>{t('support.featureRequests.title')}</h2>
            </div>
            <p>
              {t('support.featureRequests.text')}{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>.{' '}
              {t('support.featureRequests.text2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
