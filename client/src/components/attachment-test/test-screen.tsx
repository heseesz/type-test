import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/language-context';
import { AttachmentQuestion } from '@/lib/attachment-types';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

interface AttachmentTestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onHome: () => void;
  shuffledQuestions: AttachmentQuestion[];
  shuffledAnswers: number[][];
}

export function AttachmentTestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  onHome,
  shuffledQuestions,
  shuffledAnswers
}: AttachmentTestScreenProps) {
  const { language } = useLanguage();

  const testContent = {
    ko: {
      progress: '진행률',
      previous: '이전',
      next: '다음',
      showResult: '결과 보기',
      home: '홈',
      backToMain: 'TypeTest로 돌아가기'
    },
    en: {
      progress: 'Progress',
      previous: 'Previous',
      next: 'Next',
      showResult: 'Show Result',
      home: 'Home',
      backToMain: 'Back to TypeTest'
    },
    es: {
      progress: 'Progreso',
      previous: 'Anterior',
      next: 'Siguiente',
      showResult: 'Ver Resultado',
      home: 'Inicio',
      backToMain: 'Volver a TypeTest'
    }
  };

  const content = testContent[language as keyof typeof testContent] || testContent.en;

  if (!shuffledQuestions[currentQuestion]) {
    return <div>Loading...</div>;
  }

  const question = shuffledQuestions[currentQuestion];
  const answerOrder = shuffledAnswers[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const isLastQuestion = currentQuestion === shuffledQuestions.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader className="text-center space-y-6">
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={onHome}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <Home className="h-4 w-4" />
                <span className="text-sm">{content.home}</span>
              </Button>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {currentQuestion + 1} / {shuffledQuestions.length}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {content.progress}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {question.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              {answerOrder.map((originalIndex, displayIndex) => {
                const answer = question.answers[originalIndex];
                const isSelected = selectedAnswer === displayIndex;
                
                return (
                  <Button
                    key={displayIndex}
                    variant={isSelected ? "default" : "outline"}
                    className={`p-6 h-auto text-left justify-start whitespace-normal ${
                      isSelected 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:from-blue-700 hover:to-purple-700' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => onAnswerSelect(displayIndex)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                        isSelected 
                          ? 'border-white bg-white' 
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {isSelected && (
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <div className="text-base leading-relaxed">
                        {answer.text}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
            
            <div className="flex justify-between items-center pt-6">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={currentQuestion === 0}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{content.previous}</span>
              </Button>
              
              <Button
                onClick={onNext}
                disabled={selectedAnswer === null}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <span>{isLastQuestion ? content.showResult : content.next}</span>
                {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}