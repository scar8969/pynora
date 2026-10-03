import styles from './ProjectGrid.module.css'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  category: string
  year: string
  image: string
  description: string
}

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className={styles.grid}>
      {projects.map((project, index) => (
        <Link
          key={project.id}
          href={`/project/${project.id}`}
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${project.image})` }}
              role="img"
              aria-label={project.title}
            />
          </div>
          <div className={styles.projectInfo}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <div className={styles.projectMeta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </div>
            <p className={styles.description}>{project.description}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
