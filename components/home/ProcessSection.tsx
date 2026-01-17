import React from 'react';

const ProcessSection = () => {
    const steps = [
        { num: '01', title: 'Chamada Imediata', desc: 'Você entra em contato pelo WhatsApp e nossa central identifica sua localização exata.' },
        { num: '02', title: 'Envio do Resgate', desc: 'O guincho mais próximo é acionado e você recebe a previsão de chegada em tempo real.' },
        { num: '03', title: 'Entrega Segura', desc: 'Seu veículo é transportado com total cuidado até o destino, com seguro e nota fiscal.' },
    ];

    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-gradient">Como Funciona o Resgate?</h2>
                    <p>Um processo simples e transparente para te tirar do sufoco em minutos.</p>
                </div>
                <div className="row">
                    {steps.map((step, idx) => (
                        <div key={idx} className="col-md-4">
                            <div className="process-card">
                                <span className="step-num">{step.num}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .process-section {
                    padding: 100px 0;
                    background: var(--background-deep);
                }
                .section-header {
                    margin-bottom: 80px;
                }
                .section-header h2 {
                    font-size: 2.8rem;
                    font-weight: 800;
                    margin-bottom: 20px;
                    font-family: var(--font-main);
                }
                .process-card {
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.02);
                    border-left: 4px solid var(--accent-yellow);
                    height: 100%;
                }
                .step-num {
                    font-size: 3rem;
                    font-weight: 900;
                    color: rgba(255, 214, 0, 0.1);
                    display: block;
                    line-height: 1;
                    margin-bottom: 10px;
                    font-family: var(--font-main);
                }
                h3 {
                    color: #fff;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                    font-family: var(--font-main);
                }
                p {
                    color: var(--text-secondary);
                    font-size: 1.05rem;
                    line-height: 1.6;
                    font-family: var(--font-main);
                }
                @media (max-width: 768px) {
                    .process-card {
                        margin-bottom: 20px;
                    }
                    .section-header h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProcessSection;
