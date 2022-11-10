import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a Next.js 13 SSG demonstration!
        </h1>

        <p>
          This site reproduces issues I've run into with Node 13 beta and SSG.
          Use the routes below to observe the various errors.
          Check the corresponding code to see what I am trying to do.
        </p>

        <nav>
          <Link href="/rsc-test">React server component test</Link>
          {' '}·{' '}
          <Link href="/rcc-use-test">React client component with use hook test</Link>
          {' '}·{' '}
          <Link href="/rcc-useEffect-test">React client component with useEffect hook test</Link>
        </nav>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
