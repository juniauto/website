import React from 'react';
import BatteryAlertIcon from '../icons/BatteryAlertIcon';
import CarIcon from '../icons/CarIcon';
import LocalShippingIcon from '../icons/LocalShippingIcon';
import PhoneIcon from '../icons/PhoneIcon';

const QuickStatus = () => {
    const items = [
        { icon: <BatteryAlertIcon height={32} />, label: 'Pane Elétrica', desc: 'Bateria descarregada? Fazemos carga ou troca no local.' },
        { icon: <CarIcon height={32} />, label: 'Pane Mecânica', desc: 'Carro parou? Reboque rápido para a oficina de sua preferência.' },
        { icon: <LocalShippingIcon height={32} />, label: 'Utilitários', desc: 'Atendimento especializado para vans e veículos comerciais.' },
        { icon: <PhoneIcon height={32} />, label: 'Socorro 24h', desc: 'Plantão permanente para emergências em Campo Grande e imediações.' },
    ];

    return (
        <section className="quick-status">
            <div className="container">
                <div className="row">
                    {items.map((item, idx) => (
                        <div key={idx} className="col-md-3 col-sm-6">
                            <div className="status-card glass-card">
                                <div className="status-icon">{item.icon}</div>
                                <h3>{item.label}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .quick-status {
                    padding: 60px 0;
                    background: var(--background-deep);
                    margin-top: -60px;
                    position: relative;
                    z-index: 20;
                }
                .status-card {
                    padding: 32px 24px;
                    text-align: center;
                    height: 100%;
                }
                .status-icon {
                    color: var(--accent-yellow);
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                }
                h3 {
                    color: #fff;
                    font-size: 1.25rem;
                    margin-bottom: 12px;
                    font-weight: 700;
                    font-family: var(--font-main);
                }
                p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.5;
                    font-family: var(--font-main);
                }
                @media (max-width: 768px) {
                    .quick-status {
                        margin-top: 20px;
                        padding: 20px 0;
                    }
                    .status-card {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default QuickStatus;
