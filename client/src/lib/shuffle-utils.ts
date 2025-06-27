import { Question } from './test-types';

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle questions and return both shuffled questions and answer mappings
export function shuffleQuestions(questions: Question[]) {
  const shuffledQuestions = shuffleArray(questions);
  const shuffledAnswers = shuffledQuestions.map(question => {
    const answerIndices = Array.from({ length: question.answers.length }, (_, i) => i);
    return shuffleArray(answerIndices);
  });

  return {
    shuffledQuestions,
    shuffledAnswers
  };
}

// Convert shuffled answer index back to original answer index
export function getOriginalAnswerIndex(
  questionIndex: number,
  shuffledAnswerIndex: number,
  shuffledAnswers: number[][]
): number {
  return shuffledAnswers[questionIndex][shuffledAnswerIndex];
}