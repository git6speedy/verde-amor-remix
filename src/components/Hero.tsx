import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWllbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzYgMzR2Mi1oMnYtMmgtMnpNMzY2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2 text-sm backdrop-blur-sm">
              {t.hero.badge1}
            </Badge>
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2 text-sm backdrop-blur-sm">
              {t.hero.badge2}
            </Badge>
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2 text-sm backdrop-blur-sm">
              {t.hero.badge3}
            </Badge>
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2 text-sm backdrop-blur-sm">
              {t.hero.badge4}
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="http://verdeamor.eco/wp-content/uploads/2025/11/pitch-verdeamor.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                {t.hero.cta1}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground" asChild>
              <a href="mailto:kais@verdeamor.bio" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
                {t.hero.cta2}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground" asChild>
              <a href={t.footer.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                {t.hero.cta3}
              </a>
            </Button>
          </div>

          {/* Quick Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-semibold text-lg mb-2">{t.hero.card1Title}</h3>
              <p className="text-sm text-primary-foreground/80">
                {t.hero.card1Desc}
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-semibold text-lg mb-2">{t.hero.card2Title}</h3>
              <p className="text-sm text-primary-foreground/80">
                {t.hero.card2Desc}
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-semibold text-lg mb-2">{t.hero.card3Title}</h3>
              <p className="text-sm text-primary-foreground/80">
                {t.hero.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};