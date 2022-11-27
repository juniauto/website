import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';
import ContactUsForm from '../components/contact/contactusform';
import Whatsapp from '../components/contact/whatsappsection';

export default function Home() {
  return (
    <PageContainer>

      <Head>
        <title>Auto Socorro Juniauto - Localização</title>
      </Head>

      <main id="main" style={{ 'paddingTop': '60px' }}>
        <Whatsapp />

        {/* ======= Contact Section ======= */}
        <div id="contact" className="contact-area">
          <div className="contact-inner area-padding">
            <div className="contact-overly" />
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Localização</h2>
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="well-middle">
                            <div className="single-well">
                                <h4 className="sec-head">Atendimento rápido no momento que você mais precisa</h4>
                                <p>
                                    Nossa base encontra-se em Campo Grande, próximo ao West Shopping,
                                    assim atendendo áreas adjacentes como  Padre Miguel, Santa Cruz,
                                    Itaguaí, Cosmos, Inhoaíba, Bangu, Paciência, Realengo e etc.
                                </p>
                                <p>
                                    Nosso tempo médio de atendimento costuma ser menor do que 50 minutos para chegar no local,
                                    entretanto isso depende de alguns outros fatores como trânsito, clima ou disponibilidade de atendimento.
                                    Para qualquer dúvida estamos sempre à disposição através dos nossos telefones de contato.
                                </p>
                            </div>
                        </div>
                    </div>
              </div>

               <div className="row">
                {/* Start Google Map */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* Start Map */}
                  <iframe loading='lazy' title="Mapa com a nossa área de atuação" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117622.3592560307!2d-43.61882688731093!3d-22.887585060535006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be17999363715%3A0x46c3f27867ad9332!2sCampo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1595089607843!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen width="100%" height={380} frameBorder={0} />
                  {/* End Map */}
                </div>
                {/* End Google Map */}
                {/* Start  contact */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <ContactUsForm />
                </div>
                {/* End Left contact */}
              </div>
            </div>
          </div>
        </div>{/* End Contact Section */}
      </main>{/* End #main */}
      {/* ======= Footer ======= */}
    </PageContainer>
  )
}
