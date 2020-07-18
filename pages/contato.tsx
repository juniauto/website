import React from 'react';
import Head from 'next/head'

import PageContainer from '../components/page/container';
import ContactUsForm from '../components/contact/contactusform';

export default function ContactUsPage() {
  return (
    <PageContainer>

      <Head>
        <title>Reboque de carros e motos em Campo Grande e região: Fale Conosco</title>
      </Head>

      <main id="main" style={{ 'paddingTop': '60px' }}>
        {/* ======= Suscribe Section ======= */}
        <div id="whatsapp" className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Atendimento online via Whatsapp</h3>
                  <a target="_blank" className="sus-btn" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">enviar mensagem <i className="fa fa-whatsapp" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Suscribe Section */}
        {/* ======= Contact Section ======= */}
        <div id="contact" className="contact-area">
          <div className="contact-inner area-padding">
            <div className="contact-overly" />
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h1 className="h2">Fale Conosco</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-mobile" />
                      <p>
                        Telefone: 21 3356 6659<br />
                        <span>Atendimento 24 horas</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-envelope-o" />
                      <p>
                        Email: contato@juniauto.com.br<br />
                        Segunda-Sexta (9:00-17:00)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-whatsapp" />
                      <p>
                        Whatsapp: 21 98276 9969<br />
                        <span>Atendimento 24 horas</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start Google Map */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* Start Map */}
                  <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117622.3592560307!2d-43.61882688731093!3d-22.887585060535006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be17999363715%3A0x46c3f27867ad9332!2sCampo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1595089607843!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen width="100%" height={380} frameBorder={0} />
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
