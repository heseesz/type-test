import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { NarcissismResult } from '@/lib/narcissism-types';
import { useToast } from '@/hooks/use-toast';
import { Share2, Home, CheckCircle2, Sparkles, Brain, AlertCircle, Heart, RefreshCw } from 'lucide-react';
import { useLocation } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { motion } from 'framer-motion';

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
      vulnerableScore: "취약형 점수",
      disclaimer: "이 테스트는 심리학적 참고 자료로만 사용되며, 전문적인 진단을 대체하지 않습니다.",
      shareButton: "결과 공유하기",
      restartButton: "다시 테스트하기"
    },
    en: {
      descriptionTitle: "Description",
      characteristicsTitle: "Key Characteristics",
      adviceTitle: "Improvement Direction",
      scoreTitle: "Narcissism Tendency Scores",
      grandioseScore: "Grandiose Score",
      vulnerableScore: "Vulnerable Score",
      disclaimer: "This test is for psychological reference only and does not replace professional diagnosis.",
      shareButton: "Share Results",
      restartButton: "Take Test Again"
    },
    ja: {
      descriptionTitle: "特性の説明",
      characteristicsTitle: "主な特徴",
      adviceTitle: "改善の方向",
      scoreTitle: "ナルシシズム傾向スコア",
      grandioseScore: "誇大型スコア",
      vulnerableScore: "脆弱型スコア",
      disclaimer: "このテストは心理学的参考資料としてのみ使用され、専門的な診断に代わるものではありません。",
      shareButton: "結果を共有",
      restartButton: "再度テストする"
    },
    'zh-cn': {
      descriptionTitle: "特征描述",
      characteristicsTitle: "主要特征",
      adviceTitle: "改善方向",
      scoreTitle: "自恋倾向得分",
      grandioseScore: "过大型得分",
      vulnerableScore: "脆弱型得分",
      disclaimer: "此测试仅供心理学参考，不能替代专业诊断。",
      shareButton: "分享结果",
      restartButton: "重新测试"
    }
  };

  const currentLabels = labels[language as keyof typeof labels] || labels.ko;

  const handleBackToMain = () => {
    setLocation('/');
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const handleShare = async () => {
    let shareText = '';
    let shareTitle = '';
    
    if (language === 'en') {
      shareText = `Narcissism Tendency Test Results\n\n${result.emoji} ${result.title}\n\nGrandiose Narcissism: ${grandioseScore} points\nVulnerable Narcissism: ${vulnerableScore} points\n\nTake the test yourself! https://type-test.site/narcissism`;
      shareTitle = 'Narcissism Tendency Test Results';
    } else if (language === 'ja') {
      shareText = `ナルシシズム傾向テスト結果\n\n${result.emoji} ${result.title}\n\n誇大型ナルシシズム傾向: ${grandioseScore}点\n脆弱型ナルシシズム傾向: ${vulnerableScore}点\n\nあなた도テストしてみませんか！ https://type-test.site/narcissism`;
      shareTitle = 'ナルシシズム傾向テスト結果';
    } else if (language === 'zh-cn') {
      shareText = `自恋倾向测试结果\n\n${result.emoji} ${result.title}\n\n过大型自恋倾向: ${grandioseScore}分\n脆弱型自恋倾向: ${vulnerableScore}分\n\n您也来测试一下吧！ https://type-test.site/narcissism`;
      shareTitle = '自恋倾向测试结果';
    } else {
      shareText = `나르시시즘 성향 테스트 결과\n\n${result.emoji} ${result.title}\n\n과대형 나르시시즘 성향: ${grandioseScore}점\n취약형 나르시시즘 성향: ${vulnerableScore}점\n\n당신도 테스트해보세요! https://type-test.site/narcissism`;
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
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto space-y-6 z-10 relative"
    >
      <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        
        <CardContent className="p-8 space-y-8">
          {/* Main header result emoji & title */}
          <div className="space-y-3 pt-4">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-6xl mb-4 inline-block filter drop-shadow-md"
            >
              {result.emoji}
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 leading-tight break-keep">
              {result.title}
            </h1>
          </div>
          
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner text-left">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{currentLabels.descriptionTitle}</h3>
              </div>
              <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-3 break-keep text-sm sm:text-base">
                {result.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>

            {/* Key Characteristics */}
            <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner text-left">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{currentLabels.characteristicsTitle}</h3>
              </div>
              <ul className="space-y-3">
                {result.characteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-start text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
                    <span className="text-purple-500 mr-2 shrink-0 mt-1">•</span>
                    <span>{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvement Direction */}
            <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner text-left">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{currentLabels.adviceTitle}</h3>
              </div>
              <ul className="space-y-3">
                {result.advice.map((advice, index) => (
                  <li key={index} className="flex items-start text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
                    <span className="text-green-500 mr-2 shrink-0 mt-1">✓</span>
                    <span>{advice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scores Panel */}
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-900/30 shadow-inner">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Brain className="w-5 h-5 text-purple-500 animate-bounce" />
              <h3 className="text-lg font-extrabold text-zinc-800 dark:text-zinc-200">{currentLabels.scoreTitle}</h3>
            </div>
            <div className="flex justify-center space-x-12">
              <div className="text-center space-y-1">
                <div className="text-3xl font-black text-purple-600 dark:text-purple-400">{grandioseScore}</div>
                <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{currentLabels.grandioseScore}</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-black text-pink-600 dark:text-pink-400">{vulnerableScore}</div>
                <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{currentLabels.vulnerableScore}</div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center bg-zinc-50/50 dark:bg-zinc-800/20 p-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed break-keep">
              {currentLabels.disclaimer}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full bg-white dark:bg-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 py-6 text-base font-bold rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                {currentLabels.shareButton}
              </Button>
            </motion.div>
            
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-6 text-base font-bold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
                {currentLabels.restartButton}
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
      
      {/* Back to Main Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleBackToMain}
          variant="outline"
          className="px-6 py-5 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2"
        >
          <Home className="w-4.5 h-4.5" />
          {t('test.backToMain')}
        </Button>
      </div>
      
      {/* Footer Links */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm">
        <AboutUs />
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <PrivacyPolicy />
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <ContactUs />
      </div>
    </motion.div>
  );
}