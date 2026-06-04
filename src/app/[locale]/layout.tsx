import { getDictionary } from "@/lib/dictionaries";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Locale } from "@/lib/utils";

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  // Generate hreflang data for the page
  const locales = ["ru", "en", "zh"];

  return (
    <ThemeProvider>
      <Header commonDict={dict} locale={locale as Locale} />
      <main className="min-h-screen">{children}</main>
      <Footer commonDict={dict} locale={locale as Locale} />
    </ThemeProvider>
  );
}
