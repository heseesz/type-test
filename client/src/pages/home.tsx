import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";
import { ContactUs } from "@/components/contact-us";
import { motion } from "framer-motion";
import { Sparkles, Heart, Brain, Flame } from "lucide-react";
import { SeoDescriptionDialog } from "@/components/seo-description-dialog";

export default function Home() {
  const { t, language } = useLanguage();

  // Set meta tags for home page
  const description = language === 'en' ? 'Discover your true personality with free psychology tests. Attachment style, narcissism tendency, and Teto-Egen personality tests based on scientific analysis.' :
                      language === 'ja' ? '無料の心理テストであなたの本当の性格を発見しましょう。愛着スタイル、ナルシシズム傾向、テト-エゲン性格テストなど、科学적根拠に基づく心理分析を無料で体験できます。' :
                      language === 'zh-cn' ? '通过免费心理测试发现你的真实性格。依恋类型、自恋倾向、Teto-Egen性格测试等，基于科学的心理分析免费体验。' :
                      '무료 심리 테스트로 나의 진짜 성격을 발견하세요. 애착 유형, 나르시시즘, 테토에겐, 밸런스 게임 등 과학적인 심리 분석을 제공합니다.';

  const metaConfig = {
    title: language === 'ko' ? '타입테스트' : 'TypeTest',
    description,
    canonical: 'https://type-test.co.kr/',
    keywords: language === 'en' ? 'free personality test, psychology test, attachment style test, narcissism test, MBTI alternative, personality analysis, psychological assessment, free mental health test' :
              language === 'ja' ? '無料性格テスト、心理テスト、愛着スタイルテスト、ナルシシズムテスト、MBTI代替、性格分析、心理的評価、無料メンタルヘルステスト' :
              language === 'zh-cn' ? '免费性格测试, 心理测试, 依恋风格测试, 自恋测试, MBTI替代, 性格分析, 心理评估, 免费心理健康测试' :
              '무료 성격테스트, 심리테스트, 애착유형 테스트, 나르시시즘 테스트, MBTI 대안, 성격분석, 심리 평가, 무료 정신건강 테스트',
    ogImage: 'https://type-test.co.kr/og-image-v2.jpg',
    type: 'website' as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": language === 'ko' ? '타입테스트' : 'TypeTest',
      "url": "https://type-test.co.kr",
      "description": description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://type-test.co.kr/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  };
  
  useMetaTags(metaConfig);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/10 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto z-10 relative"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-4"
          >
            {t('site.title')}
          </motion.h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed break-keep mb-6">
            {t('site.subtitle')}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <SeoDescriptionDialog
              title={t('site.title')}
              descriptionKey="seo.home.intro"
              buttonVariant="outline"
              buttonClassName="bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white/60 dark:hover:bg-zinc-800/60"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1: Teto-Egen */}
          <motion.div whileHover={{ scale: 1.025, y: -4 }} whileTap={{ scale: 0.985 }} className="flex">
            <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col w-full overflow-hidden">
              <CardHeader className="text-center pb-4 relative">
                <div className="text-4xl mb-3 mt-2 flex items-center justify-center gap-1.5 filter drop-shadow">
                  <span>🔥</span><span>✨</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-100 whitespace-pre-line break-keep">
                  {t('tests.tetoEgen.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-5 flex-1 flex flex-col justify-between p-6 pt-0">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line break-keep font-medium">
                  {t('tests.tetoEgen.description')}
                </p>
                <Link href="/teto-egen">
                  <Button className="w-full py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white rounded-xl font-bold shadow-md shadow-purple-500/10">
                    {t('tests.tetoEgen.start')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Attachment Style */}
          <motion.div whileHover={{ scale: 1.025, y: -4 }} whileTap={{ scale: 0.985 }} className="flex">
            <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col w-full overflow-hidden">
              <CardHeader className="text-center pb-4 relative">
                <div className="text-4xl mb-3 mt-2 flex items-center justify-center gap-1.5 filter drop-shadow">
                  <span>💝</span><span>🔗</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-100 whitespace-pre-line break-keep">
                  {t('tests.attachmentStyle.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-5 flex-1 flex flex-col justify-between p-6 pt-0">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line break-keep font-medium">
                  {t('tests.attachmentStyle.description')}
                </p>
                <Link href="/attachment-style">
                  <Button className="w-full py-6 bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white rounded-xl font-bold shadow-md shadow-pink-500/10">
                    {t('tests.attachmentStyle.start')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Narcissism */}
          <motion.div whileHover={{ scale: 1.025, y: -4 }} whileTap={{ scale: 0.985 }} className="flex">
            <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col w-full overflow-hidden">
              <CardHeader className="text-center pb-4 relative">
                <div className="text-4xl mb-3 mt-2 flex items-center justify-center gap-1.5 filter drop-shadow">
                  <span>🧠</span><span>👑</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-100 whitespace-pre-line break-keep">
                  {t('tests.narcissism.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-5 flex-1 flex flex-col justify-between p-6 pt-0">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line break-keep font-medium">
                  {t('tests.narcissism.description')}
                </p>
                <Link href="/narcissism">
                  <Button className="w-full py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white rounded-xl font-bold shadow-md shadow-purple-500/10">
                    {t('tests.narcissism.start')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Balance Game */}
          <motion.div whileHover={{ scale: 1.025, y: -4 }} whileTap={{ scale: 0.985 }} className="flex">
            <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col w-full overflow-hidden">
              <CardHeader className="text-center pb-4 relative">
                <div className="text-4xl mb-3 mt-2 flex items-center justify-center gap-1.5 filter drop-shadow">
                  <span>🔞</span><span>🌶️</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-100 whitespace-pre-line break-keep">
                  {t('tests.balanceGame.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-5 flex-1 flex flex-col justify-between p-6 pt-0">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line break-keep font-medium">
                  {t('tests.balanceGame.description')}
                </p>
                <Link href="/balance-game">
                  <Button className="w-full py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:opacity-90 text-white rounded-xl font-bold shadow-md shadow-pink-500/10">
                    {t('tests.balanceGame.start')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 5: Snowball Simulator */}
          {language === 'ko' && (
            <motion.div whileHover={{ scale: 1.025, y: -4 }} whileTap={{ scale: 0.985 }} className="md:col-span-2 flex">
              <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col md:flex-row w-full overflow-hidden">
                <CardHeader className="text-center md:text-left pb-4 md:pb-6 relative md:w-1/3 flex flex-col justify-center items-center md:items-start p-6">
                  <div className="text-4xl mb-3 mt-2 flex items-center justify-center gap-1.5 filter drop-shadow">
                    <span>💰</span><span>❄️</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-zinc-800 dark:text-zinc-100 break-keep">
                    {t('tests.snowball.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center md:text-left space-y-5 flex-1 flex flex-col justify-between p-6 md:p-6 md:pl-0 md:w-2/3">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed min-h-[3rem] flex items-center md:justify-start justify-center break-keep font-medium">
                    {t('tests.snowball.description')}
                  </p>
                  <Link href="/snowball">
                    <Button className="w-full py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white rounded-xl font-bold shadow-md shadow-indigo-500/10">
                      {t('tests.snowball.start')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Footer Links & Copyright */}
        <div className="flex flex-col items-center gap-4 mt-12 pb-8">
          <div className="flex justify-center items-center gap-4 text-sm">
            <AboutUs />
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <PrivacyPolicy />
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <ContactUs />
          </div>
          <div className="text-center text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            &copy; 2026 TypeTest. All rights reserved.
          </div>
        </div>
      </motion.div>
    </div>
  );
}