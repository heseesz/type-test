import { useState } from 'react';
import { AttachmentWelcomeScreen } from '@/components/attachment/attachment-welcome-screen';
import { AttachmentTestScreen } from '@/components/attachment/attachment-test-screen';
import { AttachmentResultScreen } from '@/components/attachment/attachment-result-screen';
import { AttachmentTestState, AttachmentType } from '@/lib/attachment-types';
import { attachmentQuestions, attachmentResults } from '@/lib/attachment-data';

export default function AttachmentStyle() {
  const [testState, setTestState] = useState<AttachmentTestState>({
    screen: 'welcome',
    currentQuestion: 0,
    answers: [],
    avoidanceScore: 0,
    anxietyScore: 0
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleStart = () => {
    setTestState(prev => ({ ...prev, screen: 'test' }));
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

    const currentQuestion = attachmentQuestions[testState.currentQuestion];
    const selectedAnswerData = currentQuestion.answers[selectedAnswer];

    const newAnswers = [...testState.answers, selectedAnswer];
    const newAvoidanceScore = testState.avoidanceScore + selectedAnswerData.avoidanceScore;
    const newAnxietyScore = testState.anxietyScore + selectedAnswerData.anxietyScore;

    if (testState.currentQuestion === attachmentQuestions.length - 1) {
      // Test completed
      const finalResult = calculateAttachmentType(newAvoidanceScore, newAnxietyScore);
      setTestState({
        screen: 'result',
        currentQuestion: testState.currentQuestion + 1,
        answers: newAnswers,
        avoidanceScore: newAvoidanceScore,
        anxietyScore: newAnxietyScore,
        finalResult
      });
    } else {
      // Next question
      setTestState({
        ...testState,
        currentQuestion: testState.currentQuestion + 1,
        answers: newAnswers,
        avoidanceScore: newAvoidanceScore,
        anxietyScore: newAnxietyScore
      });
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
      const question = attachmentQuestions[questionIndex];
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
      anxietyScore: 0
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
        questions={attachmentQuestions}
      />
    );
  }

  if (testState.screen === 'result' && testState.finalResult) {
    const result = attachmentResults[testState.finalResult];
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