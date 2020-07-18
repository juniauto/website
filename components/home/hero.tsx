import React from 'react';
import ReactWOW from 'react-wow';
import LazyHero from 'react-lazy-hero';

const WoW = () => {
    const truh = true;

    if (truh) {
        return (
            <LazyHero color="#444" opacity={0.5} imageSrc="/assets/img/slider/slider_j_2.png">
                <div className="slider-content">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs">
                        <h2 className="title1">Atendimento 24 Horas</h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2">
                        <h1 className="title2">Reboque para carros e motos em Campo Grande e região</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs">
                        <a target="_blank" className="ready-btn right-btn page-scroll" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">Entrar em contato <i className="fa fa-whatsapp" /></a>
                    </div>
                </div>
            </LazyHero>
        );
    }

    return (

        <div className="bend niceties preview-2">

            <div id="ensign-nivoslider" className="slides">
                <img src="assets/img/slider/slider1.jpg" alt="" title="#slider-direction-1" />
                <img src="assets/img/slider/slider2.jpg" alt="" title="#slider-direction-2" />
                <img src="assets/img/slider/slider3.jpg" alt="" title="#slider-direction-3" />
            </div>
            {/* direction 1 */}
            <div id="slider-direction-1" className="slider-direction slider-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-content">
                                {/* layer 1 */}
                                <div className="layer-1-1 hidden-xs wow animate__slideInDown animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2 className="title1">The Best Business Information </h2>
                                </div>
                                {/* layer 2 */}
                                <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h1 className="title2">We're In The Business Of Helping You Start Your Business</h1>
                                </div>
                                {/* layer 3 */}
                                <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                    <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* direction 2 */}
            <div id="slider-direction-2" className="slider-direction slider-two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-content text-center">
                                {/* layer 1 */}
                                <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2 className="title1">The Best Business Information </h2>
                                </div>
                                {/* layer 2 */}
                                <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h1 className="title2">We're In The Business Of Get Quality Business Service</h1>
                                </div>
                                {/* layer 3 */}
                                <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                    <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* direction 3 */}
            <div id="slider-direction-3" className="slider-direction slider-two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-content">
                                {/* layer 1 */}
                                <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2 className="title1">The Best business Information </h2>
                                </div>
                                {/* layer 2 */}
                                <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h1 className="title2">Helping Business Security &amp; Peace of Mind for Your Family</h1>
                                </div>
                                {/* layer 3 */}
                                <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                                    <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                    <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WoW;