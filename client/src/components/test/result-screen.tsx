import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestResult } from "@/lib/test-types";

interface ResultScreenProps {
  result: TestResult;
  tetoScore: number;
  egenScore: number;
  onRestart: () => void;
}

export function ResultScreen({ result, tetoScore, egenScore, onRestart }: ResultScreenProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <Card className="bg-white rounded-2xl shadow-xl">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {result.title}
            </h1>
            <div className="w-24 h-1 gradient-teto-egen mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">당신의 성향 특징</h3>
            <div className="text-gray-600 leading-relaxed space-y-3">
              {result.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">당신의 점수</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-teto">{tetoScore}</div>
                <div className="text-sm text-gray-600">테토 성향</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-egen">{egenScore}</div>
                <div className="text-sm text-gray-600">에겐 성향</div>
              </div>
            </div>
          </div>

          <Button
            onClick={onRestart}
            className="w-full gradient-teto-egen hover:opacity-90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            다시 테스트하기
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
