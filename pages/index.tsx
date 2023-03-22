import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-y-mandatory overflow-scroll z-0'>
      <Head>
        <title>Cobys Portfolio</title>
      </Head>
      <Header />
      {/* hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* about */}
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact */}
    </div>
  )
}
