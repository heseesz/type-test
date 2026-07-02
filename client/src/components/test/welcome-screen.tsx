import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gender } from "@/lib/test-types";
import { useLanguage } from "@/contexts/language-context";
import { InfoPopup } from "@/components/info-popup";
import { Home, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { AboutUs } from "@/components/about-us";
import { ContactUs } from "@/components/contact-us";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onGenderSelect: (gender: Gender) => void;
}

export function WelcomeScreen({ onGenderSelect }: WelcomeScreenProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto z-10 relative"
    >
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 leading-tight mb-4 break-keep">
          {t('welcome.title')}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-base leading-relaxed break-keep">
          {t('welcome.subtitle')}
        </p>
        <div className="flex justify-center mt-4">
          <InfoPopup />
        </div>
      </div>
      
      <Card className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl overflow-hidden">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm font-bold border border-indigo-200 dark:border-indigo-900/60 shadow-inner mb-4">
              <Sparkles className="w-4 h-4 fill-current animate-pulse" />
              <span>{t('welcome.selectGender')}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => onGenderSelect('male')}
                className="w-full group bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-50 dark:hover:bg-blue-900/35 border-2 border-blue-200 dark:border-blue-700/60 hover:border-blue-400 rounded-2xl p-6 h-auto transition-all duration-300 text-blue-700 dark:text-blue-300 min-h-[100px] touch-manipulation flex flex-col items-center justify-center space-y-3"
                variant="outline"
              >
                <span className="text-4xl">👨</span>
                <span className="text-lg font-bold">{t('welcome.male')}</span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => onGenderSelect('female')}
                className="w-full group bg-pink-50/50 dark:bg-pink-900/20 hover:bg-pink-50 dark:hover:bg-pink-900/35 border-2 border-pink-200 dark:border-pink-700/60 hover:border-pink-400 rounded-2xl p-6 h-auto transition-all duration-300 text-pink-700 dark:text-pink-300 min-h-[100px] touch-manipulation flex flex-col items-center justify-center space-y-3"
                variant="outline"
              >
                <span className="text-4xl">👩</span>
                <span className="text-lg font-bold">{t('welcome.female')}</span>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
      
      {/* Back to Main Button */}
      <div className="flex justify-center mt-8">
        <a href="/">
          <Button
            variant="outline"
            className="px-6 py-5 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4.5 h-4.5" />
            {t('test.backToMain')}
          </Button>
        </a>
      </div>
      
      {/* Footer Links */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm">
        <AboutUs />
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <PrivacyPolicy />
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <ContactUs />
      </div>
    </motion.div>
  );
}
