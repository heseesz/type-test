import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AttachmentQuestion } from '@/lib/attachment-types';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface AttachmentTestScreenProps {
  currentQuestion: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onRestart: () => void;
  questions: AttachmentQuestion[];
}

export function AttachmentTestScreen({
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  onRestart,
  questions
}: AttachmentTestScreenProps) {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleBackToMain = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/10 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto space-y-6 z-10 relative">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{t('test.progress')}</span>
            <span className="text-sm font-extrabold text-pink-600 dark:text-pink-400">{currentQuestion + 1} / {questions.length}</span>
          </div>
          {/* Custom Sleek Progress Bar */}
          <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card with slide transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-8 min-h-[3.5rem] flex items-center justify-center">
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-800 dark:text-zinc-200 leading-relaxed break-keep">
                    {question.question}
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {question.answers.map((answer, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.985 }}
                    >
                      <Button
                        onClick={() => onAnswerSelect(index)}
                        variant="outline"
                        className={`w-full text-left p-4 sm:p-5 md:p-6 h-auto justify-start transition-all duration-300 rounded-xl min-h-[56px] touch-manipulation border-2 ${
                          selectedAnswer === index
                            ? 'bg-pink-50/50 dark:bg-pink-950/20 border-pink-500 dark:border-pink-400 text-pink-700 dark:text-pink-300 shadow-md ring-2 ring-pink-500/20 font-bold'
                            : 'bg-white dark:bg-zinc-800 hover:bg-pink-50/20 dark:hover:bg-pink-950/10 border-zinc-200 dark:border-zinc-850 hover:border-pink-300 dark:hover:border-pink-900 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div className={`w-5 h-5 border-2 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
                            selectedAnswer === index
                              ? 'bg-pink-500 border-pink-500 text-white'
                              : 'border-zinc-300 dark:border-zinc-650'
                          }`}>
                            {selectedAnswer === index && (
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            )}
                          </div>
                          <span className="text-sm sm:text-base font-semibold leading-relaxed break-keep text-left flex-1">
                            {answer.text}
                          </span>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation and home controls (unified layout) */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex justify-between items-center w-full gap-4">
            {/* Left: Previous */}
            <Button
              variant="outline"
              onClick={onPrevious}
              className={`flex-1 py-5 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-xl ${
                currentQuestion === 0 ? 'invisible' : ''
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('test.previous')}
            </Button>

            {/* Center: To Welcome screen */}
            <Button
              onClick={onRestart}
              className="flex-1 py-5 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-900/60 font-bold rounded-xl"
            >
              {t('test.home')}
            </Button>

            {/* Right: Next / Results */}
            <Button
              onClick={onNext}
              disabled={selectedAnswer === null}
              className="flex-1 py-5 bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white font-bold rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? t('test.showResult') : t('test.next')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Back to TypeTest Main Home */}
          <Button 
            onClick={handleBackToMain}
            variant="outline"
            className="w-full py-5 bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-sm flex items-center justify-center gap-2 rounded-xl font-bold"
          >
            <Home className="w-4.5 h-4.5" />
            {t('test.backToMain')}
          </Button>
          
          {/* Footer Links & Copyright */}
          <div className="flex flex-col items-center gap-4 mt-6 pb-2">
            <div className="flex justify-center items-center gap-4 text-sm">
              <AboutUs />
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <PrivacyPolicy />
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <ContactUs />
            </div>
            <div className="text-center text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
              &copy; 2026 TypeTest. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}