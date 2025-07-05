import { AttachmentQuestion, AttachmentResult } from './attachment-types';

export const attachmentQuestions: AttachmentQuestion[] = [
  {
    question: "친밀한 관계에서 나는...",
    answers: [
      { text: "편안함을 느끼며 자연스럽게 감정을 표현한다", type: "secure", weight: 2 },
      { text: "상대방이 나를 떠날까봐 불안해한다", type: "anxious", weight: 2 },
      { text: "너무 가까워지는 것을 불편해한다", type: "avoidant", weight: 2 },
      { text: "가까워지고 싶지만 동시에 두렵다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "연인과 갈등이 생겼을 때 나는...",
    answers: [
      { text: "문제를 직접 이야기하며 해결책을 함께 찾는다", type: "secure", weight: 2 },
      { text: "상대방의 반응을 지나치게 걱정하며 불안해한다", type: "anxious", weight: 2 },
      { text: "갈등 자체를 피하려고 하거나 감정을 억누른다", type: "avoidant", weight: 2 },
      { text: "화가 나지만 동시에 관계가 끝날까봐 두렵다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "상대방이 바쁘다고 연락을 못 받을 때 나는...",
    answers: [
      { text: "상대방의 상황을 이해하고 기다린다", type: "secure", weight: 2 },
      { text: "내가 뭔가 잘못했나 계속 걱정한다", type: "anxious", weight: 2 },
      { text: "별로 신경 쓰지 않는다", type: "avoidant", weight: 2 },
      { text: "화가 나면서도 버림받는 느낌이 든다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "내 감정을 표현할 때 나는...",
    answers: [
      { text: "상황에 맞게 적절히 표현한다", type: "secure", weight: 2 },
      { text: "과도하게 감정적이 되는 경우가 많다", type: "anxious", weight: 2 },
      { text: "감정을 드러내는 것을 어려워한다", type: "avoidant", weight: 2 },
      { text: "표현하고 싶지만 상처받을까봐 망설인다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "상대방에게 도움을 요청할 때 나는...",
    answers: [
      { text: "필요할 때 자연스럽게 도움을 청한다", type: "secure", weight: 2 },
      { text: "도움을 요청하면서도 거절당할까봐 불안하다", type: "anxious", weight: 2 },
      { text: "혼자서 해결하려고 노력한다", type: "avoidant", weight: 2 },
      { text: "도움이 필요하지만 요청하기 두렵다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "관계에서 독립성에 대해 나는...",
    answers: [
      { text: "서로의 독립성을 존중하며 건강한 균형을 유지한다", type: "secure", weight: 2 },
      { text: "독립적이려고 하지만 혼자 있으면 불안하다", type: "anxious", weight: 2 },
      { text: "독립성을 매우 중요하게 생각한다", type: "avoidant", weight: 2 },
      { text: "독립적이고 싶지만 외로움을 많이 느낀다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "상대방의 다른 친구들과의 관계에 대해 나는...",
    answers: [
      { text: "상대방의 인간관계를 존중하고 지지한다", type: "secure", weight: 2 },
      { text: "질투심을 느끼거나 관심을 독점하고 싶어한다", type: "anxious", weight: 2 },
      { text: "크게 신경 쓰지 않는다", type: "avoidant", weight: 2 },
      { text: "질투하지만 동시에 나도 거리를 두고 싶다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "과거 연인 관계에서 나는...",
    answers: [
      { text: "대체로 만족스럽고 건강한 관계를 유지했다", type: "secure", weight: 2 },
      { text: "자주 불안해하거나 집착하는 모습을 보였다", type: "anxious", weight: 2 },
      { text: "감정적으로 거리를 두거나 회피하는 경향이 있었다", type: "avoidant", weight: 2 },
      { text: "가까워지고 싶었지만 자꾸 밀어내게 되었다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "신뢰에 대해 나는...",
    answers: [
      { text: "상대방을 기본적으로 신뢰한다", type: "secure", weight: 2 },
      { text: "신뢰하고 싶지만 계속 확인하려고 한다", type: "anxious", weight: 2 },
      { text: "쉽게 신뢰하지 않는다", type: "avoidant", weight: 2 },
      { text: "신뢰하고 싶지만 배신당할까봐 두렵다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "미래의 관계에 대해 나는...",
    answers: [
      { text: "긍정적으로 기대한다", type: "secure", weight: 2 },
      { text: "불안하지만 간절히 원한다", type: "anxious", weight: 2 },
      { text: "특별한 기대를 하지 않는다", type: "avoidant", weight: 2 },
      { text: "원하지만 동시에 두려워한다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "상대방과의 물리적 친밀감에 대해 나는...",
    answers: [
      { text: "자연스럽고 편안하게 느낀다", type: "secure", weight: 2 },
      { text: "상대방의 사랑을 확인하는 방법으로 중요하게 생각한다", type: "anxious", weight: 2 },
      { text: "때로는 부담스럽거나 불편하다", type: "avoidant", weight: 2 },
      { text: "원하지만 동시에 어색하거나 불편하다", type: "fearful", weight: 2 }
    ]
  },
  {
    question: "관계에서 내 자존감은...",
    answers: [
      { text: "관계와 상관없이 안정적이다", type: "secure", weight: 2 },
      { text: "상대방의 반응에 따라 많이 좌우된다", type: "anxious", weight: 2 },
      { text: "다른 사람에게 의존하지 않는다", type: "avoidant", weight: 2 },
      { text: "불안정하고 자주 흔들린다", type: "fearful", weight: 2 }
    ]
  }
];

export const attachmentResults: Record<string, AttachmentResult> = {
  secure: {
    type: 'secure',
    title: '안정형 (Secure)',
    emoji: '🤗',
    description: [
      '안정형 애착 유형은 자신과 타인에 대해 모두 긍정적인 인식을 가지고 있습니다.',
      '친밀한 관계에서 편안함을 느끼며 동시에 건강한 독립성을 유지할 수 있습니다.',
      '갈등 상황에서도 건설적으로 문제를 해결하려고 노력합니다.'
    ],
    characteristics: [
      '자아존중감이 높고 안정적',
      '타인에 대한 기본적인 신뢰감',
      '감정 표현이 적절하고 자연스러움',
      '갈등을 회피하지 않고 직면함',
      '독립성과 친밀감의 균형'
    ],
    relationshipPattern: [
      '파트너와의 관계에서 편안함을 느낌',
      '상대방을 신뢰하고 지지함',
      '갈등을 성장의 기회로 여김',
      '서로의 독립성을 존중함',
      '일관되고 안정적인 관계 유지'
    ],
    tips: [
      '현재의 건강한 관계 패턴을 계속 유지하세요',
      '다른 사람들에게 좋은 관계의 모델이 되어주세요',
      '때로는 불안정한 애착 유형을 가진 사람들을 이해하고 도와주세요',
      '자신의 감정과 니즈를 계속해서 솔직하게 표현하세요'
    ]
  },
  anxious: {
    type: 'anxious',
    title: '불안-집착형 (Anxious-Preoccupied)',
    emoji: '😰',
    description: [
      '불안-집착형은 자신에 대해서는 부정적이지만 타인에 대해서는 긍정적인 인식을 가집니다.',
      '관계에서 높은 수준의 친밀감과 확신을 지속적으로 추구합니다.',
      '상대방이 자신을 떠날까봐 불안해하며 과도한 관심을 보이는 경향이 있습니다.'
    ],
    characteristics: [
      '관계에서 강한 의존성',
      '버림받을 것에 대한 지속적인 불안',
      '상대방의 반응에 과도하게 민감',
      '자존감이 상대방의 반응에 의존',
      '감정 표현이 과도하거나 충동적'
    ],
    relationshipPattern: [
      '상대방으로부터 지속적인 확신을 추구',
      '질투심이나 소유욕을 자주 느낌',
      '상대방의 작은 변화에도 민감하게 반응',
      '관계에서 자신의 니즈를 과도하게 표현',
      '분리불안을 자주 경험'
    ],
    tips: [
      '자신의 감정을 인식하고 조절하는 방법을 배우세요',
      '상대방에게 과도한 확신을 요구하지 마세요',
      '자신만의 취미나 관심사를 개발하여 독립성을 기르세요',
      '불안한 감정이 들 때 일시정지하고 현실적으로 생각해보세요',
      '전문가의 도움을 받아 자존감을 기르는 것을 고려해보세요'
    ]
  },
  avoidant: {
    type: 'avoidant',
    title: '회피-거부형 (Dismissive-Avoidant)',
    emoji: '🚪',
    description: [
      '회피-거부형은 자신에 대해서는 긍정적이지만 타인에 대해서는 부정적인 인식을 가집니다.',
      '독립성을 매우 중요하게 여기며 감정적 친밀감을 불편해합니다.',
      '다른 사람에게 의존하거나 다른 사람이 자신에게 의존하는 것을 피하려고 합니다.'
    ],
    characteristics: [
      '높은 독립성과 자기 충족감',
      '감정적 친밀감에 대한 불편함',
      '타인에 대한 의존 회피',
      '감정 표현의 억제',
      '갈등 상황 회피'
    ],
    relationshipPattern: [
      '상대방과의 거리를 유지하려고 함',
      '깊은 감정적 유대 형성을 어려워함',
      '갈등을 피하거나 무시하는 경향',
      '파트너의 감정적 니즈에 둔감',
      '관계보다 개인적 목표를 우선시'
    ],
    tips: [
      '감정을 억누르지 말고 적절히 표현하는 연습을 하세요',
      '상대방의 감정적 니즈를 이해하려고 노력하세요',
      '갈등을 회피하지 말고 건설적으로 해결해보세요',
      '친밀감이 독립성을 위협하지 않는다는 것을 이해하세요',
      '점진적으로 타인과의 감정적 연결을 시도해보세요'
    ]
  },
  fearful: {
    type: 'fearful',
    title: '회피-공포형 (Fearful-Avoidant)',
    emoji: '😕',
    description: [
      '회피-공포형은 자신과 타인에 대해 모두 부정적인 인식을 가지고 있습니다.',
      '친밀한 관계를 원하지만 동시에 상처받을 것을 두려워합니다.',
      '가까워지고 싶은 마음과 거리를 두고 싶은 마음이 동시에 존재합니다.'
    ],
    characteristics: [
      '관계에 대한 양가적 감정',
      '자신과 타인에 대한 부정적 인식',
      '친밀감과 독립성 사이의 갈등',
      '불안정한 자존감',
      '비일관적인 관계 행동'
    ],
    relationshipPattern: [
      '가까워지고 싶지만 동시에 두려워함',
      '상대방을 밀어내면서도 붙잡고 싶어함',
      '관계에서 혼란스러운 감정을 자주 느낌',
      '과거의 상처로 인한 방어적 행동',
      '관계에 대한 불안정한 패턴'
    ],
    tips: [
      '과거의 상처를 인정하고 치유하는 과정이 필요합니다',
      '자신의 감정을 이해하고 받아들이는 연습을 하세요',
      '신뢰할 수 있는 사람과 점진적으로 관계를 발전시키세요',
      '전문가의 도움을 받아 애착 패턴을 개선하는 것을 고려해보세요',
      '자신에게 인내심을 갖고 천천히 변화해나가세요'
    ]
  }
};