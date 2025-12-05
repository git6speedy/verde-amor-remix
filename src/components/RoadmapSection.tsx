import { useLanguage } from "@/contexts/LanguageContext";

export const RoadmapSection = () => {
  const { t } = useLanguage();

  const phases = [
    {
      period: t.roadmap.phase1,
      items: [
        t.roadmap.phase1Item1,
        t.roadmap.phase1Item2,
        t.roadmap.phase1Item3,
        t.roadmap.phase1Item4,
        t.roadmap.phase1Item5
      ]
    },
    {
      period: t.roadmap.phase2,
      items: [
        t.roadmap.phase2Item1,
        t.roadmap.phase2Item2,
        t.roadmap.phase2Item3,
        t.roadmap.phase2Item4,
        t.roadmap.phase2Item5
      ]
    },
    {
      period: t.roadmap.phase3,
      items: [
        t.roadmap.phase3Item1,
        t.roadmap.phase3Item2,
        t.roadmap.phase3Item3,
        t.roadmap.phase3Item4,
        t.roadmap.phase3Item5
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.roadmap.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.roadmap.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center mb-6">
                <h3 className="text-xl font-bold">{phase.period}</h3>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
