import { AttachmentQuestion, AttachmentResult } from './attachment-types';

export const attachmentQuestions: AttachmentQuestion[] = [
  // 회피 문항 (1-18)
  {
    id: 1,
    question: "나는 친밀한 관계에서 상대방과 가까워지는 것이 불편하다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 2,
    question: "나는 다른 사람에게 의존하는 것을 좋아하지 않는다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 3,
    question: "나는 다른 사람들에게 마음을 여는 것이 어렵다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 4,
    question: "나는 관계에서 독립성을 유지하는 것을 선호한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 5,
    question: "다른 사람이 나와 너무 가까워지려 할 때 불편함을 느낀다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 6,
    question: "나는 다른 사람들과 감정적으로 가까워지는 것을 원하지 않는다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 7,
    question: "나는 친밀한 관계를 피하는 경향이 있다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 8,
    question: "나는 다른 사람이 나에게 의지하는 것을 불편해한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 9,
    question: "나는 연인에게 나의 속마음을 털어놓는 것이 어렵다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 10,
    question: "나는 혼자서 모든 것을 해결하는 것을 선호한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 11,
    question: "나는 다른 사람들과 깊은 관계를 맺는 것이 어렵다고 느낀다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 12,
    question: "연인관계에서 완전히 의존하는 것은 불편하다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 13,
    question: "나는 다른 사람들이 나에게 너무 가까이 다가오면 신경이 쓰인다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 14,
    question: "나는 연인에게 내 느낌을 보여주는 것이 쉽지 않다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 15,
    question: "나는 다른 사람들과 너무 가까워지는 것을 원하지 않는다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 16,
    question: "나는 연인에게 도움을 요청하는 것이 불편하다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 17,
    question: "나는 친밀한 관계에서도 어느 정도 거리를 유지하고 싶다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 18,
    question: "나는 다른 사람들이 나를 너무 잘 알게 되는 것을 좋아하지 않는다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: -2, anxietyScore: 0 },
      { text: "동의하지 않음", avoidanceScore: -1, anxietyScore: 0 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 1, anxietyScore: 0 },
      { text: "매우 동의함", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },

  // 불안 문항 (19-36)
  {
    id: 19,
    question: "나는 연인이 나를 떠날까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 20,
    question: "나는 연인이 나만큼 가까워지고 싶어하지 않을까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 21,
    question: "나는 연인이 나를 진정으로 신경 쓰지 않을까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 22,
    question: "나는 혼자 있을 때 연인이 나를 생각하고 있는지 궁금하다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 23,
    question: "나는 연인이 나를 사랑하는지 자주 의심한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 24,
    question: "나는 연인이 나와 함께 있고 싶어하지 않을까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 25,
    question: "나는 연인을 잃을까 봐 자주 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 26,
    question: "나는 연인에게 버림받을까 봐 두렵다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 27,
    question: "나는 연인이 나에게 충분히 관심을 보이지 않을 때 화가 난다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 28,
    question: "나는 연인의 사랑을 의심할 때가 있다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 29,
    question: "나는 연인이 다른 사람을 좋아할까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 30,
    question: "나는 연인과의 관계에서 불안감을 자주 느낀다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 31,
    question: "나는 연인이 나의 필요를 알아차리지 못할까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 32,
    question: "나는 연인이 나만큼 관계에 헌신하지 않을까 봐 두렵다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 33,
    question: "나는 연인이 나에게 충분한 애정을 보이지 않는다고 느낀다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 34,
    question: "나는 연인이 나에 대한 감정이 변할까 봐 걱정한다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 35,
    question: "나는 연인과 떨어져 있을 때 불안하다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 36,
    question: "나는 연인이 나보다 관계에 덜 투자하고 있다고 느낀다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  }
];

export const attachmentResults: Record<string, AttachmentResult> = {
  secure: {
    type: 'secure',
    title: '안정 애착형',
    emoji: '🤗',
    description: [
      '안정 애착형은 자신과 타인에 대해 긍정적인 인식을 가지고 있습니다.',
      '친밀한 관계에서 편안함을 느끼며, 동시에 적절한 독립성을 유지할 수 있습니다.',
      '갈등 상황에서도 건설적으로 문제를 해결하려고 노력합니다.'
    ],
    characteristics: [
      '높은 자존감과 타인에 대한 신뢰',
      '친밀감과 독립성의 균형',
      '효과적인 갈등 해결 능력',
      '안정적인 감정 조절',
      '건강한 의사소통 스타일'
    ],
    advice: [
      '현재의 안정적인 관계 패턴을 유지하세요.',
      '다른 사람들의 애착 스타일을 이해하고 배려하세요.',
      '갈등 상황에서 중재자 역할을 할 수 있습니다.',
      '자신의 강점을 활용하여 다른 사람들을 도와주세요.'
    ]
  },
  anxious: {
    type: 'anxious',
    title: '불안 애착형',
    emoji: '😰',
    description: [
      '불안 애착형은 자신에 대해서는 부정적이지만 타인에 대해서는 긍정적인 인식을 가집니다.',
      '관계에서 높은 친밀감을 추구하며, 상대방의 관심과 사랑을 끊임없이 확인하려 합니다.',
      '버림받을 것에 대한 두려움이 크고, 관계에서 불안감을 자주 느낍니다.'
    ],
    characteristics: [
      '높은 수준의 친밀감과 인정 추구',
      '버림받을 것에 대한 두려움',
      '상대방의 반응에 민감함',
      '관계에서 과도한 의존성',
      '분리 불안과 집착 행동'
    ],
    advice: [
      '자기 자신에 대한 긍정적인 인식을 기르세요.',
      '독립적인 활동과 취미를 개발하세요.',
      '상대방에게 과도한 확신을 구하지 마세요.',
      '불안한 감정을 건강한 방식으로 표현하는 방법을 익히세요.',
      '필요시 전문가의 도움을 받는 것을 고려하세요.'
    ]
  },
  avoidant: {
    type: 'avoidant',
    title: '회피 애착형',
    emoji: '🚪',
    description: [
      '회피 애착형은 자신에 대해서는 긍정적이지만 타인에 대해서는 부정적인 인식을 가집니다.',
      '독립성과 자기 충족감을 매우 중요하게 여기며, 타인에게 의존하는 것을 불편해합니다.',
      '친밀한 관계에서 거리를 두려 하고, 감정적 표현을 억제하는 경향이 있습니다.'
    ],
    characteristics: [
      '높은 독립성과 자기 충족감',
      '친밀감에 대한 불편함',
      '타인에 대한 의존 회피',
      '감정 표현의 억제',
      '갈등 상황 회피'
    ],
    advice: [
      '친밀한 관계의 가치를 인정하고 받아들이세요.',
      '감정을 표현하는 연습을 하세요.',
      '상대방에게 의존하는 것이 약함이 아님을 인식하세요.',
      '갈등을 피하지 말고 건설적으로 해결하려 노력하세요.',
      '점진적으로 타인과의 친밀감을 늘려가세요.'
    ]
  },
  fearful: {
    type: 'fearful',
    title: '두려움-회피 애착형',
    emoji: '😔',
    description: [
      '두려움-회피 애착형은 자신과 타인 모두에 대해 부정적인 인식을 가집니다.',
      '친밀한 관계를 원하지만 동시에 두려워하며, 일관되지 않은 행동을 보입니다.',
      '상처받을 것에 대한 두려움 때문에 관계에서 혼란스럽고 예측하기 어려운 패턴을 보입니다.'
    ],
    characteristics: [
      '친밀감에 대한 양가적 감정',
      '자신과 타인에 대한 부정적 인식',
      '일관되지 않은 관계 행동',
      '상처받을 것에 대한 두려움',
      '혼란스러운 감정 조절'
    ],
    advice: [
      '자신과 타인에 대한 긍정적 인식을 기르세요.',
      '일관된 행동 패턴을 개발하려 노력하세요.',
      '안전한 관계에서 점진적으로 신뢰를 쌓아가세요.',
      '전문가의 도움을 받아 과거의 상처를 치유하세요.',
      '자기 돌봄과 자기 사랑을 실천하세요.'
    ]
  }
};