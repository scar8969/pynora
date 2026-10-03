import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h3 className={styles.heading}>Get in Touch</h3>
          <a href="mailto:hello@example.com" className={styles.email}>
            hello@example.com
          </a>
        </div>
        <div className={styles.social}>
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
      <div className={styles.bottom}>
        <p className={styles.copyright}>© {currentYear} All rights reserved</p>
      </div>
    </footer>
  )
}
