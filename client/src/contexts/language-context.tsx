import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  ko: {
    // Welcome Screen
    'welcome.title': '테토-에겐 성향 테스트',
    'welcome.subtitle': '당신의 성향을 알아보세요!',
    'welcome.selectGender': '성별을 선택해주세요',
    'welcome.male': '남자',
    'welcome.female': '여자',
    
    // Test Screen
    'test.progress': '진행률',
    'test.previous': '이전',
    'test.next': '다음',
    'test.showResult': '결과 보기',
    'test.home': '처음으로',
    
    // Result Screen
    'result.title': '테스트 결과',
    'result.tetoScore': '테토 성향',
    'result.egenScore': '에겐 성향',
    'result.points': '점',
    'result.share': '결과 공유하기',
    'result.restart': '다시 테스트하기',
    'result.shareTitle': '테토-에겐 성향 테스트 결과',
    'result.shareText': '당신도 테스트해보세요!',
    'result.copySuccess': '클립보드에 복사됨',
    'result.copySuccessDesc': '결과가 클립보드에 복사되었습니다!',
    'result.copyFail': '복사 실패',
    'result.copyFailDesc': '결과 복사에 실패했습니다.',
    
    // Personality Types
    'personality.teto_male': '테토남',
    'personality.egen_male': '에겐남',
    'personality.teto_female': '테토녀',
    'personality.egen_female': '에겐녀',
    
    // Theme
    'theme.toggle': '테마 전환'
  },
  en: {
    // Welcome Screen
    'welcome.title': 'Teto-Egen Personality Test',
    'welcome.subtitle': 'Discover your personality type!',
    'welcome.selectGender': 'Please select your gender',
    'welcome.male': 'Male',
    'welcome.female': 'Female',
    
    // Test Screen
    'test.progress': 'Progress',
    'test.previous': 'Previous',
    'test.next': 'Next',
    'test.showResult': 'Show Result',
    'test.home': 'Home',
    
    // Result Screen
    'result.title': 'Test Result',
    'result.tetoScore': 'Teto Tendency',
    'result.egenScore': 'Egen Tendency',
    'result.points': 'pts',
    'result.share': 'Share Result',
    'result.restart': 'Take Test Again',
    'result.shareTitle': 'Teto-Egen Personality Test Result',
    'result.shareText': 'Take the test yourself!',
    'result.copySuccess': 'Copied to clipboard',
    'result.copySuccessDesc': 'Result has been copied to clipboard!',
    'result.copyFail': 'Copy failed',
    'result.copyFailDesc': 'Failed to copy result.',
    
    // Personality Types
    'personality.teto_male': 'Teto Male',
    'personality.egen_male': 'Egen Male',
    'personality.teto_female': 'Teto Female',
    'personality.egen_female': 'Egen Female',
    
    // Theme
    'theme.toggle': 'Toggle theme'
  }
};

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  return 'en'; // Default to English
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'ko' || saved === 'en')) {
      return saved as Language;
    }
    return detectBrowserLanguage();
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  useEffect(() => {
    // Set document language attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}