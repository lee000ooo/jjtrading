import Link from "next/link";
import {
  Cpu,
  Microchip,
  Radio,
  Zap,
  Database,
  CircleDot,
  Triangle,
  Plug,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/utils";

interface CategoriesProps {
  dict: Record<string, string>;
  locale: Locale;
}

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

const categories = [
  "ic", "mcu", "sensors", "power",
  "memory", "passive", "diode", "connector",
];

export function Categories({ dict, locale }: CategoriesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={dict["categories.title"]}
          subtitle={dict["categories.subtitle"]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat}
              href={`/${locale}/products`}
              className="group p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {categoryIcons[cat]}
              </div>
              <h3 className="font-semibold mb-1.5 group-hover:text-primary transition-colors">
                {dict[`categories.${cat}`]}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {dict[`categories.${cat}.desc`]}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={`/${locale}/products`}>
            <Button variant="outline" size="lg" className="gap-2">
              {dict["categories.title"]}
              <span className="text-lg">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
