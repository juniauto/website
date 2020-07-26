import React from 'react';
import LogoIcon from '../../atoms/Logo';
import FacebookIcon from '../../icons/FacebookIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import WhatsappIcon from '../../icons/WhatsappIcon';

const Footer = () => (
    <footer>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-content">
                            <div className="footer-head">
                                <h2 className="footer-logo">
                                    <span className="sr-only">JUNIAUTO</span>
                                    <LogoIcon loading="lazy" height={30} />
                                </h2>
                                <p>
                                    Atendemos dia e noite para uma melhor satisfação, saiba que pode contar conosco quando precisar.
                    </p>
                                <div className="footer-icons">
                                    <ul>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://fb.com/autosocorrojuniauto">
                                                <span className="sr-only">curta nossa página no Facebook</span>
                                                <FacebookIcon className="footer-icon" height={16} />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Auto+Socorro+Juniauto+-+Reboque+e+S.O.S.+24+Horas/@-22.9393364,-43.6011208,11z/data=!4m5!3m4!1s0x0:0x88b29bf9cd4ca032!8m2!3d-22.9393364!4d-43.6011208">
                                                <span className="sr-only">clique aqui para ver nossas avaliações no Google Maps</span>
                                                <GoogleIcon className="footer-icon" height={16} />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">
                                                <span className="sr-only">fale conosco no Whatsapp</span>
                                                <WhatsappIcon className="footer-icon" height={16} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end single footer */}
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-content">
                            <div className="footer-head">
                                <h4>Informação</h4>
                                <p>
                                    Estr.Guandu do Sapê, 1395. Campo Grande. 23095-071. Rio de Janeiro - RJ
                    </p>
                                <div className="footer-contacts">
                                    <p><span>Tel:</span> +55 21 98276 9969</p>
                                    <p><span>Email:</span> contato@juniauto.com.br</p>
                                    <p><span>Atendimento:</span> 24 horas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end single footer */}
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-content">
                            <div className="footer-head">
                                <h4>Instagram</h4>
                                <div className="flicker-img">
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/1.png" alt="Caminhão reboque plataforma carregando pickup em Bangu" />
                                    </a>
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/2.png" alt="Caminhão guincho plataforma transportando um Jeep no Rio de Janeiro" />
                                    </a>
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/3.png" alt="Caminhão reboque transportando um carro em um dia de chuva" />
                                    </a>
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/4.png" alt="Caminhão transportando um veículo de luxo do Recreio para a Barra da Tijuca" />
                                    </a>
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/5.png" alt="Reboque de uma triton em Campo Grande, no Rio de Janeiro" />
                                    </a>
                                    <a rel="nofollow noreferrer" target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img loading="lazy" height="100px" src="/assets/img/instagram/6.png" alt="Caminhão reboque transportando uma van em cima da plataforma" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-area-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="copyright text-center">
                            <p>
                                © Copyright <strong>Juniauto</strong>. Todos os direitos reservados
              </p>
                        </div>
                        <div className="credits">
                            {/*
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
                  */}
                  Designed by <a rel="nofollow" href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;