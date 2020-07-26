import React from 'react';
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
        title: 'Serviço de reboque para carros',
        content: (
            <p>
                Possuímos veículos novos prontos para prestar serviços de remoção 24 horas para veículos leves.
                Nossos caminhões são equipados com plataforma, equipamento revisado para garantir o máximo de segurança e conforto para você e para o seu veículo.
            </p>
        )
    },
    {
        icon: <MotorcycleIcon {...iconProps} />,
        title: 'Transporte de motos',
        content: (
            <p>
                Fazemos o transporte de motos com o máximo de segurança e agilidade.
                Durante o atendimento a moto nós descemos a plataforma, subimos a sua moto e amarramos em segurança para realizar o transporte.
            </p>
        )
    },
    {
        icon: <BatteryAlertIcon {...iconProps} />,
        title: 'Carga de Bateria',
        content: (
            <p>
                Desligou o carro e esqueceu o farol aceso ou até mesmo ouviu muita música e descarregou a bateria do carro?<br />
                Não tem problema, nós estamos aqui para te ajudar. Com o serviço de carga de bateria vamos até você para dar uma carga na bateria do seu veículo com cabos de transferência de energia.
            </p>
        )
    },
    {
        icon: <LocalShippingIcon {...iconProps} />,
        title: 'Transporte de caminhões de pequeno porte',
        content: (
            <p>
                Oferecemos o transporte de caminhões de pequeno porte, também conhecidos como caminhões 3/4.
            </p>
        )
    },
    {
        icon: <Tractor {...iconProps} />,
        title: 'Transporte de máquinas',
        content: (
            <p>
                Se você está precisando transportar uma máquina na região de Campo Grande saiba que estamos aqui para te ajudar.
                Trabalhamos também com carretas para transporte de máquinas pesadas, tipo retro escavadeira, acabadora, rolo de asfalto, etc...<br />
                Entre em contato conosco e saiba de mais detalhes
            </p>
        )
    },
    {
        icon: <PhoneIcon {...iconProps} />,
        title: 'Atendimento 24 Horas',
        content: (
            <p>
                Você possui alguma dúvida ou até mesmo precisa de uma indicação? Entre em contato conosco e vamos te atender da melhor maneira possível! Estamos aguardando o seu contato.
            </p>
        )
    },
]

const OurServices = () => (
    <div id="services" className="services-area area-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="section-headline services-head text-center">
                        <h2>Nossos serviços</h2>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                {contents.map((item, index) => {
                    const { content, icon, title } = item;

                    return (
                        <div className="col-md-4 col-sm-4 col-xs-12" key={index.toString()}>
                            <div className="about-move">
                                <div className="services-details">
                                    <div className="single-services">
                                        <span className="services-icon">
                                            {icon}
                                        </span>
                                        <h4>{title}</h4>
                                        {content}
                                    </div>
                                </div>
                                {/* end about-details */}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
);

export default OurServices;