import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AttachmentResult } from '@/lib/attachment-types';
import { Share2, Home } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

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
    }
  };

  const currentLabels = labels[language as keyof typeof labels] || labels.ko;
  
  const handleShare = async () => {
    let shareText = '';
    let shareTitle = '';
    
    if (language === 'en') {
      shareText = `Adult Attachment Style Test Results

${result.emoji} ${result.title}

Avoidance Score: ${avoidanceScore} points
Anxiety Score: ${anxietyScore} points

Take the test yourself! https://type-test.site/attachment-style`;
      shareTitle = 'Adult Attachment Style Test Results';
    } else if (language === 'ja') {
      shareText = `成人愛着タイプテスト結果

${result.emoji} ${result.title}

回避スコア: ${avoidanceScore}点
不安スコア: ${anxietyScore}点

あなたもテストしてみませんか！ https://type-test.site/attachment-style`;
      shareTitle = '成人愛着タイプテスト結果';
    } else {
      shareText = `성인 애착 유형 테스트 결과

${result.emoji} ${result.title}

회피 점수: ${avoidanceScore}점
불안 점수: ${anxietyScore}점

당신도 테스트해보세요! https://type-test.site/attachment-style`;
      shareTitle = '성인 애착 유형 테스트 결과';
    }
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: 'https://type-test.site/attachment-style'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {result.title}
              </h1>
            </div>

            <div className="space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {currentLabels.descriptionTitle}
                </h2>
                <div className="space-y-3">
                  {result.description.map((desc, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {currentLabels.characteristicsTitle}
                </h2>
                <ul className="space-y-2">
                  {result.characteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-pink-500 mr-2">•</span>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advice */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {currentLabels.adviceTitle}
                </h2>
                <ul className="space-y-2">
                  {result.advice.map((advice, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2">✓</span>
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 via-red-50 to-purple-50 dark:from-pink-900/20 dark:via-red-900/20 dark:to-purple-900/20 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{currentLabels.scoreTitle}</h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{avoidanceScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{currentLabels.avoidanceLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{anxietyScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{currentLabels.anxietyLabel}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3 mt-8">
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {currentLabels.shareButton}
              </Button>
              
              <Button
                onClick={onRestart}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-h-[52px] touch-manipulation"
              >
                {currentLabels.restartButton}
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
    </div>
  );
}