import { AttachmentQuestion, AttachmentResult, AttachmentType } from './attachment-types';

const createAttachmentAnswer = (text: string, type: AttachmentType, weight: number) => ({
  text,
  type,
  weight
});

const createAttachmentResult = (
  type: AttachmentType,
  title: string,
  emoji: string,
  description: string[],
  characteristics: string[],
  relationshipPattern: string[],
  tips: string[]
): AttachmentResult => ({
  type,
  title,
  emoji,
  description,
  characteristics,
  relationshipPattern,
  tips
});

export const attachmentQuestionsTranslations = {
  ko: [
    {
      question: "친밀한 관계에서 나는...",
      answers: [
        createAttachmentAnswer("편안함을 느끼며 자연스럽게 감정을 표현한다", "secure", 2),
        createAttachmentAnswer("상대방이 나를 떠날까봐 불안해한다", "anxious", 2),
        createAttachmentAnswer("너무 가까워지는 것을 불편해한다", "avoidant", 2),
        createAttachmentAnswer("가까워지고 싶지만 동시에 두렵다", "fearful", 2)
      ]
    },
    {
      question: "연인과 갈등이 생겼을 때 나는...",
      answers: [
        createAttachmentAnswer("문제를 직접 이야기하며 해결책을 함께 찾는다", "secure", 2),
        createAttachmentAnswer("상대방의 반응을 지나치게 걱정하며 불안해한다", "anxious", 2),
        createAttachmentAnswer("갈등 자체를 피하려고 하거나 감정을 억누른다", "avoidant", 2),
        createAttachmentAnswer("화가 나지만 동시에 관계가 끝날까봐 두렵다", "fearful", 2)
      ]
    },
    {
      question: "상대방이 바쁘다고 연락을 못 받을 때 나는...",
      answers: [
        createAttachmentAnswer("상대방의 상황을 이해하고 기다린다", "secure", 2),
        createAttachmentAnswer("내가 뭔가 잘못했나 계속 걱정한다", "anxious", 2),
        createAttachmentAnswer("별로 신경 쓰지 않는다", "avoidant", 2),
        createAttachmentAnswer("화가 나면서도 버림받는 느낌이 든다", "fearful", 2)
      ]
    },
    {
      question: "내 감정을 표현할 때 나는...",
      answers: [
        createAttachmentAnswer("상황에 맞게 적절히 표현한다", "secure", 2),
        createAttachmentAnswer("과도하게 감정적이 되는 경우가 많다", "anxious", 2),
        createAttachmentAnswer("감정을 드러내는 것을 어려워한다", "avoidant", 2),
        createAttachmentAnswer("표현하고 싶지만 상처받을까봐 망설인다", "fearful", 2)
      ]
    },
    {
      question: "상대방에게 도움을 요청할 때 나는...",
      answers: [
        createAttachmentAnswer("필요할 때 자연스럽게 도움을 청한다", "secure", 2),
        createAttachmentAnswer("도움을 요청하면서도 거절당할까봐 불안하다", "anxious", 2),
        createAttachmentAnswer("혼자서 해결하려고 노력한다", "avoidant", 2),
        createAttachmentAnswer("도움이 필요하지만 요청하기 두렵다", "fearful", 2)
      ]
    },
    {
      question: "관계에서 독립성에 대해 나는...",
      answers: [
        createAttachmentAnswer("서로의 독립성을 존중하며 건강한 균형을 유지한다", "secure", 2),
        createAttachmentAnswer("독립적이려고 하지만 혼자 있으면 불안하다", "anxious", 2),
        createAttachmentAnswer("독립성을 매우 중요하게 생각한다", "avoidant", 2),
        createAttachmentAnswer("독립적이고 싶지만 외로움을 많이 느낀다", "fearful", 2)
      ]
    },
    {
      question: "상대방의 다른 친구들과의 관계에 대해 나는...",
      answers: [
        createAttachmentAnswer("상대방의 인간관계를 존중하고 지지한다", "secure", 2),
        createAttachmentAnswer("질투심을 느끼거나 관심을 독점하고 싶어한다", "anxious", 2),
        createAttachmentAnswer("크게 신경 쓰지 않는다", "avoidant", 2),
        createAttachmentAnswer("질투하지만 동시에 나도 거리를 두고 싶다", "fearful", 2)
      ]
    },
    {
      question: "과거 연인 관계에서 나는...",
      answers: [
        createAttachmentAnswer("대체로 만족스럽고 건강한 관계를 유지했다", "secure", 2),
        createAttachmentAnswer("자주 불안해하거나 집착하는 모습을 보였다", "anxious", 2),
        createAttachmentAnswer("감정적으로 거리를 두거나 회피하는 경향이 있었다", "avoidant", 2),
        createAttachmentAnswer("가까워지고 싶었지만 자꾸 밀어내게 되었다", "fearful", 2)
      ]
    },
    {
      question: "신뢰에 대해 나는...",
      answers: [
        createAttachmentAnswer("상대방을 기본적으로 신뢰한다", "secure", 2),
        createAttachmentAnswer("신뢰하고 싶지만 계속 확인하려고 한다", "anxious", 2),
        createAttachmentAnswer("쉽게 신뢰하지 않는다", "avoidant", 2),
        createAttachmentAnswer("신뢰하고 싶지만 배신당할까봐 두렵다", "fearful", 2)
      ]
    },
    {
      question: "미래의 관계에 대해 나는...",
      answers: [
        createAttachmentAnswer("긍정적으로 기대한다", "secure", 2),
        createAttachmentAnswer("불안하지만 간절히 원한다", "anxious", 2),
        createAttachmentAnswer("특별한 기대를 하지 않는다", "avoidant", 2),
        createAttachmentAnswer("원하지만 동시에 두려워한다", "fearful", 2)
      ]
    },
    {
      question: "상대방과의 물리적 친밀감에 대해 나는...",
      answers: [
        createAttachmentAnswer("자연스럽고 편안하게 느낀다", "secure", 2),
        createAttachmentAnswer("상대방의 사랑을 확인하는 방법으로 중요하게 생각한다", "anxious", 2),
        createAttachmentAnswer("때로는 부담스럽거나 불편하다", "avoidant", 2),
        createAttachmentAnswer("원하지만 동시에 어색하거나 불편하다", "fearful", 2)
      ]
    },
    {
      question: "관계에서 내 자존감은...",
      answers: [
        createAttachmentAnswer("관계와 상관없이 안정적이다", "secure", 2),
        createAttachmentAnswer("상대방의 반응에 따라 많이 좌우된다", "anxious", 2),
        createAttachmentAnswer("다른 사람에게 의존하지 않는다", "avoidant", 2),
        createAttachmentAnswer("불안정하고 자주 흔들린다", "fearful", 2)
      ]
    }
  ],
  en: [
    {
      question: "In intimate relationships, I...",
      answers: [
        createAttachmentAnswer("feel comfortable and naturally express my emotions", "secure", 2),
        createAttachmentAnswer("worry that my partner will leave me", "anxious", 2),
        createAttachmentAnswer("feel uncomfortable getting too close", "avoidant", 2),
        createAttachmentAnswer("want to be close but feel scared at the same time", "fearful", 2)
      ]
    },
    {
      question: "When conflicts arise with my partner, I...",
      answers: [
        createAttachmentAnswer("discuss the problem directly and find solutions together", "secure", 2),
        createAttachmentAnswer("worry excessively about my partner's reaction", "anxious", 2),
        createAttachmentAnswer("try to avoid the conflict or suppress my emotions", "avoidant", 2),
        createAttachmentAnswer("feel angry but also fear the relationship might end", "fearful", 2)
      ]
    },
    {
      question: "When my partner is busy and doesn't respond, I...",
      answers: [
        createAttachmentAnswer("understand their situation and wait patiently", "secure", 2),
        createAttachmentAnswer("continuously worry if I did something wrong", "anxious", 2),
        createAttachmentAnswer("don't really mind it", "avoidant", 2),
        createAttachmentAnswer("feel angry yet abandoned at the same time", "fearful", 2)
      ]
    },
    {
      question: "When expressing my emotions, I...",
      answers: [
        createAttachmentAnswer("express them appropriately according to the situation", "secure", 2),
        createAttachmentAnswer("often become overly emotional", "anxious", 2),
        createAttachmentAnswer("find it difficult to show my feelings", "avoidant", 2),
        createAttachmentAnswer("want to express but hesitate due to fear of being hurt", "fearful", 2)
      ]
    },
    {
      question: "When asking for help from my partner, I...",
      answers: [
        createAttachmentAnswer("naturally ask for help when needed", "secure", 2),
        createAttachmentAnswer("ask for help while worrying about being rejected", "anxious", 2),
        createAttachmentAnswer("try to solve things by myself", "avoidant", 2),
        createAttachmentAnswer("need help but am afraid to ask", "fearful", 2)
      ]
    },
    {
      question: "Regarding independence in relationships, I...",
      answers: [
        createAttachmentAnswer("respect each other's independence and maintain healthy balance", "secure", 2),
        createAttachmentAnswer("try to be independent but feel anxious when alone", "anxious", 2),
        createAttachmentAnswer("consider independence very important", "avoidant", 2),
        createAttachmentAnswer("want to be independent but feel very lonely", "fearful", 2)
      ]
    },
    {
      question: "About my partner's relationships with other friends, I...",
      answers: [
        createAttachmentAnswer("respect and support their relationships", "secure", 2),
        createAttachmentAnswer("feel jealous or want to monopolize their attention", "anxious", 2),
        createAttachmentAnswer("don't really care about it", "avoidant", 2),
        createAttachmentAnswer("feel jealous but also want to distance myself", "fearful", 2)
      ]
    },
    {
      question: "In past romantic relationships, I...",
      answers: [
        createAttachmentAnswer("generally maintained satisfying and healthy relationships", "secure", 2),
        createAttachmentAnswer("often showed anxious or clingy behavior", "anxious", 2),
        createAttachmentAnswer("tended to keep emotional distance or avoid", "avoidant", 2),
        createAttachmentAnswer("wanted to be close but kept pushing away", "fearful", 2)
      ]
    },
    {
      question: "Regarding trust, I...",
      answers: [
        createAttachmentAnswer("basically trust my partner", "secure", 2),
        createAttachmentAnswer("want to trust but keep trying to verify", "anxious", 2),
        createAttachmentAnswer("don't trust easily", "avoidant", 2),
        createAttachmentAnswer("want to trust but fear being betrayed", "fearful", 2)
      ]
    },
    {
      question: "About future relationships, I...",
      answers: [
        createAttachmentAnswer("have positive expectations", "secure", 2),
        createAttachmentAnswer("feel anxious but desperately want them", "anxious", 2),
        createAttachmentAnswer("don't have particular expectations", "avoidant", 2),
        createAttachmentAnswer("want them but feel fearful at the same time", "fearful", 2)
      ]
    },
    {
      question: "Regarding physical intimacy with my partner, I...",
      answers: [
        createAttachmentAnswer("feel natural and comfortable", "secure", 2),
        createAttachmentAnswer("see it as an important way to confirm my partner's love", "anxious", 2),
        createAttachmentAnswer("sometimes find it burdensome or uncomfortable", "avoidant", 2),
        createAttachmentAnswer("want it but feel awkward or uncomfortable", "fearful", 2)
      ]
    },
    {
      question: "My self-esteem in relationships is...",
      answers: [
        createAttachmentAnswer("stable regardless of the relationship", "secure", 2),
        createAttachmentAnswer("heavily influenced by my partner's reactions", "anxious", 2),
        createAttachmentAnswer("not dependent on others", "avoidant", 2),
        createAttachmentAnswer("unstable and frequently shaken", "fearful", 2)
      ]
    }
  ]
};

