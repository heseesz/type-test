import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { NarcissismResult } from '@/lib/narcissism-types';
import { useToast } from '@/hooks/use-toast';
import { Share2, Home } from 'lucide-react';
import { useLocation } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';

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
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const labels = {
    ko: {
      descriptionTitle: "특성 설명",
      characteristicsTitle: "주요 특징",
      adviceTitle: "개선 방향",
      scoreTitle: "나르시시즘 성향 점수",
      grandioseScore: "과대형 점수",
      vulnerableScore: "취약형 점수"
    },
    en: {
      descriptionTitle: "Description",
      characteristicsTitle: "Key Characteristics",
      adviceTitle: "Improvement Direction",
      scoreTitle: "Narcissism Tendency Scores",
      grandioseScore: "Grandiose Score",
      vulnerableScore: "Vulnerable Score"
    },
    ja: {
      descriptionTitle: "特性の説明",
      characteristicsTitle: "主な特徴",
      adviceTitle: "改善の方向",
      scoreTitle: "ナルシシズム傾向スコア",
      grandioseScore: "誇大型スコア",
      vulnerableScore: "脆弱型スコア"
    },
    'zh-cn': {
      descriptionTitle: "特征描述",
      characteristicsTitle: "主要特征",
      adviceTitle: "改善方向",
      scoreTitle: "自恋倾向得分",
      grandioseScore: "过大型得分",
      vulnerableScore: "脆弱型得分"
    }
  };

  const currentLabels = labels[language as keyof typeof labels] || labels.ko;

  const handleBackToMain = () => {
    window.location.href = '/';
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const handleShare = async () => {
    let shareText = '';
    let shareTitle = '';
    
    if (language === 'en') {
      shareText = `Narcissism Tendency Test Results

${result.emoji} ${result.title}

Grandiose Narcissism: ${grandioseScore} points
Vulnerable Narcissism: ${vulnerableScore} points

Take the test yourself! https://type-test.site/narcissism`;
      shareTitle = 'Narcissism Tendency Test Results';
    } else if (language === 'ja') {
      shareText = `ナルシシズム傾向テスト結果

${result.emoji} ${result.title}

誇大型ナルシシズム傾向: ${grandioseScore}点
脆弱型ナルシシズム傾向: ${vulnerableScore}点

あなたもテストしてみませんか！ https://type-test.site/narcissism`;
      shareTitle = 'ナルシシズム傾向テスト結果';
    } else if (language === 'zh-cn') {
      shareText = `自恋倾向测试结果

${result.emoji} ${result.title}

过大型自恋倾向: ${grandioseScore}分
脆弱型自恋倾向: ${vulnerableScore}分

您也来测试一下吧！ https://type-test.site/narcissism`;
      shareTitle = '自恋倾向测试结果';
    } else {
      shareText = `나르시시즘 성향 테스트 결과

${result.emoji} ${result.title}

과대형 나르시시즘 성향: ${grandioseScore}점
취약형 나르시시즘 성향: ${vulnerableScore}점

당신도 테스트해보세요! https://type-test.site/narcissism`;
      shareTitle = '나르시시즘 성향 테스트 결과';
    }

    const shareData = {
      title: shareTitle,
      text: shareText,
      url: 'https://type-test.site/narcissism'
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareText);
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
    <div className="w-full max-w-2xl mx-auto text-center">
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-gray-200 dark:border-gray-700">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {result.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{currentLabels.descriptionTitle}</h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
              {result.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{currentLabels.characteristicsTitle}</h3>
            <div className="space-y-2">
              {result.characteristics.map((characteristic, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{characteristic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Improvement Direction */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 rounded-xl p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{currentLabels.adviceTitle}</h3>
            <div className="space-y-3">
              {result.advice.map((advice, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{advice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{currentLabels.scoreTitle}</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{grandioseScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{currentLabels.grandioseScore}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{vulnerableScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{currentLabels.vulnerableScore}</div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              이 테스트는 심리학적 참고 자료로만 사용되며, 전문적인 진단을 대체하지 않습니다.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              onClick={handleShare}
              variant="outline"
              className="w-full bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation"
            >
              <Share2 className="w-5 h-5 mr-2" />
              결과 공유하기
            </Button>
            
            <Button
              onClick={handleRestart}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-h-[52px] touch-manipulation"
            >
              다시 테스트하기
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Back to Main Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleBackToMain}
          variant="outline"
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-xs sm:text-sm min-h-[40px] touch-manipulation"
        >
          <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          {t('test.backToMain')}
        </Button>
      </div>
      
      {/* Footer Links */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <AboutUs />
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <PrivacyPolicy />
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <ContactUs />
      </div>
    </div>
  );
}