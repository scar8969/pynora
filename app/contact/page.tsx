import styles from './contact.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Let's Work Together</h1>
          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <h2 className={styles.label}>Email</h2>
                <a href="mailto:hello@example.com" className={styles.link}>
                  hello@example.com
                </a>
              </div>
              <div className={styles.infoBlock}>
                <h2 className={styles.label}>Social</h2>
                <div className={styles.socialLinks}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Instagram
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Behance
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Dribbble
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.availability}>
              <h2 className={styles.label}>Availability</h2>
              <p className={styles.text}>
                Currently accepting select projects for Q3 2024. For inquiries about collaborations, speaking engagements, or general questions, reach out via email.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
