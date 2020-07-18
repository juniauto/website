import React from 'react';

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
                {/* Start Left services */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-car" />
                                </a>
                                <h4>Serviço de reboque para carros</h4>
                                <p>
                                    Possuímos veículos novos prontos para prestar serviços de remoção 24 horas para veículos leves.
                                    Nossos caminhões são equipados com plataforma, equipamento revisado para garantir o máximo de segurança e conforto para você e para o seu veículo.
                                </p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>


                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-motorcycle" />
                                </a>
                                <h4>Transporte de motos</h4>
                                <p>
                                    Fazemos o transporte de motos com o máximo de segurança e agilidade.
                                    Durante o atendimento a moto nós descemos a plataforma, subimos a sua moto e amarramos em segurança para realizar o transporte.
                                </p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-handshake-o" />
                                </a>
                                <h4>Carga de Bateria</h4>
                                <p>
                                    Desligou o carro e esqueceu o farol aceso ou até mesmo ouviu muita música e descarregou a bateria do carro?<br />
                                    Não tem problema, nós estamos aqui para te ajudar. Com o serviço de carga de bateria vamos até você para dar uma carga na bateria do seu veículo com cabos de transferência de energia.
                                </p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-truck" />
                                </a>
                                <h4>Transporte de caminhões de pequeno porte</h4>
                                <p>
                                    Oferecemos o transporte de caminhões de pequeno porte, também conhecidos como caminhões 3/4.
                                </p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                    {/* end col-md-4 */}
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-cog" />
                                </a>
                                <h4>Transporte de máquinas</h4>
                                <p>Se você está precisando transportar uma máquina na região de Campo Grande saiba que estamos aqui para te ajudar. Entre em contato conosco e saiba de mais detalhes</p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                    {/* end col-md-4 */}
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <a className="services-icon" href="#">
                                    <i className="fa fa-phone" />
                                </a>
                                <h4>Atendimento 24 Horas</h4>
                                <p>
                                    Você possui alguma dúvida ou até mesmo precisa de uma indicação? Entre em contato conosco e vamos te atender da melhor maneira possível! Estamos aguardando o seu contato.
                                </p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>


            </div>
        </div>
    </div>
);

export default OurServices;