import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export const RecognitionSection = () => {
  const { t } = useLanguage();

  const recognitions = [
    {
      title: t.recognition.item1Title,
      subtitle: t.recognition.item1Subtitle,
      description: t.recognition.item1Desc,
      icon: "🏆"
    },
    {
      title: t.recognition.item2Title,
      subtitle: t.recognition.item2Subtitle,
      description: t.recognition.item2Desc,
      icon: "🇧🇷"
    },
    {
      title: t.recognition.item3Title,
      subtitle: t.recognition.item3Subtitle,
      description: t.recognition.item3Desc,
      icon: "🔬"
    },
    {
      title: t.recognition.item4Title,
      subtitle: t.recognition.item4Subtitle,
      description: t.recognition.item4Desc,
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.recognition.title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.recognition.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="bg-badge border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
              <Badge variant="secondary" className="mb-4">{item.subtitle}</Badge>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
