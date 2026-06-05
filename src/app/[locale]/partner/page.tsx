import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { Building2, ArrowRight, Shield, Cpu } from "lucide-react";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict["seo.partner.title"] || "Special Partners | JingJiang Trading",
    description: dict["seo.partner.description"] || "Our strategic partners.",
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/partner`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/partner",
        en: "https://www.jjtrading.com.cn/en/partner",
        zh: "https://www.jjtrading.com.cn/zh/partner",
      },
    },
    openGraph: {
      title: dict["seo.partner.title"] || "Special Partners",
      description: dict["seo.partner.description"] || "Our strategic partners.",
      url: `https://www.jjtrading.com.cn/${locale}/partner`,
    },
  };
}

export default async function PartnerOverviewPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const partnerLabel = dict["nav.partner"] || "Partners";

  const partners = [
    {
      href: `/${locale}/partner/shuofeng`,
      title: "Shuofeng Grinding",
      subtitle: "硕丰研磨科技",
      desc:
        locale === "zh"
          ? "专业抛光研磨产品全球领先供应商"
          : locale === "ru"
          ? "Ведущий мировой поставщик полировальных и шлифовальных продуктов"
          : "Global leading supplier of professional polishing and grinding products",
      icon: Shield,
      tags: locale === "zh"
        ? ["研磨耗材", "化学制剂", "抛光设备"]
        : ["Consumables", "Chemicals", "Equipment"],
    },
    {
      href: `/${locale}/partner/youchang`,
      title: "Youchang Precision Machinery",
      subtitle: "佑昌精密机械",
      desc:
        locale === "zh"
          ? "专业数控车床、自动车床制造商，源自台湾三十载技术沉淀"
          : locale === "ru"
          ? "Профессиональный производитель CNC станков, более 30 лет опыта из Тайваня"
          : "Professional CNC lathe and automatic lathe manufacturer from Taiwan with 30 years of expertise",
      icon: Cpu,
      tags: locale === "zh"
        ? ["数控车床", "自动车床", "凸轮机车"]
        : ["CNC Lathes", "Auto Lathes", "Cam Lathes"],
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative text-center">
          <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm mb-4">
            <Building2 className="h-4 w-4" />
            <span>{partnerLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {locale === "zh" ? "特别合作伙伴" : locale === "ru" ? "Специальные партнёры" : "Special Partners"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === "zh"
              ? "璟江贸易与行业领先企业建立战略合作，为客户提供更全面的工业品解决方案"
              : locale === "ru"
              ? "JingJiang Trading сотрудничает с ведущими компаниями для предоставления комплексных промышленных решений"
              : "JingJiang Trading partners with industry leaders to deliver comprehensive industrial solutions"}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.href}
                href={partner.href}
                className="group rounded-2xl border bg-card p-8 hover:shadow-lg transition-all hover:border-primary/30"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                    <partner.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {partner.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{partner.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{partner.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {partner.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  <span>
                    {locale === "zh" ? "查看详情" : locale === "ru" ? "Подробнее" : "Learn More"}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
