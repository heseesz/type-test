import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { NarcissismResult } from '@/lib/narcissism-types';
import { useToast } from '@/hooks/use-toast';
import { Share2, RotateCcw } from 'lucide-react';

interface NarcissismResultScreenProps {
  result: NarcissismResult;
  grandioseScore: number;
  vulnerableScore: number;
  onRestart: () => void;
}

export function NarcissismResultScreen({ 
  result, 
  grandioseScore, 
  vulnerableScore, 
  onRestart 
}: NarcissismResultScreenProps) {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: t('result.shareTitle'),
      text: result.shareText || t('result.shareText'),
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        toast({
          title: t('result.copySuccess'),
          description: t('result.copySuccessDesc'),
        });
      }
    } catch (error) {
      toast({
        title: t('result.copyFail'),
        description: t('result.copyFailDesc'),
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
        {/* Result Header */}
        <div className="text-center mb-8">
          <div className="text-6xl sm:text-7xl mb-4">{result.emoji}</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {result.title}
          </h1>
          <Badge 
            variant="secondary" 
            className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
          >
            나르시시즘 성향 분석
          </Badge>
        </div>

        {/* Score Display */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t('result.yourScore')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {grandioseScore}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                과대형 점수
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                {vulnerableScore}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                취약형 점수
              </div>
            </div>
          </div>
        </Card>

        {/* Description */}
        <Card className="p-6 mb-6 bg-white dark:bg-gray-800 border-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            특성 설명
          </h2>
          <div className="space-y-3">
            {result.description.map((desc, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </Card>

        {/* Characteristics */}
        <Card className="p-6 mb-6 bg-white dark:bg-gray-800 border-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            주요 특징
          </h2>
          <div className="grid gap-2">
            {result.characteristics.map((characteristic, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{characteristic}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Advice */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            개선 방향
          </h2>
          <div className="grid gap-3">
            {result.advice.map((advice, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{advice}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1 py-3 px-6 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-xl font-medium min-h-[44px] touch-manipulation"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {t('result.share')}
          </Button>
          
          <Button
            onClick={onRestart}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all min-h-[44px] touch-manipulation"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {t('result.restart')}
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            이 테스트는 심리학적 참고 자료로만 사용되며, 전문적인 진단을 대체하지 않습니다.
          </p>
        </div>
      </Card>
    </div>
  );
}