const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Gym",
  "name": "Academia Corpus Fitness PS",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Benedito Cláudio, 128 - Centro",
    "addressLocality": "Porto Seguro",
    "addressRegion": "Bahia",
    "postalCode": "45810-000",
    "addressCountry": "BR"
  },
  "telephone": "+55 73 98207-8074",
  "url": "https://www.corpusfitnessps.com.br",
  "sameAs": [
    "https://www.instagram.com/corpusfitnessps/"
  ]
};

function injectJsonLd() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(jsonLdData);
  document.head.appendChild(script);
}

injectJsonLd();
