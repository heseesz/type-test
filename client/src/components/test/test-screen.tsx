import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/lib/test-types";

interface TestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  shuffledQuestions: Question[];
  shuffledAnswers: number[][];
}

export function TestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  shuffledQuestions,
  shuffledAnswers
}: TestScreenProps) {
  const question = shuffledQuestions[currentQuestion];
  const answerOrder = shuffledAnswers[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">진행률</span>
          <span className="text-sm font-medium text-teto dark:text-teto">{currentQuestion + 1}/{shuffledQuestions.length}</span>
        </div>
        <Progress value={progress} className="w-full h-3" />
      </div>

      {/* Question Card */}
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl mb-6 border-gray-200 dark:border-gray-700">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-center">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {answerOrder.map((originalIndex, displayIndex) => {
              const answer = question.answers[originalIndex];
              return (
                <Button
                  key={displayIndex}
                  onClick={() => onAnswerSelect(displayIndex)}
                  variant="outline"
                  className={`w-full text-left p-6 h-auto justify-start transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedAnswer === displayIndex
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 border-2 rounded-full flex-shrink-0 ${
                      selectedAnswer === displayIndex
                        ? 'bg-indigo-500 dark:bg-indigo-400 border-indigo-500 dark:border-indigo-400'
                        : 'border-gray-300 dark:border-gray-500'
                    }`} />
                    <span className="text-lg font-medium">{answer.text}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={onPrevious}
          variant="outline"
          className={`px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-xl font-medium ${
            currentQuestion === 0 ? 'hidden' : ''
          }`}
        >
          이전
        </Button>
        <Button
          onClick={onNext}
          disabled={selectedAnswer === null}
          className={`px-6 py-3 bg-teto hover:bg-teto-hover text-white rounded-xl font-medium transition-colors ml-auto ${
            selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {currentQuestion === shuffledQuestions.length - 1 ? '결과 보기' : '다음'}
        </Button>
      </div>
    </div>
  );
}
