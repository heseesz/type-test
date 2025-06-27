import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestResult } from "@/lib/test-types";
import { Share2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";

interface ResultScreenProps {
  result: TestResult;
  tetoScore: number;
  egenScore: number;
  onRestart: () => void;
}

export function ResultScreen({ result, tetoScore, egenScore, onRestart }: ResultScreenProps) {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleShare = async () => {
    const shareText = `${t('result.shareTitle')}\n\n${result.emoji} ${result.title}\n\n${t('result.tetoScore')}: ${tetoScore}${t('result.points')}\n${t('result.egenScore')}: ${egenScore}${t('result.points')}\n\n${t('result.shareText')} ${window.location.origin}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('result.shareTitle'),
          text: shareText
        });
      } catch (error) {
        // User cancelled the share or error occurred
        handleCopyToClipboard(shareText);
      }
    } else {
      handleCopyToClipboard(shareText);
    }
  };

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: t('result.copySuccess'),
        description: t('result.copySuccessDesc'),
      });
    } catch (error) {
      toast({
        title: t('result.copyFail'),
        description: t('result.copyFailDesc'),
        variant: "destructive"
      });
    }
  };
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-gray-200 dark:border-gray-700">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {result.title}
            </h1>
            <div className="w-24 h-1 gradient-teto-egen mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t('result.personalityTraits')}</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
              {result.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t('result.yourScore')}</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-teto dark:text-teto">{tetoScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('result.tetoScore')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-egen dark:text-egen">{egenScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('result.egenScore')}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              onClick={handleShare}
              variant="outline"
              className="w-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Share2 className="w-5 h-5 mr-2" />
              {t('result.share')}
            </Button>
            
            <Button
              onClick={onRestart}
              className="w-full gradient-teto-egen hover:opacity-90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('result.restart')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
