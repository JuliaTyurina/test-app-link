'use client'
import { Hero } from "./Components/Hero/Hero";
import { Benefits } from "./Components/Benefits/Benefits";
import { Product } from "./Components/Product/Product";
import { Photos } from "./Components/Photos/Photos";
import { Partners } from "./Components/Partners/Partners";
import { images, users } from "@/app/data/data"
import { Reviews } from "./Components/Reviews/Reviews";
import { RequestForm } from "./Components/RequestForm/RequestForm";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { FooterMobile } from "./Components/Footer/FooterMobile";
import { useResize } from "./hooks/useResize";


export default function Home() {
  const { isScreenLg } = useResize()
  return (

    <body>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Product />
        <Photos data={images} />
        <Partners />
        <Reviews data={users} />
        <RequestForm />
      </main>
      {isScreenLg ? <FooterMobile /> : <Footer />}
    </body>

  );
}
