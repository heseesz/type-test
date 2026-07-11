import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'zh-cn';

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
    
    // SEO Intro Text
    'seo.viewDetails': '상세 설명 보기',
    'seo.home.intro': 'Type-Test에 오신 것을 환영합니다!\n\n이곳은 다양한 심리학적 이론과 흥미로운 가치관 질문들을 바탕으로, 나 자신과 상대방의 숨겨진 성향을 알아보는 종합 심리테스트 플랫폼입니다.\n\n친구, 연인과 함께 테스트 결과를 공유하며 서로에 대해 더 깊이 이해하고 즐거운 대화를 나누어 보세요.',
    'seo.balanceGame.desc': '연인, 썸남썸녀, 혹은 친한 친구들과 함께 즐길 수 있는 궁극의 밸런스 게임입니다. 일상적인 연애 가치관을 알아보는 \'순한 맛\'부터, 숨겨진 본성과 은밀한 취향을 파헤치는 \'중간 맛\', 그리고 아찔한 수위의 \'매운 맛\'까지 다양한 난이도의 질문들이 준비되어 있습니다.\n\n서로의 선택을 비교하며 깊은 대화를 나누고, 때로는 열띠게 논쟁하며 서로에 대해 더 깊이 알아가는 시간을 가져보세요.\n\n단순한 킬링타임용 게임을 넘어, 평소에는 묻기 힘들었던 서로의 진짜 속마음과 연애 스타일, 스킨십 성향 등을 자연스럽게 알아볼 수 있는 완벽한 심리적 아이스브레이킹 도구가 되어줄 것입니다. 과연 당신과 상대방의 밸런스 일치율은 얼마나 될지, 지금 바로 시작해서 서로의 한계를 테스트해 보세요!',
    'seo.attachment.desc': '존 볼비(John Bowlby)와 메리 애인스워스(Mary Ainsworth)의 발달 심리학적 이론에 기반한 성인 애착 유형 테스트는, 당신이 타인과 관계를 맺고 사랑을 주고받는 방식을 심층적으로 분석합니다.\n\n우리 모두는 어린 시절의 경험과 과거의 인간관계를 통해 자신만의 고유한 애착 패턴을 무의식적으로 형성하게 됩니다. 이 테스트를 통해 당신이 \'안정형\', \'불안-집착형\', \'회피-거부형\', \'회피-공포형\' 중 어디에 해당하는지 객관적으로 진단해 보세요.\n\n나의 애착 유형을 정확히 파악하는 것은 반복되는 연애의 갈등 원인을 찾고, 더 건강하고 안정적인 대인관계를 구축하는 첫걸음이 됩니다. 나와 상대방의 다름을 논리적으로 이해하고, 내면의 기저에 깔린 불안을 해소하여 성숙한 사랑을 가꾸어 나갈 수 있도록 돕는 심리학적 가이드를 지금 바로 확인해 보세요.',
    'seo.narcissism.desc': '자기애적 성향(Narcissism)은 단순히 자신을 뽐내는 것을 넘어선, 매우 복잡하고 입체적인 심리적 특성입니다. 심리학에서 말하는 나르시시즘은 건강한 자존감의 척도가 되기도 하지만, 때로는 타인과의 관계를 단절시키는 원인이 되기도 합니다.\n\n본 테스트는 당신의 내면에 숨겨진 자기애의 크기와 형태를 다각도로 측정하여 제공합니다. 타인의 인정과 찬사에 대한 욕구, 대인관계에서의 공감 능력 수준, 무의식적인 특권 의식, 그리고 내면 깊은 곳에 자리 잡은 방어적 취약성까지 꼼꼼하게 분석해 드립니다.\n\n자신이 건강한 형태의 과대형 나르시시스트인지, 아니면 외부의 평가에 상처받기 쉬운 취약형 나르시시스트인지 파악해 보세요. 스스로의 성향을 정면으로 마주하는 것은 자기 객관화를 통해 더 나은 관계를 맺기 위한 훌륭한 자기계발의 기회가 될 것입니다.',
    'seo.tetoEgen.desc': '테토-에겐 성향 테스트는 연애와 대인관계에서 나타나는 당신의 독특한 행동 패턴과 포지션을 재미있고 예리하게 분석해 주는 인터넷 밈 심리 진단 콘텐츠입니다.\n\n관계를 주도하고 적극적으로 이끌어가는 성향인지, 아니면 상대방의 리드에 부드럽게 맞춰주며 안정감을 제공하는 성향인지 간단히 파악해 봅니다. 당신이 무의식적으로 발산하는 매력 포인트는 무엇이며, 스트레스 상황이나 연인과의 갈등이 발생했을 때 어떤 방식으로 소통하고 대처하는지 등 다채로운 문항을 통해 당신의 캐릭터를 정의해 드립니다.\n\n친구들이나 연인과 함께 결과를 공유하며 서로의 유형이 어떻게 상호작용하고, 어떤 시너지를 낼 수 있는지 비교해 보세요. 관계의 주도권과 긍정적인 소통 방식을 새롭게 돌아볼 수 있는 흥미로운 경험을 선사합니다.',
    
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
    'tests.narcissism.title': '나르시시즘 성향 테스트',
    'tests.narcissism.description': '자신의 나르시시즘 성향을 파악하고\n건강한 자존감을 기르세요',
    'tests.narcissism.start': '테스트 시작하기',
    'tests.narcissism.info': '총 20개의 질문으로 구성되며, 과대형과 취약형 나르시시즘을 측정합니다.',
    'tests.narcissism.meta.title': '타입테스트: 나르시시즘 성향 테스트',
    'tests.narcissism.meta.description': '나르시시즘 성향을 알아보세요! 과대형과 취약형 나르시시즘을 구분하여 자신의 특성을 파악할 수 있습니다.',
    'tests.comingSoon.title': '컨텐츠 준비중',
    'tests.comingSoon.description': '곧 새로운 컨텐츠가 추가될 예정입니다',
    'tests.comingSoon.button': '준비 중',
    
    // Welcome Screen
    'welcome.title': '테토-에겐 성향 테스트',
    'welcome.subtitle': '당신의 테토-에겐 성향을 알아보세요!',
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
    'theme.toggle': '테마 전환',
    
    // Balance Game
    'tests.balanceGame.title': '19금 밸런스 게임',
    'tests.balanceGame.description': '친구, 연인과 함께 즐기는 매운 맛 밸런스 게임!\n(19금 주의 🔞)',
    'tests.balanceGame.start': '시작하기',
    'tests.snowball.title': '복리 시뮬레이터',
    'tests.snowball.description': '매달 지출하는 배달음식 비용을 아껴 복리로 투자했다면 미래에 얼마가 되었을까요? S&P 500과 AI 반도체 ETF 투자의 스노우볼 효과를 직접 시뮬레이션해 보세요.',
    'tests.snowball.start': '스노우볼 굴리러 가기'
  },
  en: {
    // Meta
    'meta.title': 'TypeTest',
    'meta.description': 'Discover your true self with various personality tests and AI content.',
    
    // SEO Intro Text
    'seo.viewDetails': 'View Details',
    'seo.home.intro': 'Welcome to TypeTest!\n\nThis is a comprehensive personality testing platform where you can discover the hidden traits of yourself and others based on various psychological theories and interesting value questions.\n\nShare your test results with friends and partners to understand each other on a deeper level and enjoy meaningful conversations.',
    'seo.balanceGame.desc': 'The ultimate balance game to enjoy with your partner, crush, or close friends. It features questions across various difficulties, from \'Mild Taste\' for casual dating values, to \'Medium Taste\' for hidden natures, and \'Spicy Taste\' for mature intimacy levels.\n\nCompare each other\'s choices, have deep conversations, and sometimes engage in playful debates to get to know each other better.\n\nBeyond a simple time-killer, it will serve as the perfect psychological icebreaker to naturally reveal true feelings, dating styles, and intimacy preferences that are normally hard to ask. Start now to test your compatibility and limits!',
    'seo.attachment.desc': 'Based on the developmental psychology theories of John Bowlby and Mary Ainsworth, the Adult Attachment Style Test deeply analyzes how you connect with others and give or receive love.\n\nWe all unconsciously form our own unique attachment patterns based on childhood experiences and past relationships. Take this test to objectively diagnose whether you are Secure, Anxious-Preoccupied, Dismissive-Avoidant, or Fearful-Avoidant.\n\nAccurately identifying your attachment style is the first step toward finding the causes of recurring relationship conflicts and building healthier, more stable connections. Discover this psychological guide to foster mature love by understanding differences and resolving underlying anxieties.',
    'seo.narcissism.desc': 'Narcissism is a highly complex and multi-dimensional psychological trait that goes far beyond simply showing off. In psychology, narcissism can be a measure of healthy self-esteem, but it can also cause disconnects in interpersonal relationships.\n\nThis test measures the size and form of narcissism hidden within you from various angles. We thoroughly analyze your desire for recognition, empathy levels in relationships, unconscious sense of entitlement, and defensive vulnerabilities.\n\nFind out whether you have a healthy form of grandiose narcissism or a vulnerable narcissism sensitive to external evaluation. Facing your tendencies head-on is a great self-improvement opportunity to cultivate better leadership and harmonious communication.',
    'seo.tetoEgen.desc': 'The Teto-Egen Personality Test is a fun and sharp psychological diagnostic content analyzing your unique behavior patterns and positioning in relationships and dating.\n\nFind out whether you tend to take charge and actively lead relationships, or if you prefer to gently adapt to your partner\'s lead and provide stability.\n\nShare results with friends and partners to compare how your types interact and what synergies you create. It offers an engaging experience to reflect on relationship dynamics and positive communication methods.',
    
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
    'tests.narcissism.title': 'Narcissism\nTendency Test',
    'tests.narcissism.description': 'Understand your narcissistic\ntendencies and develop\nhealthy self-esteem',
    'tests.narcissism.start': 'Start Test',
    'tests.narcissism.info': 'Consists of 20 questions measuring grandiose and vulnerable narcissism.',
    'tests.narcissism.meta.title': 'TypeTest: Narcissism Tendency Test',
    'tests.narcissism.meta.description': 'Discover your narcissistic tendencies! Distinguish between grandiose and vulnerable narcissism to understand your characteristics.',
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
    'theme.toggle': 'Toggle theme',
    
    // Balance Game
    'tests.balanceGame.title': '19+ Balance Game',
    'tests.balanceGame.description': 'A spicy balance game to enjoy with friends and lovers!\n(18+ warning 🔞)',
    'tests.balanceGame.start': 'Start Game',
    'tests.snowball.title': 'Compound Interest Simulator',
    'tests.snowball.description': 'How much would the delivery fee accumulate if invested with compound interest? Simulate the magic of S&P 500 and AI Semiconductor ETFs right now.',
    'tests.snowball.start': 'Start Simulation'
  },
  es: {
    'meta.title': 'TypeTest',
    'meta.description': 'Descubre tu verdadero yo con diversas pruebas de personalidad y contenido de IA.',
    
    // SEO Intro Text
    'seo.viewDetails': 'Ver detalles',
    'seo.home.intro': '¡Bienvenido a TypeTest!\n\nEsta es una plataforma de pruebas de personalidad donde puedes descubrir los rasgos ocultos de ti mismo y de los demás basándose en diversas teorías psicológicas y preguntas interesantes sobre valores.\n\nComparte los resultados de tus pruebas con amigos y parejas para comprenderse a un nivel más profundo y disfrutar de conversaciones significativas.',
    'seo.balanceGame.desc': 'El juego de equilibrio definitivo para disfrutar con tu pareja, enamorado o amigos cercanos. Cuenta con preguntas de varias dificultades, desde el \'Sabor Suave\' para valores de citas casuales, hasta el \'Sabor Medio\' para relaciones íntimas y el \'Sabor Picante\' para niveles de intimidad madura.\n\nCompara las opciones de los demás, ten conversaciones profundas y, a veces, participa en debates divertidos para conocerse mejor.\n\nMás allá de un simple pasatiempo, servirá como el rompehielos psicológico perfecto para revelar de forma naturaleza los verdaderos sentimientos, estilos de citas y preferencias de intimidad que normalmente son difíciles de preguntar. ¡Empieza ahora para probar tu compatibilidad y tus límites!',
    'seo.attachment.desc': 'Basado en las teorías de la psicología del desarrollo de John Bowlby y Mary Ainsworth, el Test de Estilo de Apego Adulto analiza profundamente cómo te conectas con los demás y cómo das o recibes amor.\n\nTodos formamos inconscientemente nuestros propios patrones de apego únicos basados en las experiencias de la infancia y las relaciones pasadas. Realice este test para diagnosticar objetivamente si es Seguro, Ansioso-Preocupado, Desapegado-Evitativo o Temeroso-Evitativo.\n\nIdentificar con precisión su estilo de apego es el primer paso para encontrar las causas de los conflictos recurrentes en las relaciones y construir conexiones más saludables y estables. Descubra esta guía psicológica para fomentar el amor maduro al comprender las diferencias y resolver las ansiedades subyacentes.',
    'seo.narcissism.desc': 'El narcisismo es un rasgo psicológico altamente complejo y multidimensional que va mucho más allá de simplemente presumir. En psicología, el narcisismo puede ser una medida de autoestima saludable, pero también puede causar desconexiones en las relaciones interpersonales.\n\nEsta prueba mide el tamaño y la forma del narcisismo oculto dentro de ti desde varios ángulos. Analizamos a fondo su deseo de reconocimiento, los niveles de empatía en las relaciones, el sentido inconsciente de tener derecho y las vulnerabilidades defensivas.\n\nDescubra si tiene una forma de narcisismo grandioso saludable o un narcisismo vulnerable sensible a la evaluación externa. Enfrentar sus tendencias de frente es una gran oportunidad de superación personal para cultivar un mejor liderazgo y una comunicación armoniosa.',
    'seo.tetoEgen.desc': 'El Test de Personalidad Teto-Egen es un contenido de diagnóstico psicológico divertido y agudo que analiza tus patrones de comportamiento únicos y tu posicionamiento en las relaciones y el noviazgo.\n\nDescubre si tiendes a hacerse cargo y liderar activamente las relaciones, o si prefieres adaptarte suavemente al liderazgo de tu pareja y proporcionarle estabilidad.\n\nComparte los resultados con amigos y parejas para comparar cómo interactúan sus tipos y qué sinergias crean. Ofrece una experiencia atractiva para reflexionar sobre la dinámica de las relaciones y los métodos de comunicación positiva.',

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
    'theme.toggle': 'Cambiar tema',
    
    // Balance Game
    'tests.balanceGame.title': 'Juego de Equilibrio 18+',
    'tests.balanceGame.description': '¡Un juego de equilibrio picante para disfrutar con amigos y parejas!\n(Advertencia 18+ 🔞)',
    'tests.balanceGame.start': 'Iniciar Juego',
    'tests.snowball.title': 'Compound Interest Simulator',
    'tests.snowball.description': 'How much would the delivery fee accumulate if invested with compound interest? Simulate the magic of S&P 500 and AI Semiconductor ETFs right now.',
    'tests.snowball.start': 'Start Simulation'
  },
  'zh-cn': {
    'meta.title': 'TypeTest',
    'meta.description': '通过各种性格测试和人工智能内容发现真实的自我。',
    
    // SEO Intro Text
    'seo.viewDetails': '查看详细说明',
    'seo.home.intro': '欢迎来到 TypeTest！\n\n这是一个综合性的心理测试平台，基于各种心理学理论和有趣的价值观问题，帮助您探索自己和他人隐藏的性格倾向。\n\n与朋友、恋人分享测试结果，加深对彼此的理解，开启轻松有趣的对话吧。',
    'seo.balanceGame.desc': '专为情侣、暧昧对象或密友打造的终极平衡游戏。包含多种难度的提问，从探讨日常恋爱观的“温和味”，到挖掘隐藏本性与隐秘喜好的“中辣味”，再到令人心跳加速的“重辣味”。\n\n对比彼此的选择，展开深度对话，甚至来一场趣味辩论，借此更深入地了解对方。\n\n这不仅仅是一款消磨时间的娱乐游戏，更是一个完美的心理破冰工具，让你们自然而然地了解平时难以开口的真心话、恋爱风格及亲密关系倾向。立即开始，测试你们的契合度与极限吧！',
    'seo.attachment.desc': '成人依恋类型测试基于约翰·博比（John Bowlby）和玛丽·安斯沃斯（Mary Ainsworth)的发达心理学理论，深度分析您与他人建立关系以及给予和接受爱的方式。\n\n我们每个人都会根据童年经历和过往的人际关系，在无意识中形成自己独特的依恋模式。通过本测试，客观地诊断您属于“安全型”、“焦虑型”、“回避型”还是“恐惧型”。\n\n准确了解自己的依恋类型，是找到反复出现的恋爱冲突原因、建立更健康稳定人际关系的第一步。欢迎立即查看心理学指南，理解彼此的差异，消除内心的焦虑，培育成熟的爱。',
    'seo.narcissism.desc': '自恋倾向（Narcissism）是一个非常复杂且立体的心理特征，远不止是单纯的自我展现。在心理学中，自恋可以是健康自尊的尺度，但有时也会成为阻碍人际关系的因素。\n\n本测试从多个维度测量您内心深处隐藏 of 的自恋程度与形式。我们将仔细分析您对他人认可与赞美的渴望、人际交往中的共感水平、无意识的特权意识，以及内心深处的防御性脆弱。\n\n了解自己是属于健康形式的夸大型自恋者，还是容易受外界评价伤害的脆弱型自恋者。直面自己的倾向，是通过自我客观化来发挥更好领导力、与他人和谐沟通的绝佳自我提升机会。',
    'seo.tetoEgen.desc': 'Teto-Egen 性格测试是一款趣味与深度兼具的心理诊断内容，分析您在恋爱和人际关系中独特的行为模式与角色定位。\n\n简单了解您是倾向于主导并积极引领关系，还是更喜欢温柔地配合对方的引领并提供安全感。\n\n与朋友或恋人分享结果，对比不同类型之间如何相互作用、能产生怎样的化学反应。为您提供一个重新审视关系主导权和积极沟通方式的有趣体验。',

    'site.title': 'TypeTest',
    'site.subtitle': '所有内容等您自己去发现',
    'site.footer': '更多内容即将推出！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen 性格测试',
    'tests.tetoEgen.description': '确认您的性格更接近\nTeto 型还是 Egen 型。',
    'tests.tetoEgen.start': '开始测试',
    'tests.tetoEgen.meta.title': 'TypeTest: Teto-Egen 性格测试',
    'tests.tetoEgen.meta.description': '通过深入的心理分析发现您的真实性格类型。进行我们的韩国性格分类测试，了解您更偏向于 Teto 还是 Egen 类型。',
    'tests.attachmentStyle.title': '成人依恋类型测试',
    'tests.attachmentStyle.description': '了解您的依恋类型\n并理解关系模式',
    'tests.attachmentStyle.start': '开始测试',
    'tests.narcissism.title': '自恋倾向测试',
    'tests.narcissism.description': '了解您的自恋倾向\n培养健康的自尊心',
    'tests.narcissism.start': '开始测试',
    'tests.narcissism.info': '由20个问题组成，测量夸大型和脆弱型自恋。',
    'tests.narcissism.meta.title': 'TypeTest: 自恋倾向测试',
    'tests.narcissism.meta.description': '了解您的自恋倾向！区分夸大型和脆弱型自恋，了解您的特征。',
    'tests.comingSoon.title': '准备内容',
    'tests.comingSoon.description': '新内容即将添加',
    'tests.comingSoon.button': '即将推出',
    
    // Welcome Screen
    'welcome.title': 'Teto-Egen性格测试',
    'welcome.subtitle': '发现你的性格类型！',
    'welcome.selectGender': '请选择你的性别',
    'welcome.male': '男性',
    'welcome.female': '女性',
    
    // Test Screen
    'test.progress': '进度',
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
    'result.shareTitle': 'Teto-Egen性格测试结果',
    'result.shareText': '你也来测试一下吧！',
    'result.copySuccess': '已复制到剪贴板',
    'result.copySuccessDesc': '结果已复制到剪贴板！',
    'result.copyFail': '复制失败',
    'result.copyFailDesc': '无法复制结果。',
    
    // Personality Types
    'personality.teto_male': 'Teto男',
    'personality.egen_male': 'Egen男',
    'personality.teto_female': 'Teto女',
    'personality.egen_female': 'Egen女',
    
    // Theme
    'theme.toggle': '切换主题',
    
    // Balance Game
    'tests.balanceGame.title': '19禁平衡游戏',
    'tests.balanceGame.description': '与朋友、恋人一起玩的辣味平衡游戏！\n（18禁注意 🔞）',
    'tests.balanceGame.start': '开始游戏',
    'tests.snowball.title': '复利模拟器',
    'tests.snowball.description': '如果把每月的外卖费存下来进行复利投资，未来会变成多少？立即模拟S&P 500与AI半导体ETF滚雪球的魔力。',
    'tests.snowball.start': '开始模拟'
  },
  ja: {
    'meta.title': 'TypeTest',
    'meta.description': 'さまざまな性格テストとAIコンテンツであなたの本当の外観を発見してください。',
    
    // SEO Intro Text
    'seo.viewDetails': '詳細情報を見る',
    'seo.home.intro': 'TypeTestへようこそ！\n\nここは、さまざまな心理学理論と興味深い価値観の質問に基づいて、自分と相手の隠れた傾向を探る総合心理テストプラットフォームです。\n\n友人や恋人とテスト結果を共有し、お互いをより深く理解し、楽しい会話を交わしてみてください。',
    'seo.balanceGame.desc': '恋人や気になる人、または親しい友人と一緒に楽しめる究極のバランスゲームです。日常的な恋愛の価値観を探る「マイルド味」から、隠された本性と秘密の好みを暴く「ミディアム味」から、刺激的なレベルの「スパイシー味」まで、様々な難易度の質問が用意されています。\n\nお互いの選択を比較しながら深い会話を交わし、時には熱く議論しながら、お互いについてより深く知る時間を持ってみましょう。\n\n単なる暇つぶしゲームを超えて、普段は聞きにくいお互いの本音や恋愛スタイル、スキンシップの傾向などを自然に知ることができる、完璧な心理的アイスブレイクツールになります。今すぐ始めて、お互いの限界をテストしてみましょう！',
    'seo.attachment.desc': 'ジョン・ボウルビィ（John Bowlby）とメアリー・エインスワース（Mary Ainsworth）の発達心理学理論に基づく成人愛着スタイルテストは、あなたが他者と関係を築き、愛を与え受け取る方法を詳細に分析します。\n\n私たちはみな、幼少期の経験や過去の人間関係を通じて、自分だけの独自の愛着パターンを無意識に形成しています。このテストを通じて、あなたが「安定型」「不安型」「回避型」「恐れ・回避型」のどれに該当するかを客観的に診断してみましょう。\n\n自分の愛着スタイルを正確に把握することは、繰り返される恋愛의葛藤の原因を見つけ、より健康で安定した対人関係を築くための第一歩となります。お互いの違いを論理的に理解し、内面にある不安を解消して成熟した愛を育むための心理学ガイドを今すぐ確認してください。',
    'seo.narcissism.desc': '自己愛的な傾向（ナルシシズム）は、単に自分を自慢することを超えた、非常に複雑で多面的な心理的特性です。心理学におけるナルシシズムは、健康的な自尊心の指標となることもありますが、時には他者との関係を損なう原因にもなります。\n\n本テストは、あなたの内面に隠された自己愛の大きさと形を多角的に測定します。他者からの承認や称賛への欲求、人間関係における共感レベル、無意識の特権意識、および内面の奥深くにある防御的な脆弱性まで細かく分析します。\n\n自分が健康的な誇大型ナルシシストなのか、それとも外部の評価に傷つきやすい脆弱型ナルシシストなのかを把握してみましょう。自身の傾向と向き合うことは、自己客観化を通じてより良いリーダーシップを発揮し、他者と調和してコミュニケーションをとるための素晴らしい自己啓発の機会となるでしょう。',
    'seo.tetoEgen.desc': 'テト-エゲン傾向テストは、恋愛や対人関係におけるあなたの独特な行動パターンとポジションを、楽しく鋭く分析する心理診断コンテンツです。\n\n関係を主導して積極的に引っ張る傾向なのか、それとも相手のリードに柔軟に合わせて安心感を提供する傾向なのかを簡単に把握します。\n\n友人や恋人と結果を共有し、お互いのタイプがどのように相互作用し、どのようなシナジーを生み出せるか比較してみてください。関係の主動権やポジティブなコミュニケーション方法を新たに見つめ直す、興味深い体験をお届けします。',

    'site.title': 'TypeTest',
    'site.subtitle': '自分自身を発見するためのあらゆるコンテンツ',
    'site.footer': 'より多くのコンテンツがすぐに追加されます！',
    
    // Tests
    'tests.tetoEgen.title': 'Teto-Egen性格テスト',
    'tests.tetoEgen.description': 'あなたの性格がTetoタイプと\nEgenタイプのどちらに近いかを\n確認しましょう。',
    'tests.tetoEgen.start': 'テスト開始',
    'tests.tetoEgen.meta.title': 'TypeTest: Teto-Egen性格テスト',
    'tests.tetoEgen.meta.description': '深層心理分析を通じてあなたの真の性格タイプを発見しましょう。韓国の性格分類テストを受けて、あなたがTetoタイプかEgenタイプかを確認してください。',
    'tests.attachmentStyle.title': '成人愛着タイプテスト',
    'tests.attachmentStyle.description': '自分の愛着タイプを調べ、\n関係パターンを\n理解してみてください。',
    'tests.attachmentStyle.start': 'テスト開始',
    'tests.narcissism.title': 'ナルシシズム傾向テスト',
    'tests.narcissism.description': '自分のナルシシズム傾向を把握し、\n健康的な自尊心を\n育てましょう',
    'tests.narcissism.start': 'テスト開始',
    'tests.narcissism.info': '誇大型と脆弱型ナルシシズムを測定する20의 질문으로 구성되어 있습니다。',
    'tests.narcissism.meta.title': 'TypeTest: ナルシシズム傾向テスト',
    'tests.narcissism.meta.description': 'ナルシシズム傾向を確認しましょう！誇大型と脆弱型ナルシシズムを区別して自分の特性を把握できます。',
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
    'test.progress': '進行率',
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
    'theme.toggle': 'テーマ切り替え',
    
    // Balance Game
    'tests.balanceGame.title': '19禁バランスゲーム',
    'tests.balanceGame.description': '友達や恋人と一緒に楽しむ激辛バランスゲーム！\n（19禁注意 🔞）',
    'tests.balanceGame.start': 'ゲーム開始',
    'tests.snowball.title': '複利シミュレーター',
    'tests.snowball.description': '毎月使う配達料を複利で投資していたらいくらになっていたでしょうか？S&P 500とAI半導体ETFの驚くべき複利効果を今すぐ体験してください。',
    'tests.snowball.start': 'シミュレーション開始'
  },
  vi: {
    'meta.title': 'TypeTest',
    'meta.description': 'Khám phá con người thật của bạn với các bài kiểm tra tính cách và nội dung AI đa dạng.',
    
    // SEO Intro Text
    'seo.viewDetails': 'Xem chi tiết',
    'seo.home.intro': 'Chào mừng bạn đến với TypeTest!\n\nĐây là một nền tảng kiểm tra tính cách toàn diện, nơi bạn có thể khám phá những đặc điểm tiềm ẩn của bản thân và những người khác dựa trên các lý thuyết tâm lý khác nhau và các câu hỏi giá trị thú vị.\n\nChia sẻ kết quả kiểm tra của bạn với bạn bè và đối tác để hiểu nhau hơn ở mức độ sâu sắc hơn và tiện lợi cho việc thảo luận.',
    'seo.balanceGame.desc': 'Trò chơi cân bằng tối thượng để thưởng thức cùng đối tác, người thương hoặc bạn thân của bạn. Trò chơi có các câu hỏi ở nhiều mức độ khó khác nhau, từ \'Vị dịu nhẹ\' cho các giá trị hẹn hò thông thường, đến \'Vị trung bình\' cho những bản chất ẩn giấu và \'Vị cay nồng\' cho các mức độ thân mật trưởng thành.\n\nSo sánh các lựa chọn của nhau, trò chuyện sâu sắc và đôi khi tham gia vào các cuộc tranh luận vui vẻ để hiểu nhau hơn.\n\nVượt qua một trò chơi giết thời gian đơn giản, đây sẽ là công cụ phá băng tâm lý hoàn hảo để tiết lộ một cách tự nhiên những cảm xúc thật, phong cách hẹn hò và sở thích thân mật vốn thường khó hỏi. Hãy bắt đầu ngay để kiểm tra khả năng tương thích và giới hạn của bạn!',
    'seo.attachment.desc': 'Dựa trên các lý thuyết tâm lý học phát triển của John Bowlby và Mary Ainsworth, Bài kiểm tra phong cách gắn bó của người lớn phân tích sâu sắc cách bạn kết nối với những người khác cũng như cách bạn trao đi hoặc nhận lại tình yêu thương.\n\nTất cả chúng ta đều vô thức hình thành các kiểu gắn bó độc đáo của riêng mình dựa trên trải nghiệm thời thơ ấu và các mối quan hệ trong quá khứ. Hãy làm bài kiểm tra này để chẩn đoán khách quan xem bạn thuộc nhóm An toàn, Lo âu, Né tránh hay Né tránh sợ hãi.\n\nXác định chính xác phong cách gắn bó của bạn là bước đầu tiên để tìm ra nguyên nhân của những xung đột lặp đi lặp lại trong mối quan hệ và xây dựng những kết nối lành mạnh, bền vững hơn. Khám phá hướng dẫn tâm lý này để nuôi dưỡng tình yêu trưởng thành bằng cách hiểu rõ sự khác biệt và giải quyết các mối lo âu tiềm ẩn.',
    'seo.narcissism.desc': 'Tính tự ái (Narcissism) is a đặc điểm tâm lý rất phức tạp và đa chiều, vượt xa việc đơn thuần là khoe khoang. Trong tâm lý học, tính tự ái có thể là thước đo của lòng tự trọng lành mạnh, nhưng nó cũng có thể gây ra sự chia rẽ trong các mối quan hệ cá nhân.\n\nBài kiểm tra này đo lường mức độ và hình thức tự ái ẩn giấu trong bạn từ nhiều góc độ khác nhau. Chúng tôi phân tích kỹ lưỡng mong muốn được công nhận, mức độ đồng cảm của bạn trong các mối quan hệ, cảm giác đặc quyền vô thức và các lỗ hổng phòng vệ.\n\nTìm hiểu xem bạn có dạng tự ái tự cao lành mạnh hay tự ái dễ bị tổn thương, nhạy cảm với đánh giá từ bên ngoài. Đối mặt trực diện với các xu hướng của bạn là cơ hội tuyệt vời để tự hoàn thiện bản thân, nuôi dưỡng khả năng lãnh đạo tốt hơn và giao tiếp hài hòa.',
    'seo.tetoEgen.desc': 'Bài kiểm tra tính cách Teto-Egen là nội dung chẩn đoán tâm lý vui nhộn và sắc bén, phân tích các kiểu hành vi và định vị độc đáo của bạn trong các mối quan hệ và hẹn hò.\n\nTìm hiểu xem bạn có xu hướng đảm nhận vai trò chủ động và tích cực dẫn dắt mối quan hệ, hay bạn thích nhẹ nhàng thích nghi với sự dẫn dắt của đối tác và mang lại sự ổn định.\n\nChia sẻ kết quả với bạn bè và đối tác để so sánh cách các loại tính cách của bạn tương tác và tạo ra những sức mạnh cộng hương nào. Bài kiểm tra mang lại trải nghiệm thú vị để phản ánh động lực của mối quan hệ và các phương pháp giao tiếp tích cực.',

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
    'theme.toggle': 'Chuyển đổi chủ đề',
    
    // Balance Game
    'tests.balanceGame.title': 'Trò chơi Cân bằng 18+',
    'tests.balanceGame.description': 'Trò chơi cân bằng cay cú để thưởng thức cùng bạn bè và người yêu!\n(Cảnh báo 18+ 🔞)',
    'tests.balanceGame.start': 'Bắt đầu',
    'tests.snowball.title': 'Compound Interest Simulator',
    'tests.snowball.description': 'How much would the delivery fee accumulate if invested with compound interest? Simulate the magic of S&P 500 and AI Semiconductor ETFs right now.',
    'tests.snowball.start': 'Start Simulation'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'ko' || saved === 'en' || saved === 'ja' || saved === 'zh-cn')) {
      return saved as Language;
    }
    return 'ko'; // Default to Korean
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    const langTranslations = translations[language];
    return (langTranslations as any)[key] || (translations['ko'] as any)[key] || key;
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