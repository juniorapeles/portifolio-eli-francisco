'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projetos', 'sobre', 'contato']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // ativa já na primeira renderização
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector(`.${styles.header}`) as HTMLElement
    const headerHeight = header ? header.offsetHeight : 80

    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Eli Francisco</div>

      <nav className={styles.nav}>
        {['home', 'projetos', 'sobre', 'contato'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`${styles.navLink} ${
              activeSection === section ? styles.active : ''
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}
