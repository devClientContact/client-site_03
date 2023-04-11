import Head from 'next/head'
import LandingPage from '@/components/LandingPage'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Julie W Shop</title>
        <meta name='description' content='Online Shop For Julie W Merch' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <>
          <LandingPage />
        </>
      </main>
    </>
  )
}
