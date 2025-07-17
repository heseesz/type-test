import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { NarcissismWelcomeScreen } from '@/components/narcissism/narcissism-welcome-screen';
import { NarcissismTestScreen } from '@/components/narcissism/narcissism-test-screen';
import { NarcissismResultScreen } from '@/components/narcissism/narcissism-result-screen';
import { 
  NarcissismTestState, 
  NarcissismType, 
  NarcissismQuestion 
} from '@/lib/narcissism-types';
import { 
  narcissismQuestionsKo, 
  narcissismQuestionsEn, 
  narcissismQuestionsJa,
  narcissismResultsKo,
  narcissismResultsEn,
  narcissismResultsJa
} from '@/lib/narcissism-data';
import { shuffleArray } from '@/lib/shuffle-utils';

export default function NarcissismTest() {
  const { language } = useLanguage();
  
  // Set meta tags for narcissism page
  const metaConfig = {
    title: language === 'en' ? 'TypeTest: Narcissism Tendency Test' : 
           language === 'ja' ? 'タイプテスト: ナルシシズム傾向テスト' : 
           '타입테스트: 나르시시즘 성향 테스트',
    description: language === 'en' ? 'Assess your narcissistic tendencies through 20 research-based questions. Discover your grandiose and vulnerable narcissism levels.' :
                language === 'ja' ? '20の研究ベースの質問を通じて、あなたのナルシシズム傾向を評価します。誇大型と脆弱型のナルシシズムレベルを発見しましょう。' :
                '20개의 연구 기반 질문을 통해 당신의 나르시시즘 성향을 평가하세요. 과대형과 취약형 나르시시즘 수준을 알아보세요.',
    canonical: 'https://type-test.site/narcissism',
    ogImage: 'https://type-test.site/favicon.svg'
  };
  
  useMetaTags(metaConfig);
  
  const [testState, setTestState] = useState<NarcissismTestState>({
    screen: 'welcome',
    currentQuestion: 0,
    answers: [],
    grandioseScore: 0,
    vulnerableScore: 0,
    shuffledQuestions: [],
    questionOrder: []
  });

  // Get questions based on language
  const getQuestions = (): NarcissismQuestion[] => {
    switch (language) {
      case 'en':
        return narcissismQuestionsEn;
      case 'ja':
        return narcissismQuestionsJa;
      default:
        return narcissismQuestionsKo;
    }
  };

  // Get results based on language
  const getResults = () => {
    switch (language) {
      case 'en':
        return narcissismResultsEn;
      case 'ja':
        return narcissismResultsJa;
      default:
        return narcissismResultsKo;
    }
  };

  // Initialize shuffled questions
  useEffect(() => {
    const questions = getQuestions();
    const shuffled = shuffleArray([...questions]);
    const order = shuffled.map(q => q.id);
    
    setTestState(prev => ({
      ...prev,
      shuffledQuestions: shuffled,
      questionOrder: order
    }));
  }, [language]);

  const calculateNarcissismType = (grandioseScore: number, vulnerableScore: number): NarcissismType => {
    const grandioseThreshold = 45; // 과대형 임계값 (20문항 * 4점 만점의 56%)
    const vulnerableThreshold = 45; // 취약형 임계값 (20문항 * 4점 만점의 56%)
    
    const isGrandiose = grandioseScore >= grandioseThreshold;
    const isVulnerable = vulnerableScore >= vulnerableThreshold;
    
    if (isGrandiose && isVulnerable) {
      return 'mixed';
    } else if (isGrandiose) {
      return 'grandiose';
    } else if (isVulnerable) {
      return 'vulnerable';
    } else {
      return 'healthy';
    }
  };

  const handleStart = () => {
    setTestState(prev => ({
      ...prev,
      screen: 'test'
    }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...testState.answers];
    newAnswers[testState.currentQuestion] = answerIndex;
    
    setTestState(prev => ({
      ...prev,
      answers: newAnswers
    }));
  };

  const handleNext = () => {
    if (testState.currentQuestion === testState.shuffledQuestions.length - 1) {
      // Calculate final scores
      let grandioseTotal = 0;
      let vulnerableTotal = 0;
      
      testState.answers.forEach((answerIndex, questionIndex) => {
        const question = testState.shuffledQuestions[questionIndex];
        const answer = question.answers[answerIndex];
        grandioseTotal += answer.grandioseScore;
        vulnerableTotal += answer.vulnerableScore;
      });
      
      const finalResult = calculateNarcissismType(grandioseTotal, vulnerableTotal);
      
      setTestState(prev => ({
        ...prev,
        screen: 'result',
        grandioseScore: grandioseTotal,
        vulnerableScore: vulnerableTotal,
        finalResult
      }));
    } else {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const handlePrevious = () => {
    if (testState.currentQuestion > 0) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const handleRestart = () => {
    const questions = getQuestions();
    const shuffled = shuffleArray([...questions]);
    const order = shuffled.map(q => q.id);
    
    setTestState({
      screen: 'welcome',
      currentQuestion: 0,
      answers: [],
      grandioseScore: 0,
      vulnerableScore: 0,
      shuffledQuestions: shuffled,
      questionOrder: order
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      {testState.screen === 'welcome' && (
        <NarcissismWelcomeScreen onStart={handleStart} />
      )}

      {testState.screen === 'test' && (
        <NarcissismTestScreen
          currentQuestion={testState.currentQuestion}
          selectedAnswer={testState.answers[testState.currentQuestion] ?? null}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onRestart={handleRestart}
          questions={testState.shuffledQuestions}
        />
      )}

      {testState.screen === 'result' && testState.finalResult && (() => {
        const results = getResults();
        const result = results[testState.finalResult];
        
        return (
          <NarcissismResultScreen
            result={result}
            grandioseScore={testState.grandioseScore}
            vulnerableScore={testState.vulnerableScore}
            onRestart={handleRestart}
          />
        );
      })()}
    </div>
  );
}