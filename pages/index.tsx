import Head from 'next/head'
import Link from 'next/link'
import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julie W Shop</title>
        <meta name='description' content='Online Shop For Julie W Merch' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <>
          <LandingPage />
        </>
      </main>
    </>
  )
}
