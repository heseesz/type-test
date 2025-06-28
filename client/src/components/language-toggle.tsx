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
    { code: 'ko', label: '한국어', buttonLabel: '한국어' },
    { code: 'en', label: 'English', buttonLabel: 'English' },
    { code: 'es', label: 'Español', buttonLabel: 'Español' },
    { code: 'zh-cn', label: '中文 (简体)', buttonLabel: '中文 (简体)' },
    { code: 'zh-tw', label: '中文 (繁體)', buttonLabel: '中文 (繁體)' },
    { code: 'ja', label: '日本語', buttonLabel: '日本語' },
    { code: 'vi', label: 'Tiếng Việt', buttonLabel: 'Tiếng Việt' }
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
            onClick={() => setLanguage(lang.code as 'ko' | 'en' | 'es' | 'zh-cn' | 'zh-tw' | 'ja' | 'vi')}
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