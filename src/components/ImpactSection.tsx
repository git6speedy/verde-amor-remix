import { useLanguage } from "@/contexts/LanguageContext";

export const ImpactSection = () => {
  const { t } = useLanguage();

  const metrics = [
    { value: t.impact.metric1, label: t.impact.metric1Label },
    { value: t.impact.metric2, label: t.impact.metric2Label },
    { value: t.impact.metric3, label: t.impact.metric3Label },
    { value: t.impact.metric4, label: t.impact.metric4Label }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.impact.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.impact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 text-center shadow-sm border border-border hover:border-primary transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {metric.value}
              </div>
              <p className="text-foreground font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>{t.impact.note}</strong> {t.impact.noteDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
