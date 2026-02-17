import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { MouseTracker } from "@/components/ui/mouse-tracker";
import { SmoothScroll } from "@/components/ui/smooth-scroll";



export const metadata: Metadata = {
  metadataBase: new URL("https://automodif.se"),
  title: "Automodif | Auktoriserad Autoexperten Bilverkstad i Västerås",
  description:
    "Professionell bilservice, reparation och diagnostik i Västerås. Auktoriserad Autoexperten-verkstad med garanti och vägassistans. Boka tid online.",
  keywords: [
    "bilverkstad",
    "västerås",
    "autoexperten",
    "bilservice",
    "reparation",
    "bilmekaniker",
    "däckbyte",
    "oljebyte"
  ],
  authors: [{ name: "Automodif" }],
  creator: "Automodif",
  publisher: "Automodif",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Automodif | Auktoriserad Autoexperten Bilverkstad i Västerås",
    description: "Professionell bilservice, reparation och diagnostik i Västerås. Auktoriserad Autoexperten-verkstad med garanti och vägassistans.",
    url: "https://automodif.se",
    siteName: "Automodif",
    images: [
      {
        url: "/images/og-image.jpg", // Needs to exist in public/images
        width: 1200,
        height: 630,
        alt: "Automodif Verkstad",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automodif | Auktoriserad Bilverkstad",
    description: "Din trygga bilverkstad i Västerås. Vi tar hand om din bil med personlig service.",
    images: ["/images/og-image.jpg"], // Needs to exist
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-background text-foreground selection:bg-primary selection:text-white font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MouseTracker />
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Automodif",
              "image": "https://automodif.se/images/og-image.jpg",
              "url": "https://automodif.se",
              "telephone": "021-12 39 39",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strömledningsgatan 1",
                "addressLocality": "Västerås",
                "postalCode": "721 37",
                "addressCountry": "SE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 59.6099,
                "longitude": 16.5448
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "07:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
