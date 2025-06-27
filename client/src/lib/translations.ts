import { Question } from './test-types';

export const questionsTranslations = {
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
  ]
};

export const resultTranslations = {
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
  }
};