import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'es';

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
    'result.personalityTraits': '당신의 성향 특징',
    'result.yourScore': '당신의 점수',
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
    'result.personalityTraits': 'Your Personality Traits',
    'result.yourScore': 'Your Score',
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
  },
  es: {
    'welcome.title': 'Test de Personalidad Teto-Egen',
    'welcome.subtitle': 'Descubre tu verdadero tipo de personalidad a través de un análisis psicológico profundo',
    'welcome.selectGender': 'Selecciona tu género',
    'welcome.male': 'Masculino',
    'welcome.female': 'Femenino',
    'test.progress': 'Pregunta {current} de {total}',
    'test.previous': 'Anterior',
    'test.next': 'Siguiente',
    'test.home': 'Inicio',
    'result.title': 'Tu Resultado',
    'result.personalityTraits': 'Tus Rasgos de Personalidad',
    'result.yourScore': 'Tu Puntuación',
    'result.personality': 'Tu Tipo de Personalidad',
    'result.score': 'Puntuación',
    'result.tetoScore': 'Tendencia Teto',
    'result.egenScore': 'Tendencia Egen',
    'result.points': 'pts',
    'result.share': 'Compartir Resultado',
    'result.shareTitle': '¡Acabo de completar el Test de Personalidad Teto-Egen!',
    'result.shareText': 'Mi resultado: {result}. ¡Haz el test tú también!',
    'result.restart': 'Hacer Prueba de Nuevo',
    'result.copySuccess': 'Enlace copiado al portapapeles',
    'result.copySuccessDesc': '¡Resultado copiado al portapapeles!',
    'result.copyFail': 'Error al copiar',
    'result.copyFailDesc': 'No se pudo copiar el resultado.',
    'result.copyError': 'Error al copiar enlace',
    'result.teto': 'Teto',
    'result.egen': 'Egen',
    'result.male': 'Masculino',
    'result.female': 'Femenino',
    'result.vs': 'vs',
    'theme.toggle': 'Cambiar tema'
  }
};

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  if (browserLang.startsWith('es')) {
    return 'es';
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