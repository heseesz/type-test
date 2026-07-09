import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Home, Heart, Info, CheckCircle2, Clock } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { motion } from 'framer-motion';

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
      results: "테스트 결과는 안정형, 불안-집착형, 회피-거부형, 회피-공포형 중 하나로 나타납니다.",
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
    },
    'zh-cn': {
      title: "成人依恋风格测试",
      subtitle: "发现您的依恋风格！",
      guideTitle: "测试说明",
      questions: "本测试共有36个问题。",
      instruction: "对于每个问题，请选择最符合您想法的答案。",
      honest: "没有对错之分，请诚实回答。",
      results: "结果将是四种类型之一：安全型、焦虑型、回避型或恐惧回避型。",
      duration: "预计用时：8-12分钟",
      startButton: "开始测试",
      homeButton: "返回TypeTest首页"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ko;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/10 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto z-10 relative"
      >
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-6xl mb-6 inline-block filter drop-shadow-md"
          >
            💝
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 leading-tight mb-4 break-keep">
            {currentContent.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-base leading-relaxed break-keep">
            {currentContent.subtitle}
          </p>
          <div className="mt-6 p-4 md:p-5 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 text-left">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed break-keep">
              {t('seo.attachment.desc')}
            </p>
          </div>
        </div>

        <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 text-sm font-bold border border-pink-200 dark:border-pink-900/60 shadow-inner">
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span>{currentContent.guideTitle}</span>
              </div>

              <div className="text-zinc-600 dark:text-zinc-300 space-y-4 text-left bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed break-keep">{currentContent.questions}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed break-keep">{currentContent.instruction}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed break-keep">{currentContent.honest}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed break-keep">{currentContent.results}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed break-keep">{currentContent.duration}</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={onStart}
                  className="w-full py-6 text-lg bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20"
                >
                  {currentContent.startButton}
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        
        {/* Back to Main Button */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button
              variant="outline"
              className="px-6 py-5 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Home className="w-4.5 h-4.5" />
              {t('test.backToMain')}
            </Button>
          </Link>
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