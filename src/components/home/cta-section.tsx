import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/utils";

interface CtaSectionProps {
  dict: Record<string, string>;
  locale: Locale;
}

export function CtaSection({ dict, locale }: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {dict["cta.title"]}
              </h2>
              <p className="text-primary-100 text-lg max-w-xl">
                {dict["cta.subtitle"]}
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg gap-2"
                >
                  <Send className="h-5 w-5" />
                  {dict["cta.button"]}
                </Button>
              </Link>
              <Link href={`/${locale}/products`}>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/30 text-white hover:bg-white/10 gap-2"
                >
                  {dict["hero.cta"]}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
