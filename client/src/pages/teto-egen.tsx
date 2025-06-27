import { useState, useEffect } from 'react';
import { WelcomeScreen } from '@/components/test/welcome-screen';
import { TestScreen } from '@/components/test/test-screen';
import { ResultScreen } from '@/components/test/result-screen';
import { Gender, TestState } from '@/lib/test-types';
import { shuffleQuestions, getOriginalAnswerIndex } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { questionsTranslations, resultTranslations } from '@/lib/translations-data';

export default function TetoEgen() {
  const { language, t } = useLanguage();
  const questions = questionsTranslations[language];
  const testResults = resultTranslations[language];
  
  // Set meta tags for teto-egen page
  useMetaTags('tests.tetoEgen.meta.title', 'tests.tetoEgen.meta.description');
  
  const [testState, setTestState] = useState<TestState>({
    screen: 'welcome',
    gender: null,
    currentQuestion: 0,
    answers: [],
    tetoScore: 0,
    egenScore: 0,
    shuffledQuestions: [],
    shuffledAnswers: [],
    questionOrder: []
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

  // Update questions when language changes during test while preserving shuffle order
  useEffect(() => {
    if (testState.screen === 'test' && testState.questionOrder) {
      const newQuestions = questionsTranslations[language];
      if (newQuestions) {
        // Recreate shuffled questions using the same order but with new language content
        const newShuffledQuestions = testState.questionOrder.map(index => newQuestions[index]);
        setTestState(prev => ({
          ...prev,
          shuffledQuestions: newShuffledQuestions as any
        }));
      }
    }
  }, [language]);

  const handleGenderSelect = (gender: Gender) => {
    const { shuffledQuestions, shuffledAnswers, questionOrder } = shuffleQuestions(questions as any);
    setTestState(prev => ({
      ...prev,
      gender,
      screen: 'test',
      shuffledQuestions,
      shuffledAnswers,
      questionOrder
    }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = testState.shuffledQuestions[testState.currentQuestion];
    const originalAnswerIndex = getOriginalAnswerIndex(
      testState.currentQuestion,
      selectedAnswer,
      testState.shuffledAnswers
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
        testState.currentQuestion - 1,
        lastAnswerIndex,
        testState.shuffledAnswers
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
      shuffledAnswers: [],
      questionOrder: []
    });
    setSelectedAnswer(null);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-4xl mx-auto">
        {testState.screen === 'welcome' && (
          <WelcomeScreen onGenderSelect={handleGenderSelect} />
        )}

        {testState.screen === 'test' && (
          <TestScreen
            currentQuestion={testState.currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            shuffledQuestions={testState.shuffledQuestions}
            shuffledAnswers={testState.shuffledAnswers}
          />
        )}

        {testState.screen === 'result' && testState.finalResult && (
          <ResultScreen
            result={testResults[testState.finalResult]}
            tetoScore={testState.tetoScore}
            egenScore={testState.egenScore}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}