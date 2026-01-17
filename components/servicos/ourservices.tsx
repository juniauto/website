import React from 'react';
import Link from 'next/link';
import CarIcon from '../icons/CarIcon';
import MotorcycleIcon from '../icons/MotorcycleIcon';
import BatteryAlertIcon from '../icons/BatteryAlertIcon';
import LocalShippingIcon from '../icons/LocalShippingIcon';
import Tractor from '../icons/TractorIcon';
import PhoneIcon from '../icons/PhoneIcon';

interface OurServicesCardContent {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    intent?: 'emergency' | 'specialized';
    slug: string;
}

const iconProps = {
    height: 36,
    style: {
        height: '36px'
    },
}

const contents: OurServicesCardContent[] = [
    {
        icon: <CarIcon {...iconProps} />,
        title: 'Reboque de Carros',
        intent: 'emergency',
        slug: 'reboque-de-carros',
        content: (
            <p>
                <strong>Resgate imediato</strong> com caminhões plataforma modernos. Atendemos em toda a Zona Oeste com foco em segurança para seu veículo leve.
            </p>
        )
    },
    {
        icon: <MotorcycleIcon {...iconProps} />,
        title: 'Reboque de Motos',
        intent: 'emergency',
        slug: 'reboque-de-motos',
        content: (
            <p>
                Transporte especializado com cintas de segurança e plataforma baixa. <strong>Agilidade total</strong> para você não ficar parado no perigo.
            </p>
        )
    },
    {
        icon: <BatteryAlertIcon {...iconProps} />,
        title: 'Carga de Bateria',
        intent: 'emergency',
        slug: 'carga-de-bateria',
        content: (
            <p>
                Bateria arriou? Vamos até você para realizar a <strong>chupeta com segurança</strong> ou troca, se necessário. Atendimento 24h.
            </p>
        )
    },
    {
        icon: <LocalShippingIcon {...iconProps} />,
        title: 'Caminhões e Utilitários',
        intent: 'specialized',
        slug: 'caminhoes-e-pesados',
        content: (
            <p>
                Remoção de veículos 3/4 e caminhões de pequeno porte. <strong>Equipamentos pesados</strong> para garantir o serviço em qualquer situação.
            </p>
        )
    },
    {
        icon: <Tractor {...iconProps} />,
        title: 'Máquinas e Equipamentos',
        intent: 'specialized',
        slug: 'pane-seca-e-pneus', // Mapping to pane-seca as placeholder if machines not separate yet
        content: (
            <p>
                Transporte de retroescavadeiras, rolos e máquinas pesadas na região de Campo Grande. <strong>Preditivo e seguro</strong>.
            </p>
        )
    },
    {
        icon: <PhoneIcon {...iconProps} />,
        title: 'Dúvidas e Parcerias',
        intent: 'specialized',
        slug: 'atendimento-local',
        content: (
            <p>
                Precisa de uma indicação ou quer fechar uma parceria corporativa? <strong>Fale direto com o dono</strong> e resolva na hora.
            </p>
        )
    },
]

const OurServices = () => {
    const emergencyServices = contents.filter(s => s.intent === 'emergency');
    const specializedServices = contents.filter(s => s.intent === 'specialized');

    return (
        <div id="services" className="services-area area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline services-head text-center">
                            <h2>Socorro Imediato 24h</h2>
                            <p className="subtitle">Emergências na pista? Nós chegamos rápido.</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center mb-5">
                    {emergencyServices.map((item, index) => (
                        <div className="col-md-4 col-sm-4 col-xs-12 mb-4" key={index.toString()}>
                            <Link href={`/servicos/${item.slug}`} passHref>
                                <a className="service-link">
                                    <div className="about-move">
                                        <div className="services-details h-100">
                                            <div className="single-services">
                                                <span className="services-icon">{item.icon}</span>
                                                <h4>{item.title}</h4>
                                                {item.content}
                                                <span className="learn-more">Saiba mais →</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline services-head text-center">
                            <h2>Transporte Especializado</h2>
                            <p className="subtitle">Logística pesada e serviços programados.</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    {specializedServices.map((item, index) => (
                        <div className="col-md-4 col-sm-4 col-xs-12 mb-4" key={index.toString()}>
                            <Link href={`/servicos/${item.slug}`} passHref>
                                <a className="service-link">
                                    <div className="about-move">
                                        <div className="services-details h-100">
                                            <div className="single-services">
                                                <span className="services-icon">{item.icon}</span>
                                                <h4>{item.title}</h4>
                                                {item.content}
                                                <span className="learn-more">Saiba mais →</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .subtitle {
                    color: var(--text-secondary);
                    margin-bottom: 40px;
                    font-size: 1.1rem;
                }
                .mb-5 { margin-bottom: 3rem; }
                .mt-5 { margin-top: 3rem; }
                .mb-4 { margin-bottom: 1.5rem; }
                .h-100 { height: 100%; }
                .service-link {
                    text-decoration: none;
                    display: block;
                    color: inherit;
                    height: 100%;
                }
                .learn-more {
                    display: block;
                    margin-top: 15px;
                    color: var(--accent-yellow);
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    );
};

export default OurServices;