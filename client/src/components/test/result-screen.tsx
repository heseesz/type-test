import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestResult } from "@/lib/test-types";
import { Share2, Home, Sparkles, Brain, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { useLocation } from "wouter";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";
import { ContactUs } from "@/components/contact-us";
import { motion } from "framer-motion";

interface ResultScreenProps {
  result: TestResult;
  tetoScore: number;
  egenScore: number;
  onRestart: () => void;
}

export function ResultScreen({ result, tetoScore, egenScore, onRestart }: ResultScreenProps) {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();

  const handleBackToMain = () => {
    setLocation("/");
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const handleShare = async () => {
    let shareText = '';
    let shareTitle = '';
    
    if (language === 'en') {
      shareTitle = 'Teto-Egen Personality Test Results - TypeTest';
      shareText = `🌟 Teto-Egen Personality Test Results 🌟\n\n`;
      shareText += `My Personality Type:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 My Scores\n`;
      shareText += `• Teto Score: ${tetoScore} points (Emotional)\n`;
      shareText += `• Egen Score: ${egenScore} points (Rational)\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 Find out if you are Teto or Egen!\n`;
      shareText += `👇 Try it now for free!\n`;
      shareText += `🔗 http://type-test.co.kr/teto-egen`;
    } else if (language === 'ja') {
      shareTitle = 'テト-エゲン性格テスト結果 - タイプテスト';
      shareText = `🌟 テト-エゲン性格テスト結果 🌟\n\n`;
      shareText += `私の性格タイプ:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 スコア結果\n`;
      shareText += `• テトスコア: ${tetoScore}点 (感性)\n`;
      shareText += `• エゲンスコア: ${egenScore}点 (理性)\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 あなたはテト（感性）ですか、エゲン（理性）ですか？\n`;
      shareText += `👇 無料でテストを開始\n`;
      shareText += `🔗 http://type-test.co.kr/teto-egen`;
    } else if (language === 'zh-cn') {
      shareTitle = 'Teto-Egen性格测试结果 - TypeTest';
      shareText = `🌟 Teto-Egen性格测试结果 🌟\n\n`;
      shareText += `我的性格类型:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 我的得分\n`;
      shareText += `• Teto得分: ${tetoScore}分 (感性)\n`;
      shareText += `• Egen得分: ${egenScore}分 (理性)\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 你是感性的Teto还是理性的Egen？\n`;
      shareText += `👇 立即免费测试\n`;
      shareText += `🔗 http://type-test.co.kr/teto-egen`;
    } else {
      shareTitle = '테토-에겐 성격 테스트 결과 - 타입테스트';
      shareText = `🌟 테토-에겐 성격 테스트 결과 🌟\n\n`;
      shareText += `나의 성격 유형:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 나의 성향 점수\n`;
      shareText += `• 테토 점수: ${tetoScore}점 (감성형)\n`;
      shareText += `• 에겐 점수: ${egenScore}점 (이성형)\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 당신의 이성과 감성의 비율은 어떻게 될까요?\n`;
      shareText += `👇 지금 무료로 확인해 보세요!\n`;
      shareText += `🔗 http://type-test.co.kr/teto-egen`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: 'http://type-test.co.kr/teto-egen'
        });
      } catch (error) {
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
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto space-y-6 z-10 relative"
    >
      <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
        
        <CardContent className="p-8 space-y-8">
          {/* Result emoji & Title */}
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
          
          {/* Description Block */}
          <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner text-left">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{t('result.personalityTraits')}</h3>
            </div>
            <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-3 break-keep text-sm sm:text-base">
              {result.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Scores Panel */}
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30 shadow-inner">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Brain className="w-5 h-5 text-indigo-500 animate-bounce" />
              <h3 className="text-lg font-extrabold text-zinc-800 dark:text-zinc-200">{t('result.yourScore')}</h3>
            </div>
            <div className="flex justify-center space-x-12">
              <div className="text-center space-y-1">
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{tetoScore}</div>
                <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{t('result.tetoScore')}</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-black text-purple-600 dark:text-purple-400">{egenScore}</div>
                <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{t('result.egenScore')}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 py-6 text-base font-bold rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                {t('result.share')}
              </Button>
            </motion.div>
            
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white py-6 text-base font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
                {t('result.restart')}
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
      
      {/* Footer Links & Copyright */}
      <div className="flex flex-col items-center gap-4 mt-8 pb-4">
        <div className="flex justify-center items-center gap-4 text-sm">
          <AboutUs />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <PrivacyPolicy />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <ContactUs />
        </div>
        <div className="text-center text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
          &copy; 2026 TypeTest. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
}
