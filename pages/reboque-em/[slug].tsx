import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import PageContainer from '../../components/page/container';
import Hero from '../../components/home/hero';
import AboutUs from '../../components/home/aboutus';
import OurServices from '../../components/home/ourservices';
import QuickStatus from '../../components/home/QuickStatus';
import ProcessSection from '../../components/home/ProcessSection';
import RichFAQ from '../../components/home/RichFAQ';
import OurSkills from '../../components/home/ourskills';
import WhatsappSection from '../../components/contact/whatsappsection';
import ContactSection from '../../components/contact/contactsection';
import { localidades } from '../../data/localidades';

interface LocalPageProps {
    local: typeof localidades[0];
}

export default function LocalPage({ local }: LocalPageProps) {
    if (!local) return null;

    return (
        <PageContainer>
            <Head>
                <title>{local.h1} | Juniauto 24h</title>
                <meta name="description" content={local.description} />
                <meta name="keywords" content={local.keywords} />
            </Head>

            <div id="reacthome" className="slider-area">
                <Hero
                    title1={`Reboque 24h em ${local.name}`}
                    title2={local.h1}
                    description={local.description}
                />
                <QuickStatus />
            </div>

            <main id="main">
                <AboutUs
                    title={`Auto Socorro em ${local.name}`}
                    subtitle={`Líder em Reboque na região de ${local.name}`}
                    content={(
                        <>
                            <p>
                                A Juniauto é especializada em resgate e auto socorro em <strong>{local.name}</strong>. Nossa equipe conhece cada detalhe das ruas de {local.name}, garantindo que você não fique esperando.
                            </p>
                            <p>
                                Atendemos com guincho plataforma para carros, motos e veículos leves com total segurança. Se você está em <strong>{local.name}</strong> e precisa de um reboque agora, conte com a gente.
                            </p>
                        </>
                    )}
                />
                <ProcessSection />
                <OurServices />
                <RichFAQ />
                <OurSkills />
                <WhatsappSection />
                <ContactSection />
            </main>
        </PageContainer>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = localidades.map((local) => ({
        params: { slug: local.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const local = localidades.find((l) => l.slug === params?.slug);

    return {
        props: {
            local,
        },
    };
};
