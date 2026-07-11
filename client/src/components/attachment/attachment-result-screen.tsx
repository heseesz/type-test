import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AttachmentResult } from '@/lib/attachment-types';
import { Share2, Home, CheckCircle2, Heart, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

interface AttachmentResultScreenProps {
  result: AttachmentResult;
  avoidanceScore: number;
  anxietyScore: number;
  onRestart: () => void;
}

export function AttachmentResultScreen({ 
  result, 
  avoidanceScore, 
  anxietyScore, 
  onRestart 
}: AttachmentResultScreenProps) {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  const labels = {
    ko: {
      descriptionTitle: "애착 유형 설명",
      characteristicsTitle: "주요 특성",
      adviceTitle: "관계 개선 조언",
      scoreTitle: "당신의 점수",
      avoidanceLabel: "회피 점수",
      anxietyLabel: "불안 점수",
      shareButton: "결과 공유하기",
      restartButton: "다시 테스트하기",
      homeButton: "타입테스트 홈으로 돌아가기"
    },
    en: {
      descriptionTitle: "Attachment Style Description",
      characteristicsTitle: "Key Characteristics",
      adviceTitle: "Relationship Improvement Advice",
      scoreTitle: "Your Scores",
      avoidanceLabel: "Avoidance Score",
      anxietyLabel: "Anxiety Score",
      shareButton: "Share Results",
      restartButton: "Take Test Again",
      homeButton: "Back to TypeTest Home"
    },
    ja: {
      descriptionTitle: "愛着スタイルの説明",
      characteristicsTitle: "主な特徴",
      adviceTitle: "関係改善のアドバイス",
      scoreTitle: "あなたのスコア",
      avoidanceLabel: "回避スコア",
      anxietyLabel: "不安スコア",
      shareButton: "結果を共有",
      restartButton: "再度テストする",
      homeButton: "TypeTestホームに戻る"
    },
    es: {
      descriptionTitle: "Descripción del Estilo de Apego",
      characteristicsTitle: "Características Principales",
      adviceTitle: "Consejos para Mejorar las Relaciones",
      scoreTitle: "Tus Puntuaciones",
      avoidanceLabel: "Puntuación de Evitación",
      anxietyLabel: "Puntuación de Ansiedad",
      shareButton: "Compartir Resultados",
      restartButton: "Realizar Test Nuevamente",
      homeButton: "Volver al Inicio de TypeTest"
    },
    'zh-cn': {
      descriptionTitle: "依恋风格描述",
      characteristicsTitle: "主要特征",
      adviceTitle: "关系改善建议",
      scoreTitle: "您的得分",
      avoidanceLabel: "回避得分",
      anxietyLabel: "焦虑得分",
      shareButton: "分享结果",
      restartButton: "重新测试",
      homeButton: "返回TypeTest首页"
    }
  };

  const currentLabels = labels[language as keyof typeof labels] || labels.ko;
  
  const handleShare = async () => {
    let shareText = '';
    let shareTitle = '';
    
    if (language === 'en') {
      shareTitle = 'Adult Attachment Style Test Results - TypeTest';
      shareText = `🌟 Adult Attachment Style Test Results 🌟\n\n`;
      shareText += `My Attachment Type:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 My Scores\n`;
      shareText += `• Avoidance Score: ${avoidanceScore} points\n`;
      shareText += `• Anxiety Score: ${anxietyScore} points\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 Discover your true attachment type!\n`;
      shareText += `👇 Try it now for free!\n`;
      shareText += `🔗 http://type-test.co.kr/attachment-style`;
    } else if (language === 'ja') {
      shareTitle = '成人愛着タイプテスト結果 - タイプテスト';
      shareText = `🌟 成人愛着タイプテスト結果 🌟\n\n`;
      shareText += `私の愛着タイプ:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 スコア結果\n`;
      shareText += `• 回避スコア: ${avoidanceScore}点\n`;
      shareText += `• 不安スコア: ${anxietyScore}点\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 あなたの愛着タイプを診断してみましょう！\n`;
      shareText += `👇 無料でテストを開始\n`;
      shareText += `🔗 http://type-test.co.kr/attachment-style`;
    } else if (language === 'zh-cn') {
      shareTitle = '成人依恋风格测试结果 - TypeTest';
      shareText = `🌟 成人依恋风格测试结果 🌟\n\n`;
      shareText += `我的依恋风格:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 我的得分\n`;
      shareText += `• 回避得分: ${avoidanceScore}分\n`;
      shareText += `• 焦虑得分: ${anxietyScore}分\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 了解你的依恋类型！\n`;
      shareText += `👇 立即免费测试\n`;
      shareText += `🔗 http://type-test.co.kr/attachment-style`;
    } else {
      shareTitle = '성인 애착 유형 테스트 결과 - 타입테스트';
      shareText = `🌟 성인 애착 유형 테스트 결과 🌟\n\n`;
      shareText += `나의 애착 유형:\n👉 [${result.emoji} ${result.title}]\n\n`;
      shareText += `📊 나의 성향 점수\n`;
      shareText += `• 회피 점수: ${avoidanceScore}점\n`;
      shareText += `• 불안 점수: ${anxietyScore}점\n\n`;
      shareText += `──────────────────\n`;
      shareText += `🔎 나의 숨겨진 진짜 애착 유형이 궁금하다면?\n`;
      shareText += `👇 지금 무료로 분석해 보세요!\n`;
      shareText += `🔗 http://type-test.co.kr/attachment-style`;
    }
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: 'http://type-test.co.kr/attachment-style'
        });
      } catch (err) {
        console.log('공유 취소됨');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('결과가 클립보드에 복사되었습니다!');
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    }
  };

  const handleBackToMain = () => {
    setLocation("/");
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/10 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto space-y-6 z-10 relative"
      >
        <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500" />
          
          <CardContent className="p-8 space-y-8">
            {/* Header / Main Result Emoji & Title */}
            <div className="text-center space-y-3 pt-4">
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
              <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                    {currentLabels.descriptionTitle}
                  </h2>
                </div>
                <div className="space-y-3">
                  {result.description.map((desc, index) => (
                    <p key={index} className="text-zinc-600 dark:text-zinc-300 leading-relaxed break-keep text-sm sm:text-base">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                    {currentLabels.characteristicsTitle}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {result.characteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-start text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
                      <span className="text-pink-500 mr-2 shrink-0 mt-1">•</span>
                      <span>{characteristic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advice */}
              <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                    {currentLabels.adviceTitle}
                  </h2>
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

            {/* Score Grid Panel */}
            <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-purple-950/20 rounded-2xl p-6 border border-pink-100 dark:border-pink-900/30 shadow-inner">
              <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                <AlertCircle className="w-5 h-5 text-purple-500 animate-bounce" />
                <h3 className="text-lg font-extrabold text-zinc-800 dark:text-zinc-200">{currentLabels.scoreTitle}</h3>
              </div>
              <div className="flex justify-center space-x-12">
                <div className="text-center space-y-1">
                  <div className="text-3xl font-black text-pink-600 dark:text-pink-400">{avoidanceScore}</div>
                  <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{currentLabels.avoidanceLabel}</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-3xl font-black text-red-600 dark:text-red-400">{anxietyScore}</div>
                  <div className="text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">{currentLabels.anxietyLabel}</div>
                </div>
              </div>
            </div>

            {/* Result action Buttons */}
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
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white py-6 text-base font-bold rounded-xl shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2"
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
    </div>
  );
}