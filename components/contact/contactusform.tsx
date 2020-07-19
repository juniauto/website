import React from 'react';

const ContactUsForm = () => {
    return (
        <div className="form contact-form">
            <form target="_blank" action="https://api.whatsapp.com/send" method="get" role="form" className="php-email-form">
                <input type="hidden" name="phone" value="5521982769969" />
                <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Seu veículo" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="text" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Mensagem" defaultValue={""} />
                    <div className="validate" />
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                    <button type="submit">Enviar mensagem <i className="icon-whatsapp" /></button>
                </div>
            </form>
        </div>
    )
};

export default ContactUsForm;