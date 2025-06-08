import styles from './Projects.module.scss';

export default function ProjectCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.buttons}>
        <button>Ver Código</button>
        <button>Ver Projeto</button>
      </div>
    </div>
  );
}