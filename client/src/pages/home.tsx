import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";

export default function Home() {
  const { t } = useLanguage();
  
  // Set meta tags for home page
  useMetaTags('meta.title', 'meta.description');

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

          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 opacity-60 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">🧠💡</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.comingSoon.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.comingSoon.description')}
              </p>
              <Button disabled className="w-full">
                {t('tests.comingSoon.button')}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-gray-200 dark:border-gray-700 opacity-60 flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">❤️🌟</div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {t('tests.comingSoon.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center whitespace-pre-line">
                {t('tests.comingSoon.description')}
              </p>
              <Button disabled className="w-full">
                {t('tests.comingSoon.button')}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {t('site.footer')}
          </p>
          <div className="flex justify-center items-center gap-4">
            <AboutUs />
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </div>
  );
}