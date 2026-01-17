import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "LocalBusiness",
                    "name": "Auto Socorro Juniauto",
                    "image": "https://juniauto.com.br/assets/img/logo/logo.png",
                    "@id": "https://juniauto.com.br/#localbusiness",
                    "url": "https://juniauto.com.br",
                    "telephone": "+552133566659",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Proximidades do West Shopping",
                      "addressLocality": "Campo Grande",
                      "addressRegion": "RJ",
                      "postalCode": "23000-000",
                      "addressCountry": "BR"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": -22.887585,
                      "longitude": -43.618827
                    },
                    "openingHoursSpecification": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                      ],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
                  },
                  {
                    "@type": "EmergencyRoadsideAssistance",
                    "name": "Reboque e Guincho 24h Juniauto",
                    "description": "Serviço de reboque e guincho 24 horas em Campo Grande, Cosmos, Inhoaíba e Zona Oeste do Rio de Janeiro.",
                    "areaServed": [
                      "Campo Grande, Rio de Janeiro",
                      "Cosmos, Rio de Janeiro",
                      "Inhoaíba, Rio de Janeiro",
                      "Senador Vasconcelos, Rio de Janeiro",
                      "Santíssimo, Rio de Janeiro"
                    ],
                    "provider": { "@id": "https://juniauto.com.br/#localbusiness" }
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;