import styles from './project.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getProject, projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>
              ← Back to Work
            </Link>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.textBlock}>
              <p className={styles.description}>{project.description}</p>
            </div>
          </section>

          <section className={styles.imageSection}>
            {project.images.map((image) => (
              <div key={image.id} className={styles.imageWrapper}>
                <div
                  className={styles.imagePlaceholder}
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={image.alt}
                />
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>Challenge</h2>
              <p className={styles.bodyText}>{project.challenge}</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>Solution</h2>
              <p className={styles.bodyText}>{project.solution}</p>
            </div>
          </section>
        </div>

        <div className={styles.navigation}>
          <Link href={`/project/${nextProject.id}`} className={styles.navLink}>
            Next — {nextProject.title}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
