import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
} from "lucide-react";
import { getDictionary, getContactDictionary } from "@/lib/dictionaries";
import { ContactForm } from "./contact-form";
import type { Locale } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict["seo.contact.title"],
    description: dict["seo.contact.description"],
    alternates: {
      canonical: `https://www.jjtrading.com.cn/${locale}/contact`,
      languages: {
        ru: "https://www.jjtrading.com.cn/ru/contact",
        en: "https://www.jjtrading.com.cn/en/contact",
        zh: "https://www.jjtrading.com.cn/zh/contact",
      },
    },
    openGraph: {
      title: dict["seo.contact.title"],
      description: dict["seo.contact.description"],
      url: `https://www.jjtrading.com.cn/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const contactDict = await getContactDictionary(locale as Locale);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contactDict["page.title"],
    description: contactDict["page.subtitle"],
    url: `https://www.jjtrading.com.cn/${locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "广州璟江贸易有限公司",
      telephone: "+86-135-8035-3907",
      email: "lichengyin@jjtrading.com.cn",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Тверская, 15, офис 302",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {contactDict["page.title"]}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {contactDict["page.subtitle"]}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  {contactDict["info.title"]}
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {contactDict["info.address.title"]}
                      </h4>
                      <p className="text-sm whitespace-pre-line">
                        {contactDict["info.address.value"]}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {contactDict["info.address.metro"]}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {contactDict["info.phone.title"]}
                      </h4>
                      <a
                        href="tel:+8613580353907"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {contactDict["info.phone.value"]}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {contactDict["info.email.title"]}
                      </h4>
                      <a
                        href="mailto:lichengyin@jjtrading.com.cn"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {contactDict["info.email.value"]}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        Рабочие часы
                      </h4>
                      <p className="text-sm">
                        {contactDict["info.workingHours"]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messengers */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {contactDict["messengers.title"]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/8613580353907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium text-sm hover:bg-green-100 dark:hover:bg-green-950/50 transition-colors border border-green-200 dark:border-green-900"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {contactDict["messengers.whatsapp"]}
                  </a>
                  <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
                    <img
                      src="/images/wechat-qr.jpg"
                      alt="WeChat QR Code"
                      className="w-24 h-24 object-contain"
                    />
                    <span className="text-xs text-green-700 dark:text-green-400 mt-1">
                      {contactDict["messengers.wechat"]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery note */}
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-5">
                <h4 className="font-semibold text-primary mb-2">
                  {contactDict["cta.title"]}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {contactDict["cta.desc"]}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-2">
                  {contactDict["form.title"]}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {contactDict["form.subtitle"]}
                </p>
                <ContactForm dict={contactDict} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