export const attachmentResultTranslations = {
  ko: {
    secure: createAttachmentResult(
      'secure',
      '안정형 (Secure)',
      '🤗',
      [
        '안정형 애착 유형은 자신과 타인에 대해 모두 긍정적인 인식을 가지고 있습니다.',
        '친밀한 관계에서 편안함을 느끼며 동시에 건강한 독립성을 유지할 수 있습니다.',
        '갈등 상황에서도 건설적으로 문제를 해결하려고 노력합니다.'
      ],
      [
        '자아존중감이 높고 안정적',
        '타인에 대한 기본적인 신뢰감',
        '감정 표현이 적절하고 자연스러움',
        '갈등을 회피하지 않고 직면함',
        '독립성과 친밀감의 균형'
      ],
      [
        '파트너와의 관계에서 편안함을 느낌',
        '상대방을 신뢰하고 지지함',
        '갈등을 성장의 기회로 여김',
        '서로의 독립성을 존중함',
        '일관되고 안정적인 관계 유지'
      ],
      [
        '현재의 건강한 관계 패턴을 계속 유지하세요',
        '다른 사람들에게 좋은 관계의 모델이 되어주세요',
        '때로는 불안정한 애착 유형을 가진 사람들을 이해하고 도와주세요',
        '자신의 감정과 니즈를 계속해서 솔직하게 표현하세요'
      ]
    ),
    anxious: createAttachmentResult(
      'anxious',
      '불안-집착형 (Anxious-Preoccupied)',
      '😰',
      [
        '불안-집착형은 자신에 대해서는 부정적이지만 타인에 대해서는 긍정적인 인식을 가집니다.',
        '관계에서 높은 수준의 친밀감과 확신을 지속적으로 추구합니다.',
        '상대방이 자신을 떠날까봐 불안해하며 과도한 관심을 보이는 경향이 있습니다.'
      ],
      [
        '관계에서 강한 의존성',
        '버림받을 것에 대한 지속적인 불안',
        '상대방의 반응에 과도하게 민감',
        '자존감이 상대방의 반응에 의존',
        '감정 표현이 과도하거나 충동적'
      ],
      [
        '상대방으로부터 지속적인 확신을 추구',
        '질투심이나 소유욕을 자주 느낌',
        '상대방의 작은 변화에도 민감하게 반응',
        '관계에서 자신의 니즈를 과도하게 표현',
        '분리불안을 자주 경험'
      ],
      [
        '자신의 감정을 인식하고 조절하는 방법을 배우세요',
        '상대방에게 과도한 확신을 요구하지 마세요',
        '자신만의 취미나 관심사를 개발하여 독립성을 기르세요',
        '불안한 감정이 들 때 일시정지하고 현실적으로 생각해보세요',
        '전문가의 도움을 받아 자존감을 기르는 것을 고려해보세요'
      ]
    ),
    avoidant: createAttachmentResult(
      'avoidant',
      '회피-거부형 (Dismissive-Avoidant)',
      '🚪',
      [
        '회피-거부형은 자신에 대해서는 긍정적이지만 타인에 대해서는 부정적인 인식을 가집니다.',
        '독립성을 매우 중요하게 여기며 감정적 친밀감을 불편해합니다.',
        '다른 사람에게 의존하거나 다른 사람이 자신에게 의존하는 것을 피하려고 합니다.'
      ],
      [
        '높은 독립성과 자기 충족감',
        '감정적 친밀감에 대한 불편함',
        '타인에 대한 의존 회피',
        '감정 표현의 억제',
        '갈등 상황 회피'
      ],
      [
        '상대방과의 거리를 유지하려고 함',
        '깊은 감정적 유대 형성을 어려워함',
        '갈등을 피하거나 무시하는 경향',
        '파트너의 감정적 니즈에 둔감',
        '관계보다 개인적 목표를 우선시'
      ],
      [
        '감정을 억누르지 말고 적절히 표현하는 연습을 하세요',
        '상대방의 감정적 니즈를 이해하려고 노력하세요',
        '갈등을 회피하지 말고 건설적으로 해결해보세요',
        '친밀감이 독립성을 위협하지 않는다는 것을 이해하세요',
        '점진적으로 타인과의 감정적 연결을 시도해보세요'
      ]
    ),
    fearful: createAttachmentResult(
      'fearful',
      '회피-공포형 (Fearful-Avoidant)',
      '😕',
      [
        '회피-공포형은 자신과 타인에 대해 모두 부정적인 인식을 가지고 있습니다.',
        '친밀한 관계를 원하지만 동시에 상처받을 것을 두려워합니다.',
        '가까워지고 싶은 마음과 거리를 두고 싶은 마음이 동시에 존재합니다.'
      ],
      [
        '관계에 대한 양가적 감정',
        '자신과 타인에 대한 부정적 인식',
        '친밀감과 독립성 사이의 갈등',
        '불안정한 자존감',
        '비일관적인 관계 행동'
      ],
      [
        '가까워지고 싶지만 동시에 두려워함',
        '상대방을 밀어내면서도 붙잡고 싶어함',
        '관계에서 혼란스러운 감정을 자주 느낌',
        '과거의 상처로 인한 방어적 행동',
        '관계에 대한 불안정한 패턴'
      ],
      [
        '과거의 상처를 인정하고 치유하는 과정이 필요합니다',
        '자신의 감정을 이해하고 받아들이는 연습을 하세요',
        '신뢰할 수 있는 사람과 점진적으로 관계를 발전시키세요',
        '전문가의 도움을 받아 애착 패턴을 개선하는 것을 고려해보세요',
        '자신에게 인내심을 갖고 천천히 변화해나가세요'
      ]
    )
  },
  en: {
    secure: createAttachmentResult(
      'secure',
      'Secure Attachment',
      '🤗',
      [
        'Secure attachment type has positive perceptions of both self and others.',
        'You feel comfortable in intimate relationships while maintaining healthy independence.',
        'You strive to solve problems constructively even in conflict situations.'
      ],
      [
        'High and stable self-esteem',
        'Basic trust in others',
        'Appropriate and natural emotional expression',
        'Face conflicts without avoidance',
        'Balance between independence and intimacy'
      ],
      [
        'Feel comfortable in relationships with partners',
        'Trust and support your partner',
        'See conflicts as opportunities for growth',
        'Respect each other\'s independence',
        'Maintain consistent and stable relationships'
      ],
      [
        'Continue to maintain your current healthy relationship patterns',
        'Be a good relationship model for others',
        'Sometimes understand and help those with insecure attachment styles',
        'Continue to honestly express your emotions and needs'
      ]
    ),
    anxious: createAttachmentResult(
      'anxious',
      'Anxious-Preoccupied Attachment',
      '😰',
      [
        'Anxious-preoccupied type has negative perceptions of self but positive perceptions of others.',
        'You continuously seek high levels of intimacy and reassurance in relationships.',
        'You tend to worry about your partner leaving you and show excessive attention.'
      ],
      [
        'Strong dependency in relationships',
        'Persistent anxiety about abandonment',
        'Overly sensitive to partner\'s reactions',
        'Self-esteem depends on partner\'s responses',
        'Excessive or impulsive emotional expression'
      ],
      [
        'Seek continuous reassurance from partner',
        'Frequently feel jealousy or possessiveness',
        'React sensitively to small changes in partner',
        'Excessively express your needs in relationships',
        'Frequently experience separation anxiety'
      ],
      [
        'Learn to recognize and regulate your emotions',
        'Don\'t demand excessive reassurance from your partner',
        'Develop your own hobbies and interests to build independence',
        'When anxious feelings arise, pause and think realistically',
        'Consider seeking professional help to build self-esteem'
      ]
    ),
    avoidant: createAttachmentResult(
      'avoidant',
      'Dismissive-Avoidant Attachment',
      '🚪',
      [
        'Dismissive-avoidant type has positive perceptions of self but negative perceptions of others.',
        'You highly value independence and feel uncomfortable with emotional intimacy.',
        'You try to avoid depending on others or having others depend on you.'
      ],
      [
        'High independence and self-sufficiency',
        'Discomfort with emotional intimacy',
        'Avoidance of dependency on others',
        'Suppression of emotional expression',
        'Avoidance of conflict situations'
      ],
      [
        'Try to maintain distance from partner',
        'Difficulty forming deep emotional bonds',
        'Tendency to avoid or ignore conflicts',
        'Insensitive to partner\'s emotional needs',
        'Prioritize personal goals over relationships'
      ],
      [
        'Practice expressing emotions appropriately instead of suppressing them',
        'Try to understand your partner\'s emotional needs',
        'Don\'t avoid conflicts but try to resolve them constructively',
        'Understand that intimacy doesn\'t threaten independence',
        'Gradually attempt emotional connections with others'
      ]
    ),
    fearful: createAttachmentResult(
      'fearful',
      'Fearful-Avoidant Attachment',
      '😕',
      [
        'Fearful-avoidant type has negative perceptions of both self and others.',
        'You want intimate relationships but simultaneously fear being hurt.',
        'You have both the desire to get close and the desire to keep distance.'
      ],
      [
        'Ambivalent feelings about relationships',
        'Negative perceptions of self and others',
        'Conflict between intimacy and independence',
        'Unstable self-esteem',
        'Inconsistent relationship behaviors'
      ],
      [
        'Want to be close but feel scared at the same time',
        'Push partner away while wanting to hold on',
        'Frequently feel confused emotions in relationships',
        'Defensive behaviors due to past hurts',
        'Unstable patterns in relationships'
      ],
      [
        'You need to acknowledge and heal from past wounds',
        'Practice understanding and accepting your emotions',
        'Gradually develop relationships with trustworthy people',
        'Consider seeking professional help to improve attachment patterns',
        'Be patient with yourself and change slowly'
      ]
    )
  }
};