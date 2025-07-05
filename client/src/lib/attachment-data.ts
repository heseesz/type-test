import { AttachmentQuestion, AttachmentResult } from './attachment-types';

// English version
export const attachmentQuestionsEn: AttachmentQuestion[] = [
  // Avoidance items (1-18)
  {
    id: 1,
    question: "I am comfortable not having close emotional relationships.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 2,
    question: "Independence and self-sufficiency are very important to me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 3,
    question: "I don't like depending on others or having others depend on me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 4,
    question: "I feel uncomfortable when others try to get very close to me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 5,
    question: "I am not comfortable opening up to others.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 6,
    question: "I try to avoid getting too close to my partner.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 7,
    question: "I find myself reluctant when my partner wants to become intimate.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 8,
    question: "I want to get close to my partner, but I find myself pulling back.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 9,
    question: "I get nervous when others get too close to me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 10,
    question: "I find it difficult to depend on others.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 11,
    question: "I prefer to distance myself rather than show my emotions during conflicts.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 12,
    question: "I am happy and satisfied enough by myself.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 13,
    question: "I rarely talk about my weaknesses or difficulties with others.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 14,
    question: "Others' emotional demands often feel excessive to me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 15,
    question: "I value freedom and independence highly in relationships.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 16,
    question: "I feel uncomfortable depending on someone emotionally.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 17,
    question: "I try to avoid getting deeply involved in my partner's problems.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 18,
    question: "I dislike it when my personal space is invaded in intimate relationships.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: -2, anxietyScore: 0 },
      { text: "Disagree", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Strongly agree", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },

  // Anxiety items (19-36)
  {
    id: 19,
    question: "I worry about being abandoned.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 20,
    question: "I worry a lot about my relationships with others.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 21,
    question: "I worry that others don't care about me as much as I care about them.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 22,
    question: "I worry about losing people who are close to me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 23,
    question: "I worry about being left alone.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 24,
    question: "I need frequent reassurance that I am loved by my partner.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 25,
    question: "I often expect my partner to reciprocate the same level of affection I show.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 26,
    question: "My desire to merge with my partner sometimes scares people away.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 27,
    question: "My excessive desire for intimacy sometimes frightens people away.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 28,
    question: "Sometimes I demand more affection and commitment from others.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 29,
    question: "I react very sensitively to changes in my partner's mood or behavior.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 30,
    question: "I feel anxious when my partner's interest in me decreases.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 31,
    question: "I often doubt whether my partner truly understands me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 32,
    question: "I tend to get easily hurt or angry over small issues in relationships.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 33,
    question: "I tend to cling too much to relationships because I fear my partner will leave.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 34,
    question: "I need frequent confirmation that my partner loves me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 35,
    question: "I often express my insecure emotions to my partner.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 36,
    question: "I often feel that my partner doesn't put enough time and effort into me.",
    answers: [
      { text: "Strongly disagree", avoidanceScore: 0, anxietyScore: -2 },
      { text: "Disagree", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "Agree", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Strongly agree", avoidanceScore: 0, anxietyScore: 2 }
    ]
  }
];

export const attachmentQuestions: AttachmentQuestion[] = [
  // 회피 문항 (1-18)
  {
    id: 1,
    question: "나는 가까운 정서적 관계를 맺지 않고 지내는 게 편안하다.",
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
    question: "독립심과 자기 충족감을 느끼는 것이 나에게는 매우 중요하다.",
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
    question: "나는 남들에게 의지하거나 남들이 나에게 의지하는 것을 좋아하지 않는다.",
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
    question: "나는 다른 사람이 나와 매우 가까워지려 할 때 불편하다.",
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
    question: "나는 다른 사람에게 마음을 여는 것이 편안하지 못하다.",
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
    question: "나는 상대방과 너무 가까워지는 것을 피하려고 한다.",
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
    question: "나는 상대방이 막 나와 친해지려고 할 때 꺼려하는 나를 발견한다.",
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
    question: "나는 상대방과 가까워지기를 원하지만 나는 생각을 바꾸어 그만둔다.",
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
    question: "나는 다른 사람이 나와 너무 가까워졌을 때 예민해진다.",
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
    question: "나는 다른 사람에게 의지하기가 어렵다.",
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
    question: "나는 갈등 상황에서 내 감정을 드러내기보다 거리를 두는 편이다.",
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
    question: "나는 혼자서도 충분히 행복하고 만족감을 느낀다.",
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
    question: "나는 나의 약점이나 어려움을 타인에게 잘 이야기하지 않는다.",
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
    question: "나는 타인의 감정적 요구가 과도하게 느껴질 때가 많다.",
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
    question: "나는 관계에서 자유로움과 독립성을 매우 중요하게 생각한다.",
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
    question: "나는 누군가에게 정서적으로 깊이 의존하는 것을 불편하게 느낀다.",
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
    question: "나는 상대방의 문제에 깊이 관여하는 것을 피하려 한다.",
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
    question: "나는 친밀한 관계에서 나의 개인적인 공간이 침해받는 것을 싫어한다.",
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
    question: "나는 버림을 받는 것에 대해 걱정하는 편이다.",
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
    question: "나는 다른 사람과의 관계에 대해 많이 걱정하는 편이다.",
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
    question: "내가 다른 사람에게 관심을 가지는 만큼 그들이 나에게 관심을 가지지 않을까봐 걱정이다.",
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
    question: "나는 나와 친한 사람을 잃을까봐 꽤 걱정이 된다.",
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
    question: "나는 혼자 남겨질까봐 걱정이다.",
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
    question: "나는 상대방으로부터 사랑받고 있다는 것을 자주 확인받고 싶어한다.",
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
    question: "나는 종종 내가 상대방에게 호의를 보이는 만큼 상대방도 그렇게 해 주기를 바란다.",
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
    question: "나는 상대방과 하나가 되길 원하기 때문에 사람들이 때때로 나에게서 멀어진다.",
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
    question: "지나치게 친밀해지고자 하는 욕심 때문에 때로 사람들이 두려워하여 거리를 둔다.",
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
    question: "가끔 나는 다른 사람에게, 더 많은 애정과 더 많은 헌신을 보여줄 것을 강요한다.",
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
    question: "나는 상대방의 기분이나 행동 변화에 매우 민감하게 반응한다.",
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
    question: "나는 관계에서 상대방의 관심이 줄어들면 불안감을 느낀다.",
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
    question: "나는 상대방이 나를 충분히 이해하고 있는지 자주 의심한다.",
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
    question: "나는 관계에서 작은 문제에도 쉽게 상처받거나 화를 내는 편이다.",
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
    question: "나는 상대방이 나를 떠날까 봐 관계에 지나치게 매달리는 경향이 있다.",
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
    question: "나는 상대방이 나를 사랑한다는 확신을 자주 받고 싶다.",
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
    question: "나는 관계에서 나의 불안정한 감정을 상대방에게 자주 표현한다.",
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
    question: "나는 상대방이 나에게 충분한 시간과 노력을 들이지 않는다고 느낄 때가 많다.",
    answers: [
      { text: "전혀 동의하지 않음", avoidanceScore: 0, anxietyScore: -2 },
      { text: "동의하지 않음", avoidanceScore: 0, anxietyScore: -1 },
      { text: "보통", avoidanceScore: 0, anxietyScore: 0 },
      { text: "동의함", avoidanceScore: 0, anxietyScore: 1 },
      { text: "매우 동의함", avoidanceScore: 0, anxietyScore: 2 }
    ]
  }
];

// English results
export const attachmentResultsEn: Record<string, AttachmentResult> = {
  secure: {
    type: 'secure',
    title: 'Secure Attachment',
    emoji: '😊',
    description: [
      'You have a secure attachment style. You feel comfortable with intimacy and independence.',
      'You trust others and believe you are worthy of love.',
      'You communicate your needs effectively and respond supportively to your partner\'s needs.'
    ],
    characteristics: [
      'Comfortable with intimacy and closeness',
      'High self-esteem and positive view of others',
      'Effective communication in relationships',
      'Able to seek and provide support',
      'Handles conflict constructively',
      'Maintains independence within relationships'
    ],
    advice: [
      'Continue nurturing your healthy relationship patterns',
      'Support partners who may have different attachment styles',
      'Maintain open and honest communication',
      'Practice patience and understanding with less secure partners',
      'Use your secure base to help others feel more secure'
    ]
  },
  anxious: {
    type: 'anxious',
    title: 'Anxious Attachment',
    emoji: '😰',
    description: [
      'You have an anxious attachment style. You desire close relationships but worry about your partner\'s feelings for you.',
      'You may seek frequent reassurance and fear abandonment.',
      'You tend to be highly sensitive to your partner\'s moods and behaviors.'
    ],
    characteristics: [
      'Strong desire for close relationships',
      'Fear of abandonment and rejection',
      'Seeks frequent reassurance from partner',
      'Highly sensitive to partner\'s mood changes',
      'May become overly dependent in relationships',
      'Tends to worry about relationship security'
    ],
    advice: [
      'Practice self-soothing techniques to manage anxiety',
      'Develop a stronger sense of self-worth',
      'Communicate your needs directly rather than seeking constant reassurance',
      'Work on building trust in your relationships',
      'Consider therapy to explore the roots of your attachment anxiety',
      'Practice mindfulness to stay present rather than worrying about the future'
    ]
  },
  avoidant: {
    type: 'avoidant',
    title: 'Avoidant Attachment',
    emoji: '🚪',
    description: [
      'You have an avoidant attachment style. You value independence and may find intimate relationships challenging.',
      'You prefer to rely on yourself and may feel uncomfortable with too much closeness.',
      'You tend to suppress emotions and maintain emotional distance from others.'
    ],
    characteristics: [
      'Highly values independence and self-reliance',
      'Uncomfortable with too much intimacy',
      'Tends to suppress or avoid emotional expression',
      'May have difficulty trusting others completely',
      'Prefers to handle problems alone',
      'May withdraw during conflicts or stress'
    ],
    advice: [
      'Practice opening up gradually to trusted partners',
      'Work on identifying and expressing your emotions',
      'Allow yourself to depend on others in small ways',
      'Recognize that vulnerability can strengthen relationships',
      'Consider therapy to explore your comfort with intimacy',
      'Practice staying present during emotional conversations'
    ]
  },
  fearful: {
    type: 'fearful',
    title: 'Fearful-Avoidant Attachment',
    emoji: '😕',
    description: [
      'You have a fearful-avoidant attachment style. You want close relationships but are afraid of getting hurt.',
      'You may feel conflicted between wanting intimacy and fearing rejection.',
      'Your relationships may feel unpredictable as you alternate between closeness and distance.'
    ],
    characteristics: [
      'Desires close relationships but fears getting hurt',
      'May have an unpredictable relationship pattern',
      'Alternates between seeking and avoiding intimacy',
      'May have negative views of both self and others',
      'Struggles with trust and emotional regulation',
      'May push partners away when they get too close'
    ],
    advice: [
      'Work on building a secure sense of self-worth',
      'Practice emotional regulation techniques',
      'Communicate your fears and needs to your partner',
      'Consider professional therapy to address past relationship trauma',
      'Take small steps toward trusting others',
      'Practice staying in relationships during difficult moments rather than withdrawing'
    ]
  }
};

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

// Spanish version
export const attachmentQuestionsEs: AttachmentQuestion[] = [
  // Avoidance items (1-18)
  {
    id: 1,
    question: "Me siento cómodo/a sin tener relaciones emocionales cercanas.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 2,
    question: "La independencia y la autosuficiencia son muy importantes para mí.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 3,
    question: "No me gusta depender de otros o que otros dependan de mí.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 4,
    question: "Me siento incómodo/a cuando otros intentan acercarse mucho a mí.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 5,
    question: "Prefiero mantener cierta distancia emocional con los demás.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 6,
    question: "Me cuesta trabajo confiar plenamente en mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 7,
    question: "Raramente me abro por completo a mis parejas románticas.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 8,
    question: "Me pongo nervioso/a cuando mi pareja quiere acercarse demasiado.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 9,
    question: "Creo que es mejor no mostrar mis sentimientos a los demás.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 10,
    question: "No es fácil para mí depender de mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 11,
    question: "Tengo dificultades para expresar mis necesidades a mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 12,
    question: "Evito hablar sobre mis sentimientos con mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 13,
    question: "Me siento cómodo/a sin relaciones románticas cercanas.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 14,
    question: "Prefiero resolver mis problemas por mí mismo/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 15,
    question: "La intimidad emocional me hace sentir incómodo/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 16,
    question: "Me cuesta trabajo mostrar afecto a mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 17,
    question: "Encuentro difícil ser vulnerable con mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  {
    id: 18,
    question: "Valoro mucho mi espacio personal en las relaciones.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: -2, anxietyScore: 0 },
      { text: "En desacuerdo", avoidanceScore: -1, anxietyScore: 0 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 1, anxietyScore: 0 },
      { text: "Totalmente de acuerdo", avoidanceScore: 2, anxietyScore: 0 }
    ]
  },
  // Anxiety items (19-36)
  {
    id: 19,
    question: "Me preocupa que mi pareja me abandone.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 20,
    question: "Necesito mucha cercanía en mis relaciones románticas.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 21,
    question: "Temo que mi pareja no me quiera tanto como yo la quiero.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 22,
    question: "Cuando mi pareja no está disponible, me siento molesto/a o enojado/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 23,
    question: "Me preocupa perder el amor de mi pareja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 24,
    question: "Quiero estar muy cerca de mi pareja y esto a veces la aleja.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 25,
    question: "Cuando no estoy en una relación romántica, me siento algo perdido/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 26,
    question: "Me preocupa que mi pareja se sienta agobiada por mi necesidad de cercanía.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 27,
    question: "Mi deseo de intimidad a veces asusta a la gente.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 28,
    question: "Me siento frustrado/a cuando mi pareja no está disponible cuando la necesito.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 29,
    question: "Me pongo ansioso/a cuando mi pareja está lejos de mí.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 30,
    question: "Necesito que mi pareja me demuestre que me ama.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 31,
    question: "Cuando mi pareja desaprueba algo que he hecho, me siento muy mal conmigo mismo/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 32,
    question: "A menudo me pregunto si mi pareja realmente se preocupa por mí.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 33,
    question: "Me siento solo/a incluso cuando estoy en una relación romántica.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 34,
    question: "Raramente me preocupa que mi pareja me deje.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: 2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: -2 }
    ]
  },
  {
    id: 35,
    question: "Mi pareja me hace dudar de mí mismo/a.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: -2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: 2 }
    ]
  },
  {
    id: 36,
    question: "Puedo funcionar bien sin una relación romántica.",
    answers: [
      { text: "Totalmente en desacuerdo", avoidanceScore: 0, anxietyScore: 2 },
      { text: "En desacuerdo", avoidanceScore: 0, anxietyScore: 1 },
      { text: "Neutral", avoidanceScore: 0, anxietyScore: 0 },
      { text: "De acuerdo", avoidanceScore: 0, anxietyScore: -1 },
      { text: "Totalmente de acuerdo", avoidanceScore: 0, anxietyScore: -2 }
    ]
  }
];

