import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { AboutUs } from '@/components/about-us';
import { ContactUs } from '@/components/contact-us';

interface AttachmentWelcomeScreenProps {
  onStart: () => void;
}

export function AttachmentWelcomeScreen({ onStart }: AttachmentWelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">💝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            성인 애착 유형 테스트
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            나의 애착 유형을 알아보고 관계 패턴을 이해해보세요
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                테스트 안내
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3 text-left">
                <p>
                  • 총 <strong>12개의 질문</strong>으로 구성되어 있습니다.
                </p>
                <p>
                  • 각 질문에 대해 자신의 생각과 가장 가까운 답을 선택해주세요.
                </p>
                <p>
                  • 정답이 없으니 솔직하게 답변해주세요.
                </p>
                <p>
                  • 테스트 결과는 <strong>안정형, 불안형, 회피형, 두려움-회피형</strong> 중 하나로 나타납니다.
                </p>
                <p>
                  • 테스트 소요 시간: 약 <strong>3-5분</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <Button 
                onClick={onStart}
                className="w-full py-3 text-lg bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-lg font-medium"
              >
                테스트 시작하기
              </Button>
              
              <Link href="/">
                <Button 
                  variant="outline" 
                  className="w-full py-3 text-lg border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  타입테스트 홈으로 돌아가기
                </Button>
              </Link>
            </div>
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