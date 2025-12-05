import { Mail, Linkedin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Verde Amor</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a href="mailto:contato@verdeamor.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                kais@verdeamor.eco {/* E-mail estático */}
              </a>
              <a href={`tel:${t.footer.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                {t.footer.phone}
              </a>
            </div>
          </div>

          <div>

            <div className="flex gap-4">
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};