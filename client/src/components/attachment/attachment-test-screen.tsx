import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AttachmentQuestion } from '@/lib/attachment-types';
import { Home } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

interface AttachmentTestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onRestart: () => void;
  questions: AttachmentQuestion[];
}

export function AttachmentTestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  onRestart,
  questions
}: AttachmentTestScreenProps) {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();


  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleBackToMain = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('test.progress')}</span>
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400">{currentQuestion + 1} / {questions.length}</span>
          </div>
          <Progress value={progress} className="w-full h-3" />
        </div>

        {/* Question Card */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed break-keep">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {question.answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => onAnswerSelect(index)}
                  variant="outline"
                  className={`w-full text-left p-3 sm:p-4 md:p-6 h-auto justify-start transition-all duration-300 transform hover:scale-[1.02] min-h-[56px] touch-manipulation ${
                    selectedAnswer === index
                      ? 'bg-pink-100 dark:bg-pink-900/30 border-pink-500 dark:border-pink-400 text-pink-700 dark:text-pink-300'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 dark:hover:bg-pink-900/20 border-gray-200 dark:border-gray-600 hover:border-pink-300 dark:hover:border-pink-500 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-full flex-shrink-0 mt-0.5 ${
                      selectedAnswer === index
                        ? 'bg-pink-500 dark:bg-pink-400 border-pink-500 dark:border-pink-400'
                        : 'border-gray-300 dark:border-gray-500'
                    }`} />
                    <span className="text-sm sm:text-base md:text-lg font-medium leading-relaxed break-keep text-left flex-1">
                      {answer.text}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex justify-between gap-3">
            <Button
              onClick={onPrevious}
              variant="outline"
              className={`px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-xl font-medium text-sm sm:text-base min-h-[44px] touch-manipulation ${
                currentQuestion === 0 ? 'hidden' : ''
              }`}
            >
              {t('test.previous')}
            </Button>
            
            {/* 처음으로 버튼 */}
            <Button
              onClick={onRestart}
              variant="outline"
              className="px-3 sm:px-4 py-2 sm:py-3 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-600 rounded-xl font-medium text-sm sm:text-base min-h-[44px] min-w-[80px] sm:min-w-[90px] touch-manipulation"
            >
              {t('test.home')}
            </Button>
            
            <Button
              onClick={onNext}
              disabled={selectedAnswer === null}
              className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-xl font-medium transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation ${
                selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentQuestion === questions.length - 1 ? t('test.showResult') : t('test.next')}
            </Button>
          </div>
          
          {/* Back to Main Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleBackToMain}
              variant="outline"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-xs sm:text-sm min-h-[40px] touch-manipulation"
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {t('test.backToMain')}
            </Button>
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
    </div>
  );
}