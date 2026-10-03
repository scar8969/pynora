import styles from './ProjectHero.module.css'
import Link from 'next/link'

interface ProjectHeroProps {
  project: {
    id: string
    title: string
    category: string
    year: string
    image: string
    description: string
  }
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className={styles.hero}>
      <Link href={`/project/${project.id}`} className={styles.heroLink}>
        <div className={styles.imageWrapper}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${project.image})` }}
            role="img"
            aria-label={project.title}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </Link>
    </section>
  )
}
