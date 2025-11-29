import { useLanguage } from "@/contexts/LanguageContext";

export const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.problem.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.problem.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="text-5xl md:text-6xl font-bold text-primary">
              {t.problem.stat1}
            </div>
            <p className="text-lg text-foreground">{t.problem.stat1Label}</p>
          </div>
          
          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              {t.problem.stat2}
            </div>
            <p className="text-lg text-foreground">{t.problem.stat2Label}</p>
          </div>
          
          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              {t.problem.stat3}
            </div>
            <p className="text-lg text-foreground">{t.problem.stat3Label}</p>
          </div>
        </div>
      </div>
    </section>
  );
};