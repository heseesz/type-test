import { useState } from 'react';
import { WelcomeScreen } from '@/components/test/welcome-screen';
import { TestScreen } from '@/components/test/test-screen';
import { ResultScreen } from '@/components/test/result-screen';
import { Gender, TestState } from '@/lib/test-types';
import { shuffleQuestions, getOriginalAnswerIndex } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { questionsTranslations, resultTranslations } from '@/lib/translations-data';

export default function Home() {
  const { language } = useLanguage();
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

    // Store the answer
    const newAnswers = [...testState.answers];
    newAnswers[testState.currentQuestion] = selectedAnswer;

    if (testState.currentQuestion < testState.shuffledQuestions.length - 1) {
      // Move to next question
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers
      }));
      setSelectedAnswer(
        newAnswers[testState.currentQuestion + 1] !== undefined 
          ? newAnswers[testState.currentQuestion + 1] 
          : null
      );
    } else {
      // Calculate results
      let tetoScore = 0;
      let egenScore = 0;

      newAnswers.forEach((shuffledAnswerIndex, questionIndex) => {
        const shuffledQuestion = testState.shuffledQuestions[questionIndex];
        const originalAnswerIndex = getOriginalAnswerIndex(
          questionIndex, 
          shuffledAnswerIndex, 
          testState.shuffledAnswers
        );
        const answer = shuffledQuestion.answers[originalAnswerIndex];
        
        if (answer.type === 'teto') {
          tetoScore += answer.weight;
        } else {
          egenScore += answer.weight;
        }
      });

      setTestState(prev => ({
        ...prev,
        answers: newAnswers,
        tetoScore,
        egenScore,
        screen: 'result'
      }));
    }
  };

  const handlePrevious = () => {
    if (testState.currentQuestion > 0) {
      const newQuestionIndex = testState.currentQuestion - 1;
      setTestState(prev => ({
        ...prev,
        currentQuestion: newQuestionIndex
      }));
      setSelectedAnswer(
        testState.answers[newQuestionIndex] !== undefined 
          ? testState.answers[newQuestionIndex] 
          : null
      );
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

  const getResult = () => {
    if (!testState.gender) return testResults.teto_male as any;
    
    const isTetoType = testState.tetoScore > testState.egenScore;
    const resultKey = `${isTetoType ? 'teto' : 'egen'}_${testState.gender}`;
    return testResults[resultKey] as any;
  };

  // Set selected answer when navigating to a question that already has an answer
  if (testState.screen === 'test' && selectedAnswer === null && testState.answers[testState.currentQuestion] !== undefined) {
    setSelectedAnswer(testState.answers[testState.currentQuestion]);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
          onHome={handleHome}
          shuffledQuestions={testState.shuffledQuestions}
          shuffledAnswers={testState.shuffledAnswers}
        />
      )}
      
      {testState.screen === 'result' && (
        <ResultScreen
          result={getResult()}
          tetoScore={testState.tetoScore}
          egenScore={testState.egenScore}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
