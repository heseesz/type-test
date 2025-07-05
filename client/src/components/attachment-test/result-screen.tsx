import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/language-context';
import { AttachmentResult } from '@/lib/attachment-types';
import { Share2, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AttachmentResultScreenProps {
  result: AttachmentResult;
  scores: {
    secure: number;
    anxious: number;
    avoidant: number;
    fearful: number;
  };
  onRestart: () => void;
}

export function AttachmentResultScreen({ result, scores, onRestart }: AttachmentResultScreenProps) {
  const { language } = useLanguage();
  const { toast } = useToast();

  const resultContent = {
    ko: {
      title: '테스트 결과',
      yourType: '당신의 애착 유형',
      scores: '점수 분포',
      characteristics: '주요 특성',
      relationshipPattern: '관계 패턴',
      tips: '개선 방향',
      points: '점',
      share: '결과 공유',
      restart: '다시 테스트하기',
      shareTitle: '성인 애착 유형 테스트 결과',
      shareText: '당신도 애착 유형 테스트를 해보세요!',
      copySuccess: '클립보드에 복사됨',
      copySuccessDesc: '결과가 클립보드에 복사되었습니다!',
      copyFail: '복사 실패',
      copyFailDesc: '결과 복사에 실패했습니다.'
    },
    en: {
      title: 'Test Result',
      yourType: 'Your Attachment Type',
      scores: 'Score Distribution',
      characteristics: 'Key Characteristics',
      relationshipPattern: 'Relationship Patterns',
      tips: 'Improvement Tips',
      points: 'pts',
      share: 'Share Result',
      restart: 'Take Test Again',
      shareTitle: 'Adult Attachment Style Test Result',
      shareText: 'Take the attachment style test yourself!',
      copySuccess: 'Copied to clipboard',
      copySuccessDesc: 'Result has been copied to clipboard!',
      copyFail: 'Copy failed',
      copyFailDesc: 'Failed to copy result.'
    },
    es: {
      title: 'Resultado del Test',
      yourType: 'Tu Tipo de Apego',
      scores: 'Distribución de Puntuación',
      characteristics: 'Características Clave',
      relationshipPattern: 'Patrones de Relación',
      tips: 'Consejos de Mejora',
      points: 'pts',
      share: 'Compartir Resultado',
      restart: 'Repetir Test',
      shareTitle: 'Resultado del Test de Estilo de Apego Adulto',
      shareText: '¡Haz el test de estilo de apego tú también!',
      copySuccess: 'Copiado al portapapeles',
      copySuccessDesc: '¡El resultado ha sido copiado al portapapeles!',
      copyFail: 'Error al copiar',
      copyFailDesc: 'No se pudo copiar el resultado.'
    }
  };

  const content = resultContent[language as keyof typeof resultContent] || resultContent.en;
  const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

  const handleShare = async () => {
    const shareData = {
      title: content.shareTitle,
      text: `${result.title}\n\n${content.shareText}`,
      url: window.location.origin + '/attachment-test'
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        toast({
          title: content.copySuccess,
          description: content.copySuccessDesc,
        });
      }
    } catch (error) {
      toast({
        title: content.copyFail,
        description: content.copyFailDesc,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader className="text-center space-y-6 pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {content.title}
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 dark:text-gray-300">
              {content.yourType}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Result Type */}
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {result.title}
              </h2>
              <div className="space-y-3">
                {result.description.map((desc: string, index: number) => (
                  <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>

            <Separator />

            {/* Scores */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                {content.scores}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(scores).map(([type, score]) => {
                  const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0;
                  const typeLabels = {
                    secure: language === 'ko' ? '안정형' : language === 'es' ? 'Seguro' : 'Secure',
                    anxious: language === 'ko' ? '불안형' : language === 'es' ? 'Ansioso' : 'Anxious',
                    avoidant: language === 'ko' ? '회피형' : language === 'es' ? 'Evitativo' : 'Avoidant',
                    fearful: language === 'ko' ? '공포형' : language === 'es' ? 'Temeroso' : 'Fearful'
                  };
                  
                  return (
                    <div key={type} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {typeLabels[type as keyof typeof typeLabels]}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {score} {content.points}
                        </Badge>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* Characteristics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {content.characteristics}
              </h3>
              <div className="grid gap-2">
                {result.characteristics.map((char: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{char}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Relationship Patterns */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {content.relationshipPattern}
              </h3>
              <div className="grid gap-2">
                {result.relationshipPattern.map((pattern: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{pattern}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Tips */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {content.tips}
              </h3>
              <div className="grid gap-2">
                {result.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={handleShare}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Share2 className="h-4 w-4" />
                <span>{content.share}</span>
              </Button>
              <Button
                onClick={onRestart}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>{content.restart}</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}