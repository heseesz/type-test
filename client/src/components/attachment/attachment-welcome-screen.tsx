import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Home } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';

interface AttachmentWelcomeScreenProps {
  onStart: () => void;
}

export function AttachmentWelcomeScreen({ onStart }: AttachmentWelcomeScreenProps) {
  const { language, t } = useLanguage();

  const content = {
    ko: {
      title: "성인 애착 유형 테스트",
      subtitle: "나의 애착 유형을 알아보세요!",
      guideTitle: "테스트 안내",
      questions: "총 36개의 질문으로 구성되어 있습니다.",
      instruction: "각 질문에 대해 자신의 생각과 가장 가까운 답을 선택해주세요.",
      honest: "정답이 없으니 솔직하게 답변해주세요.",
      results: "테스트 결과는 안정형, 불안형, 회피형, 두려움-회피형 중 하나로 나타납니다.",
      duration: "테스트 소요 시간: 약 8-12분",
      startButton: "테스트 시작하기",
      homeButton: "타입테스트 홈으로 돌아가기"
    },
    en: {
      title: "Adult Attachment Style Test",
      subtitle: "Discover your attachment style!",
      guideTitle: "Test Instructions",
      questions: "This test consists of 36 questions.",
      instruction: "For each question, select the answer that best reflects your thoughts.",
      honest: "There are no right or wrong answers, so please respond honestly.",
      results: "Your result will be one of four types: Secure, Anxious, Avoidant, or Fearful-Avoidant.",
      duration: "Estimated time: 8-12 minutes",
      startButton: "Start Test",
      homeButton: "Back to TypeTest Home"
    },
    ja: {
      title: "成人愛着スタイルテスト",
      subtitle: "あなたの愛着スタイルを発見しましょう！",
      guideTitle: "テストの説明",
      questions: "このテストは36の質問で構成されています。",
      instruction: "各質問について、あなたの考えに最も近い答えを選択してください。",
      honest: "正解や不正解はありませんので、正直にお答えください。",
      results: "結果は4つのタイプのうちの1つになります：安定型、不安型、回避型、恐れ回避型。",
      duration: "所要時間：約8-12分",
      startButton: "テスト開始",
      homeButton: "TypeTestホームに戻る"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ko;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">💝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
        </div>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {currentContent.guideTitle}
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3 text-left">
                <p>• <strong>{currentContent.questions}</strong></p>
                <p>• {currentContent.instruction}</p>
                <p>• {currentContent.honest}</p>
                <p>• {currentContent.results}</p>
                <p>• {currentContent.duration}</p>
              </div>

              <Button 
                onClick={onStart}
                className="w-full py-3 text-lg bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-lg font-medium"
              >
                {currentContent.startButton}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Back to Main Button */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button
              variant="outline"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-xs sm:text-sm"
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {t('test.backToMain')}
            </Button>
          </Link>
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