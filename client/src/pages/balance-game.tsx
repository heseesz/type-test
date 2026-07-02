import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Difficulty, 
  BalanceQuestion, 
  balanceGameQuestions, 
  getLocalizedQuestions 
} from '@/lib/balance-game-data';
import { shuffleArray } from '@/lib/shuffle-utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Heart, 
  UserCheck, 
  AlertTriangle, 
  ArrowRight, 
  RefreshCw, 
  Share2, 
  ArrowLeft, 
  Check, 
  Smartphone,
  CheckCircle,
  Eye,
  Frown,
  Activity
} from 'lucide-react';

interface AnswerRecord {
  questionId: number;
  difficulty: Difficulty;
  selected: 'A' | 'B';
  originalQuestion: BalanceQuestion;
}

export default function BalanceGame() {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  // Screen state: 'welcome' | 'test' | 'result'
  const [screen, setScreen] = useState<'welcome' | 'test' | 'result'>('welcome');
  
  // Active difficulty during play
  const [difficulty, setDifficulty] = useState<Difficulty>('mild');
  // Record previous difficulty to revert if user cancels spicy warning
  const [prevDifficulty, setPrevDifficulty] = useState<Difficulty>('mild');

  // Shuffled questions lists for each difficulty
  const [shuffledMild, setShuffledMild] = useState<BalanceQuestion[]>([]);
  const [shuffledMedium, setShuffledMedium] = useState<BalanceQuestion[]>([]);
  const [shuffledSpicy, setShuffledSpicy] = useState<BalanceQuestion[]>([]);

  // Indices for each difficulty
  const [indices, setIndices] = useState<Record<Difficulty, number>>({
    mild: 0,
    medium: 0,
    spicy: 0
  });

  // History of answers
  const [history, setHistory] = useState<AnswerRecord[]>([]);

  // Modals visibility
  const [showTransitionModal, setShowTransitionModal] = useState(false);
  const [showSpicyWarningModal, setShowSpicyWarningModal] = useState(false);

  // Set meta tags for SEO and sharing
  const titleText = language === 'en' ? 'Couple/Flirt/Friend Balance Game - TypeTest' :
                    language === 'ja' ? '恋人/サシ/友達用バランスゲーム - タイプテスト' :
                    language === 'zh-cn' ? '情侣/暧昧/朋友平衡游戏 - TypeTest' :
                    '연인/썸/친구용 밸런스 게임 - 타입테스트';

  const descriptionText = language === 'en' ? 'A light and thrilling balance game to play with friends, crushes, or lovers! Record your choices and compare thoughts.' :
                           language === 'ja' ? '友達、気になる人、恋人と一緒に楽しむスリリングなバランスゲーム！あなたの選択を記録し、お互いの考えを合わせてみましょう。' :
                           language === 'zh-cn' ? '与朋友、暧昧对象或恋人一起玩的轻松又刺激的平衡游戏！记录你的选择，了解彼此的想法。' :
                           '친구, 썸, 연인과 함께 즐기는 가볍고 아슬아슬한 밸런스 게임! 당신의 선택을 기록하고 서로의 생각과 비교해 보세요.';

  useMetaTags({
    title: titleText,
    description: descriptionText,
    canonical: 'https://type-test.site/balance-game',
    keywords: 'balance game, couple game, icebreaker questions, flirt questions, 19+ balance game, 밸런스 게임, 19금 밸런스 게임, 커플 질문, 연인 질문, 썸 질문',
    ogImage: 'https://type-test.site/favicon.svg',
    type: 'website'
  });

  // Initialize and shuffle questions when game starts/restarts
  const initializeGame = () => {
    setShuffledMild(shuffleArray([...balanceGameQuestions.mild]));
    setShuffledMedium(shuffleArray([...balanceGameQuestions.medium]));
    setShuffledSpicy(shuffleArray([...balanceGameQuestions.spicy]));
    setIndices({ mild: 0, medium: 0, spicy: 0 });
    setHistory([]);
    setScreen('welcome');
    setDifficulty('mild');
    setPrevDifficulty('mild');
    setShowTransitionModal(false);
    setShowSpicyWarningModal(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  // Helper to get current active shuffled list
  const getShuffledQuestions = (diff: Difficulty) => {
    switch (diff) {
      case 'mild': return shuffledMild;
      case 'medium': return shuffledMedium;
      case 'spicy': return shuffledSpicy;
    }
  };

  const currentQuestions = getShuffledQuestions(difficulty);
  const currentIndex = indices[difficulty];
  const currentQuestion = currentQuestions[currentIndex];

  // Handler for difficulty switch (via top tabs)
  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    if (newDifficulty === difficulty) return;

    if (newDifficulty === 'spicy') {
      setPrevDifficulty(difficulty);
      setShowSpicyWarningModal(true);
    } else {
      setDifficulty(newDifficulty);
    }
  };

  // Confirm Spicy warning
  const confirmSpicyEntry = () => {
    setDifficulty('spicy');
    setShowSpicyWarningModal(false);
  };

  // Cancel Spicy warning (revert)
  const cancelSpicyEntry = () => {
    setDifficulty(prevDifficulty);
    setShowSpicyWarningModal(false);
  };

  // Select an option
  const handleSelectOption = (option: 'A' | 'B') => {
    if (!currentQuestion) return;

    const record: AnswerRecord = {
      questionId: currentQuestion.id,
      difficulty: difficulty,
      selected: option,
      originalQuestion: currentQuestion
    };

    const newHistory = [...history, record];
    setHistory(newHistory);

    // Increment current index
    const nextIndices = { ...indices, [difficulty]: indices[difficulty] + 1 };
    setIndices(nextIndices);

    // Check if current difficulty is completed
    const activeQuestions = getShuffledQuestions(difficulty);
    const isOutOfQuestions = nextIndices[difficulty] >= activeQuestions.length;

    // Check if we hit 10 questions milestone in history
    if (newHistory.length % 10 === 0) {
      setShowTransitionModal(true);
    } else if (isOutOfQuestions) {
      // If we are out of questions in current level
      if (difficulty === 'mild') {
        setDifficulty('medium');
        toast({
          title: language === 'ko' ? "순한 맛 완료!" : "Mild Taste Completed!",
          description: language === 'ko' ? "중간 맛으로 자동 전환됩니다." : "Automatically transitioning to Medium Taste."
        });
      } else if (difficulty === 'medium') {
        setPrevDifficulty('medium');
        setShowSpicyWarningModal(true);
        toast({
          title: language === 'ko' ? "중간 맛 완료!" : "Medium Taste Completed!",
          description: language === 'ko' ? "매운 맛 경고를 확인하세요." : "Please review the Spicy Taste warning."
        });
      } else {
        // Spicy is finished
        setScreen('result');
      }
    }
  };

  // Go to next taste from intermission modal
  const handleTransitionNext = () => {
    setShowTransitionModal(false);
    if (difficulty === 'mild') {
      setDifficulty('medium');
    } else if (difficulty === 'medium') {
      setPrevDifficulty(difficulty);
      setShowSpicyWarningModal(true);
    } else {
      // Already spicy, nothing to transition to
      setScreen('result');
    }
  };

  // Get active color classes based on difficulty
  const getThemeConfig = (diff: Difficulty) => {
    switch (diff) {
      case 'mild':
        return {
          bg: 'bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 dark:from-rose-950 dark:via-orange-950 dark:to-stone-900',
          accent: 'text-pink-500',
          accentBg: 'bg-pink-500',
          accentHover: 'hover:bg-pink-600',
          border: 'border-pink-200 dark:border-pink-900',
          btnA: 'bg-white dark:bg-zinc-800 hover:bg-pink-50 dark:hover:bg-pink-950/20 border-pink-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100',
          btnB: 'bg-white dark:bg-zinc-800 hover:bg-orange-50 dark:hover:bg-orange-950/20 border-orange-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100',
          tabActive: 'bg-pink-500 text-white shadow-md',
          progressBar: 'bg-pink-500',
          badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
          title: 'text-pink-600 dark:text-pink-400'
        };
      case 'medium':
        return {
          bg: 'bg-gradient-to-br from-purple-100 via-violet-50 to-pink-100 dark:from-purple-950 dark:via-violet-950 dark:to-fuchsia-950',
          accent: 'text-violet-500',
          accentBg: 'bg-violet-500',
          accentHover: 'hover:bg-violet-600',
          border: 'border-violet-200 dark:border-violet-900',
          btnA: 'bg-white dark:bg-zinc-800 hover:bg-violet-50 dark:hover:bg-violet-950/20 border-violet-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100',
          btnB: 'bg-white dark:bg-zinc-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 border-fuchsia-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100',
          tabActive: 'bg-violet-500 text-white shadow-md',
          progressBar: 'bg-violet-500',
          badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
          title: 'text-violet-600 dark:text-violet-400'
        };
      case 'spicy':
        return {
          bg: 'bg-gradient-to-br from-red-950 via-stone-900 to-black text-rose-100 dark:from-red-950 dark:via-stone-950 dark:to-black',
          accent: 'text-red-500',
          accentBg: 'bg-red-600',
          accentHover: 'hover:bg-red-700',
          border: 'border-red-900',
          btnA: 'bg-zinc-900/80 border-red-900/60 hover:bg-red-950/40 hover:border-red-500 text-red-50 dark:text-red-100 transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]',
          btnB: 'bg-zinc-900/80 border-red-900/60 hover:bg-red-950/40 hover:border-red-500 text-red-50 dark:text-red-100 transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]',
          tabActive: 'bg-red-600 text-white shadow-lg shadow-red-900/50 border border-red-500',
          progressBar: 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.7)]',
          badge: 'bg-red-950/80 text-red-400 border border-red-900',
          title: 'text-red-500 font-extrabold tracking-wider animate-pulse'
        };
    }
  };

  const theme = getThemeConfig(difficulty);

  // Helper to render choice text localized
  const getChoiceTexts = (q: BalanceQuestion) => {
    if (language !== 'ko' && q.translations && q.translations[language as keyof typeof q.translations]) {
      return q.translations[language as keyof typeof q.translations];
    }
    return { optionA: q.optionA, optionB: q.optionB };
  };

  // Share result to clipboard
  const handleShare = () => {
    let text = `🔥 TypeTest - ${t('tests.balanceGame.title')} 🔥\n\n`;
    
    if (language === 'ko') {
      text += `제가 선택한 밸런스 게임 질문 회고 결과입니다!\n`;
      text += `총 ${history.length}개의 질문에 답했습니다.\n\n`;
    } else {
      text += `Here are my choices from the Balance Game!\n`;
      text += `Answered ${history.length} questions in total.\n\n`;
    }

    history.forEach((h, idx) => {
      const texts = getChoiceTexts(h.originalQuestion);
      const selectedText = h.selected === 'A' ? texts.optionA : texts.optionB;
      const diffLabel = h.difficulty === 'mild' ? '순한맛/Mild' :
                        h.difficulty === 'medium' ? '중간맛/Medium' : '매운맛/Spicy';
      text += `Q${idx + 1}. [${diffLabel}] 선택: ${selectedText}\n`;
    });

    text += `\n👉 테스트 해보기: https://type-test.site/balance-game`;

    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: language === 'ko' ? "결과가 복사되었습니다!" : "Results copied!",
        description: language === 'ko' ? "클립보드에 복사된 결과를 공유해보세요." : "Share the copied text with your friends."
      });
    }).catch(() => {
      toast({
        variant: "destructive",
        title: language === 'ko' ? "복사 실패" : "Copy failed",
        description: language === 'ko' ? "결과를 수동으로 복사해주세요." : "Please copy the results manually."
      });
    });
  };

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-700 flex items-center justify-center p-4 pt-20 md:pt-6 relative overflow-hidden`}>
      
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/10 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto z-10 relative">
        
        {/* Back button (Only Welcome screen hides it) */}
        {screen !== 'welcome' && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute -top-12 left-0 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
            onClick={initializeGame}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ko' ? '처음으로' : 'To Beginning'}
          </Button>
        )}

        <AnimatePresence mode="wait">
          
          {/* WELCOME SCREEN */}
          {screen === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden">
                {/* 19+ Warning Ribbon */}
                <div className="absolute top-0 right-0 bg-red-600 text-white font-extrabold text-xs px-4 py-1.5 rotate-45 translate-x-8 translate-y-3 shadow-md z-20 flex items-center gap-1">
                  19禁 <Flame className="w-3.5 h-3.5 fill-white" />
                </div>

                <CardContent className="p-8 text-center space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold animate-pulse border border-red-200 dark:border-red-900/60">
                      <Flame className="w-4 h-4 fill-current" />
                      <span>{language === 'ko' ? '어른들을 위한 밸런스 게임' : '19+ Couple & Friend Balance Game'}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight break-keep">
                      {t('tests.balanceGame.title')}
                    </h1>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto whitespace-pre-line text-base leading-relaxed break-keep">
                      {t('tests.balanceGame.description')}
                    </p>
                  </div>

                  {/* Difficulty selector cards */}
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    
                    {/* Mild Card */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer p-4 rounded-xl border border-pink-200 dark:border-pink-950/40 bg-pink-50/40 dark:bg-pink-950/10 hover:bg-pink-50 dark:hover:bg-pink-950/20 text-left transition-colors duration-300 flex items-center justify-between"
                      onClick={() => {
                        setDifficulty('mild');
                        setScreen('test');
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                          <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            {language === 'ko' ? '순한 맛' : 'Mild Taste'}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {language === 'ko' 
                            ? '달달하고 가벼운 일상 연애 가치관 이야기' 
                            : 'Sweet and light questions about daily relationship values'}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-pink-500" />
                    </motion.div>

                    {/* Medium Card */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer p-4 rounded-xl border border-purple-200 dark:border-purple-950/40 bg-purple-50/40 dark:bg-purple-950/10 hover:bg-purple-50 dark:hover:bg-purple-950/20 text-left transition-colors duration-300 flex items-center justify-between"
                      onClick={() => {
                        setDifficulty('medium');
                        setScreen('test');
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Flame className="w-5 h-5 text-purple-500 fill-purple-500" />
                          <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            {language === 'ko' ? '중간 맛 (19금🔞)' : 'Medium Taste (18+🔞)'}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {language === 'ko' 
                            ? '아슬아슬 야릇하고 솔직한 밀당 질문' 
                            : 'Thrill-seeking, suggestive, and honest couple questions'}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-500" />
                    </motion.div>

                    {/* Spicy Card */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer p-4 rounded-xl border border-red-900/40 bg-red-950/5 dark:bg-red-950/10 hover:bg-red-950/10 text-left transition-colors duration-300 flex items-center justify-between"
                      onClick={() => {
                        setPrevDifficulty('mild');
                        setShowSpicyWarningModal(true);
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Flame className="w-5 h-5 text-red-500 fill-red-500" />
                          <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            {language === 'ko' ? '매운 맛 (후방주의🔞🔥)' : 'Spicy Taste (19+ Warning🔞🔥)'}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {language === 'ko' 
                            ? '속궁합, 성적 취향 등 수위 높은 성인 질문' 
                            : 'High-intimacy questions about preferences & compatibility'}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-red-500 animate-bounce" />
                    </motion.div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* TEST SCREEN */}
          {screen === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              
              {/* Top Taste Tabs/Selector */}
              <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur p-1 rounded-xl flex gap-1 border border-zinc-200/50 dark:border-zinc-800/50">
                {(['mild', 'medium', 'spicy'] as Difficulty[]).map((d) => {
                  const isActive = difficulty === d;
                  const label = d === 'mild' ? (language === 'ko' ? '순한 맛' : 'Mild') :
                                d === 'medium' ? (language === 'ko' ? '중간 맛' : 'Medium') :
                                (language === 'ko' ? '매운 맛' : 'Spicy');
                  const emoji = d === 'mild' ? '🍬' : d === 'medium' ? '🔥' : '🔞';
                  
                  return (
                    <button
                      key={d}
                      onClick={() => handleDifficultyChange(d)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                        isActive ? theme.tabActive : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/20 dark:hover:bg-zinc-800/20'
                      }`}
                    >
                      <span>{emoji}</span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Progress and Question Counter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  <span>
                    {language === 'ko' ? '답변한 누적 질문' : 'Total Answered'}: {history.length}
                  </span>
                  <span>
                    {difficulty === 'mild' && `${indices.mild + 1} / 30`}
                    {difficulty === 'medium' && `${indices.medium + 1} / 20`}
                    {difficulty === 'spicy' && `${indices.spicy + 1} / 20`}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${theme.progressBar} transition-all duration-500`}
                    style={{ 
                      width: `${
                        difficulty === 'mild' ? (indices.mild / 30) * 100 :
                        difficulty === 'medium' ? (indices.medium / 20) * 100 :
                        (indices.spicy / 20) * 100
                      }%` 
                    }}
                  />
                </div>
              </div>

              {/* Balance Cards Display */}
              <div className="space-y-4">
                {currentQuestion ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Option A Card */}
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col justify-center items-center text-center min-h-[220px] transition-all duration-300 ${theme.btnA}`}
                      onClick={() => handleSelectOption('A')}
                    >
                      <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center font-black text-pink-600 dark:text-pink-400 text-xl mb-4 shadow-inner">
                        A
                      </div>
                      <p className="font-extrabold text-lg leading-relaxed px-2 break-keep">
                        {getChoiceTexts(currentQuestion).optionA}
                      </p>
                    </motion.div>

                    {/* Option B Card */}
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col justify-center items-center text-center min-h-[220px] transition-all duration-300 ${theme.btnB}`}
                      onClick={() => handleSelectOption('B')}
                    >
                      <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center font-black text-orange-600 dark:text-orange-400 text-xl mb-4 shadow-inner">
                        B
                      </div>
                      <p className="font-extrabold text-lg leading-relaxed px-2 break-keep">
                        {getChoiceTexts(currentQuestion).optionB}
                      </p>
                    </motion.div>

                  </div>
                ) : (
                  // Fallback when out of questions
                  <Card className="bg-white/80 dark:bg-zinc-900/90 border-zinc-200 dark:border-zinc-800 p-8 text-center">
                    <CardContent className="space-y-4 pt-6">
                      <Frown className="w-12 h-12 mx-auto text-zinc-400" />
                      <h3 className="text-xl font-bold">
                        {language === 'ko' ? '모든 질문을 완료했습니다!' : 'All questions answered!'}
                      </h3>
                      <Button onClick={() => setScreen('result')} className={theme.accentBg}>
                        {language === 'ko' ? '결과 보기' : 'View Results'}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Bottom control (Quick Skip/Results) */}
              <div className="flex justify-between items-center pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={initializeGame}
                  className="border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {language === 'ko' ? '처음부터 다시' : 'Reset Game'}
                </Button>
                
                <Button 
                  onClick={() => setScreen('result')} 
                  className={`${theme.accentBg} ${theme.accentHover} text-white font-bold shadow-md`}
                  disabled={history.length === 0}
                >
                  {language === 'ko' ? '선택 완료 / 결과 보기' : 'Complete / View Results'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

            </motion.div>
          )}

          {/* RESULT & CHOICE REVIEW SCREEN */}
          {screen === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Card className="bg-white/90 dark:bg-zinc-900/95 border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500" />
                
                <CardHeader className="text-center pb-2 pt-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold mb-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    <span>{language === 'ko' ? '나의 선택 히스토리 회고' : 'My Choices History Review'}</span>
                  </div>
                  <CardTitle className="text-3xl font-black text-zinc-900 dark:text-white">
                    {language === 'ko' ? '내 선택 돌아보기' : 'My Choice Review'}
                  </CardTitle>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 break-keep">
                    {language === 'ko' 
                      ? '게임 동안 내가 고른 선택들을 한눈에 모아보세요.' 
                      : 'Take a look at the choices you made during the game.'}
                  </p>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  
                  {/* Choice items list */}
                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                    {history.map((record, index) => {
                      const texts = getChoiceTexts(record.originalQuestion);
                      const isPickedA = record.selected === 'A';
                      
                      // Badge color based on difficulty
                      const diffBadge = record.difficulty === 'mild' 
                        ? 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-400 dark:border-pink-900/40' 
                        : record.difficulty === 'medium'
                        ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/40'
                        : 'bg-red-950/40 text-red-400 border-red-900';

                      const label = record.difficulty === 'mild' ? (language === 'ko' ? '순한맛' : 'Mild') :
                                    record.difficulty === 'medium' ? (language === 'ko' ? '중간맛' : 'Medium') :
                                    (language === 'ko' ? '매운맛' : 'Spicy');

                      return (
                        <div 
                          key={index} 
                          className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 space-y-3 shadow-sm hover:shadow transition-shadow duration-300"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-zinc-400">Q{index + 1}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${diffBadge}`}>
                              {label}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            {/* Option A display */}
                            <div className={`p-3 rounded-lg border text-sm flex items-start justify-between ${
                              isPickedA 
                                ? 'bg-pink-50/50 dark:bg-pink-950/20 border-pink-300 dark:border-pink-800 font-bold text-zinc-900 dark:text-pink-200' 
                                : 'bg-transparent border-zinc-200/50 dark:border-zinc-800/50 text-zinc-500 dark:text-zinc-500 line-through decoration-zinc-300 dark:decoration-zinc-800'
                            }`}>
                              <span>{texts.optionA}</span>
                              {isPickedA && <Check className="w-4 h-4 text-pink-500 shrink-0 ml-2" />}
                            </div>

                            {/* Option B display */}
                            <div className={`p-3 rounded-lg border text-sm flex items-start justify-between ${
                              !isPickedA 
                                ? 'bg-orange-50/50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-850 font-bold text-zinc-900 dark:text-orange-200' 
                                : 'bg-transparent border-zinc-200/50 dark:border-zinc-800/50 text-zinc-500 dark:text-zinc-500 line-through decoration-zinc-300 dark:decoration-zinc-800'
                            }`}>
                              <span>{texts.optionB}</span>
                              {!isPickedA && <Check className="w-4 h-4 text-orange-500 shrink-0 ml-2" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Result Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={initializeGame}
                      className="flex-1 font-bold border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 py-6 text-base"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {language === 'ko' ? '다시 시작하기' : 'Retry Game'}
                    </Button>

                    <Button 
                      onClick={handleShare}
                      className="flex-1 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:opacity-90 text-white py-6 text-base shadow-lg shadow-purple-500/20"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      {language === 'ko' ? '결과 공유하기' : 'Share Results'}
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 1. 10-QUESTIONS INTERMISSION MODAL */}
      <AnimatePresence>
        {showTransitionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowTransitionModal(false)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-md rounded-2xl shadow-2xl p-6 z-10 space-y-6 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mx-auto">
                <Activity className="w-6 h-6" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                  {language === 'ko' ? '10문제 답변 완료!' : '10 Questions Completed!'}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                  {difficulty === 'spicy'
                    ? (language === 'ko' 
                        ? '대단합니다! 매운맛 질문을 계속 진행하시겠습니까? 아니면 결과를 보시겠습니까?' 
                        : 'Amazing! Keep playing Spicy questions or view results?')
                    : (language === 'ko' 
                        ? `더 짜릿하고 자극적인 [${difficulty === 'mild' ? '중간 맛' : '매운 맛'}]으로 넘어가시겠습니까?\n아니면 지금까지의 선택 결과를 보시겠습니까?` 
                        : `Would you like to level up to the [${difficulty === 'mild' ? 'Medium' : 'Spicy'}] difficulty?\nOr view your choice results now?`)}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {/* Level Up Button (If not spicy) */}
                {difficulty !== 'spicy' && (
                  <Button 
                    onClick={handleTransitionNext}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-5 text-sm shadow-md"
                  >
                    {language === 'ko' 
                      ? `${difficulty === 'mild' ? '중간 맛' : '매운 맛'}으로 넘어가기` 
                      : `Go to ${difficulty === 'mild' ? 'Medium' : 'Spicy'} Taste`}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}

                {/* View Results Button */}
                <Button 
                  onClick={() => {
                    setShowTransitionModal(false);
                    setScreen('result');
                  }}
                  variant="secondary"
                  className="w-full font-bold py-5 text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {language === 'ko' ? '지금까지의 결과 보기' : 'View Results Now'}
                </Button>

                {/* Keep Playing Current Button */}
                <Button 
                  onClick={() => setShowTransitionModal(false)}
                  variant="ghost"
                  className="w-full font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                >
                  {language === 'ko' ? '현재 맛 계속하기' : 'Keep Playing Current Taste'}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. SPICY (19+) WARNING MODAL */}
      <AnimatePresence>
        {showSpicyWarningModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={cancelSpicyEntry}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-950 border-2 border-red-500 w-full max-w-md rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.3)] p-6 z-10 space-y-6 text-red-50 relative overflow-hidden"
            >
              {/* Glowing Background Glows */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-red-950 border border-red-500 text-red-500 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-bounce">
                <AlertTriangle className="w-8 h-8" />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-2xl font-black tracking-wide text-red-500 flex items-center justify-center gap-1.5 uppercase">
                  <span>🔞</span>
                  <span>{language === 'ko' ? '매운 맛 수위 경고' : '19+ Spicy Warning'}</span>
                  <span>🔞</span>
                </h3>
                <p className="text-sm text-red-200/90 leading-relaxed font-semibold">
                  {language === 'ko' 
                    ? '매운 맛 질문들은 높은 수위의 성적 대화, 연인 간의 성적 취향, 속궁합 등 자극적이고 노골적인 성인용 질문이 다수 포함되어 있습니다.' 
                    : 'The Spicy difficulty contains explicit 19+ content, adult intimacy preferences, and sexual compatibility questions.'}
                </p>
                <p className="text-xs text-red-400 font-bold italic animate-pulse">
                  {language === 'ko' 
                    ? '*공공장소나 어색한 사이에서의 플레이는 추천하지 않습니다.' 
                    : '*Playing in public or with strangers is not recommended.'}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {/* Continue Spicy */}
                <Button 
                  onClick={() => {
                    confirmSpicyEntry();
                    // If triggered mid-game and screen is 'welcome', change screen to 'test'
                    if (screen === 'welcome') setScreen('test');
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 border border-red-500 text-white font-extrabold py-5 text-sm shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all"
                >
                  {language === 'ko' ? '동의하고 계속 진행하기' : 'I Agree, Continue'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Cancel (Revert difficulty / View Results) */}
                <Button 
                  onClick={() => {
                    cancelSpicyEntry();
                    if (screen === 'welcome') {
                      // Do nothing, stays on welcome screen
                    }
                  }}
                  variant="outline"
                  className="w-full font-bold py-5 text-sm bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  {language === 'ko' ? '돌아가기 (이전 맛 유지)' : 'Go Back (Keep previous)'}
                </Button>

                {/* Direct to results option */}
                {history.length > 0 && (
                  <Button 
                    onClick={() => {
                      setShowSpicyWarningModal(false);
                      setScreen('result');
                    }}
                    variant="ghost"
                    className="w-full font-bold text-red-400/80 hover:text-red-400 hover:bg-red-950/20"
                  >
                    {language === 'ko' ? '여기서 중단하고 결과 보기' : 'Stop here and view results'}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
