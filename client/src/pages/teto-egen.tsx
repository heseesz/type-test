import { useState, useEffect } from 'react';
import { WelcomeScreen } from '@/components/test/welcome-screen';
import { TestScreen } from '@/components/test/test-screen';
import { ResultScreen } from '@/components/test/result-screen';
import { Gender, TestState } from '@/lib/test-types';
import { shuffleQuestions, getOriginalAnswerIndex } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { questionsTranslations, resultTranslations } from '@/lib/translations-data';

export default function TetoEgen() {
  const { language, t } = useLanguage();
  const questions = questionsTranslations[language];
  const testResults = resultTranslations[language];
  
  const [testState, setTestState] = useState<TestState>({
    screen: 'welcome',
    gender: null,
    currentQuestion: 0,
    answers: [],
    tetoScore: 0,
    egenScore: 0,
    shuffledQuestions: [],
    shuffledAnswers: []
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Update document title and meta description for Teto-Egen test
  useEffect(() => {
    const tetoEgenTitle = t('tests.tetoEgen.meta.title');
    const tetoEgenDescription = t('tests.tetoEgen.meta.description');
    
    document.title = tetoEgenTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', tetoEgenDescription);
    }

    // Cleanup: restore main site meta when component unmounts
    return () => {
      const mainTitle = t('meta.title');
      const mainDescription = t('meta.description');
      
      document.title = mainTitle;
      
      const metaDescriptionCleanup = document.querySelector('meta[name="description"]');
      if (metaDescriptionCleanup) {
        metaDescriptionCleanup.setAttribute('content', mainDescription);
      }
    };
  }, [language, t]);

  const handleGenderSelect = (gender: Gender) => {
    const { shuffledQuestions, shuffledAnswers } = shuffleQuestions(questions as any);
    setTestState(prev => ({
      ...prev,
      gender,
      screen: 'test',
      shuffledQuestions,
      shuffledAnswers
    }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = testState.shuffledQuestions[testState.currentQuestion];
    const originalAnswerIndex = getOriginalAnswerIndex(
      testState.shuffledAnswers[testState.currentQuestion],
      selectedAnswer
    );
    const selectedAnswerData = currentQuestion.answers[originalAnswerIndex];

    // Update scores
    const newTetoScore = testState.tetoScore + (selectedAnswerData.type === 'teto' ? selectedAnswerData.weight : 0);
    const newEgenScore = testState.egenScore + (selectedAnswerData.type === 'egen' ? selectedAnswerData.weight : 0);

    // Update answers array
    const newAnswers = [...testState.answers, selectedAnswer];

    // Check if this is the last question
    if (testState.currentQuestion === testState.shuffledQuestions.length - 1) {
      // Calculate final result
      const finalResult = newTetoScore > newEgenScore 
        ? (testState.gender === 'male' ? 'teto_male' : 'teto_female')
        : (testState.gender === 'male' ? 'egen_male' : 'egen_female');

      setTestState(prev => ({
        ...prev,
        screen: 'result',
        answers: newAnswers,
        tetoScore: newTetoScore,
        egenScore: newEgenScore,
        finalResult
      }));
    } else {
      // Move to next question
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
        tetoScore: newTetoScore,
        egenScore: newEgenScore
      }));
    }

    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (testState.currentQuestion > 0) {
      // Remove the last answer and update scores
      const lastAnswerIndex = testState.answers[testState.answers.length - 1];
      const prevQuestion = testState.shuffledQuestions[testState.currentQuestion - 1];
      const originalAnswerIndex = getOriginalAnswerIndex(
        testState.shuffledAnswers[testState.currentQuestion - 1],
        lastAnswerIndex
      );
      const lastAnswerData = prevQuestion.answers[originalAnswerIndex];

      const newTetoScore = testState.tetoScore - (lastAnswerData.type === 'teto' ? lastAnswerData.weight : 0);
      const newEgenScore = testState.egenScore - (lastAnswerData.type === 'egen' ? lastAnswerData.weight : 0);

      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
        answers: prev.answers.slice(0, -1),
        tetoScore: newTetoScore,
        egenScore: newEgenScore
      }));

      // Set the selected answer to the previous question's answer
      setSelectedAnswer(lastAnswerIndex);
    }
  };

  const handleRestart = () => {
    setTestState({
      screen: 'welcome',
      gender: null,
      currentQuestion: 0,
      answers: [],
      tetoScore: 0,
      egenScore: 0,
      shuffledQuestions: [],
      shuffledAnswers: []
    });
    setSelectedAnswer(null);
  };

  const handleHome = () => {
    handleRestart();
  };

  if (testState.screen === 'welcome') {
    return <WelcomeScreen onGenderSelect={handleGenderSelect} />;
  }

  if (testState.screen === 'test') {
    return (
      <TestScreen
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
    return (
      <ResultScreen
        result={result}
        tetoScore={testState.tetoScore}
        egenScore={testState.egenScore}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}