import { useState, useEffect } from 'react';
import { AttachmentWelcomeScreen } from '@/components/attachment-test/welcome-screen';
import { AttachmentTestScreen } from '@/components/attachment-test/test-screen';
import { AttachmentResultScreen } from '@/components/attachment-test/result-screen';
import { AttachmentTestState, AttachmentType } from '@/lib/attachment-types';
import { shuffleAttachmentQuestions, getOriginalAttachmentAnswerIndex } from '@/lib/attachment-shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { attachmentQuestionsTranslations, attachmentResultTranslations } from '@/lib/attachment-translations';

export default function AttachmentTest() {
  const { language } = useLanguage();
  const questions = attachmentQuestionsTranslations[language as keyof typeof attachmentQuestionsTranslations] || attachmentQuestionsTranslations.en;
  const testResults = attachmentResultTranslations[language as keyof typeof attachmentResultTranslations] || attachmentResultTranslations.en;
  
  // Set meta tags for attachment test page
  useMetaTags('tests.attachmentTest.meta.title', 'tests.attachmentTest.meta.description');
  
  const [testState, setTestState] = useState<AttachmentTestState>({
    screen: 'welcome',
    currentQuestion: 0,
    answers: [],
    secureScore: 0,
    anxiousScore: 0,
    avoidantScore: 0,
    fearfulScore: 0,
    shuffledQuestions: [],
    shuffledAnswers: [],
    questionOrder: []
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (testState.shuffledQuestions.length === 0) {
      const { shuffledQuestions, shuffledAnswers } = shuffleAttachmentQuestions(questions);
      setTestState(prev => ({
        ...prev,
        shuffledQuestions,
        shuffledAnswers
      }));
    }
  }, [questions]);

  const handleStart = () => {
    setTestState(prev => ({ ...prev, screen: 'test' }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const originalAnswerIndex = getOriginalAttachmentAnswerIndex(
      testState.currentQuestion,
      selectedAnswer,
      testState.shuffledAnswers
    );
    
    const selectedAnswerData = testState.shuffledQuestions[testState.currentQuestion].answers[originalAnswerIndex];
    
    const newAnswers = [...testState.answers, originalAnswerIndex];
    
    // Update scores
    const newState = { ...testState };
    newState.answers = newAnswers;
    
    switch (selectedAnswerData.type) {
      case 'secure':
        newState.secureScore += selectedAnswerData.weight;
        break;
      case 'anxious':
        newState.anxiousScore += selectedAnswerData.weight;
        break;
      case 'avoidant':
        newState.avoidantScore += selectedAnswerData.weight;
        break;
      case 'fearful':
        newState.fearfulScore += selectedAnswerData.weight;
        break;
    }

    if (testState.currentQuestion === testState.shuffledQuestions.length - 1) {
      // Calculate final result
      const scores = {
        secure: newState.secureScore,
        anxious: newState.anxiousScore,
        avoidant: newState.avoidantScore,
        fearful: newState.fearfulScore
      };
      
      const maxScore = Math.max(...Object.values(scores));
      let finalResult: AttachmentType = 'secure';
      
      for (const [type, score] of Object.entries(scores)) {
        if (score === maxScore) {
          finalResult = type as AttachmentType;
          break;
        }
      }
      
      newState.finalResult = finalResult;
      newState.screen = 'result';
    } else {
      newState.currentQuestion += 1;
    }

    setTestState(newState);
    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (testState.currentQuestion > 0) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
      setSelectedAnswer(null);
    }
  };

  const handleHome = () => {
    window.location.href = '/';
  };

  const handleRestart = () => {
    const { shuffledQuestions, shuffledAnswers } = shuffleAttachmentQuestions(questions);
    setTestState({
      screen: 'welcome',
      currentQuestion: 0,
      answers: [],
      secureScore: 0,
      anxiousScore: 0,
      avoidantScore: 0,
      fearfulScore: 0,
      shuffledQuestions,
      shuffledAnswers,
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
        onHome={handleHome}
        shuffledQuestions={testState.shuffledQuestions}
        shuffledAnswers={testState.shuffledAnswers}
      />
    );
  }

  if (testState.screen === 'result' && testState.finalResult) {
    const result = testResults[testState.finalResult];
    const scores = {
      secure: testState.secureScore,
      anxious: testState.anxiousScore,
      avoidant: testState.avoidantScore,
      fearful: testState.fearfulScore
    };

    return (
      <AttachmentResultScreen
        result={result}
        scores={scores}
        onRestart={handleRestart}
      />
    );
  }

  return <div>Loading...</div>;
}