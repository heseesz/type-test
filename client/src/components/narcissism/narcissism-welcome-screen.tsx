import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Home } from 'lucide-react';
import { Link } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';

interface NarcissismWelcomeScreenProps {
  onStart: () => void;
}

export function NarcissismWelcomeScreen({ onStart }: NarcissismWelcomeScreenProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 whitespace-pre-line">
          {t('tests.narcissism.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {t('tests.narcissism.description')}
        </p>
      </div>
      
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-gray-200 dark:border-gray-700">
        <CardContent className="p-8 space-y-6">
          <div className="text-6xl mb-4">🧠👑</div>
          
          <div className="space-y-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p>{t('tests.narcissism.info')}</p>
            </div>
            
            <Button
              onClick={onStart}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium text-lg transition-all transform hover:scale-105 min-h-[44px] touch-manipulation"
            >
              {t('tests.narcissism.start')}
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
  );
}