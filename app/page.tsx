"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PriceList from '@/components/PriceList';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import OrganizationSchema from '@/components/OrganizationSchema';
import WebSiteSchema from '@/components/WebSiteSchema';

export default function Home() {
  return (
    <>
      <Preloader />
      <OrganizationSchema />
      <WebSiteSchema />
      <main className="min-h-screen">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pricing">
          <PriceList />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
