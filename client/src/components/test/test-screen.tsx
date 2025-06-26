import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/lib/test-data";

interface TestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function TestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious
}: TestScreenProps) {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">진행률</span>
          <span className="text-sm font-medium text-teto">{currentQuestion + 1}/{questions.length}</span>
        </div>
        <Progress value={progress} className="w-full h-3" />
      </div>

      {/* Question Card */}
      <Card className="bg-white rounded-2xl shadow-xl mb-6">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed text-center">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => onAnswerSelect(index)}
                variant="outline"
                className={`w-full text-left p-6 h-auto justify-start transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedAnswer === index
                    ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                    : 'bg-gray-50 hover:bg-indigo-50 border-gray-200 hover:border-indigo-300 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-6 h-6 border-2 rounded-full flex-shrink-0 ${
                    selectedAnswer === index
                      ? 'bg-indigo-500 border-indigo-500'
                      : 'border-gray-300'
                  }`} />
                  <span className="text-lg font-medium">{answer.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={onPrevious}
          variant="outline"
          className={`px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium ${
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
          {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
        </Button>
      </div>
    </div>
  );
}
