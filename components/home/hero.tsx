import React, { useState, CSSProperties, useEffect } from 'react';
import { onWhatsappClick } from '../../lib/gtag';
import WhatsappIcon from '../icons/WhatsappIcon';

interface HeroProps {
    title1?: string;
    title2?: string;
    description?: string;
}

const Hero = ({
    title1 = "Guincho 24h em Campo Grande RJ",
    title2 = "Carro parou? A Juniauto chega rápido.",
    description = ""
}: HeroProps) => {
    return (
        <section className="hero-section">
            <div className="hero-overlay" />
            <div className="container">
                <div className="hero-content glass-card">
                    <h2 className="title1 text-gradient">{title1}</h2>
                    <h1 className="title2">{title2}</h1>
                    <div className="hero-description">
                        {description ? (
                            <p>{description}</p>
                        ) : (
                            <ul className="hero-list">
                                <li>⚡ Resgate ágil no West Shopping, Mendanha ou Av. Brasil</li>
                                <li>💳 Aceitamos Pix, Crédito e Débito sem surpresas</li>
                                <li>📍 Base local em Campo Grande (Não somos de SP)</li>
                            </ul>
                        )}
                    </div>
                    <div className="hero-actions">
                        <a
                            onClick={() => onWhatsappClick('hero_redesign')}
                            rel="noreferrer"
                            target="_blank"
                            className="btn-premium"
                            href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20preciso%20de%20un%20reboque%20agora%20em%20Campo%20Grande."
                        >
                            Solicitar Resgate <WhatsappIcon height={18} style={{ marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }} />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    background-image: url(${require('../../public/assets/img/slider/redesign_hero.png')});
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    overflow: hidden;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(26, 26, 27, 0.95) 0%, rgba(26, 26, 27, 0.6) 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    max-width: 750px;
                    padding: 64px;
                    text-align: left;
                    border-radius: 24px;
                }
                .title1 {
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin-bottom: 20px;
                    font-weight: 800;
                    font-family: var(--font-main);
                }
                .title2 {
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 28px;
                    font-weight: 800;
                    color: #fff;
                    font-family: var(--font-main);
                }
                .hero-description {
                    font-size: 1.3rem;
                    color: var(--text-secondary);
                    margin-bottom: 48px;
                    line-height: 1.6;
                    font-family: var(--font-main);
                }
                .hero-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .hero-list li {
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.15rem;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 80vh;
                        background-attachment: scroll;
                    }
                    .hero-content {
                        padding: 32px 20px;
                        text-align: center;
                        margin: 0 10px;
                    }
                    .title1 {
                        font-size: 0.85rem;
                        letter-spacing: 2px;
                        margin-bottom: 12px;
                    }
                    .title2 {
                        font-size: 2.22rem;
                        line-height: 1.2;
                        margin-bottom: 20px;
                    }
                    .hero-description {
                        font-size: 1.1rem;
                        margin-bottom: 32px;
                        line-height: 1.5;
                    }
                }
                @media (max-width: 375px) {
                    .hero-content {
                        padding: 24px 15px;
                    }
                    .title1 {
                        font-size: 0.75rem;
                        letter-spacing: 1px;
                    }
                    .title2 {
                        font-size: 1.85rem;
                    }
                    .hero-description {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;