import Categorie from '@/components/Categorie'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Next js | Project 1</title>
        
      </Head>
      <Hero/>
      <Services />
      <Categorie />

  </div>
  )
}
