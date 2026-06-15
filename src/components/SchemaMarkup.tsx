import React from "react";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://aazify.com/#organization",
    "name": "Aazify",
    "legalName": "AAZ Developers",
    "url": "https://aazify.com",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://aazify.com/#logo",
      "url": "https://aazify.com/favicon.ico",
      "caption": "Aazify Logo"
    },
    "image": {
      "@type": "ImageObject",
      "@id": "https://aazify.com/#image",
      "url": "https://aazify.com/favicon.ico"
    },
    "description": "At Aazify, we craft powerful digital solutions — custom software, web & mobile apps, and AI systems — that help businesses grow, automate, and dominate their industries.",
    "telephone": "+923007395147",
    "email": "contact@aazify.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressRegion": "Punjab",
      "addressLocality": "Multan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.1575",
      "longitude": "71.5249"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/aazify",
      "https://www.instagram.com/aazify_",
      "https://www.youtube.com/@aazify.official",
      "https://www.tiktok.com/@aazify",
      "https://www.pinterest.com/aazifycom/"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Mr. Muhammad Abbas",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Mr. Azeem Ullah",
        "jobTitle": "CTO"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
