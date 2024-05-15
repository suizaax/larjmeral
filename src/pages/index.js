import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import WpcIndustry from './sections/WpcIndustry'
import OurProducts from './sections/OurProducts'
import ContactUs from './sections/ContactUs'
import Footer from './componenets/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>Guzel Wpc Home</title> */}
        <title>Coming soon ...</title>
        <meta name="description" content="Güzel wpc, is an Algerian/Turkish company, established in 2023 located in El-Eulma city, Setif, Algeria, with about 10 years experience in this field." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutUs />
      {/* <WpcIndustry /> */}
      <OurProducts />
      <ContactUs />
      <Footer />
      {/* <div className=' flex flex-col h-screen w-screen justify-center items-center md:text-6xl md:font-bold text-3xl font-semibold'>
        <p>Coming soon ...</p>
      </div> */}
    </>
  )
}
