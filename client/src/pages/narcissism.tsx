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
import { narcissismQuestionsZhCn, narcissismResultsZhCn } from '@/lib/narcissism-data-zh-cn';
import { shuffleArray } from '@/lib/shuffle-utils';

export default function NarcissismTest() {
  const { language } = useLanguage();
  
  // Set meta tags for narcissism page
  const description = language === 'en' ? 'Free Narcissism Tendency Test with 20 scientific questions. Assess your grandiose and vulnerable narcissism levels. Get professional psychological analysis instantly!' :
                     language === 'ja' ? '20の科学的質問による無料ナルシシズム傾向テスト。誇大型と脆弱型のナルシシズムレベルを評価し、専門的な心理分析を即座に得られます！' :
                     language === 'zh-cn' ? '通过20个科学问题进行的免费自恋倾向测试。评估您的过大型和脆弱型自恋水平。立即获得专业心理分析！' :
                     '20개 질문으로 알아보는 나르시시즘 성향 분석. 건강한 자기애와 병적 나르시시즘의 경계는? 무료 심리 테스트로 확인하세요.';

  const metaConfig = {
    title: language === 'en' ? 'Free Narcissism Tendency Test | 20 Questions | TypeTest' : 
           language === 'ja' ? '無料ナルシシズム傾向テスト | 20質問 | タイプテスト' : 
           language === 'zh-cn' ? '免费自恋倾向测试 | 20题 | TypeTest' :
           '나르시시즘 성향 테스트 - 타입테스트',
    description,
    canonical: 'https://type-test.site/narcissism',
    keywords: language === 'en' ? 'narcissism test, narcissistic personality, grandiose narcissism, vulnerable narcissism, personality disorder test, psychology assessment' :
              language === 'ja' ? 'ナルシシズムテスト、ナルシシスト性格、誇大型ナルシシズム、脆弱型ナルシシズム、性格障害テスト、心理評価' :
              language === 'zh-cn' ? '自恋测试, 自恋人格, 过大型自恋, 脆弱型自恋, 人格障碍测试, 心理评估' :
              '나르시시즘 테스트, 나르시시스트 성격, 과대형 나르시시즘, 취약형 나르시시즘, 성격장애 테스트, 심리 평가',
    ogImage: 'https://type-test.site/favicon.svg',
    type: 'article' as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Quiz",
      "name": language === 'en' ? 'Narcissism Tendency Test' : 
             language === 'ja' ? 'ナルシシズム傾向テスト' : 
             language === 'zh-cn' ? '自恋倾向测试' :
             '나르시시즘 성향 테스트',
      "description": description,
      "url": "https://type-test.site/narcissism",
      "author": {
        "@type": "Organization",
        "name": "TypeTest"
      },
      "datePublished": "2024-07-07",
      "dateModified": "2025-01-21",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ShareAction",
        "userInteractionCount": "8500"
      }
    }
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
      case 'zh-cn':
        return narcissismQuestionsZhCn;
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
      case 'zh-cn':
        return narcissismResultsZhCn;
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