import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Home, Heart, Info, CheckCircle2, Clock, Brain } from 'lucide-react';
import { Link } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { motion } from 'framer-motion';
import { SeoDescriptionDialog } from '@/components/seo-description-dialog';

interface NarcissismWelcomeScreenProps {
  onStart: () => void;
}

export function NarcissismWelcomeScreen({ onStart }: NarcissismWelcomeScreenProps) {
  const { t, language } = useLanguage();

  const content = {
    ko: {
      title: "나르시시즘 성향 테스트",
      subtitle: "나의 나르시시즘 성향을 알아보세요!",
      guideTitle: "테스트 안내",
      questions: "총 20개의 질문으로 구성되어 있습니다.",
      instruction: "각 질문에 대해 자신의 생각과 가장 가까운 답을 선택해주세요.",
      honest: "정답이 없으니 솔직하게 답변해주세요.",
      results: "테스트 결과는 건강, 과대형 나르시시즘, 취약형 나르시시즘, 혼합형 나르시시즘 중 하나로 나타납니다.",
      duration: "테스트 소요 시간: 약 5-8분",
      startButton: "테스트 시작하기",
      homeButton: "타입테스트 홈으로 돌아가기"
    },
    en: {
      title: "Narcissism Tendency Test",
      subtitle: "Discover your narcissistic tendencies!",
      guideTitle: "Test Instructions",
      questions: "This test consists of 20 questions.",
      instruction: "For each question, select the answer that best reflects your thoughts.",
      honest: "There are no right or wrong answers, so please respond honestly.",
      results: "Your result will be one of four types: Healthy, Grandiose, Vulnerable, or Mixed.",
      duration: "Estimated time: 5-8 minutes",
      startButton: "Start Test",
      homeButton: "Back to TypeTest Home"
    },
    ja: {
      title: "ナルシシズム傾向テスト",
      subtitle: "あなたのナルシシズム傾向を発見しましょう！",
      guideTitle: "テストの説明",
      questions: "このテストは20 ofの質問で構成されています。",
      instruction: "各質問について、あなたの考えに最も近い答えを選択してください。",
      honest: "正解や不正解はありませんので、正直にお答えください。",
      results: "結果は4つのタイプのうちの1つになります：健康型、誇大型、脆弱型、混合型。",
      duration: "所要時間：約5-8分",
      startButton: "テストを開始",
      homeButton: "TypeTestホームに戻る"
    },
    'zh-cn': {
      title: "自恋倾向测试",
      subtitle: "发现您的自恋倾向！",
      guideTitle: "测试说明",
      questions: "本测试共有20个问题。",
      instruction: "对于每个问题，请选择最符合您想法的答案。",
      honest: "没有对错之分，请诚实回答。",
      results: "结果将是四种类型之一：健康型、过大型、脆弱型或混合型。",
      duration: "预计用时：5-8分钟",
      startButton: "开始测试",
      homeButton: "返回TypeTest首页"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ko;

  return (
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
          🧠
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 leading-tight mb-4 break-keep">
          {currentContent.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-base leading-relaxed break-keep mb-6">
          {currentContent.subtitle}
        </p>
        <div className="flex justify-center">
          <SeoDescriptionDialog
            title={currentContent.title}
            descriptionKey="seo.narcissism.desc"
            buttonVariant="outline"
            buttonClassName="bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/60 dark:hover:bg-zinc-800/60"
          />
        </div>
      </div>

      <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-sm font-bold border border-purple-200 dark:border-purple-900/60 shadow-inner">
              <Brain className="w-4 h-4 fill-current animate-pulse" />
              <span>{currentContent.guideTitle}</span>
            </div>

            <div className="text-zinc-600 dark:text-zinc-300 space-y-4 text-left bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 shadow-inner">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed break-keep">{currentContent.questions}</span>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed break-keep">{currentContent.instruction}</span>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
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
                className="w-full py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white rounded-xl font-bold shadow-lg shadow-purple-500/20"
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