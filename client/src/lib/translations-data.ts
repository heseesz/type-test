import { Question, TestResult } from './test-types';

export const questionsTranslations: Record<'ko' | 'en' | 'es' | 'zh-cn' | 'zh-tw' | 'ja' | 'vi', Question[]> = {
  ko: [
    {
      question: "새로운 사람들과 만날 때 어떤 스타일인가요?",
      answers: [
        { text: "먼저 다가가서 대화를 시작한다", type: "teto", weight: 2 },
        { text: "상대방이 먼저 말을 걸 때까지 기다린다", type: "egen", weight: 2 },
        { text: "상황에 따라 다르게 행동한다", type: "egen", weight: 1 },
        { text: "자연스럽게 분위기를 파악한 후 행동한다", type: "teto", weight: 1 }
      ]
    },
    {
      question: "친구들과의 약속에서 주로 어떤 역할을 하나요?",
      answers: [
        { text: "장소와 시간을 정하고 계획을 세운다", type: "teto", weight: 2 },
        { text: "다른 사람들의 의견을 듣고 따른다", type: "egen", weight: 2 },
        { text: "분위기 메이커 역할을 한다", type: "teto", weight: 1 },
        { text: "조용히 참여하며 즐긴다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "스트레스를 받을 때 주로 어떻게 해소하나요?",
      answers: [
        { text: "친구들과 만나서 이야기한다", type: "teto", weight: 2 },
        { text: "혼자만의 시간을 가진다", type: "egen", weight: 2 },
        { text: "운동이나 취미활동을 한다", type: "teto", weight: 1 },
        { text: "음악을 듣거나 책을 읽는다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "결정을 내릴 때 더 중요하게 생각하는 것은?",
      answers: [
        { text: "직감과 감정", type: "teto", weight: 2 },
        { text: "논리적 분석", type: "egen", weight: 2 },
        { text: "다른 사람들의 의견", type: "egen", weight: 1 },
        { text: "과거 경험", type: "teto", weight: 1 }
      ]
    },
    {
      question: "새로운 환경에 적응하는 스타일은?",
      answers: [
        { text: "빠르게 적응하고 새로운 도전을 즐긴다", type: "teto", weight: 2 },
        { text: "시간을 두고 천천히 적응한다", type: "egen", weight: 2 },
        { text: "주변 사람들과 함께 적응해 나간다", type: "teto", weight: 1 },
        { text: "안정적인 것을 선호한다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "갈등 상황에서 주로 어떻게 행동하나요?",
      answers: [
        { text: "직접적으로 문제를 해결하려고 한다", type: "teto", weight: 2 },
        { text: "갈등을 피하거나 중재 역할을 한다", type: "egen", weight: 2 },
        { text: "감정적으로 반응한다", type: "teto", weight: 1 },
        { text: "시간을 두고 차분히 생각한다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "주말에 주로 무엇을 하며 시간을 보내나요?",
      answers: [
        { text: "친구들과 만나 활동적인 시간을 보낸다", type: "teto", weight: 2 },
        { text: "집에서 휴식하며 개인 시간을 즐긴다", type: "egen", weight: 2 },
        { text: "새로운 곳을 탐험하거나 경험한다", type: "teto", weight: 1 },
        { text: "좋아하는 취미에 집중한다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "타인의 부탁을 받았을 때 반응은?",
      answers: [
        { text: "일단 '좋다'고 하고 나중에 생각한다", type: "teto", weight: 2 },
        { text: "신중하게 생각한 후 답변한다", type: "egen", weight: 2 },
        { text: "거절하기 어려워한다", type: "egen", weight: 1 },
        { text: "자신의 상황을 먼저 고려한다", type: "teto", weight: 1 }
      ]
    },
    {
      question: "팀 프로젝트에서 선호하는 역할은?",
      answers: [
        { text: "리더십을 발휘하며 전체를 이끈다", type: "teto", weight: 2 },
        { text: "전문 분야에서 깊이 있게 기여한다", type: "egen", weight: 2 },
        { text: "팀원들 간의 소통을 돕는다", type: "teto", weight: 1 },
        { text: "주어진 역할을 성실히 수행한다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "실수했을 때 주로 어떻게 반응하나요?",
      answers: [
        { text: "빨리 인정하고 해결책을 찾는다", type: "teto", weight: 2 },
        { text: "원인을 분석하고 재발 방지를 고민한다", type: "egen", weight: 2 },
        { text: "감정적으로 받아들인다", type: "teto", weight: 1 },
        { text: "혼자서 곱씹으며 반성한다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "미래에 대해 어떤 관점을 가지고 있나요?",
      answers: [
        { text: "낙관적이고 적극적으로 계획한다", type: "teto", weight: 2 },
        { text: "신중하게 준비하며 안정성을 추구한다", type: "egen", weight: 2 },
        { text: "그때그때 상황에 맞춰 살아간다", type: "teto", weight: 1 },
        { text: "현재에 집중하며 자연스럽게 받아들인다", type: "egen", weight: 1 }
      ]
    },
    {
      question: "에너지를 얻는 방법은?",
      answers: [
        { text: "사람들과의 활발한 상호작용", type: "teto", weight: 2 },
        { text: "혼자만의 조용한 시간", type: "egen", weight: 2 },
        { text: "새로운 자극과 변화", type: "teto", weight: 1 },
        { text: "익숙하고 편안한 환경", type: "egen", weight: 1 }
      ]
    }
  ],
  en: [
    {
      question: "How do you typically act when meeting new people?",
      answers: [
        { text: "I approach them first and start a conversation", type: "teto", weight: 2 },
        { text: "I wait for them to talk to me first", type: "egen", weight: 2 },
        { text: "I act differently depending on the situation", type: "egen", weight: 1 },
        { text: "I naturally read the atmosphere before acting", type: "teto", weight: 1 }
      ]
    },
    {
      question: "What role do you usually play when making plans with friends?",
      answers: [
        { text: "I decide the place and time and make plans", type: "teto", weight: 2 },
        { text: "I listen to others' opinions and follow along", type: "egen", weight: 2 },
        { text: "I play the role of mood maker", type: "teto", weight: 1 },
        { text: "I participate quietly and enjoy", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you usually relieve stress?",
      answers: [
        { text: "Meet with friends and talk", type: "teto", weight: 2 },
        { text: "Have some alone time", type: "egen", weight: 2 },
        { text: "Exercise or do hobby activities", type: "teto", weight: 1 },
        { text: "Listen to music or read books", type: "egen", weight: 1 }
      ]
    },
    {
      question: "What's more important when making decisions?",
      answers: [
        { text: "Intuition and emotions", type: "teto", weight: 2 },
        { text: "Logical analysis", type: "egen", weight: 2 },
        { text: "Other people's opinions", type: "egen", weight: 1 },
        { text: "Past experiences", type: "teto", weight: 1 }
      ]
    },
    {
      question: "What's your style of adapting to new environments?",
      answers: [
        { text: "I adapt quickly and enjoy new challenges", type: "teto", weight: 2 },
        { text: "I take time and adapt slowly", type: "egen", weight: 2 },
        { text: "I adapt together with people around me", type: "teto", weight: 1 },
        { text: "I prefer stability", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you usually act in conflict situations?",
      answers: [
        { text: "I try to solve the problem directly", type: "teto", weight: 2 },
        { text: "I avoid conflict or play a mediating role", type: "egen", weight: 2 },
        { text: "I react emotionally", type: "teto", weight: 1 },
        { text: "I take time to think calmly", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you usually spend your weekends?",
      answers: [
        { text: "Meet friends and spend active time", type: "teto", weight: 2 },
        { text: "Rest at home and enjoy personal time", type: "egen", weight: 2 },
        { text: "Explore new places or have new experiences", type: "teto", weight: 1 },
        { text: "Focus on favorite hobbies", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you react when someone asks you for a favor?",
      answers: [
        { text: "I say 'yes' first and think about it later", type: "teto", weight: 2 },
        { text: "I think carefully and then respond", type: "egen", weight: 2 },
        { text: "I find it difficult to refuse", type: "egen", weight: 1 },
        { text: "I consider my own situation first", type: "teto", weight: 1 }
      ]
    },
    {
      question: "What role do you prefer in team projects?",
      answers: [
        { text: "Show leadership and lead the whole team", type: "teto", weight: 2 },
        { text: "Contribute deeply in specialized areas", type: "egen", weight: 2 },
        { text: "Help communication between team members", type: "teto", weight: 1 },
        { text: "Faithfully perform assigned roles", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you usually react when you make a mistake?",
      answers: [
        { text: "I quickly admit it and look for solutions", type: "teto", weight: 2 },
        { text: "I analyze the cause and think about prevention", type: "egen", weight: 2 },
        { text: "I take it emotionally", type: "teto", weight: 1 },
        { text: "I reflect on it alone", type: "egen", weight: 1 }
      ]
    },
    {
      question: "What perspective do you have about the future?",
      answers: [
        { text: "I'm optimistic and actively plan", type: "teto", weight: 2 },
        { text: "I prepare carefully and pursue stability", type: "egen", weight: 2 },
        { text: "I live according to each situation", type: "teto", weight: 1 },
        { text: "I focus on the present and accept naturally", type: "egen", weight: 1 }
      ]
    },
    {
      question: "How do you get energy?",
      answers: [
        { text: "Active interaction with people", type: "teto", weight: 2 },
        { text: "Quiet time alone", type: "egen", weight: 2 },
        { text: "New stimulation and change", type: "teto", weight: 1 },
        { text: "Familiar and comfortable environment", type: "egen", weight: 1 }
      ]
    }
  ],
  es: [
    {
      question: "¿Cuál es tu estilo al conocer personas nuevas?",
      answers: [
        { text: "Hablo primero y me acerco activamente", type: "teto", weight: 2 },
        { text: "Espero a que otros se acerquen a mí", type: "egen", weight: 2 },
        { text: "Hablo cuando encuentro temas en común", type: "teto", weight: 1 },
        { text: "Necesito tiempo para sentirme cómodo", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cómo expresas tu estado de ánimo cuando estás triste?",
      answers: [
        { text: "Lo expreso abiertamente y busco consuelo", type: "teto", weight: 2 },
        { text: "Lo guardo para mí y lo resuelvo solo", type: "egen", weight: 2 },
        { text: "Depende de la situación y las personas", type: "teto", weight: 1 },
        { text: "Trato de no mostrarlo externamente", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cuál es tu estilo al planificar algo?",
      answers: [
        { text: "Planificar detalladamente con anticipación", type: "egen", weight: 2 },
        { text: "Decidir según el estado de ánimo del momento", type: "teto", weight: 2 },
        { text: "Hacer un plan aproximado", type: "egen", weight: 1 },
        { text: "Disfrutar de la espontaneidad", type: "teto", weight: 1 }
      ]
    },
    {
      question: "¿Cómo te comportas cuando alguien te pide un favor?",
      answers: [
        { text: "Analizo primero si puedo hacerlo", type: "egen", weight: 2 },
        { text: "Digo 'sí' inmediatamente", type: "teto", weight: 2 },
        { text: "Depende de quién sea la persona", type: "egen", weight: 1 },
        { text: "Me cuesta negarme", type: "teto", weight: 1 }
      ]
    },
    {
      question: "¿Cuál es tu estilo de comunicación?",
      answers: [
        { text: "Directo y claro", type: "teto", weight: 2 },
        { text: "Considerado y cuidadoso", type: "egen", weight: 2 },
        { text: "Emocional y expresivo", type: "teto", weight: 1 },
        { text: "Escucho más de lo que hablo", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cómo reaccionas cuando recibas críticas?",
      answers: [
        { text: "Las acepto abiertamente y trato de mejorar", type: "teto", weight: 2 },
        { text: "Las analizo profundamente", type: "egen", weight: 2 },
        { text: "Inicialmente me siento herido pero luego reflexiono", type: "teto", weight: 1 },
        { text: "Me tomo tiempo para procesarlas", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Qué es más importante al tomar decisiones?",
      answers: [
        { text: "Intuición y emociones", type: "teto", weight: 2 },
        { text: "Análisis lógico", type: "egen", weight: 2 },
        { text: "Opiniones de otras personas", type: "egen", weight: 1 },
        { text: "Experiencias pasadas", type: "teto", weight: 1 }
      ]
    },
    {
      question: "¿Cuál es tu estilo para adaptarte a nuevos entornos?",
      answers: [
        { text: "Me adapto rápidamente y disfruto nuevos desafíos", type: "teto", weight: 2 },
        { text: "Tomo tiempo y me adapto lentamente", type: "egen", weight: 2 },
        { text: "Me adapto junto con las personas a mi alrededor", type: "teto", weight: 1 },
        { text: "Prefiero la estabilidad", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cómo sueles pasar los fines de semana?",
      answers: [
        { text: "Encuentro amigos y paso tiempo activo", type: "teto", weight: 2 },
        { text: "Descanso en casa y disfruto tiempo personal", type: "egen", weight: 2 },
        { text: "Exploro nuevos lugares o tengo nuevas experiencias", type: "teto", weight: 1 },
        { text: "Me enfoco en pasatiempos favoritos", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cómo reaccionas cuando alguien te pide un favor?",
      answers: [
        { text: "Digo 'sí' primero y pienso después", type: "teto", weight: 2 },
        { text: "Pienso cuidadosamente y luego respondo", type: "egen", weight: 2 },
        { text: "Me resulta difícil negarme", type: "egen", weight: 1 },
        { text: "Considero mi propia situación primero", type: "teto", weight: 1 }
      ]
    },
    {
      question: "¿Qué rol prefieres en proyectos de equipo?",
      answers: [
        { text: "Mostrar liderazgo y liderar todo el equipo", type: "teto", weight: 2 },
        { text: "Apoyar y ayudar con tareas específicas", type: "egen", weight: 2 },
        { text: "Mediar y coordinar entre miembros", type: "teto", weight: 1 },
        { text: "Enfocarme en mi parte de forma independiente", type: "egen", weight: 1 }
      ]
    },
    {
      question: "¿Cómo sueles reaccionar cuando cometes un error?",
      answers: [
        { text: "Lo admito rápidamente y busco soluciones", type: "teto", weight: 2 },
        { text: "Analizo la causa y pienso en la prevención", type: "egen", weight: 2 },
        { text: "Lo tomo emocionalmente", type: "teto", weight: 1 },
        { text: "Reflexiono sobre ello a solas", type: "egen", weight: 1 }
      ]
    }
  ],
  'zh-cn': [
    {
      question: "认识新朋友时你的风格是什么？",
      answers: [
        { text: "我会主动说话，积极接近", type: "teto", weight: 2 },
        { text: "我等待别人先接近我", type: "egen", weight: 2 },
        { text: "当我找到共同话题时才会交谈", type: "teto", weight: 1 },
        { text: "我需要时间来适应", type: "egen", weight: 1 }
      ]
    },
    {
      question: "心情不好时你如何表达？",
      answers: [
        { text: "我会开放地表达并寻求安慰", type: "teto", weight: 2 },
        { text: "我会自己保留并独自解决", type: "egen", weight: 2 },
        { text: "这取决于情况和人", type: "teto", weight: 1 },
        { text: "我尽量不表现出来", type: "egen", weight: 1 }
      ]
    },
    {
      question: "计划事情时你的风格是什么？",
      answers: [
        { text: "提前详细计划", type: "egen", weight: 2 },
        { text: "根据当时的心情决定", type: "teto", weight: 2 },
        { text: "制定大概的计划", type: "egen", weight: 1 },
        { text: "享受自发性", type: "teto", weight: 1 }
      ]
    },
    {
      question: "别人向你寻求帮助时你如何表现？",
      answers: [
        { text: "首先分析我是否能做到", type: "egen", weight: 2 },
        { text: "立即说'好的'", type: "teto", weight: 2 },
        { text: "这取决于是谁", type: "egen", weight: 1 },
        { text: "我很难拒绝", type: "teto", weight: 1 }
      ]
    },
    {
      question: "你的沟通风格是什么？",
      answers: [
        { text: "直接和清楚", type: "teto", weight: 2 },
        { text: "体贴和谨慎", type: "egen", weight: 2 },
        { text: "情感和表达性", type: "teto", weight: 1 },
        { text: "我听得比说得多", type: "egen", weight: 1 }
      ]
    },
    {
      question: "收到批评时你如何反应？",
      answers: [
        { text: "我开放地接受并努力改进", type: "teto", weight: 2 },
        { text: "我深入分析", type: "egen", weight: 2 },
        { text: "一开始会受伤但然后会反思", type: "teto", weight: 1 },
        { text: "我需要时间来处理", type: "egen", weight: 1 }
      ]
    },
    {
      question: "做决定时什么更重要？",
      answers: [
        { text: "直觉和情感", type: "teto", weight: 2 },
        { text: "逻辑分析", type: "egen", weight: 2 },
        { text: "他人的意见", type: "egen", weight: 1 },
        { text: "过去的经验", type: "teto", weight: 1 }
      ]
    },
    {
      question: "适应新环境时你的风格是什么？",
      answers: [
        { text: "我快速适应并享受新挑战", type: "teto", weight: 2 },
        { text: "我慢慢适应", type: "egen", weight: 2 },
        { text: "我与周围的人一起适应", type: "teto", weight: 1 },
        { text: "我更喜欢稳定", type: "egen", weight: 1 }
      ]
    },
    {
      question: "你通常如何度过周末？",
      answers: [
        { text: "和朋友见面，积极度过时光", type: "teto", weight: 2 },
        { text: "在家休息，享受个人时间", type: "egen", weight: 2 },
        { text: "探索新地方或有新体验", type: "teto", weight: 1 },
        { text: "专注于喜欢的爱好", type: "egen", weight: 1 }
      ]
    },
    {
      question: "别人请你帮忙时你如何反应？",
      answers: [
        { text: "我先说'好的'然后再考虑", type: "teto", weight: 2 },
        { text: "我仔细考虑然后回应", type: "egen", weight: 2 },
        { text: "我很难拒绝", type: "egen", weight: 1 },
        { text: "我首先考虑自己的情况", type: "teto", weight: 1 }
      ]
    },
    {
      question: "在团队项目中你更喜欢什么角色？",
      answers: [
        { text: "展现领导力，带领整个团队", type: "teto", weight: 2 },
        { text: "支持并帮助完成具体任务", type: "egen", weight: 2 },
        { text: "在成员之间进行协调", type: "teto", weight: 1 },
        { text: "独立专注于我的部分", type: "egen", weight: 1 }
      ]
    },
    {
      question: "犯错时你通常如何反应？",
      answers: [
        { text: "我快速承认并寻找解决方案", type: "teto", weight: 2 },
        { text: "我分析原因并思考预防", type: "egen", weight: 2 },
        { text: "我情绪化地对待", type: "teto", weight: 1 },
        { text: "我独自反思", type: "egen", weight: 1 }
      ]
    }
  ],
  'zh-tw': [
    {
      question: "認識新朋友時你的風格是什麼？",
      answers: [
        { text: "我會主動說話，積極接近", type: "teto", weight: 2 },
        { text: "我等待別人先接近我", type: "egen", weight: 2 },
        { text: "當我找到共同話題時才會交談", type: "teto", weight: 1 },
        { text: "我需要時間來適應", type: "egen", weight: 1 }
      ]
    },
    {
      question: "心情不好時你如何表達？",
      answers: [
        { text: "我會開放地表達並尋求安慰", type: "teto", weight: 2 },
        { text: "我會自己保留並獨自解決", type: "egen", weight: 2 },
        { text: "這取決於情況和人", type: "teto", weight: 1 },
        { text: "我盡量不表現出來", type: "egen", weight: 1 }
      ]
    },
    {
      question: "計劃事情時你的風格是什麼？",
      answers: [
        { text: "提前詳細計劃", type: "egen", weight: 2 },
        { text: "根據當時的心情決定", type: "teto", weight: 2 },
        { text: "制定大概的計劃", type: "egen", weight: 1 },
        { text: "享受自發性", type: "teto", weight: 1 }
      ]
    },
    {
      question: "別人向你尋求幫助時你如何表現？",
      answers: [
        { text: "首先分析我是否能做到", type: "egen", weight: 2 },
        { text: "立即說'好的'", type: "teto", weight: 2 },
        { text: "這取決於是誰", type: "egen", weight: 1 },
        { text: "我很難拒絕", type: "teto", weight: 1 }
      ]
    },
    {
      question: "你的溝通風格是什麼？",
      answers: [
        { text: "直接和清楚", type: "teto", weight: 2 },
        { text: "體貼和謹慎", type: "egen", weight: 2 },
        { text: "情感和表達性", type: "teto", weight: 1 },
        { text: "我聽得比說得多", type: "egen", weight: 1 }
      ]
    },
    {
      question: "收到批評時你如何反應？",
      answers: [
        { text: "我開放地接受並努力改進", type: "teto", weight: 2 },
        { text: "我深入分析", type: "egen", weight: 2 },
        { text: "一開始會受傷但然後會反思", type: "teto", weight: 1 },
        { text: "我需要時間來處理", type: "egen", weight: 1 }
      ]
    },
    {
      question: "做決定時什麼更重要？",
      answers: [
        { text: "直覺和情感", type: "teto", weight: 2 },
        { text: "邏輯分析", type: "egen", weight: 2 },
        { text: "他人的意見", type: "egen", weight: 1 },
        { text: "過去的經驗", type: "teto", weight: 1 }
      ]
    },
    {
      question: "適應新環境時你的風格是什麼？",
      answers: [
        { text: "我快速適應並享受新挑戰", type: "teto", weight: 2 },
        { text: "我慢慢適應", type: "egen", weight: 2 },
        { text: "我與周圍的人一起適應", type: "teto", weight: 1 },
        { text: "我更喜歡穩定", type: "egen", weight: 1 }
      ]
    },
    {
      question: "你通常如何度過週末？",
      answers: [
        { text: "和朋友見面，積極度過時光", type: "teto", weight: 2 },
        { text: "在家休息，享受個人時間", type: "egen", weight: 2 },
        { text: "探索新地方或有新體驗", type: "teto", weight: 1 },
        { text: "專注於喜歡的愛好", type: "egen", weight: 1 }
      ]
    },
    {
      question: "別人請你幫忙時你如何反應？",
      answers: [
        { text: "我先說'好的'然後再考慮", type: "teto", weight: 2 },
        { text: "我仔細考慮然後回應", type: "egen", weight: 2 },
        { text: "我很難拒絕", type: "egen", weight: 1 },
        { text: "我首先考慮自己的情況", type: "teto", weight: 1 }
      ]
    },
    {
      question: "在團隊項目中你更喜歡什麼角色？",
      answers: [
        { text: "展現領導力，帶領整個團隊", type: "teto", weight: 2 },
        { text: "支持並幫助完成具體任務", type: "egen", weight: 2 },
        { text: "在成員之間進行協調", type: "teto", weight: 1 },
        { text: "獨立專注於我的部分", type: "egen", weight: 1 }
      ]
    },
    {
      question: "犯錯時你通常如何反應？",
      answers: [
        { text: "我快速承認並尋找解決方案", type: "teto", weight: 2 },
        { text: "我分析原因並思考預防", type: "egen", weight: 2 },
        { text: "我情緒化地對待", type: "teto", weight: 1 },
        { text: "我獨自反思", type: "egen", weight: 1 }
      ]
    }
  ],
  ja: [
    {
      question: "新しい人と出会うときのスタイルは？",
      answers: [
        { text: "積極的に話しかけて、自分から近づく", type: "teto", weight: 2 },
        { text: "相手から近づいてくるのを待つ", type: "egen", weight: 2 },
        { text: "共通の話題を見つけたら話しかける", type: "teto", weight: 1 },
        { text: "慣れるまで時間が必要", type: "egen", weight: 1 }
      ]
    },
    {
      question: "気分が悪いときの表現方法は？",
      answers: [
        { text: "オープンに表現して慰めを求める", type: "teto", weight: 2 },
        { text: "自分で抱え込んで一人で解決する", type: "egen", weight: 2 },
        { text: "状況と相手によって決める", type: "teto", weight: 1 },
        { text: "なるべく表に出さない", type: "egen", weight: 1 }
      ]
    },
    {
      question: "計画を立てるときのスタイルは？",
      answers: [
        { text: "事前に詳細な計画を立てる", type: "egen", weight: 2 },
        { text: "その時の気分で決める", type: "teto", weight: 2 },
        { text: "大まかな計画を立てる", type: "egen", weight: 1 },
        { text: "自発性を楽しむ", type: "teto", weight: 1 }
      ]
    },
    {
      question: "他人から助けを求められたときの反応は？",
      answers: [
        { text: "まず自分ができるかどうか分析する", type: "egen", weight: 2 },
        { text: "すぐに「はい」と言う", type: "teto", weight: 2 },
        { text: "誰から頼まれるかによる", type: "egen", weight: 1 },
        { text: "断るのが難しい", type: "teto", weight: 1 }
      ]
    },
    {
      question: "あなたのコミュニケーションスタイルは？",
      answers: [
        { text: "直接的で明確", type: "teto", weight: 2 },
        { text: "思いやりがあり慎重", type: "egen", weight: 2 },
        { text: "感情的で表現豊か", type: "teto", weight: 1 },
        { text: "話すより聞くことが多い", type: "egen", weight: 1 }
      ]
    },
    {
      question: "批判を受けたときの反応は？",
      answers: [
        { text: "オープンに受け入れて改善に努める", type: "teto", weight: 2 },
        { text: "深く分析する", type: "egen", weight: 2 },
        { text: "最初は傷つくが後で反省する", type: "teto", weight: 1 },
        { text: "処理するのに時間が必要", type: "egen", weight: 1 }
      ]
    },
    {
      question: "決断を下すとき何が重要？",
      answers: [
        { text: "直感と感情", type: "teto", weight: 2 },
        { text: "論理的分析", type: "egen", weight: 2 },
        { text: "他人の意見", type: "egen", weight: 1 },
        { text: "過去の経験", type: "teto", weight: 1 }
      ]
    },
    {
      question: "新しい環境に適応するときのスタイルは？",
      answers: [
        { text: "素早く適応し新しい挑戦を楽しむ", type: "teto", weight: 2 },
        { text: "ゆっくりと適応する", type: "egen", weight: 2 },
        { text: "周囲の人と一緒に適応する", type: "teto", weight: 1 },
        { text: "安定を好む", type: "egen", weight: 1 }
      ]
    },
    {
      question: "週末はどのように過ごしますか？",
      answers: [
        { text: "友達と会って積極的に過ごす", type: "teto", weight: 2 },
        { text: "家で休んで個人的な時間を楽しむ", type: "egen", weight: 2 },
        { text: "新しい場所を探索したり新しい体験をする", type: "teto", weight: 1 },
        { text: "好きな趣味に集中する", type: "egen", weight: 1 }
      ]
    },
    {
      question: "他人に頼まれごとをされたときの反応は？",
      answers: [
        { text: "まず「はい」と言ってから考える", type: "teto", weight: 2 },
        { text: "慎重に考えてから答える", type: "egen", weight: 2 },
        { text: "断るのが難しい", type: "egen", weight: 1 },
        { text: "まず自分の状況を考える", type: "teto", weight: 1 }
      ]
    },
    {
      question: "チームプロジェクトで好む役割は？",
      answers: [
        { text: "リーダーシップを発揮してチーム全体を引っ張る", type: "teto", weight: 2 },
        { text: "サポートして具体的な作業を手伝う", type: "egen", weight: 2 },
        { text: "メンバー間の調整を行う", type: "teto", weight: 1 },
        { text: "独立して自分の部分に集中する", type: "egen", weight: 1 }
      ]
    },
    {
      question: "ミスをしたときの通常の反応は？",
      answers: [
        { text: "素早く認めて解決策を探す", type: "teto", weight: 2 },
        { text: "原因を分析して予防策を考える", type: "egen", weight: 2 },
        { text: "感情的に受け取る", type: "teto", weight: 1 },
        { text: "一人で反省する", type: "egen", weight: 1 }
      ]
    }
  ],
  vi: [
    {
      question: "Phong cách của bạn khi gặp gỡ người mới như thế nào?",
      answers: [
        { text: "Chủ động tiếp cận và bắt đầu cuộc trò chuyện", type: "teto", weight: 2 },
        { text: "Đợi người khác chủ động nói chuyện trước", type: "egen", weight: 2 },
        { text: "Hành động khác nhau tùy theo tình huống", type: "egen", weight: 1 },
        { text: "Tự nhiên đánh giá bầu không khí rồi hành động", type: "teto", weight: 1 }
      ]
    },
    {
      question: "Bạn thường đóng vai trò gì trong các buổi hẹn với bạn bè?",
      answers: [
        { text: "Quyết định địa điểm, thời gian và lập kế hoạch", type: "teto", weight: 2 },
        { text: "Nghe và làm theo ý kiến của người khác", type: "egen", weight: 2 },
        { text: "Đóng vai trò người tạo không khí vui vẻ", type: "teto", weight: 1 },
        { text: "Tham gia một cách yên lặng và thích thú", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Bạn thường giải tỏa căng thẳng như thế nào?",
      answers: [
        { text: "Gặp gỡ bạn bè và nói chuyện", type: "teto", weight: 2 },
        { text: "Dành thời gian một mình", type: "egen", weight: 2 },
        { text: "Tập thể dục hoặc hoạt động sở thích", type: "teto", weight: 1 },
        { text: "Nghe nhạc hoặc đọc sách", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Điều gì quan trọng hơn khi bạn đưa ra quyết định?",
      answers: [
        { text: "Cảm xúc và trực giác", type: "teto", weight: 2 },
        { text: "Phân tích logic", type: "egen", weight: 2 },
        { text: "Ý kiến của người khác", type: "egen", weight: 1 },
        { text: "Kinh nghiệm trong quá khứ", type: "teto", weight: 1 }
      ]
    },
    {
      question: "Bạn thể hiện cảm xúc như thế nào?",
      answers: [
        { text: "Thể hiện một cách cởi mở và trực tiếp", type: "teto", weight: 2 },
        { text: "Kiểm soát và thể hiện một cách tinh tế", type: "egen", weight: 2 },
        { text: "Thể hiện theo tình huống", type: "teto", weight: 1 },
        { text: "Ít thể hiện ra ngoài", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Thái độ của bạn với những thay đổi bất ngờ?",
      answers: [
        { text: "Hứng thú và thích thú với những thay đổi", type: "teto", weight: 2 },
        { text: "Cảm thấy căng thẳng và cần thời gian để thích nghi", type: "egen", weight: 2 },
        { text: "Tích cực tìm cách thích ứng", type: "teto", weight: 1 },
        { text: "Thích sự ổn định hơn", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Cách bạn tiếp cận các vấn đề khó khăn?",
      answers: [
        { text: "Xử lý ngay lập tức và quyết đoán", type: "teto", weight: 2 },
        { text: "Suy nghĩ cẩn thận từng bước", type: "egen", weight: 2 },
        { text: "Thảo luận với người khác để tìm giải pháp", type: "teto", weight: 1 },
        { text: "Dành thời gian để phân tích thấu đáo", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Phong cách giao tiếp của bạn trong nhóm?",
      answers: [
        { text: "Tích cực phát biểu và dẫn dắt cuộc trò chuyện", type: "teto", weight: 2 },
        { text: "Chủ yếu lắng nghe và đưa ra ý kiến khi cần", type: "egen", weight: 2 },
        { text: "Cân bằng giữa nói và nghe", type: "teto", weight: 1 },
        { text: "Thích lắng nghe hơn là nói", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Phản ứng của bạn khi bị chỉ trích?",
      answers: [
        { text: "Chấp nhận cởi mở và cố gắng cải thiện", type: "teto", weight: 2 },
        { text: "Phân tích sâu sắc", type: "egen", weight: 2 },
        { text: "Ban đầu cảm thấy tổn thương nhưng sau đó suy ngẫm", type: "teto", weight: 1 },
        { text: "Cần thời gian để xử lý", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Điều gì quan trọng khi bạn đưa ra quyết định?",
      answers: [
        { text: "Trực giác và cảm xúc", type: "teto", weight: 2 },
        { text: "Phân tích logic", type: "egen", weight: 2 },
        { text: "Ý kiến của người khác", type: "egen", weight: 1 },
        { text: "Kinh nghiệm quá khứ", type: "teto", weight: 1 }
      ]
    },
    {
      question: "Phong cách thích ứng với môi trường mới?",
      answers: [
        { text: "Thích ứng nhanh chóng và thích thú với thử thách mới", type: "teto", weight: 2 },
        { text: "Thích ứng từ từ", type: "egen", weight: 2 },
        { text: "Thích ứng cùng với mọi người xung quanh", type: "teto", weight: 1 },
        { text: "Thích sự ổn định", type: "egen", weight: 1 }
      ]
    },
    {
      question: "Bạn thường dành cuối tuần như thế nào?",
      answers: [
        { text: "Gặp gỡ bạn bè và hoạt động tích cực", type: "teto", weight: 2 },
        { text: "Nghỉ ngơi ở nhà và tận hưởng thời gian cá nhân", type: "egen", weight: 2 },
        { text: "Khám phá những địa điểm mới hoặc trải nghiệm mới", type: "teto", weight: 1 },
        { text: "Tập trung vào sở thích yêu thích", type: "egen", weight: 1 }
      ]
    }
  ]
};

export const resultTranslations: Record<'ko' | 'en' | 'es' | 'zh-cn' | 'zh-tw' | 'ja' | 'vi', Record<string, TestResult>> = {
  ko: {
    teto_male: {
      type: "teto_male",
      title: "테토남",
      emoji: "🔥",
      description: [
        "당신은 활발하고 적극적인 테토남입니다!",
        "새로운 도전을 두려워하지 않고 앞장서서 이끌어가는 스타일입니다.",
        "사람들과의 소통을 즐기며 에너지가 넘치는 성격입니다.",
        "리더십이 강하고 자신감 있게 의견을 표현하는 스타일입니다.",
        "때로는 신중함도 필요하지만, 당신의 추진력은 큰 장점입니다."
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "에겐남",
      emoji: "😊",
      description: [
        "당신은 신중하고 사려깊은 에겐남입니다!",
        "상황을 차근차근 분석하고 타인의 입장을 잘 이해합니다.",
        "조화를 중시하며 안정적인 관계를 추구하는 스타일입니다.",
        "당신의 깊이 있는 사고와 배려심은 주변 사람들에게 큰 힘이 됩니다."
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "테토녀",
      emoji: "✨",
      description: [
        "당신은 활기차고 매력적인 테토녀입니다!",
        "긍정적인 에너지로 주변 사람들에게 활력을 주는 스타일입니다.",
        "자신의 생각을 솔직하게 표현하며 도전을 즐깁니다.",
        "창의적이고 혁신적인 아이디어를 제시하는 능력이 뛰어납니다.",
        "당신의 밝은 에너지는 어떤 상황에서도 빛을 발합니다."
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "에겐녀",
      emoji: "🌸",
      description: [
        "당신은 따뜻하고 섬세한 에겐녀입니다!",
        "타인의 감정을 잘 이해하고 공감하는 능력이 뛰어납니다.",
        "차분하고 안정적이며 신뢰할 수 있는 성격입니다.",
        "깊이 있는 관계를 중시하고 진심 어린 조언을 해줍니다.",
        "당신의 따뜻함과 지혜는 많은 사람들에게 위로가 됩니다."
      ]
    }
  },
  en: {
    teto_male: {
      type: "teto_male",
      title: "Teto Male",
      emoji: "🔥",
      description: [
        "You are an active and proactive Teto Male!",
        "You're not afraid of new challenges and lead from the front.",
        "You enjoy communicating with people and have an energetic personality.",
        "You have strong leadership and confidently express your opinions.",
        "While sometimes caution is needed, your drive is a great strength."
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen Male",
      emoji: "😊",
      description: [
        "You are a thoughtful and considerate Egen Male!",
        "You analyze situations step by step and understand others' perspectives well.",
        "You value harmony and pursue stable relationships.",
        "Your deep thinking and consideration are a great strength to those around you."
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto Female",
      emoji: "✨",
      description: [
        "You are a vibrant and charming Teto Female!",
        "You energize people around you with positive energy.",
        "You express your thoughts honestly and enjoy challenges.",
        "You excel at presenting creative and innovative ideas.",
        "Your bright energy shines in any situation."
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen Female",
      emoji: "🌸",
      description: [
        "You are a warm and delicate Egen Female!",
        "You excel at understanding and empathizing with others' emotions.",
        "You have a calm, stable, and trustworthy personality.",
        "You value deep relationships and give sincere advice.",
        "Your warmth and wisdom comfort many people."
      ]
    }
  },
  es: {
    teto_male: {
      type: "teto_male",
      title: "Teto Masculino",
      emoji: "🔥",
      description: [
        "¡Eres un Teto Masculino activo y enérgico!",
        "No temes a nuevos desafíos y lideras desde el frente.",
        "Disfrutas comunicarte con las personas y tienes una personalidad llena de energía.",
        "Tu confianza y pasión inspiran a otros.",
        "Tu fuerza natural y liderazgo son tus mayores fortalezas."
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto Femenina",
      emoji: "✨",
      description: [
        "¡Eres una Teto Femenina brillante y carismática!",
        "Tienes un encanto natural y habilidades excelentes de comunicación.",
        "Eres buena motivando a las personas y creando atmósferas positivas.",
        "Tu energía y positividad impactan positivamente en las personas que te rodean.",
        "Tu confianza y calidez hacen que las personas se sientan cómodas."
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen Masculino",
      emoji: "😊",
      description: [
        "¡Eres un Egen Masculino estable y confiable!",
        "Eres bueno escuchando a otros y brindando consejos reflexivos.",
        "Tienes una personalidad tranquila y confiable que inspira confianza.",
        "Tu sinceridad y lealtad son altamente valoradas por quienes te rodean.",
        "Tu naturaleza considerada y consistente es tu mayor fortaleza."
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen Femenina",
      emoji: "🌸",
      description: [
        "¡Eres una Egen Femenina cálida y delicada!",
        "Sobresales en entender y empatizar con las emociones de otros.",
        "Tienes una personalidad tranquila, estable y confiable.",
        "Valoras las relaciones profundas y das consejos sinceros.",
        "Tu calidez y sabiduría consolidan a muchas personas."
      ]
    }
  },
  'zh-cn': {
    teto_male: {
      type: "teto_male",
      title: "Teto 男性",
      emoji: "🔥",
      description: [
        "你是一个活跃积极的 Teto 男性！",
        "你不惧怕新挑战，总是冲在最前面引领团队。",
        "你享受与人交流，拥有充满活力的性格。",
        "你的自信和热情鼓舞着他人。",
        "你天生的力量和领导力是你最大的优势。"
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto 女性",
      emoji: "✨",
      description: [
        "你是一个闪亮迷人的 Teto 女性！",
        "你拥有天生的魅力和出色的沟通技巧。",
        "你善于激励他人，创造积极的氛围。",
        "你的活力和积极性对周围的人产生积极影响。",
        "你的自信和温暖让人们感到舒适。"
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen 男性",
      emoji: "😊",
      description: [
        "你是一个稳重可靠的 Egen 男性！",
        "你善于倾听他人，给出深思熟虑的建议。",
        "你拥有平静可靠的性格，让人信赖。",
        "你的真诚和忠诚被周围的人高度重视。",
        "你体贴一致的天性是你最大的优势。"
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen 女性",
      emoji: "🌸",
      description: [
        "你是一个温暖细腻的 Egen 女性！",
        "你擅长理解和共情他人的情感。",
        "你拥有平静、稳定、值得信赖的性格。",
        "你重视深层关系，给出真诚的建议。",
        "你的温暖和智慧安慰着许多人。"
      ]
    }
  },
  'zh-tw': {
    teto_male: {
      type: "teto_male",
      title: "Teto 男性",
      emoji: "🔥",
      description: [
        "你是一個活躍積極的 Teto 男性！",
        "你不懼怕新挑戰，總是衝在最前面引領團隊。",
        "你享受與人交流，擁有充滿活力的性格。",
        "你的自信和熱情鼓舞著他人。",
        "你天生的力量和領導力是你最大的優勢。"
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto 女性",
      emoji: "✨",
      description: [
        "你是一個閃亮迷人的 Teto 女性！",
        "你擁有天生的魅力和出色的溝通技巧。",
        "你善於激勵他人，創造積極的氛圍。",
        "你的活力和積極性對周圍的人產生積極影響。",
        "你的自信和溫暖讓人們感到舒適。"
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen 男性",
      emoji: "😊",
      description: [
        "你是一個穩重可靠的 Egen 男性！",
        "你善於傾聽他人，給出深思熟慮的建議。",
        "你擁有平靜可靠的性格，讓人信賴。",
        "你的真誠和忠誠被周圍的人高度重視。",
        "你體貼一致的天性是你最大的優勢。"
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen 女性",
      emoji: "🌸",
      description: [
        "你是一個溫暖細膩的 Egen 女性！",
        "你擅長理解和共情他人的情感。",
        "你擁有平靜、穩定、值得信賴的性格。",
        "你重視深層關係，給出真誠的建議。",
        "你的溫暖和智慧安慰著許多人。"
      ]
    }
  },
  ja: {
    teto_male: {
      type: "teto_male",
      title: "Teto 男性",
      emoji: "🔥",
      description: [
        "あなたは活発で積極的なTeto男性です！",
        "新しい挑戦を恐れず、いつも先頭に立ってチームを引っ張ります。",
        "人との交流を楽しみ、エネルギッシュな性格を持っています。",
        "あなたの自信と熱意は他の人を励まします。",
        "生まれ持った力強さとリーダーシップがあなたの最大の強みです。"
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto 女性",
      emoji: "✨",
      description: [
        "あなたは輝く魅力的なTeto女性です！",
        "生まれ持った魅力と優れたコミュニケーション能力を持っています。",
        "他の人を励まし、ポジティブな雰囲気を作り出すのが得意です。",
        "あなたの活力と積極性は周りの人に良い影響を与えます。",
        "あなたの自信と温かさは人々を心地よくさせます。"
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen 男性",
      emoji: "😊",
      description: [
        "あなたは安定感のある信頼できるEgen男性です！",
        "他の人の話をよく聞き、深く考えたアドバイスをするのが得意です。",
        "落ち着きがあり信頼できる性格で、人から頼りにされています。",
        "あなたの誠実さと忠実さは周りの人から高く評価されています。",
        "思いやりのある一貫した性格があなたの最大の強みです。"
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen 女性",
      emoji: "🌸",
      description: [
        "あなたは温かく繊細なEgen女性です！",
        "他の人の感情を理解し共感するのが得意です。",
        "落ち着きがあり安定した信頼できる性格を持っています。",
        "深い関係を大切にし、真心のこもったアドバイスをします。",
        "あなたの温かさと知恵は多くの人を慰めています。"
      ]
    }
  },
  vi: {
    teto_male: {
      type: "teto_male",
      title: "Teto Nam",
      emoji: "🔥",
      description: [
        "Bạn là một Teto Nam năng động và chủ động!",
        "Bạn không ngại những thử thách mới và luôn dẫn đầu.",
        "Bạn thích giao tiếp với mọi người và có tính cách năng lượng.",
        "Bạn có khả năng lãnh đạo mạnh mẽ và tự tin thể hiện ý kiến.",
        "Mặc dù đôi khi cần thận trọng, sự quyết đoán là điểm mạnh lớn của bạn."
      ]
    },
    egen_male: {
      type: "egen_male",
      title: "Egen Nam",
      emoji: "😊",
      description: [
        "Bạn là một Egen Nam chu đáo và thấu hiểu!",
        "Bạn phân tích tình huống từng bước và hiểu rõ quan điểm của người khác.",
        "Bạn coi trọng sự hòa hợp và theo đuổi các mối quan hệ ổn định.",
        "Suy nghĩ sâu sắc và sự chu đáo là điểm mạnh lớn với những người xung quanh bạn."
      ]
    },
    teto_female: {
      type: "teto_female",
      title: "Teto Nữ",
      emoji: "✨",
      description: [
        "Bạn là một Teto Nữ rực rỡ và quyến rũ!",
        "Bạn truyền năng lượng cho mọi người xung quanh với sức sống tích cực.",
        "Bạn thể hiện suy nghĩ một cách trung thực và thích những thử thách.",
        "Bạn xuất sắc trong việc đưa ra những ý tưởng sáng tạo và đổi mới.",
        "Năng lượng tươi sáng của bạn tỏa sáng trong mọi tình huống."
      ]
    },
    egen_female: {
      type: "egen_female",
      title: "Egen Nữ",
      emoji: "🌸",
      description: [
        "Bạn là một Egen Nữ ấm áp và tinh tế!",
        "Bạn xuất sắc trong việc hiểu và đồng cảm với cảm xúc của người khác.",
        "Bạn có tính cách bình tĩnh, ổn định và đáng tin cậy.",
        "Bạn coi trọng các mối quan hệ sâu sắc và đưa ra lời khuyên chân thành.",
        "Sự ấm áp và trí tuệ của bạn an ủi nhiều người."
      ]
    }
  }
};