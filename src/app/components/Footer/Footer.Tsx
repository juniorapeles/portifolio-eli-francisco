// Footer.jsx
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Meu Portfólio</p>
      </div>
    </footer>
  );
}