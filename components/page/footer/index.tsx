import React from 'react';
import { onFacebookPlusClick, onGooglePlusClick, onInstagramClick, onWhatsappClick } from '../../../lib/gtag';
import LogoIcon from '../../atoms/Logo';
import FacebookIcon from '../../icons/FacebookIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import WhatsappIcon from '../../icons/WhatsappIcon';

const onInstagramAvatarClick = () => onInstagramClick('insta image');

const Footer = () => (
    <footer>
        <div className="footer-area" itemScope itemType="http://schema.org/LocalBusiness">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-content">
                            <div className="footer-head">
                                <h2 className="footer-logo">
                                    <span itemProp="name" className="sr-only">JUNIAUTO</span>
                                    <LogoIcon itemProp="logo" loading="lazy" height={30} />
                                </h2>
                                <p itemProp="description">
                                    Atendemos dia e noite para uma melhor satisfação, saiba que pode contar conosco quando precisar.
                                </p>
                                <div className="footer-icons">
                                    <ul>
                                        <li>
                                            <a onClick={() => onFacebookPlusClick('footer')} rel="nofollow noreferrer" target="_blank" href="https://fb.com/autosocorrojuniauto">
                                                <span className="sr-only">curta nossa página no Facebook</span>
                                                <FacebookIcon className="footer-icon" height={16} />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => onGooglePlusClick('footer')} rel="nofollow noreferrer" target="_blank" href="https://www.google.com/maps/place/Auto+Socorro+Juniauto+-+Reboque+e+S.O.S.+24+Horas/@-22.9393364,-43.6011208,11z/data=!4m5!3m4!1s0x0:0x88b29bf9cd4ca032!8m2!3d-22.9393364!4d-43.6011208">
                                                <span className="sr-only">clique aqui para ver nossas avaliações no Google Maps</span>
                                                <GoogleIcon className="footer-icon" height={16} />
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => onWhatsappClick('footer')} rel="nofollow noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">
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
                                <span className="sr-only" itemProp="priceRange">$$</span>
                                <span className="sr-only" itemProp="url">https://www.juniauto.com.br</span>
                                <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                    <span itemProp="streetAddress">Estr.Guandu do Sapê, 1395. Campo Grande. </span>
                                    <span itemProp="postalCode">23095-071</span>.&nbsp;
                                    <span itemProp="addressLocality">Rio de Janeiro - RJ</span>

                                </address>
                                <div className="footer-contacts">
                                    <p itemProp="telephone"><span>Tel:</span> +55 21 98276 9969</p>
                                    <p itemProp="email"><span>Email:</span> contato@juniauto.com.br</p>
                                    <p><span>Atendimento:</span> <time itemProp="openingHours" dateTime="Mo-Su">24 horas</time></p>
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
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/1.png" alt="Caminhão reboque plataforma carregando pickup em Bangu" />
                                    </a>
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/2.png" alt="Caminhão guincho plataforma transportando um Jeep no Rio de Janeiro" />
                                    </a>
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/3.png" alt="Caminhão reboque transportando um carro em um dia de chuva" />
                                    </a>
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/4.png" alt="Caminhão transportando um veículo de luxo do Recreio para a Barra da Tijuca" />
                                    </a>
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/5.png" alt="Reboque de uma triton em Campo Grande, no Rio de Janeiro" />
                                    </a>
                                    <a rel="nofollow noreferrer" onClick={onInstagramAvatarClick} target="_blank" href="https://www.instagram.com/juniauto24h">
                                        <img itemProp="image" loading="lazy" height="100px" src="/assets/img/instagram/6.png" alt="Caminhão reboque transportando uma van em cima da plataforma" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom-links">
                    <div className="col-md-12">
                        <div className="footer-links-grid">
                            <h5>Principais Áreas de Atendimento em Campo Grande:</h5>
                            <div className="neighborhood-links">
                                <a href="/reboque-em/reboque-em-cosmos">Reboque em Cosmos</a>
                                <a href="/reboque-em/reboque-em-inhoaiba">Reboque em Inhoaíba</a>
                                <a href="/reboque-em/reboque-em-santissimo">Reboque em Santíssimo</a>
                                <a href="/reboque-em/reboque-em-senador-vasconcelos">Reboque em Senador Vasconcelos</a>
                                <a href="/reboque-em/reboque-em-campo-grande">Guincho Campo Grande</a>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .footer-bottom-links {
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-top: 30px;
                        margin-top: 50px;
                    }
                    .footer-links-grid h5 {
                        color: #fff;
                        font-size: 1rem;
                        margin-bottom: 20px;
                        font-weight: 700;
                    }
                    .neighborhood-links {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 15px 25px;
                    }
                    .neighborhood-links a {
                        color: var(--text-secondary);
                        font-size: 0.9rem;
                        transition: color 0.3s;
                        text-decoration: none;
                    }
                    .neighborhood-links a:hover {
                        color: var(--accent-yellow);
                    }
                    @media (max-width: 768px) {
                        .neighborhood-links {
                            gap: 10px 15px;
                        }
                    }
                `}</style>
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