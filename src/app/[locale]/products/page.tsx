import type { Metadata } from "next";
import {
  Microchip,
  Cpu,
  Radio,
  Zap,
  Database,
  CircleDot,
  Triangle,
  Plug,
  Search,
  FileSpreadsheet,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { getDictionary, getProductsDictionary } from "@/lib/dictionaries";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict["seo.products.title"],
    description: dict["seo.products.description"],
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/products`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/products",
        en: "https://www.jjtrading.com.cn/en/products",
        zh: "https://www.jjtrading.com.cn/zh/products",
      },
    },
    openGraph: {
      title: dict["seo.products.title"],
      description: dict["seo.products.description"],
      url: `https://www.jjtrading.com.cn/${locale}/products`,
    },
  };
}

const categoryKeys = [
  "ic",
  "mcu",
  "sensors",
  "power",
  "memory",
  "passive",
  "diode",
  "connector",
];

const categoryIcons: Record<string, React.ReactNode> = {
  ic: <Microchip className="h-8 w-8" />,
  mcu: <Cpu className="h-8 w-8" />,
  sensors: <Radio className="h-8 w-8" />,
  power: <Zap className="h-8 w-8" />,
  memory: <Database className="h-8 w-8" />,
  passive: <CircleDot className="h-8 w-8" />,
  diode: <Triangle className="h-8 w-8" />,
  connector: <Plug className="h-8 w-8" />,
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const productsDict = await getProductsDictionary(locale as Locale);

  // Structured data for the product catalog
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: productsDict["page.title"],
    description: productsDict["page.subtitle"],
    url: `https://www.jjtrading.com.cn/${locale}/products`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryKeys.map((key, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: productsDict[`categories.${key}.title`],
          description: productsDict[`categories.${key}.desc`],
          category: productsDict[`categories.${key}.title`],
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {productsDict["page.title"]}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {productsDict["page.subtitle"]}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryKeys.map((key, i) => (
              <Card
                key={key}
                className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      {categoryIcons[key]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1.5 group-hover:text-primary transition-colors">
                        {productsDict[`categories.${key}.title`]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {productsDict[`categories.${key}.desc`]}
                      </p>
                      <p className="text-xs text-muted-foreground/70 font-mono bg-muted rounded-lg px-3 py-2 line-clamp-2">
                        <span className="text-primary font-semibold">Популярные:</span>{" "}
                        {productsDict[`categories.${key}.parts`]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BOM Section */}
      <section className="py-16 bg-surface-50/50 dark:bg-surface-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-2xl border bg-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary shrink-0">
                <FileSpreadsheet className="h-10 w-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {productsDict["bom.title"]}
                </h3>
                <p className="text-muted-foreground">
                  {productsDict["bom.desc"]}
                </p>
              </div>
              <Link href={`/${locale}/contact`}>
                <Button size="lg">
                  {productsDict["bom.cta"]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
            <Headphones className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            {productsDict["support.title"]}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            {productsDict["support.desc"]}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="xl">
              {productsDict["support.cta"]}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
