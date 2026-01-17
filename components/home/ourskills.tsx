import React from 'react';

export default function OurSkills() {
    return (
        <section className="trust-bar">
            <div className="container">
                <div className="glass-card trust-content">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h2 className="text-gradient">Líder em Socorro Veicular em Campo Grande</h2>
                            <p>Mais de <strong>50.000 clientes satisfeitos</strong> na região de Campo Grande.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <span className="big-stat">+50k</span>
                            <span className="stat-label">Vidas Socorridas</span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .trust-bar {
                    padding: 40px 0;
                    background: var(--background-deep);
                }
                .trust-content {
                    padding: 40px 60px;
                }
                h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 8px;
                    font-family: var(--font-main);
                }
                p {
                    color: var(--text-secondary);
                    font-size: 1.2rem;
                    margin-bottom: 0;
                    font-family: var(--font-main);
                }
                .big-stat {
                    display: block;
                    font-size: 4rem;
                    font-weight: 900;
                    color: var(--accent-yellow);
                    line-height: 1;
                }
                .stat-label {
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 700;
                    font-size: 0.8rem;
                }
                @media (max-width: 768px) {
                    .trust-content {
                        padding: 40px 24px;
                        text-align: center;
                    }
                    h2 {
                        font-size: 1.8rem;
                    }
                    .big-stat {
                        margin-top: 20px;
                    }
                }
            `}</style>
        </section>
    );
}