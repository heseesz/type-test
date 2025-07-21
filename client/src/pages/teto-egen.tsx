import { useState, useEffect } from 'react';
import { WelcomeScreen } from '@/components/test/welcome-screen';
import { TestScreen } from '@/components/test/test-screen';
import { ResultScreen } from '@/components/test/result-screen';
import { Gender, TestState } from '@/lib/test-types';
import { shuffleQuestions, getOriginalAnswerIndex, shuffleArray } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { questionsTranslations, resultTranslations } from '@/lib/translations-data';

export default function TetoEgen() {
  const { language, t } = useLanguage();
  const questions = questionsTranslations[language];
  const testResults = resultTranslations[language];
  
  // Set meta tags for teto-egen page
  const description = language === 'en' ? 'Take the free Teto-Egen personality test with 12 scientific questions. Discover if you are Teto-type (energetic) or Egen-type (calm). Get instant results with detailed analysis!' :
                     language === 'ja' ? '12の科学的な質問で無料のテト-エゲン性格テストを受けましょう。テト型（エネルギッシュ）かエゲン型（穏やか）かを発見し、詳細な分析と即座の結果を得られます！' :
                     '12개의 과학적 질문으로 무료 테토-에겐 성격 테스트를 받아보세요. 테토형(활발한)인지 에겐형(차분한)인지 발견하고 즉시 상세한 분석 결과를 확인하세요!';

  const metaConfig = {
    title: language === 'en' ? 'Free Teto-Egen Personality Test | 12 Questions | TypeTest' : 
           language === 'ja' ? '無料テト-エゲン性格テスト | 12質問 | タイプテスト' : 
           '무료 테토-에겐 성격 테스트 | 12문항 | 타입테스트',
    description,
    canonical: 'https://type-test.site/teto-egen',
    keywords: language === 'en' ? 'Teto Egen personality test, free personality test, Korean personality test, energetic vs calm personality, personality analysis' :
              language === 'ja' ? 'テトエゲン性格テスト、無料性格テスト、韓国性格テスト、エネルギッシュvs穏やか性格、性格分析' :
              '테토에겐 성격테스트, 무료 성격테스트, 한국 성격테스트, 활발함vs차분함 성격, 성격분석',
    ogImage: 'https://type-test.site/favicon.svg',
    type: 'article' as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Quiz",
      "name": language === 'en' ? 'Teto-Egen Personality Test' : 
             language === 'ja' ? 'テト-エゲン性格テスト' : 
             '테토-에겐 성격 테스트',
      "description": description,
      "url": "https://type-test.site/teto-egen",
      "author": {
        "@type": "Organization",
        "name": "TypeTest"
      },
      "datePublished": "2024-06-26",
      "dateModified": "2025-01-21",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ShareAction",
        "userInteractionCount": "15000"
      }
    }
  };
  
  useMetaTags(metaConfig);
  
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

  // Initialize shuffled questions when component mounts
  useEffect(() => {
    if (testState.screen === 'welcome') {
      const shuffledQuestions = shuffleArray(questions);
      setTestState(prev => ({
        ...prev,
        shuffledQuestions,
        questionOrder: shuffledQuestions.map(q => questions.indexOf(q))
      }));
    }
  }, [questions]);

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
            onRestart={handleRestart}
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