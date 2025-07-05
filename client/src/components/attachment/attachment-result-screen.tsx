import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AttachmentResult } from '@/lib/attachment-types';
import { Share2, Home } from 'lucide-react';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';

interface AttachmentResultScreenProps {
  result: AttachmentResult;
  avoidanceScore: number;
  anxietyScore: number;
  onRestart: () => void;
}

export function AttachmentResultScreen({ 
  result, 
  avoidanceScore, 
  anxietyScore, 
  onRestart 
}: AttachmentResultScreenProps) {
  
  const handleShare = async () => {
    const shareText = `나의 애착 유형은 "${result.title}" 입니다! 🔗💝\n\n나도 애착 유형 테스트하기: ${window.location.origin}/attachment-style`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '성인 애착 유형 테스트 결과',
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('공유 취소됨');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('결과가 클립보드에 복사되었습니다!');
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    }
  };

  const handleBackToMain = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {result.title}
              </h1>
            </div>

            <div className="space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  애착 유형 설명
                </h2>
                <div className="space-y-3">
                  {result.description.map((desc, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  주요 특성
                </h2>
                <ul className="space-y-2">
                  {result.characteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-pink-500 mr-2">•</span>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advice */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  관계 개선 조언
                </h2>
                <ul className="space-y-2">
                  {result.advice.map((advice, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2">✓</span>
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 via-red-50 to-purple-50 dark:from-pink-900/20 dark:via-red-900/20 dark:to-purple-900/20 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">당신의 점수</h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{avoidanceScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">회피 점수</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{anxietyScore}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">불안 점수</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation"
              >
                <Share2 className="w-5 h-5 mr-2" />
                결과 공유하기
              </Button>
              
              <Button
                onClick={onRestart}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-h-[52px] touch-manipulation"
              >
                다시 테스트하기
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Back to Main Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleBackToMain}
            variant="outline"
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-xs sm:text-sm min-h-[40px] touch-manipulation"
          >
            <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            타입테스트 홈으로 돌아가기
          </Button>
        </div>
        
        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <AboutUs />
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <PrivacyPolicy />
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}