import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function NotFound() {
  const { t, language } = useLanguage();
  
  // Set meta tags for 404 page
  const metaConfig = {
    title: language === 'en' ? '404 - Page Not Found | TypeTest' : 
           language === 'ja' ? '404 - ページが見つかりません | タイプテスト' : 
           '404 - 페이지를 찾을 수 없습니다 | 타입테스트',
    description: language === 'en' ? 'The page you are looking for does not exist. Return to TypeTest homepage to access our personality tests.' :
                language === 'ja' ? 'お探しのページが存在しません。タイプテストのホームページに戻り、性格テストにアクセスしてください。' :
                '찾으시는 페이지가 존재하지 않습니다. 타입테스트 홈페이지로 돌아가 성격 테스트를 이용하세요.',
    canonical: 'https://type-test.site/',
    ogImage: 'https://type-test.site/favicon.svg'
  };
  
  useMetaTags(metaConfig);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
