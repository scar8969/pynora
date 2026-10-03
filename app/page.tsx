import styles from './page.module.css'
import Navigation from '@/components/Navigation'
import ProjectHero from '@/components/ProjectHero'
import ProjectGrid from '@/components/ProjectGrid'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <ProjectHero project={projects[0]} />
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </>
  )
}
