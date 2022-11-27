import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';

import AboutUs from '../components/home/aboutus';
import OurServices from '../components/home/ourservices';
import Hero from '../components/home/hero';
import OurSkills from '../components/home/ourskills';

import WhatsappSection from '../components/contact/whatsappsection';
import ContactSection from '../components/contact/contactsection';

export default function Home() {
  return (
    <PageContainer>

      <Head>
        <title>Auto Socorro Juniauto - Reboque para carros e motos em Campo Grande e região</title>
      </Head>

      <div id="reacthome" className="slider-area">
        <Hero />
      </div>

      <main id="main">

        <AboutUs />
        <OurSkills />
        <OurServices />
        <WhatsappSection />
        <ContactSection />

        </main>{/* End #main */}
      {/* ======= Footer ======= */}
    </PageContainer>
  )
}
