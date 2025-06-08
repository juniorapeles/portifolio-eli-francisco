// components/contact/Contact.tsx
import styles from './Contact.module.scss'
import Link from 'next/link'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <h2>Contato</h2>
      
      <div className={styles.contactContent}>
        {/* Link de Email com mailto */}
        <div className={styles.emailBox}>
          <FiMail className={styles.icon} />
          <a 
            href="mailto:elijunior.apeles2005@gmail.com?subject=Contato%20do%20Portfólio" 
            className={styles.emailLink}
          >
            Envie um email
          </a>
          <p>Ou me encontre nas redes sociais:</p>
        </div>

        {/* Redes Sociais */}
        <div className={styles.socialLinks}>
          <Link 
            href="https://github.com/juniorapeles" 
            target="_blank"
            className={styles.socialLink}
          >
            <FiGithub className={styles.socialIcon} />
            <span>GitHub</span>
          </Link>
          
          <Link 
            href="https://linkedin.com/in/develi" 
            target="_blank"
            className={styles.socialLink}
          >
            <FiLinkedin className={styles.socialIcon} />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  )
}