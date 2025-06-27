import { Question, TestResult } from './test-types';

export const questions: Question[] = [
  {
    question: "새로운 사람들과 만날 때 당신은?",
    answers: [
      { text: "먼저 다가가서 대화를 시작한다", type: "teto", weight: 2 },
      { text: "상대방이 먼저 말을 걸기를 기다린다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "문제가 생겼을 때 당신의 반응은?",
    answers: [
      { text: "즉시 해결책을 찾아 행동에 옮긴다", type: "teto", weight: 2 },
      { text: "신중하게 상황을 분석한 후 대응한다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "팀 프로젝트에서 당신은 주로?",
    answers: [
      { text: "적극적으로 의견을 제시하고 주도한다", type: "teto", weight: 2 },
      { text: "다른 사람의 의견을 듣고 조율한다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "갑작스러운 계획 변경이 있을 때?",
    answers: [
      { text: "빠르게 적응하고 새로운 계획을 세운다", type: "teto", weight: 2 },
      { text: "당황하지만 차근차근 대응한다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "의견 충돌이 있을 때 당신은?",
    answers: [
      { text: "자신의 의견을 명확히 표현한다", type: "teto", weight: 1 },
      { text: "상대방의 입장을 먼저 이해하려 한다", type: "egen", weight: 1 }
    ]
  },
  {
    question: "새로운 도전 앞에서 당신의 마음가짐은?",
    answers: [
      { text: "일단 시작하고 보자!", type: "teto", weight: 2 },
      { text: "충분히 준비한 후에 시작한다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "실수를 했을 때 당신은?",
    answers: [
      { text: "빠르게 인정하고 해결책을 찾는다", type: "teto", weight: 1 },
      { text: "원인을 분석하고 반성한다", type: "egen", weight: 1 }
    ]
  },
  {
    question: "친구들과의 모임에서 당신은?",
    answers: [
      { text: "분위기를 이끌고 활기를 만든다", type: "teto", weight: 2 },
      { text: "편안한 분위기를 만들어준다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "스트레스를 받을 때 당신의 대처법은?",
    answers: [
      { text: "적극적으로 스트레스 원인을 해결한다", type: "teto", weight: 1 },
      { text: "혼자만의 시간을 가지며 마음을 다스린다", type: "egen", weight: 1 }
    ]
  },
  {
    question: "목표를 달성하기 위해 당신은?",
    answers: [
      { text: "과감하게 도전하고 밀어붙인다", type: "teto", weight: 2 },
      { text: "단계별로 착실하게 진행한다", type: "egen", weight: 2 }
    ]
  },
  {
    question: "다른 사람의 부탁을 받았을 때?",
    answers: [
      { text: "가능한지 판단 후 즉시 답변한다", type: "teto", weight: 1 },
      { text: "신중하게 고려한 후 답변한다", type: "egen", weight: 1 }
    ]
  },
  {
    question: "자신을 표현할 때 당신은?",
    answers: [
      { text: "직접적이고 명확하게 표현한다", type: "teto", weight: 2 },
      { text: "상황을 고려해서 조심스럽게 표현한다", type: "egen", weight: 2 }
    ]
  }
];

export const testResults: Record<string, TestResult> = {
  teto_male: {
    type: "teto_male",
    title: "테토남",
    emoji: "🚀",
    description: [
      "당신은 적극적이고 주도적인 테토남입니다!",
      "새로운 도전을 두려워하지 않고, 문제 상황에서 빠른 판단력을 보입니다.",
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
      "당신은 활발하고 당당한 테토녀입니다!",
      "자신의 의견을 명확히 표현하고 적극적으로 행동합니다.",
      "새로운 환경에 빠르게 적응하며 도전을 즐기는 스타일입니다.",
      "때로는 여유를 갖는 것도 좋지만, 당신의 적극성은 매력적입니다."
    ]
  },
  egen_female: {
    type: "egen_female",
    title: "에겐녀",
    emoji: "🌸",
    description: [
      "당신은 따뜻하고 배려심 깊은 에겐녀입니다!",
      "다른 사람의 감정을 세심하게 살피고 조화로운 관계를 만듭니다.",
      "신중한 판단력과 깊은 공감 능력을 가진 스타일입니다.",
      "당신의 따뜻함과 안정감은 주변 사람들에게 편안함을 줍니다."
    ]
  }
};
