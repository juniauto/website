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
                                <span className="services-icon">
                                    <i className="icon-cab" />
                                </span>
                                <h4>Reboque para carros e motos</h4>
                                <p>Possuímos veículos novos prontos para prestar serviços de remoção 24 horas para veículos leves e motos.</p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="about-move">
                        <div className="services-details">
                            <div className="single-services">
                                <span className="services-icon">
                                    <i className="icon-motorcycle" />
                                </span>
                                <h4>S.O.S.</h4>
                                <p>Trabalhamos também com a realização de S.O.S. através de profissionais treinados para atender o mais prontamente possível.</p>
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
                                <span className="services-icon">
                                    <i className="icon-phone" />
                                </span>
                                <h4>Atendimento 24 Horas</h4>
                                <p>Para poder gerar um melhor atendimento trabalhamos 24 horas por dia, não deixando de servir durante domingos ou feriados.</p>
                            </div>
                        </div>
                        {/* end about-details */}
                    </div>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="well-middle">
                        <div className="single-well">
                            <h4 className="sec-head">Atendimento rápido</h4>
                            <p>
                                Nossa base encontra-se em Campo Grande, próximo ao West Shopping, assim atendendo áreas adjacentes como Bangu, Paciência, Realengo, Padre Miguel, Santa Cruz, Itaguaí, Cosmos, Inhoaíba e etc.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
);

export default OurServices;