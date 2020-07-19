import React from 'react';



const WoW = () => {
    return (
        <div className="sc-AxirZ khTpiN">
            <div className="sc-AxjAm sc-AxiKw bJkZLT">
                <picture className="background">
                    <source srcSet={require('../../public/assets/img/slider/slider_j_2.png?webp')} type="image/webp" />
                    <source srcSet={require('../../public/assets/img/slider/slider_j_2.png')} type="image/jpeg" />
                    <img alt="dois caminhões reboque transportando carros" className="image" src={require('../../public/assets/img/slider/slider_j_2.png')} />
                </picture>
            </div>
            <div color="#444" className="sc-AxjAm sc-AxhCb fDvTJJ">
                <div>
                    <div className="slider-content">
                        <div className="layer-1-1 hidden-xs">
                            <h2 className="title1">Atendimento 24 Horas</h2>
                        </div>
                    <div className="layer-1-2">
                        <h1 className="title2">Reboque para carros e motos em Campo Grande e região</h1>
                    </div>
                    <div className="layer-1-3 hidden-xs">
                        <a rel="noreferrer" target="_blank" className="ready-btn right-btn page-scroll" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">
                            Entrar em contato <i className="icon-whatsapp" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <style jsx>{`
                .background {
                    height: 100%;
                    display: flex;
                }
                .background .image {
                    height: auto;
                    width: auto;
                    max-width: initial;
                    min-width: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            `}</style>
            <style jsx>{`
                .khTpiN {
                    position:relative;
                    min-height:50vh;
                }
                .bJkZLT {
                    position:absolute;
                    top:0;
                    right:0;
                    bottom:0;
                    left:0;
                    background-attachment:scroll;
                    background-position:center;
                    background-repeat:no-repeat;
                    background-size:cover;
                    opacity:1;
                    -webkit-transition-duration:600ms;
                    transition-duration:600ms;
                    -webkit-transition-property:opacity;
                    transition-property:opacity;
                    -webkit-transition-timing-function:ease-in-out;
                    transition-timing-function:ease-in-out;
                }
                .fDvTJJ {
                    position:absolute;
                    top:0;
                    right:0;
                    bottom:0;
                    left:0;
                    display:-webkit-box;
                    display:-webkit-flex;
                    display:-ms-flexbox;
                    display:flex;
                    -webkit-box-pack:center;
                    -webkit-justify-content:center;
                    -ms-flex-pack:center;
                    justify-content:center;
                    -webkit-align-items:center;
                    -webkit-box-align:center;
                    -ms-flex-align:center;
                    align-items:center;
                    text-align:center;
                    background-color:rgba(68,68,68,0.5);
                }

            `}</style>
        </div>
    );
};

export default WoW;