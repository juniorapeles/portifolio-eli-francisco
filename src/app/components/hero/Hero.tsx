
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Sou um <span>desenvolvedor</span> backend</h1>
      <p>com experiência em construir e manter APIs</p>
    </section>
  );
}