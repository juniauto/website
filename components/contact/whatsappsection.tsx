import React from 'react';
import { onWhatsappClick } from '../../lib/gtag';
import WhatsappIcon from '../icons/WhatsappIcon';

export default function Whatsapp() {
    return (
        <section id="whatsapp" className="whatsapp-section">
            <div className="container">
                <div className="glass-card whatsapp-card">
                    <div className="text-center">
                        <h3 className="text-gradient">Precisa de Ajuda Imediata?</h3>
                        <p className="whatsapp-description">
                            Nossa equipe está de prontidão 24h por dia para te atender em Campo Grande e região. <br />
                            <strong>Chegamos rápido e aceitamos todos os cartões e Pix.</strong>
                        </p>
                        <a
                            onClick={() => onWhatsappClick('whatsapp_section_redesign')}
                            rel="noreferrer"
                            target="_blank"
                            className="btn-premium"
                            href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20estou%20em%20Campo%20Grande%20e%20preciso%20de%20reboque%20agora."
                        >
                            Chamar no WhatsApp <WhatsappIcon height={18} style={{ marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }} />
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .whatsapp-section {
                    padding: 80px 0;
                    background: var(--background-deep);
                }
                .whatsapp-card {
                    padding: 60px 40px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                h3 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 24px;
                    font-family: var(--font-main);
                }
                .whatsapp-description {
                    color: var(--text-secondary);
                    font-size: 1.15rem;
                    margin-bottom: 40px;
                    line-height: 1.6;
                    font-family: var(--font-main);
                }
                @media (max-width: 768px) {
                    .whatsapp-card {
                        padding: 40px 24px;
                    }
                    h3 {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </section>
    );
}