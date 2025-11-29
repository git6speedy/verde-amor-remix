import { Sprout, Package, Leaf, Key } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const BusinessModelSection = () => {
  const { t } = useLanguage();

  const revenueStreams = [
    {
      icon: Sprout,
      title: t.businessModel.stream1Title,
      description: t.businessModel.stream1Desc
    },
    {
      icon: Package,
      title: t.businessModel.stream2Title,
      description: t.businessModel.stream2Desc
    },
    {
      icon: Leaf,
      title: t.businessModel.stream3Title,
      description: t.businessModel.stream3Desc
    },
    {
      icon: Key,
      title: t.businessModel.stream4Title,
      description: t.businessModel.stream4Desc
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.businessModel.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.businessModel.subtitle}
        </p>

        <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
          {t.businessModel.revenueTitle}
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-muted rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">{stream.title}</h4>
                  <p className="text-muted-foreground">{stream.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
          {t.businessModel.marketTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-badge rounded-xl border border-border">
            <h4 className="font-semibold text-lg mb-2 text-foreground">{t.businessModel.market1}</h4>
            <p className="text-3xl font-bold text-primary">{t.businessModel.marketValue}</p>
          </div>
          <div className="text-center p-8 bg-badge rounded-xl border border-border">
            <h4 className="font-semibold text-lg mb-2 text-foreground">{t.businessModel.market2}</h4>
            <p className="text-3xl font-bold text-primary">{t.businessModel.marketValue}</p>
          </div>
          <div className="text-center p-8 bg-badge rounded-xl border border-border">
            <h4 className="font-semibold text-lg mb-2 text-foreground">{t.businessModel.market3}</h4>
            <p className="text-3xl font-bold text-primary">{t.businessModel.marketValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
