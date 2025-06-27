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

  // Only show for English users
  if (language === 'ko') {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 gap-2 px-3"
        >
          <Info className="w-4 h-4" />
          <span className="text-sm">What is Teto-Egen?</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Teto-Egen Personality Type</DialogTitle>
          <DialogDescription>
            Learn about the Korean personality classification system
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Teto-Egen personality type is a dating and personality type classification method that is popular in Korea. 
            Teto and Egen are short for testosterone (male hormone) and estrogen (female hormone), and personality 
            types are determined based on characteristics according to sex hormones.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}