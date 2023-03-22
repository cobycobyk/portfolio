import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cobys Portfolio</title>
      </Head>
      {/* header */}
      <Header />
      {/* hero */}
      {/* about */}
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact */}
    </>
  )
}
