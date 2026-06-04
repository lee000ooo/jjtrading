import type { Metadata } from "next";
import { getDictionary, getHomeDictionary } from "@/lib/dictionaries";
import { Hero } from "@/components/home/hero";
import { Advantages } from "@/components/home/advantages";
import { Categories } from "@/components/home/categories";
import { Partners } from "@/components/home/partners";
import { CtaSection } from "@/components/home/cta-section";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const seoData: Record<string, { title: string; description: string }> = {
    ru: {
      title: dict["seo.home.title"],
      description: dict["seo.home.description"],
    },
    en: {
      title: dict["seo.home.title"],
      description: dict["seo.home.description"],
    },
    zh: {
      title: dict["seo.home.title"],
      description: dict["seo.home.description"],
    },
  };

  const seo = seoData[locale] || seoData.ru;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru",
        en: "https://www.jjtrading.com.cn/en",
        zh: "https://www.jjtrading.com.cn/zh",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://www.jjtrading.com.cn/${locale}`,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const homeDict = await getHomeDictionary(locale as Locale);

  // JSON-LD structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "广州璟江贸易有限公司",
    url: `https://www.jjtrading.com.cn/${locale}`,
    description: dict["site.description"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "广州市增城区新塘镇南香山大道2号云享科技园A栋6楼618室",
      addressLocality: "Guangzhou",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-135-8035-3907",
      contactType: "sales",
      availableLanguage: ["Russian", "English", "Chinese"],
    },
    sameAs: [
      "https://t.me/lcy_jjtrading",
      "https://wa.me/8613580353907",
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hreflang tags */}
      <link rel="alternate" href="https://www.jjtrading.com.cn/ru" hrefLang="ru" />
      <link rel="alternate" href="https://www.jjtrading.com.cn/en" hrefLang="en" />
      <link rel="alternate" href="https://www.jjtrading.com.cn/zh" hrefLang="zh" />
      <link rel="alternate" href="https://www.jjtrading.com.cn/ru" hrefLang="x-default" />

      <Hero dict={homeDict} locale={locale as Locale} />
      <Advantages dict={homeDict} />
      <Categories dict={homeDict} locale={locale as Locale} />
      <Partners dict={homeDict} />
      <CtaSection dict={homeDict} locale={locale as Locale} />
    </>
  );
}