export const attachmentResultsEs: Record<string, AttachmentResult> = {
  secure: {
    type: 'secure',
    title: 'Apego Seguro',
    emoji: '🌟',
    description: [
      'Tienes un estilo de apego seguro, lo que significa que te sientes cómodo/a con la intimidad y la independencia.',
      'Confías en que las relaciones pueden ser duraderas y satisfactorias.',
      'Tienes una visión positiva tanto de ti mismo/a como de los demás en las relaciones.'
    ],
    characteristics: [
      'Buena comunicación emocional',
      'Equilibrio entre intimidad e independencia',
      'Confianza en las relaciones',
      'Expresión saludable de necesidades',
      'Capacidad de resolver conflictos de manera constructiva'
    ],
    advice: [
      'Continúa fomentando la comunicación abierta en tus relaciones.',
      'Mantén el equilibrio entre dar y recibir apoyo.',
      'Sé un ejemplo positivo para otros en las relaciones.',
      'Sigue desarrollando tu inteligencia emocional.',
      'Ayuda a otros a desarrollar relaciones más seguras.'
    ]
  },
  anxious: {
    type: 'anxious',
    title: 'Apego Ansioso',
    emoji: '💕',
    description: [
      'Tienes un estilo de apego ansioso, lo que significa que valoras mucho la cercanía en las relaciones.',
      'Puedes experimentar ansiedad por la pérdida o el abandono en las relaciones.',
      'Tiendes a buscar confirmación y tranquilidad de tu pareja con frecuencia.'
    ],
    characteristics: [
      'Fuerte necesidad de cercanía emocional',
      'Preocupación por el abandono',
      'Búsqueda de confirmación constante',
      'Sensibilidad a los cambios en la relación',
      'Tendencia a idealizar las relaciones'
    ],
    advice: [
      'Practica la autorregulación emocional y técnicas de calma.',
      'Desarrolla tu autoestima y confianza personal.',
      'Comunica tus necesidades de manera directa y clara.',
      'Aprende a confiar en la estabilidad de tus relaciones.',
      'Considera la terapia para explorar patrones de apego.'
    ]
  },
  avoidant: {
    type: 'avoidant',
    title: 'Apego Evitativo',
    emoji: '🛡️',
    description: [
      'Tienes un estilo de apego evitativo, lo que significa que valoras mucho la independencia y la autosuficiencia.',
      'Puedes sentirte incómodo/a con niveles altos de intimidad emocional.',
      'Tiendes a mantener cierta distancia emocional en las relaciones.'
    ],
    characteristics: [
      'Fuerte valoración de la independencia',
      'Dificultad para expresar emociones vulnerables',
      'Tendencia a minimizar la importancia de las relaciones',
      'Preferencia por la autosuficiencia',
      'Resistencia a depender de otros'
    ],
    advice: [
      'Practica la apertura emocional gradualmente.',
      'Reconoce el valor de la intimidad y la conexión.',
      'Trabaja en expresar tus necesidades y sentimientos.',
      'Permite que otros te apoyen cuando lo necesites.',
      'Considera la terapia para explorar tus patrones de apego.'
    ]
  },
  fearful: {
    type: 'fearful',
    title: 'Apego Temeroso-Evitativo',
    emoji: '🌊',
    description: [
      'Tienes un estilo de apego temeroso-evitativo, lo que significa que experimentas sentimientos mixtos sobre la cercanía.',
      'Puedes desear intimidad pero al mismo tiempo temerla.',
      'Tus relaciones pueden caracterizarse por patrones de acercamiento y alejamiento.'
    ],
    characteristics: [
      'Ambivalencia hacia la intimidad',
      'Miedo tanto al abandono como a la cercanía',
      'Patrones impredecibles en las relaciones',
      'Dificultad para regular las emociones',
      'Confusión sobre las propias necesidades relacionales'
    ],
    advice: [
      'Desarrolla una comprensión más clara de tus necesidades emocionales.',
      'Practica la comunicación consistente y honesta.',
      'Busca terapia profesional para trabajar en patrones de apego.',
      'Aprende técnicas de regulación emocional.',
      'Rodéate de personas que ofrezcan relaciones seguras y estables.'
    ]
  }
};