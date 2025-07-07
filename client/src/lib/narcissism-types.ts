export type NarcissismType = 'healthy' | 'grandiose' | 'vulnerable' | 'mixed';

export interface NarcissismAnswer {
  text: string;
  grandioseScore: number;
  vulnerableScore: number;
}

export interface NarcissismQuestion {
  id: number;
  question: string;
  answers: NarcissismAnswer[];
}

export interface NarcissismResult {
  type: NarcissismType;
  title: string;
  emoji: string;
  description: string[];
  characteristics: string[];
  advice: string[];
  shareText?: string;
}

export interface NarcissismTestState {
  screen: 'welcome' | 'test' | 'result';
  currentQuestion: number;
  answers: number[];
  grandioseScore: number;
  vulnerableScore: number;
  finalResult?: NarcissismType;
  shuffledQuestions: NarcissismQuestion[];
  questionOrder: number[];
}