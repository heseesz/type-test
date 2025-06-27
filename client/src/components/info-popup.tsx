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

  const getLocalizedText = () => {
    switch (language) {
      case 'es':
        return {
          buttonText: '¿Qué es Teto-Egen?',
          title: 'Tipo de Personalidad Teto-Egen',
          subtitle: 'Conoce sobre el sistema de clasificación de personalidad coreano',
          content: 'El tipo de personalidad Teto(테토)-Egen(에겐) es un método de clasificación de personalidad y citas que es popular en Corea. Teto y Egen son abreviaciones de testosterona (hormona masculina) y estrógeno (hormona femenina), y los tipos de personalidad se determinan basándose en características según las hormonas sexuales.'
        };
      case 'zh-cn':
        return {
          buttonText: '什么是 Teto-Egen？',
          title: 'Teto-Egen 性格类型',
          subtitle: '了解韩国性格分类系统',
          content: 'Teto(테토)-Egen(에겐) 性格类型是在韩国流行的约会和性格类型分类方法。Teto 和 Egen 分别是睾酮（男性荷尔蒙）和雌激素（女性荷尔蒙）的缩写，性格类型根据性激素的特征来确定。'
        };
      case 'zh-tw':
        return {
          buttonText: '什麼是 Teto-Egen？',
          title: 'Teto-Egen 性格類型',
          subtitle: '了解韓國性格分類系統',
          content: 'Teto(테토)-Egen(에겐) 性格類型是在韓國流行的約會和性格類型分類方法。Teto 和 Egen 分別是睪酮（男性荷爾蒙）和雌激素（女性荷爾蒙）的縮寫，性格類型根據性激素的特徵來確定。'
        };
      case 'ja':
        return {
          buttonText: 'Teto-Egenとは？',
          title: 'Teto-Egen性格タイプ',
          subtitle: '韓国の性格分類システムについて学ぶ',
          content: 'Teto(테토)-Egen(에겐)性格タイプは、韓国で人気のデートと性格タイプ分類方法です。TetoとEgenはそれぞれテストステロン（男性ホルモン）とエストロゲン（女性ホルモン）の略で、性ホルモンの特徴に基づいて性格タイプが決定されます。'
        };
      default:
        return {
          buttonText: 'What is Teto-Egen?',
          title: 'Teto-Egen Personality Type',
          subtitle: 'Learn about the Korean personality classification system',
          content: 'Teto(테토)-Egen(에겐) personality type is a dating and personality type classification method that is popular in Korea. Teto and Egen are short for testosterone (male hormone) and estrogen (female hormone), and personality types are determined based on characteristics according to sex hormones.'
        };
    }
  };

  const { buttonText, title, subtitle, content } = getLocalizedText();

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