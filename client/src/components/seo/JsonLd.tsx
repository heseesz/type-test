import { useLanguage } from '@/contexts/language-context';

interface JsonLdProps {
  data: any;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const { language } = useLanguage();
  
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": language === 'en' ? 'TypeTest - Free Personality Tests' : 
           language === 'ja' ? 'タイプテスト - 無料性格テスト' : 
           language === 'zh-cn' ? 'TypeTest - 免费性格测试' :
           '타입테스트 - 무료 성격 테스트',
    "alternateName": ["TypeTest", "Type Test", "타입테스트"],
    "url": "https://type-test.site",
    "description": language === 'en' ? 'Free personality tests including attachment styles, narcissism assessment, and Teto-Egen personality analysis. Discover your psychological profile today!' :
                  language === 'ja' ? '愛着スタイル、ナルシシズム評価、テト-エゲン性格分析を含む無料性格テスト。今すぐあなたの心理プロファイルを発見しましょう！' :
                  language === 'zh-cn' ? '包含依恋风格、自恋评估和Teto-Egen性格分析的免费性格测试。今天就发现您的心理档案吧！' :
                  '애착 유형, 나르시시즘 평가, 테토-에겐 성격 분석을 포함한 무료 성격 테스트. 지금 당신의 심리 프로필을 발견하세요!',
    "inLanguage": [
      { "@type": "Language", "name": "Korean", "alternateName": "ko" },
      { "@type": "Language", "name": "English", "alternateName": "en" },
      { "@type": "Language", "name": "Japanese", "alternateName": "ja" },
      { "@type": "Language", "name": "Chinese Simplified", "alternateName": "zh-cn" }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults interested in psychology and self-discovery",
      "geographicArea": ["South Korea", "United States", "Japan", "Global"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypeTest",
      "url": "https://type-test.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://type-test.site/favicon.svg",
        "width": 60,
        "height": 60
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "typetest.site@gmail.com",
        "contactType": "Customer Service",
        "availableLanguage": ["ko", "en", "ja", "zh-cn"]
      }
    },
    "mainEntity": [
      {
        "@type": "WebPage",
        "@id": "https://type-test.site/teto-egen",
        "name": "Teto-Egen Personality Test",
        "description": "12-question personality test to determine Teto vs Egen type"
      },
      {
        "@type": "WebPage", 
        "@id": "https://type-test.site/attachment-style",
        "name": "Adult Attachment Style Test",
        "description": "36-question test to determine attachment style"
      },
      {
        "@type": "WebPage",
        "@id": "https://type-test.site/narcissism", 
        "name": "Narcissism Tendency Test",
        "description": "20-question test to assess narcissistic tendencies"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://type-test.site/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const { language } = useLanguage();
  
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TypeTest",
    "alternateName": ["타입테스트", "Type Test"],
    "url": "https://type-test.site",
    "description": language === 'en' ? 'Leading provider of free online personality tests and psychological assessments' :
                  language === 'ja' ? '無料オンライン性格テストと心理学的評価の主要プロバイダー' :
                  '무료 온라인 성격 테스트 및 심리학적 평가의 선도 제공업체',
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "name": "Seoul, South Korea"
    },
    "areaServed": [
      "KR", "US", "JP", "Global"
    ],
    "serviceType": [
      "Personality Testing",
      "Psychological Assessment", 
      "Self-Discovery Tools"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "typetest.site@gmail.com",
      "contactType": "Customer Service",
      "availableLanguage": ["ko", "en", "ja"]
    },
    "sameAs": [
      "https://type-test.site"
    ]
  };

  return <JsonLd data={data} />;
}