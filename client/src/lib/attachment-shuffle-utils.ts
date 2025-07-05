import { AttachmentQuestion } from './attachment-types';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleAttachmentQuestions(questions: AttachmentQuestion[]) {
  const shuffled = shuffleArray([...questions]);
  const shuffledAnswers = shuffled.map(question => {
    const answerIndices = Array.from({ length: question.answers.length }, (_, i) => i);
    return shuffleArray(answerIndices);
  });
  
  return { shuffledQuestions: shuffled, shuffledAnswers };
}

export function getOriginalAttachmentAnswerIndex(
  questionIndex: number,
  displayAnswerIndex: number,
  shuffledAnswers: number[][]
): number {
  return shuffledAnswers[questionIndex][displayAnswerIndex];
}