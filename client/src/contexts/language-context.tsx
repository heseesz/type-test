import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja';

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
    'tests.tetoEgen.description': '당신의 성향이 테토형과 에겐형 중\n어느 쪽에 가까운지 확인하세요',
    'tests.tetoEgen.start': '테스트 시작하기',
    'tests.tetoEgen.meta.title': '타입테스트: 테토-에겐 성향 테스트',
    'tests.tetoEgen.meta.description': '당신의 성향을 알아보세요! 간단한 질문을 통해 테토형과 에겐형 중 어느 쪽에 가까운지 확인할 수 있습니다.',
    'tests.attachmentStyle.title': '성인 애착 유형 테스트',
    'tests.attachmentStyle.description': '나의 애착 유형을 알아보고\n관계 패턴을 이해해보세요',
    'tests.attachmentStyle.start': '테스트 시작하기',
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
    'test.backToMain': '타입테스트 홈으로 돌아가기',
    
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
    'meta.description': 'Discover your true self with various personality tests and AI content.',
    
    // Site
    'site.title': 'TypeTest',
    'site.subtitle': 'All the content to discover yourself',
    'site.footer': 'More content coming soon!',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen\nPersonality Test',
    'tests.tetoEgen.description': 'Find out whether your personality\nis closer to Teto or Egen type.',
    'tests.tetoEgen.start': 'Start Test',
    'tests.tetoEgen.meta.title': 'TypeTest: Teto-Egen Personality Test',
    'tests.tetoEgen.meta.description': 'Discover your true personality type through in-depth psychological analysis. Take our Korean personality classification test to find out if you\'re more Teto or Egen',
    'tests.attachmentStyle.title': 'Adult Attachment\nStyle Test',
    'tests.attachmentStyle.description': 'Discover your attachment style\nand understand your\nrelationship patterns',
    'tests.attachmentStyle.start': 'Start Test',
    'tests.comingSoon.title': 'Preparing content',
    'tests.comingSoon.description': 'New content will be added soon',
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
    'test.backToMain': 'Back to TypeTest',
    
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
    'meta.description': 'Descubre tu verdadero yo con diversas pruebas de personalidad y contenido de IA.',
    
    'site.title': 'TypeTest',
    'site.subtitle': 'Todo el contenido para descubrirte',
    'site.footer': '¡Pronto habrá más contenido!',
    
    // Tests
    'tests.tetoEgen.title': 'Test de Personalidad Teto-Egen',
    'tests.tetoEgen.description': 'Descubre si tu personalidad se acerca más\nal tipo Teto o al tipo Egen',
    'tests.tetoEgen.start': 'Comenzar Test',
    'tests.tetoEgen.meta.title': 'TypeTest: Test de Personalidad Teto-Egen',
    'tests.tetoEgen.meta.description': 'Descubre tu verdadero tipo de personalidad a través de análisis psicológico en profundidad. Realiza nuestro test de clasificación de personalidad coreana para saber si eres más Teto o Egen.',
    'tests.attachmentStyle.title': 'Test de Estilo de Apego Adulto',
    'tests.attachmentStyle.description': 'Descubre tu estilo de apego y\ncomprende tus patrones de relación',
    'tests.attachmentStyle.start': 'Comenzar Test',
    'tests.comingSoon.title': 'Preparando Contenido',
    'tests.comingSoon.description': 'Pronto se añadirá nuevo contenido',
    'tests.comingSoon.button': 'Próximamente',
    
    'welcome.title': 'Test de Personalidad\nTeto-Egen',
    'welcome.subtitle': '¡Descubre tu verdadero tipo de personalidad!',
    'welcome.selectGender': 'Selecciona tu género',
    'welcome.male': 'Masculino',
    'welcome.female': 'Femenino',
    'test.progress': 'Pregunta {current} de {total}',
    'test.previous': 'Anterior',
    'test.next': 'Siguiente',
    'test.showResult': 'Ver Resultado',
    'test.home': 'Inicio',
    'test.backToMain': 'Volver al TypeTest',
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
    'meta.description': '通通过各种性格测试和人工智能内容发现真实的自我。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '所有内容等您自己去发现',
    'site.footer': '更多内容即将推出！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen 性格测试',
    'tests.tetoEgen.description': '确认您的性格更接近\nTeto 型还是 Egen 型。',
    'tests.tetoEgen.start': '开始测试',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen 性格测试',
    'tests.tetoEgen.meta.description': '通过深入的心理分析发现您的真实性格类型。进行我们的韩国性格分类测试，了解您更偏向于 Teto 还是 Egen 类型。',
    'tests.comingSoon.title': '准备内容',
    'tests.comingSoon.description': '新内容即将添加',
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
    'test.showResult': '查看结果',
    'test.home': '首页',
    'test.backToMain': '返回 TypeTest',
    
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
    'meta.description': '透過各種性格測驗和人工智慧內容發現真實的自我。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '所有內容等您自己去發現',
    'site.footer': '更多內容即將推出！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen 性格測試',
    'tests.tetoEgen.description': '確認您的性格更接近\nTeto 型還是 Egen 型。',
    'tests.tetoEgen.start': '開始測試',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen 性格測試',
    'tests.tetoEgen.meta.description': '透過深入的心理分析發現您的真實性格類型。進行我們的韓國性格分類測試，了解您更偏向於 Teto 還是 Egen 類型。',
    'tests.comingSoon.title': '準備內容',
    'tests.comingSoon.description': '新內容即將新增',
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
    'test.showResult': '查看結果',
    'test.home': '首頁',
    'test.backToMain': '返回 TypeTest',
    
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
    'meta.description': 'さまざまな性格テストとAIコンテンツであなたの本当の外観を発見してください。',
    
    'site.title': 'TypeTest',
    'site.subtitle': '自分自身を発見するためのあらゆるコンテンツ',
    'site.footer': 'より多くのコンテンツがすぐに追加されます！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen性格テスト',
    'tests.tetoEgen.description': 'あなたの性格がTetoタイプと\nEgenタイプのどちらに近いかを\n確認しましょう。',
    'tests.tetoEgen.start': 'テスト開始',
    'tests.tetoEgen.meta.title': 'TypeTest：Teto-Egen性格テスト',
    'tests.tetoEgen.meta.description': '深層心理分析を通じてあなたの真の性格タイプを発見しましょう。韓国の性格分類テストを受けて、あなたがTetoタイプかEgenタイプかを確認してください。',
    'tests.attachmentStyle.title': '成人愛着タイプテスト',
    'tests.attachmentStyle.description': '自分の愛着タイプを調べ、\n関係パターンを\n理解してみてください。',
      'tests.attachmentStyle.start': 'テスト開始',
    'tests.comingSoon.title': 'コンテンツ準備中',
    'tests.comingSoon.description': 'まもなく新しいコンテンツが\n追加される予定です',
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
    'test.backToMain': 'TypeTestに戻る',
    
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
  },
  vi: {
    'meta.title': 'TypeTest',
    'meta.description': 'Khám phá con người thật của bạn với các bài kiểm tra tính cách và nội dung AI đa dạng.',
    
    'site.title': 'TypeTest',
    'site.subtitle': 'Tất cả nội dung để bạn khám phá bản thân',
    'site.footer': 'Sẽ có thêm nhiều nội dung được bổ sung!',
    
    // Tests
    'tests.tetoEgen.title': 'Bài kiểm tra tính cách Teto-Egen',
    'tests.tetoEgen.description': 'Khám phá xem tính cách của bạn\ngiống với Teto hay Egen hơn',
    'tests.tetoEgen.start': 'Bắt đầu kiểm tra',
    'tests.tetoEgen.meta.title': 'TypeTest: Bài kiểm tra tính cách Teto-Egen',
    'tests.tetoEgen.meta.description': 'Khám phá kiểu tính cách thật của bạn thông qua phân tích tâm lý sâu sắc. Thực hiện bài kiểm tra phân loại tính cách Hàn Quốc của chúng tôi để tìm hiểu bạn thiên về Teto hay Egen.',
    'tests.comingSoon.title': 'Đang chuẩn bị nội dung',
    'tests.comingSoon.description': 'Nội dung mới sẽ được thêm sớm',
    'tests.comingSoon.button': 'Sắp ra mắt',
    
    // Welcome Screen
    'welcome.title': 'Bài kiểm tra tính cách\nTeto-Egen',
    'welcome.subtitle': 'Khám phá kiểu tính cách của bạn!',
    'welcome.selectGender': 'Vui lòng chọn giới tính của bạn',
    'welcome.male': 'Nam',
    'welcome.female': 'Nữ',
    
    // Test Screen
    'test.progress': 'Câu hỏi {current} / {total}',
    'test.previous': 'Trước',
    'test.next': 'Tiếp theo',
    'test.showResult': 'Xem kết quả',
    'test.home': 'Trang chủ',
    'test.backToMain': 'Quay lại TypeTest',
    
    // Result Screen
    'result.title': 'Kết quả kiểm tra',
    'result.personalityTraits': 'Đặc điểm tính cách của bạn',
    'result.yourScore': 'Điểm số của bạn',
    'result.tetoScore': 'Xu hướng Teto',
    'result.egenScore': 'Xu hướng Egen',
    'result.points': 'điểm',
    'result.share': 'Chia sẻ kết quả',
    'result.restart': 'Làm lại bài kiểm tra',
    'result.shareTitle': 'Tôi đã hoàn thành bài kiểm tra tính cách Teto-Egen!',
    'result.shareText': 'Kết quả của tôi: {result}. Bạn cũng hãy thử làm bài kiểm tra!',
    'result.copySuccess': 'Đã sao chép vào clipboard',
    'result.copySuccessDesc': 'Kết quả đã được sao chép vào clipboard!',
    'result.copyFail': 'Sao chép thất bại',
    'result.copyFailDesc': 'Không thể sao chép kết quả.',
    
    // Theme
    'theme.toggle': 'Chuyển đổi chủ đề'
  }
};

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ko')) {
    return 'ko';
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
    const langTranslations = translations[language];
    return (langTranslations as any)[key] || key;
  };

  // This effect is now handled by individual pages using useMetaTags hook

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