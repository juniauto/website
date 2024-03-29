import React from 'react';
import { onWhatsappClick } from '../../lib/gtag';
import WhatsappIcon from '../icons/WhatsappIcon';

export default function Whatsapp() {
    return (
        <div id="whatsapp" className="suscribe-area">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                    <h3>Atendimento online via Whatsapp</h3>
                    <a
                        onClick={() => onWhatsappClick('whatsappsection')}
                        rel="noreferrer"
                        target="_blank"
                        className="sus-btn"
                        href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es"
                    >
                        enviar mensagem <WhatsappIcon height={16} style={{ height: '16px', marginBottom: '2px' }} />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}