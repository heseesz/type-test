export type AttachmentType = 'secure' | 'anxious' | 'avoidant' | 'fearful';

export interface AttachmentAnswer {
  text: string;
  type: AttachmentType;
  weight: number;
}

export interface AttachmentQuestion {
  question: string;
  answers: AttachmentAnswer[];
}

export interface AttachmentResult {
  type: 'secure' | 'anxious' | 'avoidant' | 'fearful';
  title: string;
  emoji: string;
  description: string[];
  characteristics: string[];
  relationshipPattern: string[];
  tips: string[];
}

export interface AttachmentTestState {
  screen: 'welcome' | 'test' | 'result';
  currentQuestion: number;
  answers: number[];
  secureScore: number;
  anxiousScore: number;
  avoidantScore: number;
  fearfulScore: number;
  shuffledQuestions: AttachmentQuestion[];
  shuffledAnswers: number[][];
  questionOrder?: number[];
  finalResult?: AttachmentType;
}