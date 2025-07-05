import { Button } from '@/components/ui/button';
import { AttachmentResult } from '@/lib/attachment-types';
import { Link } from 'wouter';
import { Share2 } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {result.title}
            </h1>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">회피 점수:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 ml-2">
                    {avoidanceScore}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">불안 점수:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 ml-2">
                    {anxietyScore}
                  </span>
                </div>
              </div>
            </div>
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

          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={onRestart}
                variant="outline"
                className="flex-1"
              >
                다시 테스트하기
              </Button>
              
              <Button
                onClick={handleShare}
                className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                결과 공유하기
              </Button>
            </div>

            <Link href="/">
              <Button 
                variant="ghost" 
                className="w-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                타입테스트 홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
          <AboutUs />
          <span>|</span>
          <PrivacyPolicy />
          <span>|</span>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}