import React from 'react';

export interface ServicePillar {
    slug: string;
    title: string;
    shortTitle: string;
    h1: string;
    description: string;
    icon: string;
    fullContent: string[];
    faq: { question: string; answer: string }[];
    schemaType: string;
    keywords: string;
}

export const servicePillars: ServicePillar[] = [
    {
        slug: 'reboque-de-carros',
        shortTitle: 'Reboque de Carros',
        title: 'Reboque de Carros em Campo Grande RJ | Juniauto 24h',
        h1: 'Serviço de Reboque para Carros e SUVs em Campo Grande',
        description: 'Carro quebrado ou batido? Não se arrisque na rua. A Juniauto oferece reboque plataforma 24h com agilidade e preço justo em toda a Zona Oeste.',
        icon: 'CarIcon',
        schemaType: 'TowingService',
        keywords: 'reboque de carros, guincho para carros, reboque plataforma campo grande',
        fullContent: [
            'O seu veículo é um patrimônio e nós sabemos disso. Por isso, utilizamos apenas caminhões plataforma modernos, equipados com cintas de alta resistência e operadores treinados.',
            'Atendemos emergências mecânicas, colisões e transporte de veículos novos ou de luxo com total discrição e segurança.',
            'Nossa base em Campo Grande permite que cheguemos rápido ao West Shopping, Avenida Brasil e arredores.'
        ],
        faq: [
            { question: 'Quanto tempo demora o resgate?', answer: 'Por estarmos sediados em Campo Grande, nosso tempo de resposta é um dos mais rápidos da região, geralmente levando de 20 a 40 minutos dependendo do trânsito.' },
            { question: 'Aceitam cartão ou Pix?', answer: 'Sim, aceitamos todas as formas de pagamento: Pix, Crédito e Débito diretamente com o motorista.' },
            { question: 'O reboque é plataforma?', answer: 'Sim, trabalhamos exclusivamente com reboque plataforma para garantir que seu carro não sofra danos estruturais durante o transporte.' }
        ]
    },
    {
        slug: 'reboque-de-motos',
        shortTitle: 'Reboque de Motos',
        title: 'Reboque de Motos em Campo Grande RJ | Especializado 24h',
        h1: 'Transporte e Reboque de Motos com Segurança em Campo Grande',
        description: 'Moto parou? Ficar parado no acostamento é perigoso. Chame a Juniauto para um resgate especializado com fixação correta e plataforma baixa.',
        icon: 'MotorcycleIcon',
        schemaType: 'TowingService',
        keywords: 'reboque de motos, guincho para motos, transporte de moto rj',
        fullContent: [
            'Motos exigem um cuidado diferenciado. Não basta apenas subir na plataforma; é preciso técnica para não danificar as carenagens ou suspensão.',
            'Utilizamos cintas específicas para motocicletas, garantindo estabilidade total durante o trajeto, seja uma scooter ou uma big trail.',
            'Atendemos em qualquer ponto de Campo Grande, Santíssimo, Cosmos e Avenida Brasil 24 horas por dia.'
        ],
        faq: [
            { question: 'Como a moto é presa no reboque?', answer: 'Utilizamos 4 pontos de fixação com cintas de catraca profissionais, evitando qualquer balanço ou risco de queda.' },
            { question: 'Atendem motos de alta cilindrada?', answer: 'Sim, nossa plataforma é adequada para todos os tipos de motos, desde as menores até as pesadas Big Trails e Custom.' }
        ]
    },
    {
        slug: 'carga-de-bateria',
        shortTitle: 'Carga de Bateria',
        title: 'Carga de Bateria 24h em Campo Grande | Juniauto Socorro',
        h1: 'Socorro para Bateria Arriada: Carga e Troca no Local',
        description: 'Esqueceu o farol aceso? A bateria morreu? Vamos até você em Campo Grande para realizar a carga (chupeta) ou troca da bateria 24h.',
        icon: 'BatteryAlertIcon',
        schemaType: 'EmergencyService',
        keywords: 'carga de bateria, chupeta bateria carro, socorro bateria campo grande',
        fullContent: [
            'Muitas vezes você não precisa de um reboque, apenas de um empurrão elétrico. Nosso serviço de carga de bateria é rápido e evita que você tenha que pagar um guincho completo.',
            'Se a bateria estiver no fim da vida útil, também temos parceiros para realizar a troca no local com garantia.',
            'Atendimento ágil em garagens, shoppings e vias públicas de toda a Zona Oeste.'
        ],
        faq: [
            { question: 'O serviço funciona para qualquer carro?', answer: 'Sim, atendemos veículos leves e utilitários com cabos de alta performance e auxiliares de partida profissionais.' },
            { question: 'Se o carro não pegar após a carga, o que acontece?', answer: 'Caso o problema seja mecânico e não apenas bateria, podemos converter o atendimento em um serviço de reboque com desconto.' }
        ]
    },
    {
        slug: 'caminhoes-e-pesados',
        shortTitle: 'Caminhões e Pesados',
        title: 'Reboque de Caminhões em Campo Grande | Transporte Pesado',
        h1: 'Remoção de Caminhões e Veículos Pesados em Campo Grande RJ',
        description: 'Precisa de guincho para caminhão baú ou utilitário? A Juniauto possui equipamentos de alta performance para transporte pesado 24h.',
        icon: 'LocalShippingIcon',
        schemaType: 'TowingService',
        keywords: 'reboque de caminhão, guincho pesado, transporte de vans rj',
        fullContent: [
            'O transporte de veículos pesados exige equipamentos de força e segurança redobrada. Atendemos vans, caminhões 3/4 e veículos escolares com agilidade.',
            'Nossa equipe é treinada para realizar a remoção em locais de difícil acesso, garantindo que sua logística não pare por muito tempo.',
            'Preços competitivos e atendimento 24 horas para frotistas e motoristas autônomos.'
        ],
        faq: [
            { question: 'Atendem caminhões carregados?', answer: 'Atendemos veículos de pequeno e médio porte (até 3/4). Para caminhões pesados carregados, favor consultar nossa equipe técnica pelo WhatsApp.' },
            { question: 'Fazem transporte intermunicipal?', answer: 'Sim, realizamos fretes e transportes de veículos pesados para todo o estado do Rio de Janeiro.' }
        ]
    },
    {
        slug: 'pane-seca-e-pneus',
        shortTitle: 'Pane e Pneus',
        title: 'Socorro para Pane Seca e Pneu Furado em Campo Grande',
        h1: 'Ficou sem Combustível ou Furou o Pneu? Socorro 24h ágil',
        description: 'Não fique parado no perigo. Levamos combustível ou realizamos a troca do pneu furado em qualquer ponto de Campo Grande e Av. Brasil.',
        icon: 'HelmetIcon',
        schemaType: 'EmergencyService',
        keywords: 'pane seca, pneu furado socorro, socorro mecânico campo grande',
        fullContent: [
            'Situações simples podem se tornar perigosas se você ficar parado em vias movimentadas como a Avenida Brasil no escuro.',
            'Nossa equipe chega rápido com o suprimento necessário ou realiza a troca do estepe para que você siga viagem com segurança.',
            'Custo reduzido para serviços de apoio rápido sem necessidade de reboque.'
        ],
        faq: [
            { question: 'Vocês levam combustível?', answer: 'Sim, realizamos o serviço de apoio para pane seca (combustível) em toda a nossa área de atuação.' },
            { question: 'E se eu não tiver estepe?', answer: 'Nesse caso, podemos rebocar seu veículo até a borracheira mais próxima ou de sua confiança.' }
        ]
    },
    {
        slug: 'atendimento-local',
        shortTitle: 'Atendimento Local',
        title: 'Juniauto | Guincho Local em Campo Grande RJ',
        h1: 'Por que contratar um Guincho Local em Campo Grande?',
        description: 'Fuja de intermediários. Fale direto com quem está em Campo Grande e garanta o melhor preço e rapidez no seu resgate 24h.',
        icon: 'PhoneIcon',
        schemaType: 'LocalBusiness',
        keywords: 'guincho campo grande barato, reboque local rj, juniauto telefones',
        fullContent: [
            'Contratar uma empresa local significa que o dinheiro circula na nossa região e você recebe um atendimento muito mais rápido.',
            'Diferente de seguradoras ou aplicativos que demoram horas para encontrar um prestador, nós estamos "na esquina", prontos para sair.',
            'Transparência total: você fala com o dono e sabe exatamente quem vai te atender.'
        ],
        faq: [
            { question: 'Qual a vantagem do atendimento local?', answer: 'Rapidez extrema e conhecimento real das ruas e perigos da nossa região (Zona Oeste).' },
            { question: 'Posso agendar um transporte?', answer: 'Sim! Além de emergências, você pode agendar transportes de veículos com antecedência.' }
        ]
    }
];
