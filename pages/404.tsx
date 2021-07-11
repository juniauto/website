import React from 'react';
import Head from 'next/head'
import Link from 'next/link';

import PageContainer from '../components/page/container';
import Whatsapp from '../components/contact/whatsappsection';
import ContactSection from '../components/contact/contactsection';

export default function ContactUsPage() {
  return (
    <PageContainer>

      <Head>
        <title>Página não encontrada</title>
      </Head>

			<main id="main" style={{ 'paddingTop': '60px' }}>

				<Whatsapp />

				<div id="about" className="about-area area-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<div className="section-headline text-center">
									<h1 className="h2">Página não encontrada</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12">
								<div className="well-middle">
									<div className="single-well">
										<h4 className="sec-head">Página não encontrada</h4>

										<p>
											Essa página não existe, você pode <strong>voltar para a página inicial <Link passHref href="/"><a>clicando aqui</a></Link></strong>.
											Em caso de dúvida por favor nos mande uma mensagem.
                    </p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<ContactSection />

			</main>

    </PageContainer>
  )
}
