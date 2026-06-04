export default function LocalBusinessSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CateringService",
  
      name: "Food Kashti",
  
      url: "https://foodkashti.in",
  
      logo: "https://foodkashti.in/images/logo.png",
  
      image: "https://foodkashti.in/images/logo.png",
  
      telephone: "+919799100651",
  
      email: "foodkashti@gmail.com",
  
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Sanmati Park, Vemali, Sama-Savli Rd, New Sama",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390024",
        addressCountry: "IN",
      },
  
      areaServed: {
        "@type": "City",
        name: "Vadodara",
      },
  
      description:
        "Food Kashti offers homemade food, catering services, tiffin services, Jain food arrangements, train food delivery and ready-to-eat meal solutions across Vadodara.",
  
      servesCuisine: [
        "Gujarati",
        "Indian",
        "Jain",
        "Homemade Food",
      ],
  
      priceRange: "₹₹",
  
      sameAs: [
        "https://wa.me/919799100651",
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    );
  }