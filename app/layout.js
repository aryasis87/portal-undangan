import './globals.css';
import { Marcellus, Mulish } from 'next/font/google';

const marcellus = Marcellus({ subsets: ['latin'], variable: '--font-marcellus', weight: '400' });
const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalUndangan","description":"Koleksi 8 undangan digital","url":"https://portal-undangan.vercel.app","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.id"}};

export const metadata = {
  metadataBase: new URL("https://portal-undangan.vercel.app"),
  title: "PortalUndangan — Undangan Digital untuk Setiap Momen",
  description: "PortalUndangan: 8 undangan digital dengan karakter berbeda — pernikahan, lamaran, khitanan, aqiqah, ulang tahun, wisuda, reuni, dan korporat.",
  applicationName: "PortalUndangan",
  keywords: ["template undangan digital", "undangan online", "koleksi undangan", "undangan pernikahan digital"],
  authors: [{ name: "PortalUndangan" }],
  creator: "PortalUndangan",
  publisher: "PortalUndangan",
  alternates: { canonical: "https://portal-undangan.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portal-undangan.vercel.app",
    siteName: "PortalUndangan",
    title: "PortalUndangan — Undangan Digital untuk Setiap Momen",
    description: "PortalUndangan: 8 undangan digital dengan karakter berbeda — pernikahan, lamaran, khitanan, aqiqah, ulang tahun, wisuda, reuni, dan korporat.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalUndangan — Undangan Digital untuk Setiap Momen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalUndangan — Undangan Digital untuk Setiap Momen",
    description: "PortalUndangan: 8 undangan digital dengan karakter berbeda — pernikahan, lamaran, khitanan, aqiqah, ulang tahun, wisuda, reuni, dan korporat.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${marcellus.variable} ${mulish.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
