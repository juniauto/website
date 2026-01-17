import React from 'react';

interface AboutUsProps {
    title?: string;
    subtitle?: string;
    content?: React.ReactNode;
}

const AboutUS = ({
    title = "Sobre a Juniauto",
    subtitle = "Liderança em Reboque na Zona Oeste",
    content = (
        <>
            <p>
                Fundada para ser a referência em auto socorro em <strong>Campo Grande</strong>, a Juniauto é a escolha nº 1 em agilidade para motoristas em <strong>Cosmos</strong>, <strong>Inhoaíba</strong> e <strong>Senador Vasconcelos</strong>.
            </p>
            <p>
                Nossa frota está estrategicamente posicionada próxima ao <strong>West Shopping</strong>, <strong>Estrada do Mendanha</strong> e <strong>Viaduto de Campo Grande</strong>, garantindo resgate em minutos.
            </p>
        </>
    )
}: AboutUsProps) => (
    <section id="about" className="about-redesign">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="about-text">
                        <h2 className="text-gradient">{title}</h2>
                        <h3 className="h4">{subtitle}</h3>
                        {content}
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <div>
                                    <strong>Especialistas Locais</strong>
                                    <p>Conhecemos cada rua de Campo Grande, garantindo que o resgate chegue pelo caminho mais rápido.</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <div>
                                    <strong>Cobertura Estratégica</strong>
                                    <p>Atendimento prioritário na Av. Brasil e principais acessos do bairro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-image-wrapper glass-card">
                        <div className="stats-overlay">
                            <span className="stats-num">10+</span>
                            <span className="stats-label">Anos de Experiência</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .about-redesign {
                padding: 100px 0;
                background: var(--background-deep);
            }
            .about-text h2 {
                font-size: 2.8rem;
                font-weight: 800;
                margin-bottom: 10px;
                font-family: var(--font-main);
            }
            .about-text h3 {
                color: var(--accent-yellow);
                margin-bottom: 24px;
                font-weight: 600;
                font-family: var(--font-main);
            }
            .about-text p {
                color: var(--text-secondary);
                font-size: 1.1rem;
                line-height: 1.7;
                margin-bottom: 20px;
                font-family: var(--font-main);
            }
            .about-highlights {
                margin-top: 40px;
            }
            .highlight-item {
                display: flex;
                gap: 15px;
                margin-bottom: 24px;
            }
            .highlight-icon {
                color: var(--accent-yellow);
                font-weight: 900;
                font-size: 1.2rem;
            }
            .highlight-item strong {
                color: #fff;
                display: block;
                margin-bottom: 4px;
            }
            .highlight-item p {
                font-size: 0.95rem;
                margin-bottom: 0;
            }
            .about-image-wrapper {
                height: 450px;
                background: url(${require('../../public/assets/img/slider/redesign_hero.png')});
                background-size: cover;
                background-position: center;
                position: relative;
                margin-left: 40px;
            }
            .stats-overlay {
                position: absolute;
                bottom: -20px;
                left: -20px;
                background: var(--accent-yellow);
                padding: 30px;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            .stats-num {
                font-size: 2.5rem;
                font-weight: 900;
                color: #000;
                line-height: 1;
            }
            .stats-label {
                font-size: 0.9rem;
                font-weight: 700;
                color: #000;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            @media (max-width: 768px) {
                .about-image-wrapper {
                    margin-left: 0;
                    margin-top: 60px;
                    height: 300px;
                }
                .about-text h2 {
                    font-size: 2.22rem;
                }
            }
        `}</style>
    </section>
);

export default AboutUS;