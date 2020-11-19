import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastre seu E-mail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Receba as melhores dicas de estudo para concurso público!
        </h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Cadastre seu melhor e-mail &rarr;</h3>
            
          </a>

        </div>
      </main>
    </div>
  )
}
