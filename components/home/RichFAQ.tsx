import React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const RichFAQ = ({ customFaqs }: { customFaqs?: FAQItem[] }) => {
    const defaultFaqs: FAQItem[] = [
        {
            question: "Qual o tempo de chegada em Campo Grande?",
            answer: "Nossa base é local. Chegamos na maioria dos pontos de Campo Grande e proximidades em 20 a 40 minutos."
        },
        {
            question: "Atendem 24 horas?",
            answer: "Sim, operamos em regime de plantão 24h, inclusive sábados, domingos e feriados."
        },
        {
            question: "Quais veículos vocês rebocam?",
            answer: "Rebocamos carros de passeio, SUVs, utilitários leve, motos e máquinas de pequeno porte."
        },
        {
            question: "Aceitam cartão e Pix?",
            answer: "Sim, aceitamos Pix, Crédito e Débito diretamente com o motorista no local."
        }
    ];

    const faqs = customFaqs || defaultFaqs;

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-gradient">Dúvidas Frequentes</h2>
                    <p>Tudo o que você precisa saber antes de chamar seu resgate.</p>
                </div>
                <div className="row">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="col-md-6">
                            <div className="faq-card glass-card">
                                <h3>Q. {faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .faq-section {
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
                .faq-card {
                    padding: 30px;
                    margin-bottom: 24px;
                    height: calc(100% - 24px);
                }
                h3 {
                    color: var(--accent-yellow);
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                    font-family: var(--font-main);
                }
                p {
                    color: var(--text-secondary);
                    font-size: 1rem;
                    line-height: 1.6;
                    font-family: var(--font-main);
                }
                @media (max-width: 768px) {
                    .section-header h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default RichFAQ;
