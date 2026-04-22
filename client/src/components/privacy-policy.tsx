import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/language-context";

export function PrivacyPolicy() {
  const { language } = useLanguage();
  
  const buttonText = language === 'ko' ? 'Privacy Policy' : 'Privacy Policy';
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="link" 
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-0 h-auto"
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">타입테스트 개인정보처리방침</DialogTitle>
          <DialogDescription className="sr-only">
            타입테스트 개인정보처리방침
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <p className="leading-relaxed">
              타입테스트 (이하 '본 사이트')은(는) 「개인정보보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-base mb-2">1. 개인정보의 수집 및 이용 목적</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트는 직접적으로 사용자의 개인정보(이름, 연락처 등)를 수집하지 않습니다.</p>
                  <p>다만, 원활한 서비스 제공 및 사용자 경험 개선을 위해 GitHub 호스팅 서비스, 구글 애드센스(Google AdSense)를 통한 광고 노출 및 구글 애널리틱스(Google Analytics)를 통한 방문 통계 분석을 목적으로 다음과 같은 비식별성 정보를 자동으로 수집할 수 있습니다.</p>
                  <p><strong>수집 항목:</strong> IP 주소, 브라우저 종류 및 OS, 방문 일시, 서비스 이용 기록(페이지뷰 등), 유입 경로, 기기 정보</p>
                  <p><strong>수집 목적:</strong> 서비스 방문 및 이용 통계 분석, 사용자 경험 개선, 광고 게재 및 효과 분석, 서비스 안정성 확보</p>
                  <p>이러한 정보는 특정 개인을 식별할 수 없는 형태로 수집되며, 서비스 운영 및 개선에만 활용됩니다.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">2. 개인정보의 제3자 제공에 관한 사항</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트는 수집된 비식별성 정보를 GitHub, 구글(Google)에 제공합니다. 이는 GitHub 호스팅 서비스의 제공, 구글 애드센스 및 구글 애널리틱스 서비스 제공을 위해 필수적입니다.</p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <p><strong>제공받는 자 1:</strong> GitHub, Inc.</p>
                    <p><strong>제공 목적:</strong> 웹사이트 호스팅 서비스 제공 및 트래픽 분석을 통한 서비스 안정성 유지</p>
                    <p><strong>제공하는 항목:</strong> IP 주소, 브라우저 종류 및 OS, 방문 일시, 서비스 이용 기록 등 비식별성 정보</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <p><strong>제공받는 자 2:</strong> 구글(Google LLC)</p>
                    <p><strong>제공 목적:</strong> 구글 애드센스를 통한 맞춤형 광고 게재, 구글 애널리틱스를 통한 웹사이트 방문 및 이용 통계 분석</p>
                    <p><strong>제공하는 항목:</strong> IP 주소, 브라우저 종류 및 OS, 방문 일시, 서비스 이용 기록(페이지뷰 등), 유입 경로, 기기 정보 등 비식별성 정보</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">3. 개인정보처리의 위탁에 관한 사항</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트는 서비스 개선 및 운영을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <p><strong>수탁자 1:</strong> GitHub, Inc.</p>
                    <p><strong>위탁 업무 내용:</strong> 웹사이트 호스팅 서비스 및 트래픽 정보 수집/분석</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <p><strong>수탁자 2:</strong> 구글(Google LLC)</p>
                    <p><strong>위탁 업무 내용:</strong> 구글 애드센스 운영 및 관리, 구글 애널리틱스를 통한 웹사이트 방문 통계 분석 및 보고서 제공</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">4. 정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트는 직접적으로 사용자의 개인정보(이름, 연락처 등)를 수집하지 않으므로, 정보주체(만 14세 미만 아동의 경우 법정대리인)의 개인정보 열람, 정정·삭제, 처리정지 요구 등의 권리는 발생하지 않습니다.</p>
                  <p>다만, 구글 애널리틱스 데이터 수집을 원치 않으시면, 구글 애널리틱스 차단 브라우저 부가기능을 설치하여 데이터 수집을 거부할 수 있습니다.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">5. 개인정보의 파기 절차 및 파기 방법에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 직접적으로 개인정보를 수집하지 않으므로, 개인정보 파기 절차 및 방법에 해당 사항이 없습니다. GitHub 및 구글을 통해 수집된 비식별성 정보의 보유 및 파기 정책은 각 사의 개인정보처리방침에 따릅니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">6. 개인정보의 안전성 확보 조치에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 직접 개인정보를 보관하지 않으므로 별도의 안전성 확보 조치를 취하지 않습니다. GitHub 및 구글을 통해 수집되는 비식별성 정보의 안전성 확보 조치는 각 사의 개인정보처리방침에 따릅니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">7. 개인정보 자동 수집 장치(쿠키)의 설치·운영 및 그 거부에 관한 사항</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트는 사용자에게 맞춤형 서비스를 제공하고 이용 정보를 저장하기 위해 <strong>쿠키(Cookie)</strong>를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 사용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 사용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.</p>
                  <p><strong>쿠키의 사용 목적:</strong> GitHub 호스팅 서비스 운영, 구글 애드센스 광고 효율 분석 및 구글 애널리틱스 통계 분석</p>
                  <p><strong>쿠키 설치/운영 거부 방법:</strong> 사용자는 웹 브라우저 설정을 통해 쿠키 설치에 대한 동의 여부를 선택할 수 있으며, 모든 쿠키의 저장을 거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 설정할 수 있습니다. 단, 쿠키 설치를 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">8. 개인정보 보호책임자에 관한 사항</h3>
                <div className="leading-relaxed space-y-2">
                  <p>본 사이트의 개인정보 처리와 관련한 문의, 불만 처리, 피해 구제 등에 관한 사항은 아래 개인정보 보호책임자에게 문의하실 수 있습니다.</p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <p><strong>타입테스트 운영팀</strong></p>
                    <p>typetest.site@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">9. 개인정보처리방침 변경에 관한 사항</h3>
                <p className="leading-relaxed">이 개인정보처리방침은 2025년 7월 5일부터 적용됩니다. 법령 및 정책 또는 보안기술의 변경에 따라 내용 추가, 삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을 시행하기 최소 7일 전에 본 사이트의 공지사항을 통해 고지할 것입니다.</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
