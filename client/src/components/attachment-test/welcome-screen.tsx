import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/language-context';
import { Info } from 'lucide-react';

interface AttachmentWelcomeScreenProps {
  onStart: () => void;
}

export function AttachmentWelcomeScreen({ onStart }: AttachmentWelcomeScreenProps) {
  const { language } = useLanguage();

  const welcomeContent = {
    ko: {
      title: '성인 애착 유형 테스트',
      subtitle: '당신의 애착 유형을 알아보세요!',
      description: '이 테스트는 당신이 친밀한 관계에서 어떤 패턴을 보이는지 알아보는 심리 테스트입니다.',
      features: [
        '12개의 질문으로 구성',
        '4가지 애착 유형 분석',
        '개인맞춤 관계 조언 제공',
        '과학적 근거 기반 결과'
      ],
      startButton: '테스트 시작하기',
      infoTitle: '애착 유형이란?',
      infoContent: '애착 유형은 우리가 다른 사람과 친밀한 관계를 맺는 방식을 설명하는 심리학적 개념입니다. 어린 시절의 경험이 성인기의 관계 패턴에 영향을 미치며, 이를 통해 자신의 관계 스타일을 이해할 수 있습니다.'
    },
    en: {
      title: 'Adult Attachment Style Test',
      subtitle: 'Discover your attachment type!',
      description: 'This test helps you understand what patterns you show in intimate relationships.',
      features: [
        'Consists of 12 questions',
        'Analyzes 4 attachment types',
        'Provides personalized relationship advice',
        'Results based on scientific evidence'
      ],
      startButton: 'Start Test',
      infoTitle: 'What is Attachment Style?',
      infoContent: 'Attachment style is a psychological concept that describes how we form intimate relationships with others. Childhood experiences influence adult relationship patterns, helping us understand our relationship style.'
    },
    es: {
      title: 'Test de Estilo de Apego Adulto',
      subtitle: '¡Descubre tu tipo de apego!',
      description: 'Este test te ayuda a entender qué patrones muestras en las relaciones íntimas.',
      features: [
        'Consta de 12 preguntas',
        'Analiza 4 tipos de apego',
        'Proporciona consejos personalizados',
        'Resultados basados en evidencia científica'
      ],
      startButton: 'Comenzar Test',
      infoTitle: '¿Qué es el Estilo de Apego?',
      infoContent: 'El estilo de apego es un concepto psicológico que describe cómo formamos relaciones íntimas con otros. Las experiencias de la infancia influyen en los patrones de relación adultos, ayudándonos a entender nuestro estilo de relación.'
    }
  };

  const content = welcomeContent[language as keyof typeof welcomeContent] || welcomeContent.en;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="flex items-center justify-center space-x-2">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {content.title}
              </CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1">
                    <Info className="h-5 w-5 text-blue-600" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">{content.infoTitle}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {content.infoContent}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <CardDescription className="text-xl text-gray-600 dark:text-gray-300">
              {content.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {content.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {content.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={onStart}
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {content.startButton}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}