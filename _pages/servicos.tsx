import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';

import OurServices from '../components/servicos/ourservices';

import WhatsappSection from '../components/contact/whatsappsection';
import ContactSection from '../components/contact/contactsection';

export default function OurServicesPage() {
  return (
    <PageContainer>

      <Head>
        <title>Nossos serviços - Reboque para carros e motos em Campo Grande e região</title>
      </Head>

        <main id="main" style={{ 'paddingTop': '60px' }}>
            <OurServices />

            <WhatsappSection />
            <ContactSection />
        </main>

    </PageContainer>
  )
}
