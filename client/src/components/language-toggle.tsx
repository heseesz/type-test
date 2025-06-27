import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Globe, Check } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ko', label: '한국어', buttonLabel: 'KR' },
    { code: 'en', label: 'English', buttonLabel: 'EN' },
    { code: 'es', label: 'Español', buttonLabel: 'ES' },
    { code: 'zh-cn', label: '简体中文', buttonLabel: 'CN' },
    { code: 'zh-tw', label: '繁體中文', buttonLabel: 'TW' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 gap-2"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium">{currentLanguage?.buttonLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'ko' | 'en' | 'es' | 'zh-cn' | 'zh-tw')}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{lang.label}</span>
            </div>
            {language === lang.code && <Check className="w-4 h-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}