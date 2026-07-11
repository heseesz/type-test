import { useState, useEffect } from 'react';
import { useMetaTags } from '@/hooks/use-meta-tags';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { AboutUs } from '@/components/about-us';
import { PrivacyPolicy } from '@/components/privacy-policy';
import { ContactUs } from '@/components/contact-us';
import { useLanguage } from '@/contexts/language-context';
import { 
  TrendingUp, 
  Coins, 
  Sparkles, 
  PiggyBank, 
  CreditCard, 
  ArrowUpRight, 
  HelpCircle,
  Home as HomeIcon,
  Share2
} from 'lucide-react';

export default function Snowball() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [_, setLocation] = useLocation();

  // Redirect if language is not Korean
  useEffect(() => {
    if (language !== 'ko') {
      setLocation('/');
    }
  }, [language, setLocation]);
  
  // SEO & Meta tags configuration
  useMetaTags({
    title: '배달비 스노우볼 복리 시뮬레이터 - 타입테스트',
    description: '매달 지출하는 배달음식 비용을 아껴 투자했다면 얼마가 되었을까요? S&P 500과 AI 반도체 ETF 복리 투자의 마법을 지금 직접 시뮬레이션해 보세요.',
    canonical: 'https://type-test.co.kr/snowball',
    keywords: '복리 계산기, 스노우볼, 배달비 아끼기, S&P 500, AI 반도체 투자, 소액 투자, 재테크 시뮬레이터, 파이어족',
    ogImage: 'https://type-test.co.kr/og-image.jpg',
    type: 'application'
  });

  // State Management
  const [deliveryCost, setDeliveryCost] = useState<number>(20); // Monthly cost in 10,000 KRW, default 20 (200,000 KRW)
  const [years, setYears] = useState<number>(10); // Investment period, default 10 years
  const [brokerModalOpen, setBrokerModalOpen] = useState<boolean>(false);
  const [cardModalOpen, setCardModalOpen] = useState<boolean>(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Result Sharing Logic
  const handleShare = async () => {
    const shareTitle = '배달비 스노우볼 복리 시뮬레이터 - 타입테스트';
    let shareText = `💸 배달비 아껴 복리로 굴린 스노우볼 결과 💸\n\n`;
    shareText += `[한 달 배달 소비액]\n👉 ${deliveryCost}만 원\n\n`;
    shareText += `[투자 기간: ${years}년]\n`;
    shareText += `📊 안정형 (S&P 500, 연 12%)\n`;
    shareText += `💰 예상 금액: ${formatMoney(resultA)} (원금 대비 ${multiplierA}배)\n\n`;
    shareText += `🔥 공격형 (AI 반도체, 연 22%)\n`;
    shareText += `💰 예상 금액: ${formatMoney(resultB)} (원금 대비 ${multiplierB}배)\n\n`;
    if (difference > 0) {
      shareText += `💡 안정형 대비 추가 이자 수익 차이:\n`;
      shareText += `👉 무려 +${formatMoney(difference)} 더 획득!\n\n`;
    }
    shareText += `──────────────────\n`;
    shareText += `🔎 당신의 배달비는 복리로 굴리면 얼마가 될까요?\n`;
    shareText += `👇 지금 바로 시뮬레이션해 보세요!\n`;
    shareText += `🔗 https://type-test.co.kr/snowball`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: 'https://type-test.co.kr/snowball'
        });
      } catch (error) {
        handleCopyToClipboard(shareText);
      }
    } else {
      handleCopyToClipboard(shareText);
    }
  };

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "결과가 클립보드에 복사되었습니다!",
        description: "원하는 곳에 붙여넣어 공유해보세요.",
      });
    } catch (error) {
      toast({
        title: "복사 실패",
        description: "클립보드 복사에 실패했습니다.",
        variant: "destructive"
      });
    }
  };

  // Interest Rates
  const rateA = 0.12; // S&P 500 (12%)
  const rateB = 0.22; // SOL AI Semiconductor (22%)

  // Compound Interest Calculation Logic
  // Formula for Monthly Ordinary Annuity (Compounded Monthly, Deposit at start of month)
  // S_n = P * (1 + i) * ((1 + i)^n - 1) / i
  const calculateCompound = (monthlyDeposit: number, annualRate: number, yearsPeriod: number) => {
    const i = annualRate / 12;
    const n = yearsPeriod * 12;
    if (i === 0) return monthlyDeposit * n;
    return monthlyDeposit * (1 + i) * (Math.pow(1 + i, n) - 1) / i;
  };

  // Calculations
  const resultA = calculateCompound(deliveryCost, rateA, years);
  const resultB = calculateCompound(deliveryCost, rateB, years);
  const difference = resultB - resultA;
  const principal = deliveryCost * 12 * years; // Total principal in 10,000 KRW

  const multiplierA = principal > 0 ? (resultA / principal).toFixed(1) : '0';
  const multiplierB = principal > 0 ? (resultB / principal).toFixed(1) : '0';

  // Money Formatter Helper
  const formatMoney = (tenThousandWon: number): string => {
    const rounded = Math.round(tenThousandWon);
    if (rounded >= 10000) {
      const eok = Math.floor(rounded / 10000);
      const man = rounded % 10000;
      if (man === 0) {
        return `${eok.toLocaleString()}억 원`;
      }
      return `${eok.toLocaleString()}억 ${man.toLocaleString()}만 원`;
    }
    return `${rounded.toLocaleString()}만 원`;
  };

  // CTA Click Handlers with GA4 Tracking
  const handleCtaClick = (type: 'broker' | 'card') => {
    if (type === 'broker') {
      (window as any).gtag?.('event', 'click_broker_cta');
      setBrokerModalOpen(true);
    } else {
      (window as any).gtag?.('event', 'click_card_cta');
      setCardModalOpen(true);
    }
  };

  // Google Forms Submit Handler
  const handleEmailSubmit = async (type: 'broker' | 'card') => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "이메일 주소 확인",
        description: "올바른 이메일 주소를 입력해 주세요.",
      });
      return;
    }

    setIsSubmitting(true);

    // Track Lead Generation in GA4
    const eventName = type === 'broker' ? 'generate_lead_broker' : 'generate_lead_card';
    (window as any).gtag?.('event', eventName, {
      event_category: 'Lead Generation',
      event_label: email
    });

    const formUrl = type === 'broker'
      ? 'https://docs.google.com/forms/d/e/1FAIpQLSfOJsIblJtr4JnoZeZPjlIxx-iP2TTn8u7LDgZ2rMRLppqK4w/formResponse'
      : 'https://docs.google.com/forms/d/e/1FAIpQLSebdpc0YPWN1mTnIvBSq4tti93Zdm5apxOuTovl4uL3vVz0VQ/formResponse';

    const formData = new URLSearchParams();
    formData.append('entry.549071033', email);

    try {
      // mode: 'no-cors' is required to bypass CORS on Google Forms actions
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      });

      toast({
        title: "알림 신청이 완료되었습니다!",
        description: "제휴 혜택이 확정되는 대로 가장 먼저 이메일로 안내해 드릴게요.",
      });

      // Reset state and close modal
      setEmail('');
      setBrokerModalOpen(false);
      setCardModalOpen(false);
    } catch (error) {
      console.error('Google Forms Submit Error:', error);
      // Fallback: opaque response can trigger error in standard fetch wrappers but still succeeds.
      toast({
        title: "알림 신청이 완료되었습니다!",
        description: "제휴 혜택이 확정되는 대로 가장 먼저 이메일로 안내해 드릴게요.",
      });
      setEmail('');
      setBrokerModalOpen(false);
      setCardModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      
      {/* Container */}
      <div className="max-w-md mx-auto w-full space-y-8 flex-1 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-2.5 bg-indigo-100 dark:bg-indigo-950/50 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-2">
            <Coins className="h-6 w-6 animate-pulse" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            배달비 스노우볼 효과
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
            무심코 쓰는 배달 음식을 줄이고 복리로 투자했다면 미래 내 자산은 어떻게 변할까요?
          </p>
        </div>

        {/* Input Card */}
        <Card className="border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-xl rounded-3xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <PiggyBank className="h-5 w-5 text-purple-500" />
              배달 지출 비용 설정
            </CardTitle>
            <CardDescription className="text-xs">
              한 달에 배달 음식에 쓰는 대략적인 금액을 지정해 주세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">월 소비액</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={deliveryCost === 0 ? '' : deliveryCost}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= 0 && val <= 1000) {
                        setDeliveryCost(val);
                      }
                    }}
                    className="w-24 text-right text-lg font-bold text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-indigo-500 rounded-xl"
                    min={0}
                    max={1000}
                  />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">만 원</span>
                </div>
              </div>

              {/* Custom Slider */}
              <div className="pt-2 px-1">
                <Slider
                  defaultValue={[20]}
                  value={[deliveryCost]}
                  max={150}
                  min={1}
                  step={1}
                  onValueChange={(val) => setDeliveryCost(val[0])}
                  className="py-4 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-medium px-0.5">
                  <span>1만 원</span>
                  <span>50만 원</span>
                  <span>100만 원</span>
                  <span>150만 원</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Period Tabs */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block text-center">
            투자 시뮬레이션 기간
          </label>
          <Tabs 
            value={years.toString()} 
            onValueChange={(val) => setYears(Number(val))} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 bg-gray-100 dark:bg-gray-900 p-1 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
              <TabsTrigger value="1" className="rounded-xl text-xs py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm">1년</TabsTrigger>
              <TabsTrigger value="5" className="rounded-xl text-xs py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm">5년</TabsTrigger>
              <TabsTrigger value="10" className="rounded-xl text-xs py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm">10년</TabsTrigger>
              <TabsTrigger value="30" className="rounded-xl text-xs py-2 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm">30년</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Simulation Results (Vertical Stack) */}
        <div className="space-y-4">
          
          {/* Scenario A (Stable - S&P 500) */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-blue-200/70 dark:border-blue-900/50 bg-white/80 dark:bg-gray-900/70 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                      안정 투자형
                    </Badge>
                    <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                      S&P 500 지수 추종
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      연평균 기대 수익률 12%
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-1.5 py-0.5 rounded-md">
                      원금의 {multiplierA}배
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-baseline">
                  <div className="text-xs font-semibold text-gray-400">
                    {years}년 후 누적액
                  </div>
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                    {formatMoney(resultA)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scenario B (Aggressive - AI Semiconductor) */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="relative overflow-hidden border-purple-200/90 dark:border-purple-900/80 bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-900 dark:to-purple-950/20 rounded-3xl hover:shadow-xl transition-all duration-300 shadow-md">
              
              {/* Highlight Background Effect */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🔥 요즘 대세
                      </Badge>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border-0">
                        압도적 수익률
                      </Badge>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                      SOL AI반도체 TOP2 플러스
                      <Sparkles className="h-4 w-4 text-purple-500 fill-purple-200 dark:fill-none" />
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      연평균 기대 수익률 22%
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/50 px-1.5 py-0.5 rounded-md">
                      원금의 {multiplierB}배
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-100/50 dark:border-purple-900/30 flex justify-between items-baseline">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {years}년 후 누적액
                  </div>
                  <div className="text-3xl font-black text-purple-600 dark:text-purple-400 tracking-tight flex items-baseline gap-1">
                    <span>{formatMoney(resultB)}</span>
                  </div>
                </div>

                {/* Additional Insight Banner */}
                {difference > 0 && deliveryCost > 0 && (
                  <div className="mt-3 bg-purple-50 dark:bg-purple-950/40 p-2.5 rounded-2xl flex items-center justify-between text-[11px] font-bold text-purple-700 dark:text-purple-300">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-purple-500" />
                      <span>안정형 대비 이자 수익 차이</span>
                    </div>
                    <span>+{formatMoney(difference)} 더 벌기</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>

        {/* Share Button */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
        >
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full border border-indigo-200 hover:border-indigo-300 dark:border-indigo-900/65 dark:hover:border-indigo-850 bg-indigo-50/20 hover:bg-indigo-50/40 dark:bg-indigo-950/15 dark:hover:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-bold py-5 rounded-2xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <Share2 className="h-4 w-4" />
            시뮬레이션 결과 공유하기
          </Button>
        </motion.div>

        {/* CTA Area (Two-Track Fake Door Buttons) */}
        <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800/40">
          
          {/* CTA 1: Brokerage Path (Primary) */}
          <Button
            onClick={() => handleCtaClick('broker')}
            className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-700 hover:via-indigo-700 hover:to-indigo-800 text-white font-extrabold py-6 rounded-2xl shadow-md transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 group text-xs sm:text-sm whitespace-normal h-auto min-h-[52px]"
          >
            <span className="text-center leading-normal">🚀 배달비 아낀 돈으로 증권사 혜택받고 투자 시작하기</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          {/* CTA 2: Card Issuer Path (Secondary/Outline) */}
          <Button
            onClick={() => handleCtaClick('card')}
            variant="outline"
            className="w-full border-2 border-gray-200 hover:border-indigo-200 dark:border-gray-800 dark:hover:border-indigo-900 bg-white/50 dark:bg-gray-950/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/10 text-gray-700 dark:text-gray-300 font-bold py-6 rounded-2xl shadow-sm transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 text-xs sm:text-sm whitespace-normal h-auto min-h-[52px]"
          >
            <span className="text-center leading-normal">🍕 배달을 못 끊겠다면? 배달비 10% 아껴주는 카드 찾기</span>
          </Button>

        </div>

      </div>

      {/* Disclaimer Button */}
      <div className="flex justify-center mt-6">
        <Button
          variant="ghost"
          onClick={() => setDisclaimerOpen(true)}
          className="text-xs text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 underline underline-offset-4 flex items-center gap-1.5"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          시뮬레이션 유의사항 및 투자 고지 보기
        </Button>
      </div>

      {/* Back to Main Button */}
      <div className="flex justify-center mt-8">
        <Link href="/">
          <Button
            variant="outline"
            className="px-6 py-5 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-850 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-4.5 h-4.5" />
            타입테스트 홈으로 돌아가기
          </Button>
        </Link>
      </div>

      {/* Footer Links & Copyright */}
      <div className="flex flex-col items-center gap-4 mt-8 pb-4">
        <div className="flex justify-center items-center gap-4 text-sm">
          <AboutUs />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <PrivacyPolicy />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <ContactUs />
        </div>
        <div className="text-center text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
          &copy; 2026 TypeTest. All rights reserved.
        </div>
      </div>

      {/* ========================================================
          DIALOGS / MODALS FOR FAKE DOOR EMAIL COLLECTION
          ======================================================== */}

      {/* 1. Brokerage Waiting Modal */}
      <Dialog open={brokerModalOpen} onOpenChange={setBrokerModalOpen}>
        <DialogContent className="max-w-sm rounded-3xl p-6 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span className="p-1.5 bg-purple-50 dark:bg-purple-950 rounded-lg text-purple-600 dark:text-purple-400">
                🚀
              </span>
              증권사 제휴 대기 신청
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-2">
              현재 최적의 증권사 제휴 혜택(가입 축하금, 수수료 우대 등)을 준비 중입니다. 가장 먼저 특별 혜택을 받아보시려면 이메일을 남겨주세요.
            </DialogDescription>
          </DialogHeader>

          {/* Email form */}
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <label htmlFor="broker-email" className="text-xs font-bold text-gray-500 dark:text-gray-400">
                이메일 주소
              </label>
              <Input
                id="broker-email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-purple-500 rounded-xl py-5"
                disabled={isSubmitting}
              />
            </div>
            <Button
              onClick={() => handleEmailSubmit('broker')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? '신청 처리 중...' : '혜택 알림 우선 신청하기'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 2. Card Issuer Waiting Modal */}
      <Dialog open={cardModalOpen} onOpenChange={setCardModalOpen}>
        <DialogContent className="max-w-sm rounded-3xl p-6 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span className="p-1.5 bg-indigo-50 dark:bg-indigo-950 rounded-lg text-indigo-600 dark:text-indigo-400">
                🍕
              </span>
              카드 제휴 대기 신청
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-2">
              현재 배달 할인율이 가장 높은 카드사와 제휴를 협의 중입니다. 발급 캐시백 혜택이 준비되는 대로 이메일로 알려드릴게요.
            </DialogDescription>
          </DialogHeader>

          {/* Email form */}
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <label htmlFor="card-email" className="text-xs font-bold text-gray-500 dark:text-gray-400">
                이메일 주소
              </label>
              <Input
                id="card-email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-indigo-500 rounded-xl py-5"
                disabled={isSubmitting}
              />
            </div>
            <Button
              onClick={() => handleEmailSubmit('card')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? '신청 처리 중...' : '캐시백 혜택 알림 신청하기'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* 3. Disclaimer & Legal Notice Modal */}
      <Dialog open={disclaimerOpen} onOpenChange={setDisclaimerOpen}>
        <DialogContent className="max-w-md rounded-3xl p-6 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800">
          <DialogHeader className="pb-3 border-b border-gray-100 dark:border-gray-800">
            <DialogTitle className="text-lg font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span>💡</span> 시뮬레이션 유의사항 및 법적 고지
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 max-h-[60vh] overflow-y-auto pr-1 space-y-4 text-xs text-gray-650 dark:text-gray-400 leading-relaxed text-left">
            <p>
              본 시뮬레이터는 사용자가 지정한 배달 음식 소비액을 투자 재원으로 가정하여 산출한 모의 계산 결과이며, 실제 투자 성과를 보장하지 않습니다.
            </p>
            
            <div className="space-y-1">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">1. 투자 원금 손실 가능성 및 예금자 보호제도 미적용</h4>
              <p>
                본 시뮬레이션에 언급된 S&P 500 지수 추종 상품 및 AI 반도체 ETF 등 모든 금융투자상품은 예금자보호법에 따라 보호되지 않으며, 시장 상황에 따른 가격 변동으로 투자 원금의 일부 또는 전부의 손실이 발생할 수 있습니다. 발생한 모든 투자 손익은 투자자 본인에게 귀속됩니다.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">2. 기대 수익률에 대한 유의사항</h4>
              <p>
                시뮬레이션에서 가정한 연평균 수익률(시나리오 A: 12%, 시나리오 B: 22%)은 과거 특정 기간의 역사적 통계 지표를 단순 인용한 예시값에 불과합니다. 과거의 우수한 수익률이나 운용 성과가 미래의 성과를 보증하지 않으며, 실제 자산 운용 시 시장 환경 변화, 운용사 보수, 증권 거래세, 양도소득세 등 제반 비용이 반영되면 최종 원리금은 본 결과와 크게 다를 수 있습니다.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">3. 비권유 고지 및 면책성명</h4>
              <p>
                본 서비스가 제공하는 정보와 계산 수치는 투자 판단을 돕기 위한 참고 자료일 뿐이며, 특정 증권사/카드사의 상품 가입 권유, 주식 매수·매도 추천 또는 투자 권유 목적으로 제작되지 않았습니다. 본 서비스 및 운영진은 사용자가 본 시뮬레이션 결과에 기반하여 내린 어떠한 투자 결정이나 행위에 대해서도 법적 책임을 지지 않습니다.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">4. 제휴 서비스 및 혜택의 사전 수요조사 안내</h4>
              <p>
                본 페이지를 통해 수집하는 증권사/카드사 제휴 알림 신청은 실제 해당 기관과의 공식 제휴가 완료되지 않은 기획 구상(Fake Door) 및 사전 수요조사 마케팅 단계입니다. 추후 제휴 서비스 출시 시 실제 가입 조건이나 캐시백 및 가입 축하금 등의 구체적 혜택은 변동되거나 금융사의 사정으로 서비스 런칭 자체가 무산될 수 있습니다.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Button 
              onClick={() => setDisclaimerOpen(false)}
              className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition-all text-xs"
            >
              확인 및 닫기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
