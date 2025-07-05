export type AttachmentType = 'secure' | 'anxious' | 'avoidant' | 'fearful';

export interface AttachmentAnswer {
  text: string;
  avoidanceScore: number;
  anxietyScore: number;
}

export interface AttachmentQuestion {
  id: number;
  question: string;
  answers: AttachmentAnswer[];
}

export interface AttachmentResult {
  type: AttachmentType;
  title: string;
  emoji: string;
  description: string[];
  characteristics: string[];
  advice: string[];
}

export interface AttachmentTestState {
  screen: 'welcome' | 'test' | 'result';
  currentQuestion: number;
  answers: number[];
  avoidanceScore: number;
  anxietyScore: number;
  finalResult?: AttachmentType;
  shuffledQuestions: AttachmentQuestion[];
  questionOrder: number[];
}