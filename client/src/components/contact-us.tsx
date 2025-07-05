import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/language-context';

export function ContactUs() {
  const { language } = useLanguage();

  const contactContent = {
    ko: {
      title: '문의하기',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            사이트를 이용하시면서 문제가 있으시거나 도움이 필요하신가요? 언제든지 저희에게 연락해주세요!
          </p>
          <p className="leading-relaxed">
            저희는 여러분의 소중한 의견에 귀 기울이며, 사이트 이용에 불편함이 없도록 최선을 다하겠습니다.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              문의 메일: typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            보내주신 문의는 확인 후 최대한 빠르게 답변해드리겠습니다.
          </p>
        </div>
      )
    },
    en: {
      title: 'Contact Us',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Are you having trouble using the site or need help? Please contact us anytime!
          </p>
          <p className="leading-relaxed">
            We listen to your valuable opinions and will do our best to make your site use as convenient as possible.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              Contact email: typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            We will review your inquiry and respond as quickly as possible.
          </p>
        </div>
      )
    },
    es: {
      title: 'Contáctenos',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            ¿Tiene problemas para usar el sitio o necesita ayuda? ¡Contáctenos en cualquier momento!
          </p>
          <p className="leading-relaxed">
            Escuchamos sus valiosas opiniones y haremos todo lo posible para que su sitio sea lo más cómodo posible.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              Correo electrónico de contacto: typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            Revisaremos su consulta y le responderemos lo antes posible.
          </p>
        </div>
      )
    },
    'zh-cn': {
      title: '联系我们',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            您在使用本网站时遇到问题或需要帮助吗？请随时联系我们！
          </p>
          <p className="leading-relaxed">
            我们认真倾听您的宝贵意见，并竭尽全力让您使用本网站尽可能便捷。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              联系邮箱：typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            我们将尽快审核您的咨询并回复。
          </p>
        </div>
      )
    },
    'zh-tw': {
      title: '聯絡我們',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            您在使用本網站時遇到問題或需要協助嗎？請隨時與我們聯繫！
          </p>
          <p className="leading-relaxed">
            我們認真傾聽您的寶貴意見，並盡力讓您使用本網站盡可能便捷。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              聯絡信箱：typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            我們將盡快審核您的諮詢並回覆。
          </p>
        </div>
      )
    },
    ja: {
      title: 'お問い合わせ',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            サイトをご利用になって問題がありましたか、ヘルプが必要ですか？いつでも私達に連絡してください！
          </p>
          <p className="leading-relaxed">
            私たちはあなたの大切な意見に耳を傾け、サイトの利用に不便がないように最善を尽くします。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              お問い合わせメール: typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            お送りいただいたお問い合わせは確認後、できるだけ早くお答えいたします。
          </p>
        </div>
      )
    },
    vi: {
      title: 'Liên hệ với chúng tôi',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Bạn đang gặp sự cố khi sử dụng trang web hoặc cần trợ giúp? Vui lòng liên hệ với chúng tôi bất cứ lúc nào!
          </p>
          <p className="leading-relaxed">
            Chúng tôi lắng nghe ý kiến ​​có giá trị của bạn và sẽ cố gắng hết sức để giúp bạn sử dụng trang web thuận tiện nhất có thể.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              Email liên hệ: typetest.site@gmail.com
            </p>
          </div>
          <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            Chúng tôi sẽ xem xét yêu cầu của bạn và phản hồi nhanh nhất có thể.
          </p>
        </div>
      )
    }
  };

  const currentContent = contactContent[language];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="link" 
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-0 h-auto"
        >
          {currentContent.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">{currentContent.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {currentContent.title}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            {currentContent.content}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}