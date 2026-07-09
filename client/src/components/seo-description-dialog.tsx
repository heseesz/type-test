import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface SeoDescriptionDialogProps {
  title: string;
  descriptionKey: string;
  buttonVariant?: "outline" | "ghost" | "link" | "default";
  buttonClassName?: string;
}

export function SeoDescriptionDialog({
  title,
  descriptionKey,
  buttonVariant = "outline",
  buttonClassName = "",
}: SeoDescriptionDialogProps) {
  const { t } = useLanguage();
  const rawText = t(descriptionKey);
  const paragraphs = rawText.split("\n\n").filter(Boolean);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size="sm"
          className={`gap-2 rounded-xl text-xs md:text-sm font-semibold shadow-sm transition-all duration-300 ${buttonClassName}`}
        >
          <Info className="w-4 h-4 shrink-0" />
          <span>{t("seo.viewDetails")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md md:max-w-lg bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 shadow-2xl">
        <DialogHeader className="pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <DialogTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <span>ℹ️</span> {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-1 space-y-4">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed break-keep text-left"
            >
              {para}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
