export type Gender = 'male' | 'female';

export type PersonalityType = 'teto' | 'egen';

export interface Answer {
  text: string;
  type: PersonalityType;
  weight: number;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface TestResult {
  type: 'teto_male' | 'egen_male' | 'teto_female' | 'egen_female';
  title: string;
  emoji: string;
  description: string[];
}

export interface TestState {
  screen: 'welcome' | 'test' | 'result';
  gender: Gender | null;
  currentQuestion: number;
  answers: number[];
  tetoScore: number;
  egenScore: number;
  shuffledQuestions: Question[];
  shuffledAnswers: number[][];
  finalResult?: 'teto_male' | 'egen_male' | 'teto_female' | 'egen_female';
}
