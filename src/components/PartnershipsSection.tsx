import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, FlaskConical, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PartnershipsSection = () => {
  const { t } = useLanguage();

  const partnerships = [
    {
      icon: TrendingUp,
      title: t.partnerships.partner1Title,
      subtitle: t.partnerships.partner1Subtitle,
      description: t.partnerships.partner1Desc,
      buttons: [
        { text: t.partnerships.partner1Btn1, variant: "default", link: t.hero.pitchDeckLink }, // Placeholder for Pitch Deck
        { text: t.partnerships.partner1Btn2, variant: "outline", link: "mailto:kais@verdeamor.bio" }
      ]
    },
    {
      icon: Building2,
      title: t.partnerships.partner2Title,
      subtitle: t.partnerships.partner2Subtitle,
      description: t.partnerships.partner2Desc,
      buttons: [
        { text: t.partnerships.partner2Btn1, variant: "default", link: "#" }, // Placeholder for B2B Solutions
        { text: t.partnerships.partner2Btn2, variant: "outline", link: t.footer.whatsappLink }
      ]
    },
    {
      icon: FlaskConical,
      title: t.partnerships.partner3Title,
      subtitle: t.partnerships.partner3Subtitle,
      description: t.partnerships.partner3Desc,
      buttons: [
        { text: t.partnerships.partner3Btn1, variant: "default", link: t.footer.whatsappLink }
      ]
    },
    {
      icon: Landmark,
      title: t.partnerships.partner4Title,
      subtitle: t.partnerships.partner4Subtitle,
      description: t.partnerships.partner4Desc,
      buttons: [
        { text: t.partnerships.partner4Btn1, variant: "default", link: "#" }, // Placeholder for Public Solutions
        { text: t.partnerships.partner4Btn2, variant: "outline", link: t.footer.whatsappLink }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.partnerships.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.partnerships.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => {
            const Icon = partnership.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-border shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{partnership.title}</h3>
                    <p className="text-sm text-primary font-medium">{partnership.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{partnership.description}</p>
                <div className="flex flex-wrap gap-3">
                  {partnership.buttons.map((button, btnIndex) => (
                    <Button
                      key={btnIndex}
                      variant={button.variant as any}
                      size="sm"
                      asChild={!!button.link}
                    >
                      {button.link ? (
                        <a href={button.link} target="_blank" rel="noopener noreferrer">
                          {button.text}
                        </a>
                      ) : (
                        button.text
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};