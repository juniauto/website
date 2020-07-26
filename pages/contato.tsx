import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';
import ContactUsForm from '../components/contact/contactusform';
import LazyIframe from '../components/LazyIframe';
import Whatsapp from '../components/contact/whatsappsection';
import ContactUs from '../components/contact/contactus';
import ContactSection from '../components/contact/contactsection';

export default function ContactUsPage() {
  return (
    <PageContainer>

      <Head>
        <title>Reboque de carros e motos em Campo Grande e região: Fale Conosco</title>
      </Head>

      <main id="main" style={{ 'paddingTop': '60px' }}>
        {/* ======= Suscribe Section ======= */}
        <Whatsapp />
        {/* ======= Contact Section ======= */}
        <ContactSection />

        </main>{/* End #main */}
      {/* ======= Footer ======= */}
    </PageContainer>
  )
}
