import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gender } from "@/lib/test-types";
import { useLanguage } from "@/contexts/language-context";
import { InfoPopup } from "@/components/info-popup";
import { Home } from "lucide-react";
import { Link } from "wouter";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";

interface WelcomeScreenProps {
  onGenderSelect: (gender: Gender) => void;
}

export function WelcomeScreen({ onGenderSelect }: WelcomeScreenProps) {
  const { t } = useLanguage();
  
  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 whitespace-pre-line">
          {t('welcome.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {t('welcome.subtitle')}
        </p>
        <div className="flex justify-center mt-4">
          <InfoPopup />
        </div>
      </div>
      
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-gray-200 dark:border-gray-700">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{t('welcome.selectGender')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => onGenderSelect('male')}
              className="group bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl p-6 h-auto transition-all duration-300 transform hover:scale-105 text-blue-700 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 min-h-[80px] touch-manipulation"
              variant="outline"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl">👨</div>
                <div className="text-xl font-semibold">{t('welcome.male')}</div>
              </div>
            </Button>
            
            <Button
              onClick={() => onGenderSelect('female')}
              className="group bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/40 border-2 border-pink-200 dark:border-pink-700 hover:border-pink-400 dark:hover:border-pink-500 rounded-xl p-6 h-auto transition-all duration-300 transform hover:scale-105 text-pink-700 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-200 min-h-[80px] touch-manipulation"
              variant="outline"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl">👩</div>
                <div className="text-xl font-semibold">{t('welcome.female')}</div>
              </div>
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
      </div>
    </div>
  );
}
