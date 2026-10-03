import styles from './about.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>About</h1>
            <div className={styles.bio}>
              <p className={styles.paragraph}>
                A designer focused on creating memorable visual experiences through thoughtful craft and strategic thinking. Work spans brand identity, editorial design, packaging, and digital experiences.
              </p>
              <p className={styles.paragraph}>
                Based in [City], working with clients globally. Available for select projects and collaborations.
              </p>
            </div>
            <div className={styles.details}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <ul className={styles.list}>
                  <li>Brand Identity & Strategy</li>
                  <li>Editorial Design</li>
                  <li>Packaging Design</li>
                  <li>Digital Experiences</li>
                  <li>Art Direction</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Recognition</h2>
                <ul className={styles.list}>
                  <li>Design Award [Year]</li>
                  <li>Featured in Publication [Year]</li>
                  <li>Exhibition Name [Year]</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Clients</h2>
                <ul className={styles.list}>
                  <li>Client Name</li>
                  <li>Client Name</li>
                  <li>Client Name</li>
                  <li>Client Name</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
