import { useTranslation } from 'react-i18next'
import './Home.css'
import { BookIcon, SearchIcon, HeartIcon, GlobeIcon, SparklesIcon, ShieldIcon, CloudDownloadIcon } from '../components/Icons'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <SparklesIcon className="badge-icon" />
              <span>{t('home.badge')}</span>
            </div>
            <h1>{t('home.title')}</h1>
            <p className="hero-subtitle">
              {t('home.subtitle')}
            </p>
            <div className="hero-buttons">
              <a href="https://apps.apple.com/gt/app/biblenames/id6755162975?l=en-GB" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <CloudDownloadIcon className="btn-icon" />
                {t('home.downloadBtn')}
              </a>
              <a href="#features" className="btn btn-secondary">
                {t('home.learnMore')}
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>1,000+</strong>
                <span>{t('home.stats.names')}</span>
              </div>
              <div className="stat">
                <strong>2</strong>
                <span>{t('home.stats.languages')}</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>{t('home.stats.free')}</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup-real">
              <img
                src="/app-screenshot.png"
                alt="BibleNames App Screenshot"
                className="app-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">{t('home.howItWorks.title')}</h2>
            <p className="section-subtitle">
              {t('home.howItWorks.subtitle')}
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <SparklesIcon />
              </div>
              <h3>{t('home.howItWorks.swipe.title')}</h3>
              <p>{t('home.howItWorks.swipe.text')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SearchIcon />
              </div>
              <h3>{t('home.howItWorks.recommendations.title')}</h3>
              <p>{t('home.howItWorks.recommendations.text')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <BookIcon />
              </div>
              <h3>{t('home.howItWorks.information.title')}</h3>
              <p>{t('home.howItWorks.information.text')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h3>{t('home.howItWorks.favorites.title')}</h3>
              <p>{t('home.howItWorks.favorites.text')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <GlobeIcon />
              </div>
              <h3>{t('home.howItWorks.gender.title')}</h3>
              <p>{t('home.howItWorks.gender.text')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3>{t('home.howItWorks.privacy.title')}</h3>
              <p>{t('home.howItWorks.privacy.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="about-icon">
                <BookIcon />
              </div>
              <h2>{t('home.about.title')}</h2>
              <p>
                {t('home.about.text1')}
              </p>
              <p>
                {t('home.about.text2')}
              </p>
            </div>
            <div className="about-image">
              <img
                src="/app-screenshot.png"
                alt="BibleNames App"
                className="about-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <CloudDownloadIcon className="cta-icon" />
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <a href="https://apps.apple.com/gt/app/biblenames/id6755162975?l=en-GB" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <CloudDownloadIcon className="btn-icon" />
              {t('home.cta.downloadBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
