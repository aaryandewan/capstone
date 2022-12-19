import React from 'react'
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <div>

<ScrollToTop />
      <Navbar />
      <Hero />
      <Footer />

    </div>
  )
}

export default Home