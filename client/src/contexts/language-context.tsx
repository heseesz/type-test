import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'es' | 'zh-cn' | 'zh-tw' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  ko: {
    // Meta
    'meta.title': '타입테스트',
    'meta.description': '다양한 성격 테스트와 AI 컨텐츠로 당신의 진짜 모습을 발견해보세요.',
    
    // Site
    'site.title': '타입테스트',
    'site.subtitle': '나를 알아가는 모든 컨텐츠',
    'site.footer': '더 많은 컨텐츠가 곧 추가됩니다!',
    
    // Tests
    'tests.tetoEgen.title': '테토-에겐 성향 테스트',
    'tests.tetoEgen.description': '당신의 성향이 테토형과 에겐형 중 어느 쪽에 가까운지 확인하세요.',
    'tests.tetoEgen.start': '테스트 시작하기',
    'tests.tetoEgen.meta.title': '타입테스트: Teto-Egen 성향 테스트',
    'tests.tetoEgen.meta.description': '당신의 성향을 알아보세요! 간단한 질문을 통해 테토형과 에겐형 중 어느 쪽에 가까운지 확인할 수 있습니다.',
    'tests.comingSoon.title': '컨텐츠 준비중',
    'tests.comingSoon.description': '곧 새로운 컨텐츠가 추가될 예정입니다',
    'tests.comingSoon.button': '준비 중',
    
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
    'test.backToMain': '← 메인으로 돌아가기',
    
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
    // Meta
    'meta.title': 'TypeTest',
    'meta.description': 'Discover your true self with various personality tests. Accurate personality type classification through psychological analysis.',
    
    // Site
    'site.title': 'TypeTest',
    'site.subtitle': 'Discover yourself through psychological testing',
    'site.footer': 'More tests coming soon!',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen Personality Test',
    'tests.tetoEgen.description': 'Find out whether your personality is closer to Teto or Egen type.',
    'tests.tetoEgen.start': 'Start Test',
    'tests.tetoEgen.meta.title': 'TypeTest: Teto-Egen Personality Test',
    'tests.tetoEgen.meta.description': 'Discover your true personality type through in-depth psychological analysis. Take our Korean personality classification test to find out if you\'re more Teto or Egen.',
    'tests.comingSoon.title': 'New Test',
    'tests.comingSoon.description': 'New psychological tests will be added soon',
    'tests.comingSoon.button': 'Coming Soon',
    
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
    'test.backToMain': '← Back to Main',
    
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
    'meta.title': 'TypeTest',
    'meta.description': 'Descubre tu verdadero tipo de personalidad a través de análisis psicológico en profundidad. Realiza nuestro test de clasificación de personalidad coreana para saber si eres más Teto o Egen.',
    
    'site.title': 'TypeTest',
    'site.subtitle': 'Descúbrete a través de pruebas psicológicas',
    'site.footer': '¡Más pruebas próximamente!',
    
    // Tests
    'tests.tetoEgen.title': 'Test de Personalidad Teto-Egen',
    'tests.tetoEgen.description': 'Descubre si tu personalidad se acerca más al tipo Teto o al tipo Egen.',
    'tests.tetoEgen.start': 'Comenzar Test',
    'tests.tetoEgen.meta.title': 'TypeTest: Test de Personalidad Teto-Egen',
    'tests.tetoEgen.meta.description': 'Descubre tu verdadero tipo de personalidad a través de análisis psicológico en profundidad. Realiza nuestro test de clasificación de personalidad coreana para saber si eres más Teto o Egen.',
    'tests.comingSoon.title': 'Nueva Prueba',
    'tests.comingSoon.description': 'Próximamente se añadirán nuevas pruebas psicológicas',
    'tests.comingSoon.button': 'Próximamente',
    
    'welcome.title': 'Test de Personalidad Teto-Egen',
    'welcome.subtitle': '¡Descubre tu verdadero tipo de personalidad!',
    'welcome.selectGender': 'Selecciona tu género',
    'welcome.male': 'Masculino',
    'welcome.female': 'Femenino',
    'test.progress': 'Pregunta {current} de {total}',
    'test.previous': 'Anterior',
    'test.next': 'Siguiente',
    'test.home': 'Inicio',
    'test.backToMain': '← Volver al Inicio',
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
  },
  'zh-cn': {
    'meta.title': 'TypeTest',
    'meta.description': '通过深入的心理分析发现您的真实性格类型。进行我们的韩国性格分类测试，了解您更偏向于 Teto 还是 Egen 类型。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '通过心理测试发现自己',
    'site.footer': '更多测试即将推出！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen 性格测试',
    'tests.tetoEgen.description': '确认您的性格更接近 Teto 型还是 Egen 型。',
    'tests.tetoEgen.start': '开始测试',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen 性格测试',
    'tests.tetoEgen.meta.description': '通过深入的心理分析发现您的真实性格类型。进行我们的韩国性格分类测试，了解您更偏向于 Teto 还是 Egen 类型。',
    'tests.comingSoon.title': '新测试',
    'tests.comingSoon.description': '即将推出新的心理测试',
    'tests.comingSoon.button': '即将推出',
    
    // Welcome Screen
    'welcome.title': 'Teto-Egen 性格测试',
    'welcome.subtitle': '发现你的性格类型！',
    'welcome.selectGender': '请选择你的性别',
    'welcome.male': '男性',
    'welcome.female': '女性',
    
    // Test Screen
    'test.progress': '第 {current} 题，共 {total} 题',
    'test.previous': '上一题',
    'test.next': '下一题',
    'test.home': '首页',
    'test.backToMain': '← 返回主页',
    
    // Result Screen
    'result.title': '测试结果',
    'result.personalityTraits': '你的性格特征',
    'result.yourScore': '你的得分',
    'result.tetoScore': 'Teto 倾向',
    'result.egenScore': 'Egen 倾向',
    'result.points': '分',
    'result.share': '分享结果',
    'result.restart': '重新测试',
    'result.shareTitle': '我完成了 Teto-Egen 性格测试！',
    'result.shareText': '我的结果：{result}。你也来测试一下吧！',
    'result.copySuccess': '已复制到剪贴板',
    'result.copySuccessDesc': '结果已复制到剪贴板！',
    'result.copyFail': '复制失败',
    'result.copyFailDesc': '无法复制结果。',
    
    // Theme
    'theme.toggle': '切换主题'
  },
  'zh-tw': {
    'meta.title': 'TypeTest',
    'meta.description': '透過深入的心理分析發現您的真實性格類型。進行我們的韓國性格分類測試，了解您更偏向於 Teto 還是 Egen 類型。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '透過心理測試發現自己',
    'site.footer': '更多測試即將推出！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen 性格測試',
    'tests.tetoEgen.description': '確認您的性格更接近 Teto 型還是 Egen 型。',
    'tests.tetoEgen.start': '開始測試',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen 性格測試',
    'tests.tetoEgen.meta.description': '透過深入的心理分析發現您的真實性格類型。進行我們的韓國性格分類測試，了解您更偏向於 Teto 還是 Egen 類型。',
    'tests.comingSoon.title': '新測試',
    'tests.comingSoon.description': '即將推出新的心理測試',
    'tests.comingSoon.button': '即將推出',
    
    // Welcome Screen
    'welcome.title': 'Teto-Egen 性格測試',
    'welcome.subtitle': '發現你的人格類型！',
    'welcome.selectGender': '請選擇你的性別',
    'welcome.male': '男性',
    'welcome.female': '女性',
    
    // Test Screen
    'test.progress': '第 {current} 題，共 {total} 題',
    'test.previous': '上一題',
    'test.next': '下一題',
    'test.home': '首頁',
    'test.backToMain': '← 返回主頁',
    
    // Result Screen
    'result.title': '測試結果',
    'result.personalityTraits': '你的性格特徵',
    'result.yourScore': '你的得分',
    'result.tetoScore': 'Teto 傾向',
    'result.egenScore': 'Egen 傾向',
    'result.points': '分',
    'result.share': '分享結果',
    'result.restart': '重新測試',
    'result.shareTitle': '我完成了 Teto-Egen 性格測試！',
    'result.shareText': '我的結果：{result}。你也來測試一下吧！',
    'result.copySuccess': '已複製到剪貼簿',
    'result.copySuccessDesc': '結果已複製到剪貼簿！',
    'result.copyFail': '複製失敗',
    'result.copyFailDesc': '無法複製結果。',
    
    // Theme
    'theme.toggle': '切換主題'
  },
  ja: {
    'meta.title': 'TypeTest',
    'meta.description': '深層心理分析を通じてあなたの真の性格タイプを発見しましょう。韓国の性格分類テストを受けて、あなたがTetoタイプかEgenタイプかを確認してください。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '心理テストで自分を発見',
    'site.footer': 'より多くのテストが近日公開予定！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen性格テスト',
    'tests.tetoEgen.description': 'あなたの性格がTetoタイプとEgenタイプのどちらに近いかを確認しましょう。',
    'tests.tetoEgen.start': 'テスト開始',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen性格テスト',
    'tests.tetoEgen.meta.description': '深層心理分析を通じてあなたの真の性格タイプを発見しましょう。韓国の性格分類テストを受けて、あなたがTetoタイプかEgenタイプかを確認してください。',
    'tests.comingSoon.title': '新しいテスト',
    'tests.comingSoon.description': '新しい心理テストが近日公開予定',
    'tests.comingSoon.button': '近日公開',
    
    // Welcome Screen
    'welcome.title': 'Teto-Egen性格テスト',
    'welcome.subtitle': 'あなたの性格タイプを発見しましょう！',
    'welcome.selectGender': '性別を選択してください',
    'welcome.male': '男性',
    'welcome.female': '女性',
    
    // Test Screen
    'test.progress': '質問 {current} / {total}',
    'test.previous': '前へ',
    'test.next': '次へ',
    'test.showResult': '結果を見る',
    'test.home': 'ホーム',
    'test.backToMain': '← メインに戻る',
    
    // Result Screen
    'result.title': 'テスト結果',
    'result.personalityTraits': 'あなたの性格特性',
    'result.yourScore': 'あなたのスコア',
    'result.tetoScore': 'Teto傾向',
    'result.egenScore': 'Egen傾向',
    'result.points': '点',
    'result.share': '結果をシェア',
    'result.restart': '再テスト',
    'result.shareTitle': 'Teto-Egen性格テストを完了しました！',
    'result.shareText': '私の結果：{result}。あなたもテストしてみませんか！',
    'result.copySuccess': 'クリップボードにコピーしました',
    'result.copySuccessDesc': '結果がクリップボードにコピーされました！',
    'result.copyFail': 'コピーに失敗しました',
    'result.copyFailDesc': '結果をコピーできませんでした。',
    
    // Theme
    'theme.toggle': 'テーマ切り替え'
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
  if (browserLang.startsWith('zh-cn') || browserLang === 'zh' || browserLang === 'zh-hans') {
    return 'zh-cn';
  }
  if (browserLang.startsWith('zh-tw') || browserLang === 'zh-hant') {
    return 'zh-tw';
  }
  if (browserLang.startsWith('ja')) {
    return 'ja';
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

  // Update document title and meta description when language changes
  useEffect(() => {
    const newTitle = t('meta.title');
    const newDescription = t('meta.description');
    
    document.title = newTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', newDescription);
    }
  }, [language, t]);

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