import { Recycle, Leaf, Award, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SolutionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.solution.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.solution.subtitle}
        </p>

        {/* Process Flow */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-4">🗑️</div>
            <h3 className="font-semibold text-foreground mb-2">{t.solution.step1}</h3>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-semibold text-foreground mb-2">{t.solution.step3}</h3>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-4">🐄</div>
            <h3 className="font-semibold text-foreground mb-2">{t.solution.step3Desc}</h3>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-foreground mb-2">{t.solution.step4}</h3>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{t.solution.metric3}</div>
            <p className="text-muted-foreground">{t.solution.metric3Label}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">80%</div>
            <p className="text-muted-foreground">{t.problem.stat2Label}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">4</div>
            <p className="text-muted-foreground">{t.solution.feature4Desc}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">0</div>
            <p className="text-muted-foreground">{t.solution.feature1Desc}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{t.solution.feature1}</h3>
            <p className="text-muted-foreground">{t.solution.feature1Desc}</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Recycle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{t.solution.feature3}</h3>
            <p className="text-muted-foreground">{t.solution.feature3Desc}</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{t.solution.feature2}</h3>
            <p className="text-muted-foreground">{t.solution.feature2Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};