import type { Metadata } from "next";
import { getDictionary, getPartnerDictionary } from "@/lib/dictionaries";
import {
  Building2,
  Shield,
  FlaskConical,
  Headphones,
  Factory,
  Phone,
  Mail,
  Globe,
  MapPin,
  ExternalLink,
} from "lucide-react";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: `${dict["seo.partner.title"] || "Special Partner — Shuofeng Grinding | JingJiang Trading"}`,
    description: dict["seo.partner.description"] || "Shuofeng Grinding — Global leading supplier of professional polishing and grinding products.",
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/partner`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/partner",
        en: "https://www.jjtrading.com.cn/en/partner",
        zh: "https://www.jjtrading.com.cn/zh/partner",
      },
    },
    openGraph: {
      title: dict["seo.partner.title"] || "Special Partner — Shuofeng Grinding",
      description: dict["seo.partner.description"] || "Professional polishing and grinding products supplier.",
      url: `https://www.jjtrading.com.cn/${locale}/partner`,
    },
  };
}

export default async function PartnerPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getPartnerDictionary(locale as Locale);

  const advantages = [
    {
      icon: FlaskConical,
      title: dict["advantage.rd"],
      desc: dict["advantage.rd.desc"],
    },
    {
      icon: Shield,
      title: dict["advantage.quality"],
      desc: dict["advantage.quality.desc"],
    },
    {
      icon: Headphones,
      title: dict["advantage.service"],
      desc: dict["advantage.service.desc"],
    },
    {
      icon: Factory,
      title: dict["advantage.scale"],
      desc: dict["advantage.scale.desc"],
    },
  ];

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
                <p className="text-3xl font-bold text-primary mb-1">2016</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">40%</p>
                <p className="text-sm text-muted-foreground">Avg. Growth</p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-sm text-muted-foreground">Self-developed Products</p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">4</p>
                <p className="text-sm text-muted-foreground">Production Bases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
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

      {/* Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {dict["products.title"]}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict["products.subtitle"]}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {dict["product.consumables"]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict["product.consumables.desc"]}
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent-700 dark:text-accent mb-4">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {dict["product.chemicals"]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict["product.chemicals.desc"]}
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {dict["product.equipment"]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict["product.equipment.desc"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-20 bg-surface-50 dark:bg-surface-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {dict["advantages.title"]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {dict["contact.title"]}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {dict["contact.desc"]}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <a
                href="tel:+8676982999780"
                className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-muted transition-colors"
              >
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Tel</p>
                  <p className="font-medium">{dict["contact.phone"]}</p>
                </div>
              </a>
              <a
                href="mailto:sfym@dgsuofeng.cn"
                className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{dict["contact.email"]}</p>
                </div>
              </a>
              <a
                href="http://www.dgsuofeng.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-muted transition-colors"
              >
                <Globe className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Website</p>
                  <p className="font-medium flex items-center gap-1">
                    {dict["contact.website"]}
                    <ExternalLink className="h-3 w-3" />
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="font-medium text-sm">{dict["contact.address"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {dict["cta.title"]}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {dict["cta.desc"]}
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
