import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function InfoPopup() {
  const { language } = useLanguage();

  // Only show for non-Korean users
  if (language === 'ko') {
    return null;
  }

  const buttonText = language === 'es' ? '¿Qué es Teto-Egen?' : 'What is Teto-Egen?';
  const title = language === 'es' ? 'Tipo de Personalidad Teto-Egen' : 'Teto-Egen Personality Type';
  const subtitle = language === 'es' ? 'Conoce sobre el sistema de clasificación de personalidad coreano' : 'Learn about the Korean personality classification system';
  const content = language === 'es' 
    ? 'El tipo de personalidad Teto-Egen es un método de clasificación de personalidad y citas que es popular en Corea. Teto y Egen son abreviaciones de testosterona (hormona masculina) y estrógeno (hormona femenina), y los tipos de personalidad se determinan basándose en características según las hormonas sexuales.'
    : 'Teto-Egen personality type is a dating and personality type classification method that is popular in Korea. Teto and Egen are short for testosterone (male hormone) and estrogen (female hormone), and personality types are determined based on characteristics according to sex hormones.';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 gap-2 px-3"
        >
          <Info className="w-4 h-4" />
          <span className="text-sm">{buttonText}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {subtitle}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}