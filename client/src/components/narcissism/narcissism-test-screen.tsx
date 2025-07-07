import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/language-context';
import { NarcissismQuestion } from '@/lib/narcissism-types';
import { useLocation } from 'wouter';

interface NarcissismTestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onRestart: () => void;
  questions: NarcissismQuestion[];
}

export function NarcissismTestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  onRestart,
  questions
}: NarcissismTestScreenProps) {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleHomeClick = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 flex items-center justify-center p-4 pt-20">
      <Card className="w-full max-w-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
        {/* Progress */}
        <div className="mb-6 space-y-2">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{t('test.progress')}</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="p-6 mb-6 bg-white dark:bg-gray-800 border-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
            {question.question}
          </h2>
        </Card>

        {/* Answers */}
        <div className="space-y-3 mb-8">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all min-h-[44px] touch-manipulation ${
                selectedAnswer === index
                  ? 'border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-500 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="font-medium">{answer.text}</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex justify-start">
              <Button
                onClick={onPrevious}
                variant="outline"
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-xl font-medium text-sm sm:text-base min-h-[44px] touch-manipulation ${
                  currentQuestion === 0 ? 'invisible' : ''
                }`}
              >
                {t('test.previous')}
              </Button>
            </div>
            
            {/* 처음으로 버튼 - 중앙 */}
            <div className="flex justify-center">
              <Button
                onClick={handleHomeClick}
                variant="outline"
                className="px-3 sm:px-4 py-2 sm:py-3 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-600 rounded-xl font-medium text-sm sm:text-base min-h-[44px] touch-manipulation"
              >
                {t('test.home')}
              </Button>
            </div>
            
            <div className="flex justify-end">
              <Button
                onClick={onNext}
                disabled={selectedAnswer === null}
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation ${
                  selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {currentQuestion === questions.length - 1 ? t('test.showResult') : t('test.next')}
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleHomeClick}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline"
            >
              {t('test.backToMain')}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}