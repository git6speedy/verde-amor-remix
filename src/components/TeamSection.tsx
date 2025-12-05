import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.team.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.team.subtitle}
        </p>

        <div className="max-w-md mx-auto">
          <div className="bg-background rounded-xl p-8 text-center border border-border shadow-sm">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6 flex items-center justify-center text-primary-foreground text-3xl font-bold">
              K
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">{t.team.founderName}</h3>
            <p className="text-primary font-medium mb-4">{t.team.founderRole}</p>
            <p className="text-muted-foreground mb-6">
              {t.team.founderBio}
            </p>
            {/* Botão do LinkedIn removido */}
          </div>
        </div>
      </div>
    </section>
  );
};