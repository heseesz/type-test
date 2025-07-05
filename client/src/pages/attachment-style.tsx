import { useState } from 'react';
import { AttachmentWelcomeScreen } from '@/components/attachment/attachment-welcome-screen';
import { AttachmentTestScreen } from '@/components/attachment/attachment-test-screen';
import { AttachmentResultScreen } from '@/components/attachment/attachment-result-screen';
import { attachmentQuestions, attachmentResults, attachmentQuestionsEn, attachmentResultsEn, attachmentQuestionsJa, attachmentResultsJa } from '@/lib/attachment-data';
import { AttachmentTestState, AttachmentType } from '@/lib/attachment-types';
import { shuffleArray } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';

export default function AttachmentStyle() {
  const { language } = useLanguage();
  
  // Get the appropriate questions and results based on language
  const currentQuestions = language === 'en' ? attachmentQuestionsEn : 
                          language === 'ja' ? attachmentQuestionsJa : 
                          attachmentQuestions;
  const currentResults = language === 'en' ? attachmentResultsEn : 
                        language === 'ja' ? attachmentResultsJa : 
                        attachmentResults;
  
  const [testState, setTestState] = useState<AttachmentTestState>({
    screen: 'welcome',
    currentQuestion: 0,
    answers: [],
    avoidanceScore: 0,
    anxietyScore: 0,
    shuffledQuestions: [],
    questionOrder: []
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleStart = () => {
    // Create shuffled question order
    const questionIndices = Array.from({ length: currentQuestions.length }, (_, i) => i);
    const shuffledOrder = shuffleArray(questionIndices);
    const shuffledQuestions = shuffledOrder.map(index => currentQuestions[index]);

    setTestState(prev => ({
      ...prev,
      screen: 'test',
      shuffledQuestions,
      questionOrder: shuffledOrder
    }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const calculateAttachmentType = (avoidanceScore: number, anxietyScore: number): AttachmentType => {
    if (avoidanceScore <= 0 && anxietyScore <= 0) {
      return 'secure';
    } else if (avoidanceScore <= 0 && anxietyScore > 0) {
      return 'anxious';
    } else if (avoidanceScore > 0 && anxietyScore <= 0) {
      return 'avoidant';
    } else {
      return 'fearful';
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = testState.shuffledQuestions[testState.currentQuestion];
    const selectedAnswerData = currentQuestion.answers[selectedAnswer];

    // Update scores
    const newAvoidanceScore = testState.avoidanceScore + selectedAnswerData.avoidanceScore;
    const newAnxietyScore = testState.anxietyScore + selectedAnswerData.anxietyScore;

    // Update answers array
    const newAnswers = [...testState.answers, selectedAnswer];

    // Check if this is the last question
    if (testState.currentQuestion === testState.shuffledQuestions.length - 1) {
      // Calculate final result
      const finalResult = calculateAttachmentType(newAvoidanceScore, newAnxietyScore);

      setTestState(prev => ({
        ...prev,
        screen: 'result',
        answers: newAnswers,
        avoidanceScore: newAvoidanceScore,
        anxietyScore: newAnxietyScore,
        finalResult
      }));
    } else {
      // Move to next question
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
        avoidanceScore: newAvoidanceScore,
        anxietyScore: newAnxietyScore
      }));
    }

    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (testState.currentQuestion === 0) return;

    // Remove the last answer and recalculate scores
    const newAnswers = testState.answers.slice(0, -1);
    const prevQuestionIndex = testState.currentQuestion - 1;

    // Recalculate scores
    let newAvoidanceScore = 0;
    let newAnxietyScore = 0;

    newAnswers.forEach((answerIndex, questionIndex) => {
        const question = testState.shuffledQuestions[questionIndex];
        const answer = question.answers[answerIndex];
        newAvoidanceScore += answer.avoidanceScore;
        newAnxietyScore += answer.anxietyScore;
    });

    setTestState({
      ...testState,
      currentQuestion: prevQuestionIndex,
      answers: newAnswers,
      avoidanceScore: newAvoidanceScore,
      anxietyScore: newAnxietyScore
    });

    // Set the previous selected answer
    setSelectedAnswer(testState.answers[prevQuestionIndex] || null);
  };

  const handleRestart = () => {
    setTestState({
      screen: 'welcome',
      currentQuestion: 0,
      answers: [],
      avoidanceScore: 0,
      anxietyScore: 0,
      shuffledQuestions: [],
      questionOrder: []
    });
    setSelectedAnswer(null);
  };

  if (testState.screen === 'welcome') {
    return <AttachmentWelcomeScreen onStart={handleStart} />;
  }

  if (testState.screen === 'test') {
    return (
      <AttachmentTestScreen
        currentQuestion={testState.currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onRestart={handleRestart}
        questions={testState.shuffledQuestions}
      />
    );
  }

  if (testState.screen === 'result' && testState.finalResult) {
    const result = currentResults[testState.finalResult];
    return (
      <AttachmentResultScreen
        result={result}
        avoidanceScore={testState.avoidanceScore}
        anxietyScore={testState.anxietyScore}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}