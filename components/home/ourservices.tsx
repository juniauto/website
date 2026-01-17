import React from 'react';
import CarIcon from '../icons/CarIcon';
import MotorcycleIcon from '../icons/MotorcycleIcon';
import LocalShippingIcon from '../icons/LocalShippingIcon';
import BatteryAlertIcon from '../icons/BatteryAlertIcon';
import HelmetIcon from '../icons/HelmetIcon';
import PhoneIcon from '../icons/PhoneIcon';
import Link from 'next/link';

const OurServices = () => {
    const emergencyServices = [
        { icon: <CarIcon height={40} />, title: 'Reboque para Carros', desc: 'Resgate plataforma 24h em Campo Grande. Atendimento ágil e seguro para veículos leves e SUVs.', slug: 'reboque-de-carros' },
        { icon: <MotorcycleIcon height={40} />, title: 'Reboque de Motos', desc: 'Transporte especializado com cintas de fixação. Cuidado total com a sua moto em qualquer horário.', slug: 'reboque-de-motos' },
        { icon: <BatteryAlertIcon height={40} />, title: 'Carga de Bateria', desc: 'Bateria arriou? Vamos até você para realizar o socorro elétrico ou troca imediata no local.', slug: 'carga-de-bateria' },
    ];

    const specializedServices = [
        { icon: <LocalShippingIcon height={40} />, title: 'Caminhões e Pesados', desc: 'Capacidade para rebocar caminhões baú, vans e ônibus com equipamentos de alta performance.', slug: 'caminhoes-e-pesados' },
        { icon: <HelmetIcon height={40} />, title: 'Pane Seca e Pneus', desc: 'Ficou sem combustível ou pneu furou? Levamos a solução até você na Av. Brasil ou Mendanha.', slug: 'pane-seca-e-pneus' },
        { icon: <PhoneIcon height={40} />, title: 'Atendimento Local', desc: 'Fale direto conosco. Sem call center de SP. Atendimento humano por quem conhece o Rio.', slug: 'atendimento-local' },
    ];

    return (
        <section id="services" className="services-redesign">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-gradient">Socorro Imediato em Campo Grande</h2>
                    <p>Precisa de ajuda agora? A Juniauto é sua base de apoio 24h na Zona Oeste.</p>
                </div>
                <div className="row mb-5">
                    {emergencyServices.map((service, idx) => (
                        <div key={idx} className="col-md-4 col-sm-6">
                            <Link href={`/servicos/${service.slug}`} passHref>
                                <a className="service-link-wrapper">
                                    <div className="service-card glass-card">
                                        <div className="icon-box">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <span className="learn-more">Saiba mais →</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="section-header text-center mt-5">
                    <h2 className="text-gradient">Serviços Especializados</h2>
                    <p>Logística pesada e apoio em situações complexas com técnica e autoridade.</p>
                </div>
                <div className="row">
                    {specializedServices.map((service, idx) => (
                        <div key={idx} className="col-md-4 col-sm-6">
                            <Link href={`/servicos/${service.slug}`} passHref>
                                <a className="service-link-wrapper">
                                    <div className="service-card glass-card">
                                        <div className="icon-box">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <span className="learn-more">Saiba mais →</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .services-redesign {
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
                .section-header p {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .service-link-wrapper {
                    text-decoration: none;
                    display: block;
                }
                .service-card {
                    padding: 40px;
                    margin-bottom: 30px;
                    height: calc(100% - 30px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                .service-card:hover {
                    transform: translateY(-10px);
                }
                .icon-box {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 214, 0, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    color: var(--accent-yellow);
                }
                h3 {
                    color: #fff;
                    font-size: 1.4rem;
                    margin-bottom: 16px;
                    font-weight: 700;
                    font-family: var(--font-main);
                }
                p {
                    color: var(--text-secondary);
                    font-size: 1rem;
                    line-height: 1.6;
                    font-family: var(--font-main);
                    margin-bottom: 20px;
                }
                .learn-more {
                    color: var(--accent-yellow);
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .mb-5 { margin-bottom: 3rem; }
                .mt-5 { margin-top: 5rem; }
                @media (max-width: 768px) {
                    .services-redesign {
                        padding: 60px 0;
                    }
                    .section-header h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurServices;