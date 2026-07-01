import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";
import { ContactUs } from "@/components/contact-us";

export default function Home() {
  const { t, language } = useLanguage();

  // Set meta tags for home page
  const description = language === 'en' ? 'Discover your true personality with free psychology tests. Attachment style, narcissism tendency, and Teto-Egen personality tests based on scientific analysis.' :
                     language === 'ja' ? '無料の心理テストであなたの本当の性格を発見しましょう。愛着スタイル、ナルシシズム傾向、テト-エゲン性格テストなど、科学的根拠に基づく心理分析を無料で体験できます。' :
                     language === 'zh-cn' ? '通过免费心理测试发现你的真实性格。依恋类型、自恋倾向、Teto-Egen性格测试等，基于科学的心理分析免费体验。' :
                     '무료 심리 테스트로 당신의 진짜 성격을 발견하세요. 애착 유형, 나르시시즘 성향, 테토-에겐 성격 테스트 등 과학적 기반 심리 분석을 무료로 체험하세요.';

  const metaConfig = {
    title: language === 'en' ? 'TypeTest - Personality Psychology Tests' : 
           language === 'ja' ? 'タイプテスト - 性格心理テスト' : 
           language === 'zh-cn' ? 'TypeTest - 性格心理测试' :
           '타입테스트 - 성격 심리 테스트',
    description,
    canonical: 'https://type-test.site/',
    keywords: language === 'en' ? 'free personality test, psychology test, attachment style test, narcissism test, MBTI alternative, personality analysis, psychological assessment, free mental health test' :
              language === 'ja' ? '無料性格テスト、心理テスト、愛着スタイルテスト、ナルシシズムテスト、MBTI代替、性格分析、心理的評価、無料メンタルヘルステスト' :
              language === 'zh-cn' ? '免费性格测试, 心理测试, 依恋风格测试, 自恋测试, MBTI替代, 性格分析, 心理评估, 免费心理健康测试' :
              '무료 성격테스트, 심리테스트, 애착유형 테스트, 나르시시즘 테스트, MBTI 대안, 성격분석, 심리 평가, 무료 정신건강 테스트',
    ogImage: 'https://type-test.site/favicon.svg',
    type: 'website' as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": language === 'en' ? 'TypeTest - Free Personality Tests' : 
             language === 'ja' ? 'タイプテスト - 無料性格テスト' : 
             language === 'zh-cn' ? 'TypeTest - 免费性格测试' :
             '타입테스트 - 무료 성격 테스트',
      "url": "https://type-test.site",
      "description": description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://type-test.site/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  };
  
  useMetaTags(metaConfig);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('site.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('site.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🔥✨</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.tetoEgen.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.tetoEgen.description')}
              </p>
              <a href="/teto-egen">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  {t('tests.tetoEgen.start')}
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">💝🔗</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.attachmentStyle.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.attachmentStyle.description')}
              </p>
              <a href="/attachment-style">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                  {t('tests.attachmentStyle.start')}
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🧠👑</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.narcissism.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.narcissism.description')}
              </p>
              <a href="/narcissism">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                  {t('tests.narcissism.start')}
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🔞🌶️</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.balanceGame.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.balanceGame.description')}
              </p>
              <a href="/balance-game">
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:opacity-90 text-white font-bold">
                  {t('tests.balanceGame.start')}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        

        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 mt-12">
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