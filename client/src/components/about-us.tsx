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

export function AboutUs() {
  const { language } = useLanguage();
  
  const buttonText = language === 'ko' ? 'About Us' : 'About Us';
  
  const getLocalizedContent = () => {
    switch (language) {
      case 'ko':
        return {
          title: 'About Us',
          content: `저희 타입테스트는 여러분이 자기 자신을 더 깊이 이해하고, 나아가 타인과의 관계를 풍성하게 만들어갈 수 있도록 돕기 위해 만들어진 성격 유형 테스트 사이트입니다.

세상에는 다양한 성격 유형이 존재하며, 각자의 개성은 우리 삶을 더 다채롭게 만듭니다. 저희는 간단하면서도 흥미로운 테스트를 통해 여러분의 잠재된 특성을 발견하고, 그 안에 담긴 의미를 탐색할 기회를 제공하고자 합니다.

복잡한 분석이나 개인 정보 수집 없이, 오로지 테스트 결과에 집중하여 여러분이 스스로를 되돌아보고 새로운 영감을 얻을 수 있기를 바랍니다. 저희는 모든 사용자가 부담 없이 즐기며 유익한 시간을 보낼 수 있는 공간을 만들어가는 데 최선을 다하고 있습니다.

타입테스트에서 당신의 숨겨진 성격을 발견하고, 더 나은 '나'를 찾아가는 여정을 시작해 보세요!`
        };
      case 'en':
        return {
          title: 'About Us',
          content: `TypeTest is a personality type test site created to help you understand yourself more deeply and further enrich your relationships with others.

There are various personality types in the world, and each individual's individuality makes our lives more colorful. We want to provide you with the opportunity to discover your potential characteristics and explore the meaning contained within them through a simple yet interesting test.

Without complicated analysis or collecting personal information, we hope that you can focus solely on the test results and reflect on yourself and gain new inspiration. We are doing our best to create a space where all users can enjoy and spend a beneficial time without burden.

Discover your hidden personality on TypeTest and start your journey to find a better 'me'!`
        };
      case 'es':
        return {
          title: 'About Us',
          content: `TypeTest es un sitio web de test de personalidad creado para ayudarte a comprenderte mejor y enriquecer tus relaciones con los demás.

Existen diversos tipos de personalidad en el mundo, y la individualidad de cada uno enriquece nuestras vidas. Queremos ofrecerte la oportunidad de descubrir tus características potenciales y explorar su significado a través de un test sencillo pero interesante.

Sin análisis complejos ni recopilación de información personal, esperamos que puedas centrarte únicamente en los resultados del test, reflexionar sobre ti mismo y encontrar nueva inspiración. Nos esforzamos por crear un espacio donde todos los usuarios puedan disfrutar y pasar un rato agradable y sin agobios.

¡Descubre tu personalidad oculta en TypeTest y emprende tu camino hacia una mejor versión de ti mismo!`
        };
      case 'zh-cn':
        return {
          title: 'About Us',
          content: `TypeTest 是一个性格测试网站，旨在帮助您更深入地了解自己，并进一步丰富您与他人的关系。

世界上存在着各种各样的性格类型，每个人的个性都使我们的生活更加丰富多彩。我们希望通过简单而有趣的测试，为您提供机会，发现您潜在的性格特征，并探索其中蕴含的意义。

我们不进行复杂的分析，也不收集个人信息，希望您能够专注于测试结果，反思自我，获得新的灵感。我们致力于打造一个让所有用户都能轻松享受、度过一段有益时光的空间。

在 TypeTest 上发现您隐藏的个性，开启您的旅程，寻找更好的"我"！`
        };
      case 'zh-tw':
        return {
          title: 'About Us',
          content: `TypeTest 是一個性格測驗網站，旨在幫助您更深入地了解自己，並進一步豐富您與他人的關係。

世界上存在著各種各樣的性格類型，每個人的個性都使我們的生活更加豐富多彩。我們希望透過簡單而有趣的測試，為您提供機會，發現您潛在的性格特徵，並探索其中蘊含的意義。

我們不進行複雜的分析，也不收集個人信息，希望您能夠專注於測試結果，反思自我，獲得新的靈感。我們致力於打造一個讓所有使用者都能輕鬆享受、度過一段有益時光的空間。

在 TypeTest 上發現您隱藏的個性，開啟您的旅程，尋找更好的「我」！`
        };
      case 'ja':
        return {
          title: 'About Us',
          content: `TypeTestは、自分自身をより深く理解し、さらに他人との関係を豊かにするのを助けるために作成された性格タイプのテストサイトです。

世界にはさまざまな性格の種類があり、それぞれの個性は私たちの生活をより多彩にします。

複雑な分析や個人情報を収集することなく、あなたのテスト結果に焦点を当て、あなたが自分自身を振り返り、新しいインスピレーションを得ることを願っています。

TypeTestであなたの隠された性格を発見し、より良い「私」を訪れる旅を始めましょう！`
        };
      case 'vi':
        return {
          title: 'About Us',
          content: `TypeTest là trang web kiểm tra tính cách được tạo ra để giúp bạn hiểu sâu hơn về bản thân và làm phong phú thêm các mối quan hệ của bạn với người khác.

Có nhiều loại tính cách khác nhau trên thế giới và tính cách riêng của mỗi cá nhân làm cho cuộc sống của chúng ta trở nên nhiều màu sắc hơn. Chúng tôi muốn cung cấp cho bạn cơ hội khám phá những đặc điểm tiềm ẩn của mình và khám phá ý nghĩa ẩn chứa bên trong chúng thông qua một bài kiểm tra đơn giản nhưng thú vị.

Không cần phân tích phức tạp hoặc thu thập thông tin cá nhân, chúng tôi hy vọng rằng bạn có thể chỉ tập trung vào kết quả kiểm tra và suy ngẫm về bản thân và có thêm cảm hứng mới. Chúng tôi đang nỗ lực hết mình để tạo ra một không gian nơi tất cả người dùng có thể tận hưởng và dành thời gian có ích mà không phải gánh nặng.

Khám phá tính cách ẩn giấu của bạn trên TypeTest và bắt đầu hành trình tìm kiếm một 'tôi' tốt hơn!`
        };
      default:
        return {
          title: 'About Us',
          content: `TypeTest is a personality type test site created to help you understand yourself more deeply and further enrich your relationships with others.

There are various personality types in the world, and each individual's individuality makes our lives more colorful. We want to provide you with the opportunity to discover your potential characteristics and explore the meaning contained within them through a simple yet interesting test.

Without complicated analysis or collecting personal information, we hope that you can focus solely on the test results and reflect on yourself and gain new inspiration. We are doing our best to create a space where all users can enjoy and spend a beneficial time without burden.

Discover your hidden personality on TypeTest and start your journey to find a better 'me'!`
        };
    }
  };

  const { title, content } = getLocalizedContent();

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
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            About TypeTest
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}