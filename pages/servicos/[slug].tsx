import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import PageContainer from '../../components/page/container';
import Hero from '../../components/home/hero';
import AboutUs from '../../components/home/aboutus';
import RichFAQ from '../../components/home/RichFAQ';
import WhatsappSection from '../../components/contact/whatsappsection';
import ContactSection from '../../components/contact/contactsection';
import { servicePillars, ServicePillar } from '../../data/services';

interface ServicePageProps {
    service: ServicePillar;
}

export default function ServicePage({ service }: ServicePageProps) {
    if (!service) return null;

    return (
        <PageContainer>
            <Head>
                <title>{service.title}</title>
                <meta name="description" content={service.description} />
                <meta name="keywords" content={service.keywords} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": service.shortTitle,
                            "description": service.description,
                            "provider": {
                                "@type": "AutoTowingService",
                                "name": "Juniauto - Guincho 24h em Campo Grande",
                                "telephone": "+5521982769969",
                                "url": "https://juniauto.com.br"
                            },
                            "areaServed": "Campo Grande, Rio de Janeiro",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Serviços de Auto Socorro",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": service.shortTitle
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>

            <div id="reacthome" className="slider-area">
                <Hero
                    title1="Serviço Especializado"
                    title2={service.h1}
                    description={service.description}
                />
            </div>

            <main id="main">
                <AboutUs
                    title={service.shortTitle}
                    subtitle="Especialista em Campo Grande"
                    content={(
                        <div className="service-details-content">
                            {service.fullContent.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                            <div className="benefits-callout glass-card">
                                <h4>Por que escolher a Juniauto?</h4>
                                <ul>
                                    <li>✅ Atendimento Local (Moramos aqui)</li>
                                    <li>✅ Aceitamos Pix e Cartão</li>
                                    <li>✅ Equipamento Moderno e Revisado</li>
                                </ul>
                            </div>
                        </div>
                    )}
                />

                <RichFAQ customFaqs={service.faq} />

                <WhatsappSection />
                <ContactSection />
            </main>

            <style jsx>{`
                .service-details-content p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    margin-bottom: 24px;
                    color: var(--text-secondary);
                }
                .benefits-callout {
                    padding: 30px;
                    margin-top: 40px;
                    border-left: 4px solid var(--accent-yellow);
                }
                .benefits-callout h4 {
                    margin-bottom: 20px;
                    color: #fff;
                    font-weight: 700;
                }
                .benefits-callout ul {
                    list-style: none;
                    padding: 0;
                }
                .benefits-callout li {
                    margin-bottom: 12px;
                    font-weight: 500;
                    color: #fff;
                }
            `}</style>
        </PageContainer>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = servicePillars.map((s) => ({
        params: { slug: s.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const service = servicePillars.find((s) => s.slug === params?.slug);

    return {
        props: {
            service,
        },
    };
};
