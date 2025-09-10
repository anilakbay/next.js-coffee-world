import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee World - Premium Coffee Experience & Reviews",
  description:
    "Discover the finest coffee blends, read expert reviews, and join our coffee community. From espresso to cappuccino, explore the world of premium coffee with Coffee World.",
  keywords: [
    "coffee",
    "premium coffee",
    "espresso",
    "cappuccino",
    "americano",
    "latte",
    "coffee reviews",
    "coffee shop",
    "coffee beans",
    "coffee brewing",
    "coffee community",
    "coffee world"
  ],
  authors: [{ name: "Coffee World Team" }],
  creator: "Coffee World",
  publisher: "Coffee World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://coffee-world.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coffee World - Premium Coffee Experience",
    description: "Discover the finest coffee blends, read expert reviews, and join our coffee community.",
    url: "https://coffee-world.vercel.app",
    siteName: "Coffee World",
    images: [
      {
        url: "/images/coffee_world.png",
        width: 1200,
        height: 630,
        alt: "Coffee World - Premium Coffee Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee World - Premium Coffee Experience",
    description: "Discover the finest coffee blends, read expert reviews, and join our coffee community.",
    images: ["/images/coffee_world.png"],
    creator: "@coffeeworld",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Coffee World",
    "description": "Premium coffee experience and reviews platform",
    "url": "https://coffee-world.vercel.app",
    "logo": "https://coffee-world.vercel.app/images/logo/3.png",
    "sameAs": [
      "https://www.instagram.com/coffeeworld",
      "https://www.youtube.com/@coffeeworld",
      "https://www.linkedin.com/company/coffeeworld"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-546-593-80-36",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Istanbul"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Coffee Reviews and Community",
        "description": "Premium coffee reviews, brewing tips, and community discussions"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
