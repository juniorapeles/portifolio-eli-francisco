'use client'

import styles from './Projects.module.scss'

type ProjectCardProps = {
  title: string
  description: string
  codeLink?: string
  projectLink?: string
}

export default function Projects({
  title,
  description,
  codeLink,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
  <header className={styles.cardHeader}>
    <h3>{title}</h3>
  </header>

  <div className={styles.cardBody}>
    <p>{description}</p>
  </div>

  <footer className={styles.cardFooter}>
    <div className={styles.buttons}>
      {codeLink && (
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button>Ver Código</button>
        </a>
      )}
      {projectLink && (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button>Ver Projeto</button>
        </a>
      )}
    </div>
  </footer>
</div>

  )
}
