import React from 'react';
import ContactUsForm from './contactusform';
import LazyIframe from '../LazyIframe';
import PhoneIcon from '../icons/PhoneIcon';
import EmailIcon from '../icons/EmailIcon';
import WhatsappIcon from '../icons/WhatsappIcon';

interface ContactCardContent {
  icon: React.ReactNode;
  content: React.ReactNode;
}

const content: ContactCardContent[] = [{
  icon: <PhoneIcon height={24} />,
  content: (
    <p>
      Telefone: 21 3356 6659<br />
      <span>Atendimento 24 horas</span>
    </p>
  ),
}, {
  icon: <EmailIcon height={24} />,
  content: (
    <p>
      Email: contato@juniauto.com.br<br />
      Segunda-Sexta (9:00-17:00)
    </p>
  ),
}, {
  icon: <WhatsappIcon height={24} />,
  content: (
    <p>
      Whatsapp: 21 98276 9969<br />
      <span>Atendimento 24 horas</span>
    </p>
  ),
}];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-redesign">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="text-gradient">Canais de Atendimento</h2>
          <p>Estamos prontos para te atender a qualquer hora do dia ou da noite.</p>
        </div>

        <div className="row">
          {content.map((current, index) => (
            <div className="col-md-4" key={index}>
              <div className="contact-card glass-card">
                <div className="contact-icon">{current.icon}</div>
                <div className="contact-info">{current.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="map-wrapper glass-card">
              <LazyIframe loading="lazy" title="Nossa área de atuação" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117622.3592560307!2d-43.61882688731093!3d-22.887585060535006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be17999363715%3A0x46c3f27867ad9332!2sCampo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1595089607843!5m2!1spt-BR!2sbr" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen width="100%" height={400} frameBorder={0} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-wrapper glass-card">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-redesign {
          padding: 100px 0;
          background: var(--background-deep);
        }
        .section-header {
          margin-bottom: 60px;
        }
        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 20px;
          font-family: var(--font-main);
        }
        .contact-card {
          padding: 30px;
          text-align: center;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-icon {
          color: var(--accent-yellow);
          margin-bottom: 20px;
        }
        .contact-info :global(p) {
          color: var(--text-secondary);
          margin-bottom: 0;
          font-family: var(--font-main);
        }
        .contact-info :global(span) {
          color: #fff;
          font-weight: 700;
        }
        .map-wrapper, .form-wrapper {
          overflow: hidden;
          height: 100%;
        }
        .mt-5 {
          margin-top: 3rem !important;
        }
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}