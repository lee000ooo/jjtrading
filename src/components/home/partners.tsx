import { SectionTitle } from "@/components/shared/section-title";

interface PartnersProps {
  dict: Record<string, string>;
}

const partners = [
  { name: "ElectroTech", desc: "Промышленная электроника" },
  { name: "RusAutomation", desc: "Системы автоматизации" },
  { name: "Nordic Systems", desc: "Оборудование связи" },
  { name: "Siberia Electronics", desc: "Производство РЭА" },
  { name: "Volga Devices", desc: "Приборостроение" },
  { name: "Ural Components", desc: "Дистрибуция" },
  { name: "TechImport", desc: "Импорт компонентов" },
  { name: "SmartLogic", desc: "Embedded системы" },
];

export function Partners({ dict }: PartnersProps) {
  return (
    <section className="py-16 md:py-24 bg-surface-50/50 dark:bg-surface-900/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={dict["partners.title"]}
          subtitle={dict["partners.subtitle"]}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-primary">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-semibold text-center">
                {partner.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1 text-center">
                {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
