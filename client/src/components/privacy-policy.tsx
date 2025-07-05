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

export function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="link" 
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-0 h-auto"
        >
          개인정보처리방침
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
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집 및 이용하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">2. 개인정보의 처리 및 보유 기간</h3>
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집하지 않으므로, 개인정보를 처리하거나 보유하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">3. 개인정보의 제3자 제공에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집하지 않으므로, 개인정보를 제3자에게 제공하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">4. 개인정보처리의 위탁에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집하지 않으므로, 개인정보처리를 위탁하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 개인정보를 수집하지 않으므로, 정보주체(만 14세 미만 아동의 경우 법정대리인)의 개인정보 열람, 정정·삭제, 처리정지 요구 등의 권리는 발생하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">6. 개인정보의 파기 절차 및 파기 방법에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집하지 않으므로, 개인정보 파기 절차 및 방법에 해당 사항이 없습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">7. 개인정보의 안전성 확보 조치에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 어떠한 개인정보도 수집하지 않으므로, 개인정보의 안전성 확보 조치에 해당 사항이 없습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">8. 개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 개인정보 자동 수집 장치(쿠키 등)를 사용하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">9. 개인정보 보호책임자에 관한 사항</h3>
                <p className="leading-relaxed">본 사이트는 개인정보를 수집하지 않으므로, 별도의 개인정보 보호책임자를 지정하지 않습니다.</p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">10. 개인정보처리방침 변경에 관한 사항</h3>
                <p className="leading-relaxed">이 개인정보처리방침은 2025년 7월 5일부터 적용됩니다. 법령 및 정책 또는 보안기술의 변경에 따라 내용 추가, 삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을 시행하기 최소 7일 전에 본 사이트의 공지사항을 통해 고지할 것입니다.</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}