import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "着物の買取びより | 着物買取おすすめ業者を徹底比較【2026年】",
    template: "%s | 着物の買取びより",
  },
  description:
    "着物買取のおすすめ業者5社を徹底比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの口コミ・評判・買取実績を正直にレビュー。",
  metadataBase: new URL("https://kimonokaitori-biyori.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "着物の買取びより",
      url: "https://kimonokaitori-biyori.com",
      description:
        "着物買取のおすすめ業者5社を徹底比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの口コミ・評判・買取実績を正直にレビュー。",
    },
    {
      "@type": "Organization",
      name: "株式会社MediaX",
      url: "https://kimonokaitori-biyori.com",
      logo: "https://kimonokaitori-biyori.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "渋谷区",
        addressRegion: "東京都",
        addressCountry: "JP",
      },
      publishingPrinciples: "https://kimonokaitori-biyori.com/about/",
      knowsAbout: [
        "着物買取",
        "着物の買取相場",
        "産地織物・伝統工芸の着物",
        "着物買取業者の比較",
        "訪問購入のクーリングオフ",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="md:hidden text-right py-1 px-4 text-[10px] text-gray-400 bg-gray-50 border-b border-gray-100">PRを含みます</div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
