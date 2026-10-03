import styles from './Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/">Designer Name</Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/">Work</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
