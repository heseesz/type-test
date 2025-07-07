import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

interface NarcissismWelcomeScreenProps {
  onStart: () => void;
}

export function NarcissismWelcomeScreen({ onStart }: NarcissismWelcomeScreenProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
        <div className="space-y-4">
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {t('tests.narcissism.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            {t('tests.narcissism.description')}
          </p>
        </div>
        
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
      </Card>
    </div>
  );
}