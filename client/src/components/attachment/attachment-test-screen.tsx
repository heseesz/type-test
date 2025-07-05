import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AttachmentQuestion } from '@/lib/attachment-types';
import { Link } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';

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
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Progress Section */}
            <div className="text-center">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  질문 {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>

            {/* Question Section */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                {question.question}
              </h2>
            </div>

            {/* Answers Section */}
            <div className="space-y-3">
              {question.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => onAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-gray-900 dark:text-gray-100'
                      : 'border-gray-200 dark:border-gray-600 hover:border-pink-300 dark:hover:border-pink-400 bg-white dark:bg-gray-700 hover:bg-pink-25 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="text-gray-800 dark:text-gray-200">
                    {answer.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3">
                <Button
                  onClick={onPrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex-1"
                >
                  이전
                </Button>
                <Button
                  onClick={onNext}
                  disabled={selectedAnswer === null}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                >
                  {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
                </Button>
              </div>

              <div className="flex flex-col space-y-2">
                <Button
                  onClick={onRestart}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  처음으로 돌아가기
                </Button>
                
                <Link href="/">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    타입테스트 홈으로
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
          <AboutUs />
          <span>|</span>
          <PrivacyPolicy />
          <span>|</span>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}