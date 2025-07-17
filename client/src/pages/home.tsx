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
  const metaConfig = {
    title: language === 'en' ? 'TypeTest - Personality Psychology Tests' : 
           language === 'ja' ? 'タイプテスト - 性格心理テスト' : 
           '타입테스트 - 성격 심리 분석 테스트',
    description: language === 'en' ? 'Discover your true self with various personality tests. We offer attachment styles, narcissism tests, Teto-Egen personality tests, and more psychological assessments.' :
                language === 'ja' ? '様々な性格テストで本当の自分を発見しましょう。愛着スタイル、ナルシシズムテスト、テト-エゲン性格テストなど、多様な心理テストを提供しています。' :
                '다양한 성격 테스트로 자신의 진짜 모습을 발견하세요. 애착 유형, 나르시시즘 테스트, 테토-에겐 성향 테스트 등 다양한 심리 테스트를 제공합니다.',
    canonical: 'https://type-test.site/',
    keywords: language === 'en' ? 'personality test, psychology test, attachment style, narcissism test, MBTI, free test, personality analysis, psychology analysis' :
              language === 'ja' ? '性格テスト、心理テスト、愛着スタイル、ナルシシズムテスト、MBTI、無料テスト、性格分析、心理分析' :
              '성격테스트, 심리테스트, 애착유형, 나르시시즘, MBTI, 무료테스트, 성격분석, 심리분석',
    ogImage: 'https://type-test.site/favicon.svg'
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
              <Link href="/teto-egen">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  {t('tests.tetoEgen.start')}
                </Button>
              </Link>
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
              <Link href="/attachment-style">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
                  {t('tests.attachmentStyle.start')}
                </Button>
              </Link>
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
              <Link href="/narcissism">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                  {t('tests.narcissism.start')}
                </Button>
              </Link>
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