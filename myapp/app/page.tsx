import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Vibe Coding</h1>
          <p className={styles.description}>
            The future of software development is here.
          </p>
        </div>
      </main>
    </div>
  );
}