import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  variable:"--font-roboto",
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <main className={roboto.variable} >
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </main>
    </>
  )
  
}
