import type { Metadata } from "next";
import {
  ShieldCheck,
  Warehouse,
  Truck,
  BarChart3,
  Headphones,
  FileSearch,
  CreditCard,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { getDictionary, getAboutDictionary } from "@/lib/dictionaries";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict["seo.about.title"],
    description: dict["seo.about.description"],
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/about`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/about",
        en: "https://www.jjtrading.com.cn/en/about",
        zh: "https://www.jjtrading.com.cn/zh/about",
      },
    },
    openGraph: {
      title: dict["seo.about.title"],
      description: dict["seo.about.description"],
      url: `https://www.jjtrading.com.cn/${locale}/about`,
    },
  };
}

const advantageKeys = [
  "warehouse",
  "supply",
  "bom",
  "quality2",
  "support",
  "customs",
  "flexible",
  "nds",
];

const advantageIcons: Record<string, React.ReactNode> = {
  warehouse: <Warehouse className="h-5 w-5" />,
  supply: <Truck className="h-5 w-5" />,
  bom: <FileSearch className="h-5 w-5" />,
  quality2: <ShieldCheck className="h-5 w-5" />,
  support: <Headphones className="h-5 w-5" />,
  customs: <ScrollText className="h-5 w-5" />,
  flexible: <CreditCard className="h-5 w-5" />,
  nds: <BarChart3 className="h-5 w-5" />,
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const aboutDict = await getAboutDictionary(locale as Locale);

  return (
    <>
      {/* JSON-LD Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: dict["breadcrumb.home"], item: `https://www.jjtrading.com.cn/${locale}` },
              { "@type": "ListItem", position: 2, name: dict["breadcrumb.about"], item: `https://www.jjtrading.com.cn/${locale}/about` },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {aboutDict["page.title"]}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {aboutDict["page.subtitle"]}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {aboutDict["intro.title"]}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutDict["intro.desc"]}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold mb-4">
                {aboutDict["mission.title"]}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutDict["mission.desc"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-50/50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: aboutDict["stats.experience"] },
              { value: "50K+", label: aboutDict["stats.products"] },
              { value: "2000+", label: aboutDict["stats.clients"] },
              { value: "80+", label: aboutDict["stats.delivery"] },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionTitle
            title={aboutDict["values.title"]}
            align="center"
          />
          <div className="grid md:grid-cols-4 gap-6">
            {["quality", "reliability", "speed", "partner"].map((key, i) => (
              <div
                key={key}
                className="p-6 rounded-xl bg-card border border-border/50 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {["★", "◆", "▶", "✦"][i]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {aboutDict[`values.${key}`]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-20 bg-surface-50/50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionTitle
            title={aboutDict["advantages.title"]}
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantageKeys.map((key) => (
              <div
                key={key}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  {advantageIcons[key]}
                </div>
                <span className="text-sm font-medium">
                  {aboutDict[`advantages.${key}`]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {aboutDict["cta.title"]}
          </h2>
          <Link href={`/${locale}/contact`}>
            <Button size="xl" className="mt-4">
              {aboutDict["cta.button"]}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
