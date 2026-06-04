import {
  ShieldCheck,
  Warehouse,
  Truck,
  BadgeDollarSign,
  Headphones,
  RefreshCw,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";

interface AdvantagesProps {
  dict: Record<string, string>;
}

const iconMap: Record<string, React.ReactNode> = {
  quality: (
    <ShieldCheck className="h-6 w-6" />
  ),
  stock: (
    <Warehouse className="h-6 w-6" />
  ),
  delivery: (
    <Truck className="h-6 w-6" />
  ),
  price: (
    <BadgeDollarSign className="h-6 w-6" />
  ),
  support: (
    <Headphones className="h-6 w-6" />
  ),
  warranty: (
    <RefreshCw className="h-6 w-6" />
  ),
};

const keys = ["quality", "stock", "delivery", "price", "support", "warranty"];

export function Advantages({ dict }: AdvantagesProps) {
  return (
    <section className="py-16 md:py-24 bg-surface-50/50 dark:bg-surface-900/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={dict["advantages.title"]}
          subtitle={dict["advantages.subtitle"]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => (
            <div
              key={key}
              className="group p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {iconMap[key]}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {dict[`advantages.${key}.title`]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict[`advantages.${key}.desc`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
