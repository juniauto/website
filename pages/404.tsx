import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';
import ContactUsForm from '../components/contact/contactusform';
import LazyIframe from '../components/LazyIframe';
import Whatsapp from '../components/contact/whatsappsection';
import ContactUs from '../components/contact/contactus';
import ContactSection from '../components/contact/contactsection';
import AboutUS from '../components/home/aboutus';

export default function ContactUsPage() {
  return (
    <PageContainer>

      <Head>
        <title>Página não encontrada</title>
      </Head>

			<main id="main">
				<div id="about" className="about-area area-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<div className="section-headline text-center">
									<h1 className="h2">Auto Socorro 24h Juniauto</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<div className="well-middle">
									<div className="single-well">
										<h4 className="sec-head">Página não encontrada</h4>

										<p>
											Essa página não existe, em caso de dúvida por favor nos mande uma mensagem.
                    </p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</main>

    </PageContainer>
  )
}
