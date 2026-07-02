# 🌟 타입테스트 (TypeTest)

**TypeTest**는 사용자가 과학적 기반의 다양한 심리 및 성격 분석 콘텐츠를 매끄럽고 몰입감 있게 체험할 수 있도록 설계된 **무료 심리 테스트 웹 서비스**입니다. 

깔끔하고 현대적인 글래스모피즘(Glassmorphism) UI와 부드러운 화면 전환 애니메이션을 자랑하며, 다국어 지원 및 정적 프리렌더링 기술을 결합하여 뛰어난 검색엔진 노출(SEO) 성능을 갖추고 있습니다.

---

## 🚀 주요 서비스 기능

### 1. 다양한 심리 및 성격 테스트 콘텐츠
*   **밸런스 게임 (New!):** 친구, 연인, 썸남썸녀와 즐길 수 있는 이색 선택형 게임으로, 순한맛 / 중간맛 / 매운맛(19+ 경고 모달 포함) 등 단계별 질문을 제공합니다. (질문 건너뛰기 기능 탑재)
*   **성인 애착 유형 테스트:** 36개의 공인 심리학 질문을 통해 안정형, 불안형, 회피형, 혼란형 애착 스타일을 과학적으로 분석합니다.
*   **나르시시즘 성향 테스트:** 20개 문항을 기반으로 과대형(Grandiose) 및 취약형(Vulnerable) 자기애 성향 수치를 측정합니다.
*   **테토-에겐 성격 테스트:** 12개의 직관적인 선택지를 통해 감성 지향형(Teto)과 이성 지향형(Egen) 비율을 시각화합니다.

### 2. 프리미엄 UI/UX 및 SPA 전환 인터랙션
*   **Framer Motion 애니메이션:** 페이지 진입 및 테스트 단계 전환(Welcome ➔ Test ➔ Result) 시 부드러운 슬라이드 및 페이드 인터랙션을 제공합니다.
*   **모던 카드 디자인:** 미려한 그라데이션 포인트, 백드롭 블러(Backdrop blur), 호버/탭 마이크로 인터랙션 카드를 장착하여 몰입감을 높였습니다.
*   **Smooth SPA Routing:** `wouter` 라이브러리를 기반으로 메인 이동 및 페이지 전환 시 브라우저 풀 리로드가 없는 고성능 SPA 환경을 제공합니다.

### 3. 고도화된 검색엔진 최적화 (SEO) & 소셜 공유
*   **정적 프리렌더링 (Prerendering):** 빌드 시 Puppeteer를 이용해 각 SPA 주소별 정적 파일(`dist/<route>/index.html`)을 생성하여, GitHub Pages와 같은 정적 호스팅 환경에서도 Google 및 네이버 봇이 404 에러 없이 페이지 내용을 완벽하게 수집합니다.
*   **구조화 데이터 (JSON-LD Schema):** Schema.org 규격의 `Quiz` 및 `WebSite` 마크업을 동적으로 주입하여 검색 결과 리치 스니펫 경쟁력을 확보했습니다.
*   **Naver 검색 규격 최적화:** 메인 설명문 및 Open Graph 설명문의 길이를 80자 이내로 엄격하게 최적화하여 네이버 웹마스터 도구 가이드라인을 완전 충족합니다.
*   **인덱싱 유도 자산:** 다국어 대체 주소(`hreflang`)를 포함한 `sitemap.xml`, 크롤러 접근 대역을 명시한 `robots.txt` 및 최신 피드 수집용 `rss.xml`을 자동으로 빌드/제공합니다.
*   **세련된 결과 공유 템플릿:** 이모지와 구체적인 점수 요약이 담긴 공유 템플릿을 제공하며, 모바일 브라우저의 Web Share API와 클립보드 복사를 지원합니다.

---

## 🛠️ 기술 스택 및 개발 환경

*   **Frontend:** React (v18), TypeScript, Tailwind CSS, Vite, Framer Motion, Wouter (Routing), Lucide-react (Icons)
*   **Backend/Prerender:** Node.js, Express, Puppeteer (Static HTML pre-renderer)
*   **Deployment:** GitHub Pages (Static Hosting), GitHub Actions CI/CD
*   **Analytics:** Google Analytics 4 (GA4), Google AdSense

---

## 📂 프로젝트 구조

```text
├── client/
│   ├── public/             # robots.txt, sitemap.xml, rss.xml, 파비콘 등 정적 에셋
│   ├── src/
│   │   ├── components/     # Welcome, Test, Result 등 테스트 관련 핵심 모듈러 컴포넌트
│   │   ├── contexts/       # 다국어(Language Context) 및 전역 상태 관리
│   │   ├── hooks/          # useMetaTags(동적 SEO), useToast 등 커스텀 훅
│   │   ├── lib/            # 심리테스트 번역 리소스 및 질문 원시 데이터
│   │   └── pages/          # 메인 페이지 및 개별 테스트 랜딩/컨테이너 페이지
│   └── index.html          # 메인 HTML 템플릿 (네이버/빙 소유권 메타 태그 포함)
├── scripts/
│   └── prerender.mjs       # 빌드 후 각 라우트를 정적 HTML 파일로 굽는 프리렌더링 스크립트
├── server/                 # 로컬 목업 서버 리소스
└── shared/                 # 스키마 공통 모델
```

---

## 💻 실행 및 빌드 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```

### 3. 배포용 빌드 및 정적 프리렌더링 실행
```bash
# Vite 빌드 후 scripts/prerender.mjs가 자동 실행되어 정적 HTML 빌드 결과를 dist/ 에 생성합니다.
npm run build
```
