import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Boxenstopp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Boxenstopp" />
        <p className="description">
          Getting out in front matters <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
