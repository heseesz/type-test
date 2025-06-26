import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gender } from "@/lib/test-types";

interface WelcomeScreenProps {
  onGenderSelect: (gender: Gender) => void;
}

export function WelcomeScreen({ onGenderSelect }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          테토-에겐 성향 테스트
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          당신의 성향을 알아보세요! 간단한 질문을 통해 테토형과 에겐형 중 어느 쪽에 가까운지 확인할 수 있습니다.
        </p>
      </div>
      
      <Card className="bg-white rounded-2xl shadow-xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">성별을 선택해주세요</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => onGenderSelect('male')}
              className="group bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 h-auto transition-all duration-300 transform hover:scale-105 text-blue-700 hover:text-blue-700"
              variant="outline"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl">👨</div>
                <div className="text-xl font-semibold">남자</div>
              </div>
            </Button>
            
            <Button
              onClick={() => onGenderSelect('female')}
              className="group bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 hover:border-pink-400 rounded-xl p-6 h-auto transition-all duration-300 transform hover:scale-105 text-pink-700 hover:text-pink-700"
              variant="outline"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl">👩</div>
                <div className="text-xl font-semibold">여자</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
