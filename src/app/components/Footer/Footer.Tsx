// components/Footer/Footer.tsx
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Eli Francisco. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}