import { useState, useEffect } from 'react';
import { AttachmentWelcomeScreen } from '@/components/attachment/attachment-welcome-screen';
import { AttachmentTestScreen } from '@/components/attachment/attachment-test-screen';
import { AttachmentResultScreen } from '@/components/attachment/attachment-result-screen';
import { attachmentQuestions, attachmentResults, attachmentQuestionsEn, attachmentResultsEn, attachmentQuestionsJa, attachmentResultsJa } from '@/lib/attachment-data';
import { attachmentQuestionsZhCn, attachmentResultsZhCn } from '@/lib/attachment-data-zh-cn';
import { AttachmentTestState, AttachmentType } from '@/lib/attachment-types';
import { shuffleArray } from '@/lib/shuffle-utils';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';

export default function AttachmentStyle() {
  const { language } = useLanguage();
  
  // Set meta tags for attachment style page
  const description = language === 'en' ? 'Discover your attachment style through 36 questions. Are you Secure, Anxious, Avoidant, or Fearful-Avoidant? Take the free psychology-based attachment test.' :
                     language === 'ja' ? '36の質問であなたの愛着スタイルを診断。安定型、不安型、回避型、混乱型のうち、あなたはどのタイプ？心理学に基づく無料愛着テスト。' :
                     language === 'zh-cn' ? '通过36个问题了解你的依恋风格。安全型、焦虑型、回避型、混乱型，你是哪种类型？基于心理学的免费依恋测试。' :
                     '36개 질문으로 알아보는 당신의 애착 스타일. 안정형, 불안형, 회피형, 혼란형 중 나는 어떤 유형일까? 심리학 기반 무료 애착 유형 테스트.';

  const metaConfig = {
    title: language === 'en' ? 'Adult Attachment Style Test - TypeTest' : 
           language === 'ja' ? '成人愛着スタイルテスト - TypeTest' : 
           language === 'zh-cn' ? '成人依恋风格测试 - TypeTest' :
           '성인 애착 유형 테스트 - 타입테스트',
    description,
    canonical: 'https://type-test.co.kr/attachment-style',
    keywords: language === 'en' ? 'attachment style test, adult attachment, secure attachment, anxious attachment, avoidant attachment, fearful avoidant, psychology test' :
              language === 'ja' ? '愛着スタイルテスト、成人愛着、安定愛着、不安愛着、回避愛着、恐れ回避、心理学テスト' :
              language === 'zh-cn' ? '依恋风格测试, 成人依恋, 安全型依恋, 焦虑型依恋, 回避型依恋, 恐惧回避型, 心理学测试' :
              '애착유형 테스트, 성인 애착, 안정 애착, 불안 애착, 회피 애착, 두려움 회피, 심리학 테스트',
    ogImage: 'https://type-test.co.kr/og-image.jpg',
    type: 'article' as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Quiz",
      "name": language === 'en' ? 'Adult Attachment Style Test' : 
             language === 'ja' ? '成人愛着スタイルテスト' : 
             language === 'zh-cn' ? '成人依恋风格测试' :
             '성인 애착 유형 테스트',
      "description": description,
      "url": "https://type-test.co.kr/attachment-style",
      "author": {
        "@type": "Organization",
        "name": "TypeTest"
      },
      "datePublished": "2024-07-05",
      "dateModified": "2025-01-21",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ShareAction",
        "userInteractionCount": "12000"
      }
    }
  };
  
  useMetaTags(metaConfig);
  
  // Get the appropriate questions and results based on language
  const currentQuestions = language === 'en' ? attachmentQuestionsEn : 
                          language === 'ja' ? attachmentQuestionsJa : 
                          language === 'zh-cn' ? attachmentQuestionsZhCn :
                          attachmentQuestions;
  const currentResults = language === 'en' ? attachmentResultsEn : 
                        language === 'ja' ? attachmentResultsJa : 
                        language === 'zh-cn' ? attachmentResultsZhCn :
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

  // Update questions when language changes during test
  useEffect(() => {
    if (testState.screen === 'test' && testState.questionOrder.length > 0) {
      const updatedShuffledQuestions = testState.questionOrder.map(index => currentQuestions[index]);
      setTestState(prev => ({
        ...prev,
        shuffledQuestions: updatedShuffledQuestions
      }));
    }
  }, [language, currentQuestions, testState.questionOrder, testState.screen]);

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
    // With 0-4 scale: 
    // - Avoidance items (18 questions): max score = 18 × 4 = 72 points
    // - Anxiety items (18 questions): max score = 18 × 4 = 72 points
    // Using median (36) as threshold for each dimension
    const avoidanceThreshold = 36;
    const anxietyThreshold = 36;
    
    if (avoidanceScore < avoidanceThreshold && anxietyScore < anxietyThreshold) {
      return 'secure';
    } else if (avoidanceScore < avoidanceThreshold && anxietyScore >= anxietyThreshold) {
      return 'anxious';
    } else if (avoidanceScore >= avoidanceThreshold && anxietyScore < anxietyThreshold) {
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