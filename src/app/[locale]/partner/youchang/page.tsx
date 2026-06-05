import type { Metadata } from "next";
import { getPartnerYouchangDictionary } from "@/lib/dictionaries";
import {
  Building2,
  CheckCircle2,
  Target,
  Ruler,
  Mail,
} from "lucide-react";
import type { Locale } from "@/lib/utils";
import { ImageCarousel } from "@/components/partner/image-carousel";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getPartnerYouchangDictionary(locale as Locale);

  return {
    title: dict["page.title"] || "Special Partner — Youchang Precision Machinery | JingJiang Trading",
    description: dict["page.subtitle"] || "Professional CNC lathe manufacturer from Taiwan.",
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/partner/youchang`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/partner/youchang",
        en: "https://www.jjtrading.com.cn/en/partner/youchang",
        zh: "https://www.jjtrading.com.cn/zh/partner/youchang",
      },
    },
    openGraph: {
      title: dict["page.title"] || "Special Partner — Youchang Precision Machinery",
      description: dict["page.subtitle"] || "Professional CNC lathe manufacturer.",
      url: `https://www.jjtrading.com.cn/${locale}/partner/youchang`,
    },
  };
}

const productIds = ["1", "2", "3"] as const;

export default async function YouchangPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getPartnerYouchangDictionary(locale as Locale);

  const products = productIds.map((id) => ({
    name: dict[`product.${id}.name`],
    intro: dict[`product.${id}.intro`],
    features: dict[`product.${id}.features`].split("|"),
    application: dict[`product.${id}.application`],
    specs: dict[`product.${id}.specs`].split("|").map((s) => {
      const idx = s.indexOf(":");
      return idx === -1
        ? { label: s, value: "" }
        : { label: s.slice(0, idx).trim(), value: s.slice(idx + 1).trim() };
    }),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white dark:from-surface-950 dark:to-surface-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <Building2 className="h-4 w-4" />
              <span>{dict["page.title"]}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {dict["hero.title"]}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              {dict["hero.subtitle"]}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {dict["hero.desc"]}
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {dict["about.title"]}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{dict["about.desc1"]}</p>
                <p>{dict["about.desc2"]}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">30+</p>
                <p className="text-sm text-muted-foreground">
                  {locale === "zh" ? "年行业经验" : locale === "ru" ? "Лет опыта" : "Years Experience"}
                </p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">
                  {locale === "zh" ? "台湾" : locale === "ru" ? "Тайвань" : "Taiwan"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {locale === "zh" ? "技术源自" : locale === "ru" ? "Технологии из" : "Technology Origin"}
                </p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">ISO9001</p>
                <p className="text-sm text-muted-foreground">
                  {locale === "zh" ? "质量管理" : locale === "ru" ? "Управление качеством" : "Quality Management"}
                </p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">TS16949</p>
                <p className="text-sm text-muted-foreground">
                  {locale === "zh" ? "汽车行业认证" : locale === "ru" ? "Автомобильный стандарт" : "Automotive Standard"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-surface-50 dark:bg-surface-900">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {dict["culture.title"]}
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-8 italic">
            &ldquo;{dict["culture.slogan"]}&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="px-5 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              {dict["culture.honor"]}
            </span>
            <span className="px-5 py-2 rounded-full bg-accent/10 text-accent-700 dark:text-accent font-medium text-sm">
              {dict["culture.achievement"]}
            </span>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
          <ImageCarousel
            images={Array.from({ length: 5 }, (_, i) => ({
              src: `/images/partner/佑昌画册_${String(i + 3).padStart(2, "0")}.png`,
              alt: `Youchang Gallery ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict["products.title"]}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict["products.subtitle"]}
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, pi) => (
              <div
                key={pi}
                className="rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary-950/50 dark:to-primary-900/30 px-6 py-5 border-b">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <span className="text-lg font-bold">{pi + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.intro}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-5 space-y-5">
                  {/* Features */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {locale === "zh" ? "产品特点" : locale === "ru" ? "Характеристики" : "Product Features"}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {product.features.map((f, fi) => (
                        <li key={fi} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-accent-700 dark:text-accent mb-2">
                      <Target className="h-4 w-4" />
                      <span>
                        {locale === "zh" ? "应用领域" : locale === "ru" ? "Область применения" : "Application Area"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.application}</p>
                  </div>

                  {/* Specs */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-2">
                      <Ruler className="h-4 w-4" />
                      <span>
                        {locale === "zh" ? "技术参数" : locale === "ru" ? "Технические характеристики" : "Specifications"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden text-sm">
                      {product.specs.map((s, si) => (
                        <div
                          key={si}
                          className="flex bg-card px-3 py-2"
                        >
                          <span className="text-muted-foreground w-1/2 shrink-0">{s.label}</span>
                          <span className="font-medium">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {dict["contact.title"]}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {dict["contact.desc"]}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {locale === "ru"
              ? "Связаться с нами"
              : locale === "zh"
              ? "联系我们"
              : "Contact Us"}
          </a>
        </div>
      </section>
    </>
  );
}
