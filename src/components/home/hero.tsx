import Link from "next/link";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/utils";

interface HeroProps {
  dict: Record<string, string>;
  locale: Locale;
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-900">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 md:py-24 lg:py-32">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>B2B поставщик электронных компонентов</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.1]">
              {dict["hero.title"]}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl lg:mx-0 mx-auto">
              {dict["hero.subtitle"]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <Link href={`/${locale}/products`}>
                <Button size="xl" className="gap-2 shadow-lg shadow-primary/25">
                  {dict["hero.cta"]}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button
                  variant="outline"
                  size="xl"
                  className="gap-2 border-2"
                >
                  {dict["hero.secondary"]}
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>Оригинальные компоненты</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>Доставка по всей РФ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-amber-500" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Circuit board decorative pattern */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/10 p-8">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_50%,rgba(30,109,242,0.08),transparent_70%)]" />

                {/* Central icon display */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                    {[
                      { icon: "🔲", label: "MCU" },
                      { icon: "🔧", label: "IC" },
                      { icon: "📡", label: "RF" },
                      { icon: "⚡", label: "Power" },
                      { icon: "🧠", label: "FPGA" },
                      { icon: "💾", label: "Memory" },
                      { icon: "🌡️", label: "Sensor" },
                      { icon: "🔌", label: "Conn" },
                      { icon: "⚛️", label: "Passive" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[10px] font-semibold text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg rounded-xl px-5 py-3 hidden md:block">
                <div className="text-2xl font-bold text-primary">50 000+</div>
                <div className="text-xs text-muted-foreground">
                  позиций в наличии
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border shadow-lg rounded-xl px-5 py-3 hidden md:block">
                <div className="text-2xl font-bold text-emerald-500">
                  &gt;10 лет
                </div>
                <div className="text-xs text-muted-foreground">на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
