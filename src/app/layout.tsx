import type { Metadata } from "next";
import "./globals.css";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: {
    default: "广州璟江贸易有限公司 — поставщик электронных компонентов",
    template: "%s | 广州璟江贸易有限公司",
  },
  description:
    "Профессиональные поставки полупроводников, микросхем и электронных компонентов. Guangzhou JingJiang Trading Co., Ltd.",
  keywords: [
    "электронные компоненты",
    "полупроводники",
    "микросхемы",
    "чипы",
    "поставщик электронных компонентов",
    "广州璟江贸易有限公司",
    "JingJiang Trading",
  ],
  authors: [{ name: "广州璟江贸易有限公司" }],
  creator: "广州璟江贸易有限公司",
  publisher: "广州璟江贸易有限公司",
  metadataBase: new URL("https://www.jjtrading.com.cn"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "广州璟江贸易有限公司",
    title: "广州璟江贸易有限公司 — поставщик электронных компонентов",
    description:
      "Профессиональные поставки полупроводников, микросхем и электронных компонентов.",
    url: "https://www.jjtrading.com.cn",
  },
  twitter: {
    card: "summary_large_image",
    title: "广州璟江贸易有限公司 — поставщик электронных компонентов",
    description:
      "Профессиональные поставки полупроводников, микросхем и электронных компонентов.",
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
  alternates: {
    canonical: "https://www.jjtrading.com.cn",
    languages: {
      ru: "https://www.jjtrading.com.cn/ru",
      en: "https://www.jjtrading.com.cn/en",
      zh: "https://www.jjtrading.com.cn/zh",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href={asset("/favicon.ico")} sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
