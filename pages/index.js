import Link from 'next/link';
import DocumentHead from '../components/documentHead';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <DocumentHead />
      <div className={styles.container}>
        <header>
          <h1>Your cornhole games</h1>
          <div>
            <Link href="/game/new">
              <a>Start a new game</a>
            </Link>
          </div>
        </header>
        <main role="main">

        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}
