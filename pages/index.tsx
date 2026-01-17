import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';

import AboutUs from '../components/home/aboutus';
import OurServices from '../components/home/ourservices';
import Hero from '../components/home/hero';
import QuickStatus from '../components/home/QuickStatus';
import ProcessSection from '../components/home/ProcessSection';
import RichFAQ from '../components/home/RichFAQ';
import OurSkills from '../components/home/ourskills';

import WhatsappSection from '../components/contact/whatsappsection';
import ContactSection from '../components/contact/contactsection';

export default function Home() {
  return (
    <PageContainer>

      <Head>
        <title>Guincho em Campo Grande RJ 24h | Chegamos Rápido - Juniauto</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoTowingService",
              "name": "Juniauto - Guincho 24h em Campo Grande",
              "image": "https://juniauto.com.br/assets/img/logo.png",
              "telephone": "+5521982769969",
              "url": "https://juniauto.com.br",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Campo Grande",
                "addressRegion": "RJ",
                "addressCountry": "BR"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Campo Grande"
                },
                {
                  "@type": "Neighborhood",
                  "name": "West Shopping"
                },
                {
                  "@type": "Neighborhood",
                  "name": "Mendanha"
                },
                {
                  "@type": "Neighborhood",
                  "name": "Santíssimo"
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </Head>

      <div id="reacthome" className="slider-area">
        <Hero />
        <QuickStatus />
      </div>

      <main id="main">
        <AboutUs />
        <ProcessSection />
        <OurServices />
        <RichFAQ />
        <OurSkills />
        <WhatsappSection />
        <ContactSection />
      </main>{/* End #main */}
      {/* ======= Footer ======= */}
    </PageContainer>
  )
}
