export interface BalanceQuestion {
  id: number;
  optionA: string;
  optionB: string;
  translations?: {
    en: { optionA: string; optionB: string };
    ja: { optionA: string; optionB: string };
    'zh-cn': { optionA: string; optionB: string };
  };
}

export type Difficulty = 'mild' | 'medium' | 'spicy';

export const balanceGameQuestions: Record<Difficulty, BalanceQuestion[]> = {
  mild: [
    {
      id: 1,
      optionA: "무슨 일이 있어도 절대 휴대폰 안 보여주는 애인",
      optionB: "나도 보여줄 테니 너도 보여달라는 애인",
      translations: {
        en: {
          optionA: "A partner who never shows their phone no matter what",
          optionB: "A partner who says 'I will show you mine if you show me yours'"
        },
        ja: {
          optionA: "何があっても絶対にスマホを見せない恋人",
          optionB: "「自分も見せるからあなたも見せて」と言う恋人"
        },
        'zh-cn': {
          optionA: "无论发生什么事都绝对不给看手机的恋人",
          optionB: "认为“我给你看，你也得给我看”的恋人"
        }
      }
    },
    {
      id: 2,
      optionA: "몸매는 취향이 아닌데 얼굴이 이상형",
      optionB: "얼굴은 취향이 아닌데 몸매가 이상형",
      translations: {
        en: {
          optionA: "Face is my ideal type, but body is not my style",
          optionB: "Body is my ideal type, but face is not my style"
        },
        ja: {
          optionA: "顔はタイプだけど体型は好みじゃない恋人",
          optionB: "体型はタイプだけど顔は好みじゃない恋人"
        },
        'zh-cn': {
          optionA: "长相是理想型但身材不是喜欢的类型",
          optionB: "身材是理想型但长相不是喜欢的类型"
        }
      }
    },
    {
      id: 3,
      optionA: "애인과 애인의 남/여사친 단둘이 1박2일 여행 보내주기",
      optionB: "애인과 애인의 전여친/전남친과 단둘이 술마시는거 허락해주기",
      translations: {
        en: {
          optionA: "Letting partner go on a 2-day trip alone with a close opposite-sex friend",
          optionB: "Letting partner drink alone with their ex"
        },
        ja: {
          optionA: "恋人が異性の友達と2人きりで1泊2日の旅行に行くのを許す",
          optionB: "恋人が元カレ/元カノと2人きりでサシ飲みするのを許す"
        },
        'zh-cn': {
          optionA: "允许恋人和异性朋友单独去两天一夜的旅行",
          optionB: "允许恋人和前任单独喝酒"
        }
      }
    },
    {
      id: 4,
      optionA: "술 취해서 내 얼굴에 토하는 애인",
      optionB: "애인 얼굴에 토하는 나",
      translations: {
        en: {
          optionA: "Partner getting drunk and throwing up on my face",
          optionB: "Me getting drunk and throwing up on partner's face"
        },
        ja: {
          optionA: "酔っ払って私の顔に吐く恋人",
          optionB: "酔っ払って恋人の顔に吐く自分"
        },
        'zh-cn': {
          optionA: "恋人喝醉了吐在我脸上",
          optionB: "我喝醉了吐在恋人脸上"
        }
      }
    },
    {
      id: 5,
      optionA: "밀당하는(주로 밀어내는) 썸 상대",
      optionB: "당기기만 하는 썸 상대",
      translations: {
        en: {
          optionA: "Someone playing hard to get (mostly pushing away)",
          optionB: "Someone who only pulls (always showing affection)"
        },
        ja: {
          optionA: "駆け引きする（主に引き気味な）相手",
          optionB: "ひたすらアプローチしてくる相手"
        },
        'zh-cn': {
          optionA: "欲擒故纵（主要是推开）的暧昧对象",
          optionB: "只主动示好（直球）的暧昧对象"
        }
      }
    },
    {
      id: 6,
      optionA: "애인에게 끼부리는 절친",
      optionB: "절친에게 끼부리는 애인",
      translations: {
        en: {
          optionA: "My best friend flirting with my partner",
          optionB: "My partner flirting with my best friend"
        },
        ja: {
          optionA: "自分の恋人に思わせぶりな態度をとる親友",
          optionB: "自分の親友に思わせぶりな態度をとる恋人"
        },
        'zh-cn': {
          optionA: "对我的恋人撒娇/撩拨的闺蜜/死党",
          optionB: "对我的闺蜜/死党撒娇/撩拨的恋人"
        }
      }
    },
    {
      id: 7,
      optionA: "남/여사친 100명 있는 애인",
      optionB: "남/여사친 1명 뿐인데 매일 만나는 애인",
      translations: {
        en: {
          optionA: "Partner who has 100 friends of the opposite sex",
          optionB: "Partner who has only 1 opposite-sex friend but meets them every day"
        },
        ja: {
          optionA: "異性の友達が100人いる恋人",
          optionB: "異性の友達が1人だけだけど毎日会う恋人"
        },
        'zh-cn': {
          optionA: "拥有100个异性朋友的恋人",
          optionB: "只有一个异性朋友但每天都见面的恋人"
        }
      }
    },
    {
      id: 8,
      optionA: "매일 사랑한다 표현하는 애인",
      optionB: "말 없이 행동으로만 보여주는 애인",
      translations: {
        en: {
          optionA: "Partner who says 'I love you' every day",
          optionB: "Partner who shows love only through actions without saying it"
        },
        ja: {
          optionA: "毎日「愛してる」と言葉で表現する恋人",
          optionB: "言葉はなく行動だけで示す恋人"
        },
        'zh-cn': {
          optionA: "每天口头表达爱意的恋人",
          optionB: "不说话只用行动来默默付出的恋人"
        }
      }
    },
    {
      id: 9,
      optionA: "음식이 나옴과 동시에 뱃속으로 사라지는 애인",
      optionB: "음식 식을 때까지 사진 찍는 애인",
      translations: {
        en: {
          optionA: "Partner who eats food in 10 seconds as soon as it is served",
          optionB: "Partner who takes photos until the food gets cold"
        },
        ja: {
          optionA: "料理が出た瞬間、10秒で平らげる恋人",
          optionB: "料理が冷めるまで写真を撮り続ける恋人"
        },
        'zh-cn': {
          optionA: "食物一上桌就瞬间消灭（10秒解决）的恋人",
          optionB: "拍照拍到食物凉透的恋人"
        }
      }
    },
    {
      id: 10,
      optionA: "로또 1등 당첨, 애인에게 알린다",
      optionB: "로또 1등 당첨, 애인에게 안 알린다",
      translations: {
        en: {
          optionA: "Tell partner about winning the lottery grand prize",
          optionB: "Do not tell partner about winning the lottery grand prize"
        },
        ja: {
          optionA: "ロト1等当選、恋人に教える",
          optionB: "ロト1等当選、恋人に教えない"
        },
        'zh-cn': {
          optionA: "中了彩票一等奖，告诉恋人",
          optionB: "中了彩票一等奖，不告诉恋人"
        }
      }
    },
    {
      id: 11,
      optionA: "내가 폰으로 시간만 봐도 화내는 애인",
      optionB: "데이트 중에 시도 때도 없이 휴대폰 보는 애인",
      translations: {
        en: {
          optionA: "Partner who gets mad if I just look at my phone to check the time",
          optionB: "Partner who looks at their phone constantly during dates"
        },
        ja: {
          optionA: "スマホで時間を見るだけでも怒る恋人",
          optionB: "デート中に四六時中スマホをいじっている恋人"
        },
        'zh-cn': {
          optionA: "我用手机看一下时间都会生气的恋人",
          optionB: "约会时无时无刻不在看手机的恋人"
        }
      }
    },
    {
      id: 12,
      optionA: "1분에 1번씩 자기 직전까지 연락하는 애인",
      optionB: "일주일에 1번 연락하는 애인",
      translations: {
        en: {
          optionA: "Partner who texts every minute until they sleep",
          optionB: "Partner who contacts only once a week"
        },
        ja: {
          optionA: "寝る直前まで1分に1回連絡してくる恋人",
          optionB: "週に1回しか連絡してこない恋人"
        },
        'zh-cn': {
          optionA: "每隔1分钟就联系一次直到睡觉的恋人",
          optionB: "一周只联系一次의 恋人"
        }
      }
    },
    {
      id: 13,
      optionA: "100억 빚이 있는 최고 이상형 애인",
      optionB: "100억 자산가 최고 비호감 애인",
      translations: {
        en: {
          optionA: "Ideal partner with $10 million debt",
          optionB: "Extremely disliked partner with $10 million assets"
        },
        ja: {
          optionA: "100億ウォンの借金がある理想のタイプの恋人",
          optionB: "100億ウォンの資産がある一番苦手なタイプの恋人"
        },
        'zh-cn': {
          optionA: "负债100亿韩元的最完美理想型恋人",
          optionB: "拥有100亿韩元资产的最反感类型恋人"
        }
      }
    },
    {
      id: 14,
      optionA: "애인이 내 절친을 짝사랑",
      optionB: "내 절친이 애인을 짝사랑",
      translations: {
        en: {
          optionA: "My partner has a crush on my best friend",
          optionB: "My best friend has a crush on my partner"
        },
        ja: {
          optionA: "恋人が私の親友に片思いしている",
          optionB: "親友が私の恋人に片思いしている"
        },
        'zh-cn': {
          optionA: "恋人单恋我的闺蜜/死党",
          optionB: "闺蜜/死党单恋我的恋人"
        }
      }
    },
    {
      id: 15,
      optionA: "데이트 비용 10원 단위까지 칼같이 더치페이하는 애인",
      optionB: "자기가 내고 하루종일 생색 내는 애인",
      translations: {
        en: {
          optionA: "Partner who splits the bill down to the last penny",
          optionB: "Partner who pays but brags about it all day"
        },
        ja: {
          optionA: "デート代を10円単位までキッチリ割り勘にする恋人",
          optionB: "自分が奢って一日中恩着せがましく言う恋人"
        },
        'zh-cn': {
          optionA: "约会消费精确到10韩元也必须AA制的恋人",
          optionB: "自己买单但念叨一整天炫耀恩惠的恋人"
        }
      }
    },
    {
      id: 16,
      optionA: "내 과거 연애사 전부 다 궁금해하고 캐묻는 애인",
      optionB: "내 연애사 뿐만 아니라 무슨 과거든 아예 관심조차 없는 애인",
      translations: {
        en: {
          optionA: "Partner who asks and digs into all of my past dating history",
          optionB: "Partner who has zero interest in my dating history or any past at all"
        },
        ja: {
          optionA: "過去の恋愛について根掘り葉掘り聞いてくる恋人",
          optionB: "過去の恋愛はおろか、どんな過去にも全く興味がない恋人"
        },
        'zh-cn': {
          optionA: "对我过去的情史充满好奇、刨根问底的恋人",
          optionB: "不仅是对情史，对我的任何过去都毫无兴趣的恋人"
        }
      }
    },
    {
      id: 17,
      optionA: "주말마다 무조건 밖으로 나가야 하는 극E 애인",
      optionB: "주말에는 무조건 집에서 쉬어야 하는 극I 애인",
      translations: {
        en: {
          optionA: "Extremely extroverted (E) partner who must go out every weekend",
          optionB: "Extremely introverted (I) partner who must stay home and rest every weekend"
        },
        ja: {
          optionA: "週末は絶対に外出したい超E（外向型）の恋人",
          optionB: "週末は絶対に家で休みたい超I（内向型）の恋人"
        },
        'zh-cn': {
          optionA: "周末必须出门折腾的极致E人（外向型）恋人",
          optionB: "周末必须在家躺平的极致I人（内向型）恋人"
        }
      }
    },
    {
      id: 18,
      optionA: "내 옷차림을 사사건건 간섭하는 애인",
      optionB: "내가 뭘 입든 영혼 없이 다 예쁘다고 말하는 애인",
      translations: {
        en: {
          optionA: "Partner who micromanages and criticizes my outfits",
          optionB: "Partner who says everything looks pretty without any soul"
        },
        ja: {
          optionA: "服装についてあれこれ口出ししてくる恋人",
          optionB: "何を着ても魂を込めずに「全部似合うよ」と言う恋人"
        },
        'zh-cn': {
          optionA: "对我的穿搭指手画脚、处处干涉的恋人",
          optionB: "无论我穿什么都毫无灵魂地敷衍说“好看”的恋人"
        }
      }
    },
    {
      id: 19,
      optionA: "말 한마디 없이 쌓아두는 애인",
      optionB: "그 자리에서 폭발하는 분조장 애인",
      translations: {
        en: {
          optionA: "Partner who keeps quiet and bottles up their frustration",
          optionB: "Partner with anger issues who explodes right on the spot"
        },
        ja: {
          optionA: "不満を一切口にせず溜め込む恋人",
          optionB: "その場ですぐにブチ切れる怒りっぽい恋人"
        },
        'zh-cn': {
          optionA: "有意见什么都不说、默默憋在心里的恋人",
          optionB: "脾气暴躁、当场瞬间爆发的恋人"
        }
      }
    },
    {
      id: 20,
      optionA: "나와의 모든 일상을 실시간으로 공유하는 애인",
      optionB: "연애하고 있는 걸 애인의 절친조차 모르게 하는 애인",
      translations: {
        en: {
          optionA: "Partner who shares our entire daily life in real-time",
          optionB: "Partner who hides our relationship even from their best friends"
        },
        ja: {
          optionA: "私との日常をすべてリアルタイムで共有する恋人",
          optionB: "付き合っていることを親友にさえ隠す恋人"
        },
        'zh-cn': {
          optionA: "把和我的点点滴滴都实时分享到社交媒体的恋人",
          optionB: "连闺蜜/死党都不知道我们在恋爱的恋人"
        }
      }
    },
    {
      id: 21,
      optionA: "애인 자취방에서 전 애인 흔적 발견하기",
      optionB: "내 자취방에서 전 애인 흔적 애인에게 들키기",
      translations: {
        en: {
          optionA: "Finding traces of your partner's ex in their apartment",
          optionB: "Getting caught with traces of your ex in your own apartment"
        },
        ja: {
          optionA: "恋人の一人暮らしの部屋で元恋人の痕跡を見つける",
          optionB: "自分の部屋で元恋人の痕跡を恋人に見つかる"
        },
        'zh-cn': {
          optionA: "在恋人的住处发现他/她前任留下的痕迹",
          optionB: "在我的住处被恋人发现我前任留下的痕迹"
        }
      }
    },
    {
      id: 22,
      optionA: "10년 동안 한 사람과 동거했던 애인",
      optionB: "1년에 연애 10번 한 애인",
      translations: {
        en: {
          optionA: "Partner who cohabited with one person for 10 years",
          optionB: "Partner who dated 10 different people in 1 year"
        },
        ja: {
          optionA: "10年間1人の人と同棲していた恋人",
          optionB: "1년에 10回恋愛をした恋人"
        },
        'zh-cn': {
          optionA: "和同一个人同居过10年的恋人",
          optionB: "一年谈过10次恋爱的恋人"
        }
      }
    },
    {
      id: 23,
      optionA: "상대가 마음에 들어도 원나잇만 가능",
      optionB: "상대가 마음에 안 들어도 장기연애만 가능",
      translations: {
        en: {
          optionA: "Can only do a one-night stand even if you really like them",
          optionB: "Must date long-term even if you do not like them"
        },
        ja: {
          optionA: "相手が気に入ってもワンナイトだけ可能",
          optionB: "相手が気に入らなくても長期恋愛だけ可能"
        },
        'zh-cn': {
          optionA: "就算看对眼也只能发生一夜情",
          optionB: "就算看不上眼也只能进行长久恋爱"
        }
      }
    },
    {
      id: 24,
      optionA: "침대 위에서 전 애인 이름 부르는 애인",
      optionB: "내가 침대 위에서 애인에게 전 애인 이름 부르기",
      translations: {
        en: {
          optionA: "Partner calling out their ex's name in bed",
          optionB: "Me calling out my ex's name in bed with my partner"
        },
        ja: {
          optionA: "ベッドの上で元恋人の名前を呼ぶ恋人",
          optionB: "ベッドの上で自分が恋人に元恋人の名前を呼んでしまう"
        },
        'zh-cn': {
          optionA: "恋人在床上喊出前任的名字",
          optionB: "我在床上对恋人喊出前任的名字"
        }
      }
    },
    {
      id: 25,
      optionA: "바람피우고 무덤까지 완벽하게 숨기는 애인",
      optionB: "바람피우고 죄책감에 펑펑 울면서 나에게 자백하는 애인",
      translations: {
        en: {
          optionA: "Cheating and hiding it perfectly to the grave",
          optionB: "Cheating and confessing while crying out of guilt"
        },
        ja: {
          optionA: "浮気をして墓場まで完璧に隠し通す恋人",
          optionB: "浮気をして罪悪感で泣きじゃくりながら자백하는 恋人"
        },
        'zh-cn': {
          optionA: "出轨但带进坟墓、完美隐瞒一辈子的恋人",
          optionB: "出轨后因为内疚哭着向我坦白的恋人"
        }
      }
    },
    {
      id: 26,
      optionA: "술 취해서 내 얼굴에 토하는 애인",
      optionB: "애인 얼굴에 토하는 나",
      translations: {
        en: {
          optionA: "Partner getting drunk and throwing up on my face",
          optionB: "Me getting drunk and throwing up on partner's face"
        },
        ja: {
          optionA: "酔っ払って私の顔に吐く恋人",
          optionB: "酔っ払って恋人の顔に吐く自分"
        },
        'zh-cn': {
          optionA: "恋人喝醉了吐在我脸上",
          optionB: "我喝醉了吐在恋人脸上"
        }
      }
    },
    {
      id: 27,
      optionA: "애인이 내 절친이랑 술김에 실수로 키스하기",
      optionB: "내가 애인의 절친이랑 술김에 실수로 키스하기",
      translations: {
        en: {
          optionA: "Partner accidentally kisses my best friend while drunk",
          optionB: "I accidentally kiss partner's best friend while drunk"
        },
        ja: {
          optionA: "恋人がお酒の勢いで自分の親友とキスしてしまう",
          optionB: "自分がお酒の勢いで恋人の親友とキスしてしまう"
        },
        'zh-cn': {
          optionA: "恋人喝醉酒和我的闺蜜/死党接吻",
          optionB: "我喝醉酒和恋人的闺蜜/死党接吻"
        }
      }
    },
    {
      id: 28,
      optionA: "내 앞에서 다른 이성 몸매 칭찬",
      optionB: "다른 이성 앞에서 내 몸매 평가",
      translations: {
        en: {
          optionA: "Praising another person's body in front of me",
          optionB: "Evaluating my body in front of another person"
        },
        ja: {
          optionA: "自分の前で다른 異性のスタイルを褒める",
          optionB: "他の異性の前で自分のスタイルを評価する"
        },
        'zh-cn': {
          optionA: "在我面前夸赞其他异性的身材",
          optionB: "在其他异性面前评价我的身材"
        }
      }
    },
    {
      id: 29,
      optionA: "샤워 1주일 안 한 애인과 껴안고 자기",
      optionB: "양치 1주일 안 한 애인과 모닝 키스하기",
      translations: {
        en: {
          optionA: "Hugging and sleeping with a partner who hasn't showered for a week",
          optionB: "Morning kissing a partner who hasn't brushed their teeth for a week"
        },
        ja: {
          optionA: "1週間お風呂に入っていない恋人と抱き合って寝る",
          optionB: "1週間歯を磨いていない恋人とモーニングキスをする"
        },
        'zh-cn': {
          optionA: "和一周没洗澡的恋人抱在一起睡觉",
          optionB: "和一周没刷牙的恋人来一个早安吻"
        }
      }
    },
    {
      id: 30,
      optionA: "스킨십 절대 불가 플라토닉 연애",
      optionB: "깊은 대화 절대 불가 육체적 연애",
      translations: {
        en: {
          optionA: "Platonic relationship (absolutely no physical intimacy)",
          optionB: "Physical relationship (absolutely no deep conversation)"
        },
        ja: {
          optionA: "スキンシップ一切禁止のプラトニックな恋愛",
          optionB: "深い会話一切不可の肉体関係だけの恋愛"
        },
        'zh-cn': {
          optionA: "绝对禁止亲密接触的精神恋爱（柏拉图式）",
          optionB: "无法进行深度交流的纯肉体恋爱"
        }
      }
    }
  ],
  medium: [
    {
      id: 1,
      optionA: "야동 보다가 애인에게 들키기",
      optionB: "야동 보는 애인 목격하기",
      translations: {
        en: {
          optionA: "Getting caught watching adult videos by partner",
          optionB: "Witnessing partner watching adult videos"
        },
        ja: {
          optionA: "アダルトビデオを見ているのを恋人にバレる",
          optionB: "アダルトビデオを見ている恋人を目撃する"
        },
        'zh-cn': {
          optionA: "独自看小视频被恋人撞见",
          optionB: "撞见恋人正在看小视频"
        }
      }
    },
    {
      id: 2,
      optionA: "스킨십 거부하는 애인",
      optionB: "시도 때도 없이 요구하는 애인",
      translations: {
        en: {
          optionA: "Partner who rejects physical intimacy",
          optionB: "Partner who demands physical intimacy constantly"
        },
        ja: {
          optionA: "スキンシップを拒む恋人",
          optionB: "四六時中スキンシップを求めてくる恋人"
        },
        'zh-cn': {
          optionA: "拒绝亲密接触的性冷淡恋人",
          optionB: "无时无刻不在求欢的欲求不满恋人"
        }
      }
    },
    {
      id: 3,
      optionA: "이상형인데 속궁합 최악 애인",
      optionB: "이상형은 아니지만 속궁합 최고 애인",
      translations: {
        en: {
          optionA: "Ideal partner but worst sexual compatibility",
          optionB: "Non-ideal partner but best sexual compatibility"
        },
        ja: {
          optionA: "理想のタイプだけど体の相性は最悪の恋人",
          optionB: "タイプじゃないけど体の相性は最高の恋人"
        },
        'zh-cn': {
          optionA: "完美理想型但房事极为不合的恋人",
          optionB: "并非理想型但房事契合度满分的恋人"
        }
      }
    },
    {
      id: 4,
      optionA: "내가 첫 상대이지만 스킬이 부족한 사람",
      optionB: "경험이 풍부해서 스킬이 능숙한 사람",
      translations: {
        en: {
          optionA: "Having a virgin partner with no skills",
          optionB: "Having an experienced partner with great skills"
        },
        ja: {
          optionA: "自分が初めての相手だけど技術不足な人",
          optionB: "経験豊富でテクニックが上手な人"
        },
        'zh-cn': {
          optionA: "我是对方的第一任但技术生疏生硬",
          optionB: "对方经验丰富且技巧娴熟游刃有余"
        }
      }
    },
    {
      id: 5,
      optionA: "혼전순결",
      optionB: "혼전동거",
      translations: {
        en: {
          optionA: "Chastity before marriage",
          optionB: "Cohabitation before marriage"
        },
        ja: {
          optionA: "婚前純潔",
          optionB: "婚前同棲"
        },
        'zh-cn': {
          optionA: "婚前守贞",
          optionB: "婚前同居"
        }
      }
    },
    {
      id: 6,
      optionA: "낮져밤이 애인",
      optionB: "낮이밤져 애인",
      translations: {
        en: {
          optionA: "Submissive by day, dominant by night",
          optionB: "Dominant by day, submissive by night"
        },
        ja: {
          optionA: "昼は大人しく夜はアグレッシブな恋人",
          optionB: "昼はリードし夜は大人しい恋人"
        },
        'zh-cn': {
          optionA: "白天温顺晚上霸道的恋人",
          optionB: "白天强势晚上被动的恋人"
        }
      }
    },
    {
      id: 7,
      optionA: "밖에서는 남남처럼 구는데 둘만 있으면 사랑이 넘치는 애인",
      optionB: "밖에서는 사랑이 넘치는데 둘만 있으면 목석되는 애인",
      translations: {
        en: {
          optionA: "Cold in public but super affectionate in private",
          optionB: "Affectionate in public but like a stone statue in private"
        },
        ja: {
          optionA: "外では他人のように冷たいが2人きりだと情熱的な恋人",
          optionB: "外ではラブラブなのに2人きりだと無反応になる恋人"
        },
        'zh-cn': {
          optionA: "在外像陌生人一样冷淡但私下热情似火",
          optionB: "在外恩爱甜蜜但私下相处如木头一般冷淡"
        }
      }
    },
    {
      id: 8,
      optionA: "육체적으로 바람핀 애인과 계속 사귀기",
      optionB: "정신적으로 바람핀 애인과 계속 사귀기",
      translations: {
        en: {
          optionA: "Staying with a partner who cheated physically",
          optionB: "Staying with a partner who cheated emotionally"
        },
        ja: {
          optionA: "肉体的に浮気した恋人と付き合い続ける",
          optionB: "精神的に浮気した恋人と付き合い続ける"
        },
        'zh-cn': {
          optionA: "原谅身体出轨的恋人继续交往",
          optionB: "原谅精神出轨的恋人继续交往"
        }
      }
    },
    {
      id: 9,
      optionA: "원나잇 경험 100번 애인",
      optionB: "10년 동거 경험 애인",
      translations: {
        en: {
          optionA: "Partner who had 100 one-night stands",
          optionB: "Partner who had a 10-year cohabitation experience"
        },
        ja: {
          optionA: "ワンナイトの経験が100回ある恋人",
          optionB: "10年間の同棲経験がある恋人"
        },
        'zh-cn': {
          optionA: "有过100次一夜情经历的恋人",
          optionB: "有过10年同居史的恋人"
        }
      }
    },
    {
      id: 10,
      optionA: "스킨십 진도 1년 애인",
      optionB: "스킨십 진도 하루 애인",
      translations: {
        en: {
          optionA: "Taking 1 year to make progress in physical touch",
          optionB: "Going all the way with physical touch in 1 day"
        },
        ja: {
          optionA: "スキンシップの進度が1年かかる恋人",
          optionB: "スキンシップの進度が1日で終わる恋人"
        },
        'zh-cn': {
          optionA: "谈恋爱一年才拉手亲亲",
          optionB: "认识一天就发生关系"
        }
      }
    },
    {
      id: 11,
      optionA: "입냄새 심한 애인과 키스",
      optionB: "땀냄새 심한 애인과 맨살 팔베개",
      translations: {
        en: {
          optionA: "Kissing a partner with severe bad breath",
          optionB: "Bare-skin pillow arm with a partner with strong sweat odor"
        },
        ja: {
          optionA: "口臭がひどい恋人とキス",
          optionB: "汗臭い恋人に素肌で腕枕される"
        },
        'zh-cn': {
          optionA: "和有严重口臭的恋人接吻",
          optionB: "给有严重汗臭的恋人光膀子枕胳膊"
        }
      }
    },
    {
      id: 12,
      optionA: "본인이 원할 때만 하는 애인",
      optionB: "내가 원할 땐 다 해주는데 본인이 절대 먼저 하자고 안하는 애인",
      translations: {
        en: {
          optionA: "Partner who only initiates intimacy when they want to",
          optionB: "Partner who yields when you initiate but never initiates themselves"
        },
        ja: {
          optionA: "自分がやりたい時だけ求めてくる恋人",
          optionB: "求めれば応じるが自分からは誘わない恋人"
        },
        'zh-cn': {
          optionA: "只有在对方想要时才配合的恋人",
          optionB: "我想要时都很配合但对方绝对不主动开口的恋人"
        }
      }
    },
    {
      id: 13,
      optionA: "평생 1박 50만원 호텔",
      optionB: "평생 스릴 넘치는 야외",
      translations: {
        en: {
          optionA: "Intimacy always in $500 luxury hotels",
          optionB: "Intimacy always in thrilling outdoor locations"
        },
        ja: {
          optionA: "一生1泊5万円の高級ホテルでの行為",
          optionB: "一生スリル満点の野外での行為"
        },
        'zh-cn': {
          optionA: "一辈子都在1晚50万韩元的豪华酒店做",
          optionB: "一辈子都在惊险刺激的户外做"
        }
      }
    },
    {
      id: 14,
      optionA: "내가 억지로 리드해야만 분위기 잡히는 애인",
      optionB: "내 분위기 무시하고 본인 맘대로 리드하는 애인",
      translations: {
        en: {
          optionA: "Partner who needs to be forced/dragged to lead",
          optionB: "Partner who ignores my mood and leads as they please"
        },
        ja: {
          optionA: "自分が無理やりリードしないと雰囲気が出ない恋人",
          optionB: "私の気分を無視して強引にリードする恋人"
        },
        'zh-cn': {
          optionA: "必须由我强行引导主导才能进入状态的恋人",
          optionB: "忽略我的情绪和氛围完全由对方强行主导的恋人"
        }
      }
    },
    {
      id: 15,
      optionA: "평생 딥키스 없이 뽀뽀만 하기",
      optionB: "평생 뽀뽀 없이 딥키스만 하기",
      translations: {
        en: {
          optionA: "Pecks/light kisses only (no deep kisses forever)",
          optionB: "Deep kisses only (no pecks/light kisses forever)"
        },
        ja: {
          optionA: "一生ディープキスなしでフレンチキスだけ",
          optionB: "一生フレンチキスなしでディープキスだけ"
        },
        'zh-cn': {
          optionA: "一辈子只能轻吻碰嘴唇不能舌吻",
          optionB: "一辈子只能舌吻不能轻吻碰嘴唇"
        }
      }
    },
    {
      id: 16,
      optionA: "머리 밑으로 아무런 털이 없는 애인",
      optionB: "털이 수북한 애인",
      translations: {
        en: {
          optionA: "Partner with absolutely zero body hair below the neck",
          optionB: "Partner with extremely dense/thick body hair"
        },
        ja: {
          optionA: "首から下に一切毛がないツルツルな恋人",
          optionB: "全身毛深い恋人"
        },
        'zh-cn': {
          optionA: "脖子以下没有任何体毛的恋人",
          optionB: "全身体毛非常茂密的恋人"
        }
      }
    },
    {
      id: 17,
      optionA: "끝난 직후 1초 만에 등 돌리고 자는 애인",
      optionB: "끝나고 1시간 동안 \"어땠어? 어디가 젤 좋았어?\" 상세 후기 요구하는 애인",
      translations: {
        en: {
          optionA: "Partner who rolls over to sleep 1 second after finishing",
          optionB: "Partner who asks for detailed feedback ('How was it? What was best?') for 1 hour"
        },
        ja: {
          optionA: "行為後1秒で背を向けて寝る恋人",
          optionB: "行為後に1時間「どうだった？どういうトコが一番良かった？」と感想を求める恋人"
        },
        'zh-cn': {
          optionA: "事后1秒钟立马转身睡觉的恋人",
          optionB: "事后花1小时追问“怎么样？哪里最舒服？”索要详细反馈的恋人"
        }
      }
    },
    {
      id: 18,
      optionA: "평생 성욕 아예 없어지기",
      optionB: "평생 성욕 폭발하고 쾌감 10배되기",
      translations: {
        en: {
          optionA: "Having zero libido/sexual desire forever",
          optionB: "Having explosive libido and 10x sexual pleasure forever"
        },
        ja: {
          optionA: "一生性欲が完全になくなる",
          optionB: "一生性欲が爆発して快感が10倍になる"
        },
        'zh-cn': {
          optionA: "一辈子完全没有性欲",
          optionB: "一辈子性欲爆棚且快感增强10倍"
        }
      }
    },
    {
      id: 19,
      optionA: "평생 상대방이 항상 만족하지 못하는 대신 나는 만족함",
      optionB: "평생 내가 항상 만족하지 못하는 대신 상대방은 만족함",
      translations: {
        en: {
          optionA: "You are always satisfied but your partner is never satisfied",
          optionB: "Your partner is always satisfied but you are never satisfied"
        },
        ja: {
          optionA: "自分だけが満足して相手は一生満足できない",
          optionB: "相手だけが満足して自分は一生満足できない"
        },
        'zh-cn': {
          optionA: "一辈子只有我感到满足而对方无法满足",
          optionB: "一辈子只有对方感到满足而我无法满足"
        }
      }
    },
    {
      id: 20,
      optionA: "관계 중 웃음이 나오는 상황 발생",
      optionB: "관계 중 울음이 나오는 상황 발생",
      translations: {
        en: {
          optionA: "Bursting out laughing during intimacy",
          optionB: "Bursting out crying during intimacy"
        },
        ja: {
          optionA: "行為中に笑ってしまうハプニング",
          optionB: "行為中に泣いてしまうハプニング"
        },
        'zh-cn': {
          optionA: "亲密接触过程中突然笑场",
          optionB: "亲密接触过程中突然哭泣"
        }
      }
    }
  ],
  spicy: [
    {
      id: 1,
      optionA: "한 달에 1번 하기",
      optionB: "하루에 5번 하기",
      translations: {
        en: {
          optionA: "Having intimacy once a month",
          optionB: "Having intimacy 5 times a day"
        },
        ja: {
          optionA: "月に1回だけ行う",
          optionB: "1日に5回行う"
        },
        'zh-cn': {
          optionA: "一个月做一次",
          optionB: "一天做五次"
        }
      }
    },
    {
      id: 2,
      optionA: "사방이 거울로 도배된 방에서 눈 뜨고 하기",
      optionB: "불 다 끄고 안대까지 낀 채로 하기",
      translations: {
        en: {
          optionA: "Doing it in a room full of mirrors with eyes open",
          optionB: "Doing it in complete darkness with a blindfold on"
        },
        ja: {
          optionA: "四方鏡張りの部屋で目を開けて行う",
          optionB: "電気も消してアイマスクを着用して行う"
        },
        'zh-cn': {
          optionA: "在四周贴满镜子的房间里睁着眼睛做",
          optionB: "关掉所有灯并戴着眼罩在漆黑中做"
        }
      }
    },
    {
      id: 3,
      optionA: "크기",
      optionB: "스킬",
      translations: {
        en: {
          optionA: "Size",
          optionB: "Skill"
        },
        ja: {
          optionA: "大きさ",
          optionB: "テクニック"
        },
        'zh-cn': {
          optionA: "大小/尺寸",
          optionB: "技巧/技术"
        }
      }
    },
    {
      id: 4,
      optionA: "3시간",
      optionB: "3분",
      translations: {
        en: {
          optionA: "3 hours",
          optionB: "3 minutes"
        },
        ja: {
          optionA: "3時間",
          optionB: "3分"
        },
        'zh-cn': {
          optionA: "3小时",
          optionB: "3分钟"
        }
      }
    },
    {
      id: 5,
      optionA: "길이",
      optionB: "두께",
      translations: {
        en: {
          optionA: "Length",
          optionB: "Girth/Thickness"
        },
        ja: {
          optionA: "長さ",
          optionB: "太さ"
        },
        'zh-cn': {
          optionA: "长度",
          optionB: "粗度"
        }
      }
    },
    {
      id: 6,
      optionA: "본게임 없이 애무만 1시간 하기",
      optionB: "전희 없이 본게임만 1시간 하기",
      translations: {
        en: {
          optionA: "1 hour of foreplay only (no intercourse)",
          optionB: "1 hour of intercourse only (no foreplay)"
        },
        ja: {
          optionA: "挿入なしで愛撫だけで1時間",
          optionB: "前戯なしで挿入だけで1時間"
        },
        'zh-cn': {
          optionA: "没有实质进入、光是抚摸前戏 1 小时",
          optionB: "没有任何前戏、直接实质进入做 1 小时"
        }
      }
    },
    {
      id: 7,
      optionA: "평생 내가 위에서 주도 하기",
      optionB: "평생 아래에서 가만히 받기",
      translations: {
        en: {
          optionA: "Being on top and leading/initiating forever",
          optionB: "Being on the bottom and submissively receiving forever"
        },
        ja: {
          optionA: "一生自分が上になってリードする",
          optionB: "一生下になって受け身でいる"
        },
        'zh-cn': {
          optionA: "一辈子在上面主动支配",
          optionB: "一辈子在下面躺平承受"
        }
      }
    },
    {
      id: 8,
      optionA: "평생 입과 손으로만 만족하기",
      optionB: "평생 삽입으로만 만족하기",
      translations: {
        en: {
          optionA: "Being satisfied only by mouth and hands forever",
          optionB: "Being satisfied only by penetration forever"
        },
        ja: {
          optionA: "一生口と手だけでの行為",
          optionB: "一生挿入だけでの行為"
        },
        'zh-cn': {
          optionA: "一辈子只能用嘴和手解决",
          optionB: "一辈子只能通过实质进入解决"
        }
      }
    },
    {
      id: 9,
      optionA: "관계할 때 상대가 만족하는 소리에 이웃집에서 항의 들어오기",
      optionB: "관계할 때 상대가 아무 반응, 소리도 없고 하품하기",
      translations: {
        en: {
          optionA: "Neighbors complaining about the noise of your partner's pleasure",
          optionB: "Your partner making absolutely zero noise/reaction and yawning"
        },
        ja: {
          optionA: "相手の声が大きすぎて隣人から苦情が来る",
          optionB: "相手が何の反応も声も出さず欠伸をする"
        },
        'zh-cn': {
          optionA: "对方叫声太大被隔壁邻居投诉敲门",
          optionB: "对方毫无反应甚至中途打哈欠"
        }
      }
    },
    {
      id: 10,
      optionA: "집 안에서 옷을 입지 않는 애인",
      optionB: "관계할 때조차 옷을 벗지 않는 애인",
      translations: {
        en: {
          optionA: "Partner who walks around naked inside the house",
          optionB: "Partner who does not take off clothes even during intimacy"
        },
        ja: {
          optionA: "家の中で服を着ない恋人",
          optionB: "行為の時でさえ服を脱がない恋人"
        },
        'zh-cn': {
          optionA: "在家里一丝不挂裸奔的恋人",
          optionB: "亲密接触时也坚决不脱衣服的恋人"
        }
      }
    },
    {
      id: 11,
      optionA: "묶기",
      optionB: "묶이기",
      translations: {
        en: {
          optionA: "Tying up the partner",
          optionB: "Being tied up by the partner"
        },
        ja: {
          optionA: "縛る",
          optionB: "縛られる"
        },
        'zh-cn': {
          optionA: "捆绑对方",
          optionB: "被对方捆绑"
        }
      }
    },
    {
      id: 12,
      optionA: "나한테 이상한거 요구하는데 속궁합 좋은 애인",
      optionB: "내가 하자는 건 다 해주는데 속궁합 안 좋은 애인",
      translations: {
        en: {
          optionA: "Partner who demands weird/kinky things but sexual compatibility is amazing",
          optionB: "Partner who does whatever you want but compatibility is awful"
        },
        ja: {
          optionA: "変わったプレイを要求されるが体の相性は抜群な恋人",
          optionB: "自分の要望を何でも聞いてくれるが体の相性は悪い恋人"
        },
        'zh-cn': {
          optionA: "提各种重口味奇怪要求但房事体验极佳",
          optionB: "顺从我的所有要求但体验如同嚼蜡极差"
        }
      }
    },
    {
      id: 13,
      optionA: "본인/애인의 것이 완벽한 크기지만 완벽하게 말랑말랑",
      optionB: "작지만 완벽하게 단단",
      translations: {
        en: {
          optionA: "Perfect size but completely soft/flaccid",
          optionB: "Small but perfectly firm/rock hard"
        },
        ja: {
          optionA: "完璧なサイズ感だけど完全にフニャフニャ",
          optionB: "小さいけれど完璧にカチカチ"
        },
        'zh-cn': {
          optionA: "尺寸完美但软绵绵",
          optionB: "尺寸微小但坚挺无比"
        }
      }
    },
    {
      id: 14,
      optionA: "애인 팬티 안에 절친 손",
      optionB: "절친 팬티 안에 애인 손",
      translations: {
        en: {
          optionA: "Your best friend's hand in your partner's underwear",
          optionB: "Your partner's hand in your best friend's underwear"
        },
        ja: {
          optionA: "恋人の下着の中に親友の手",
          optionB: "親友の下着の中に恋人の手"
        },
        'zh-cn': {
          optionA: "闺蜜/死党的手伸进恋人的内裤里",
          optionB: "恋人的手伸进闺蜜/死党的内裤里"
        }
      }
    },
    {
      id: 15,
      optionA: "깊이",
      optionB: "속도",
      translations: {
        en: {
          optionA: "Depth",
          optionB: "Speed"
        },
        ja: {
          optionA: "深さ",
          optionB: "スピード"
        },
        'zh-cn': {
          optionA: "深度",
          optionB: "速度"
        }
      }
    },
    {
      id: 16,
      optionA: "대화하면서 하기",
      optionB: "몸으로만 대화하기",
      translations: {
        en: {
          optionA: "Talking dirty/chatting during intimacy",
          optionB: "Silent communication using bodies only"
        },
        ja: {
          optionA: "会話しながら行う",
          optionB: "体だけで会話する"
        },
        'zh-cn': {
          optionA: "聊天/说脏话交流着做",
          optionB: "默默无言纯靠身体动作交流"
        }
      }
    },
    {
      id: 17,
      optionA: "짧게 여러 번",
      optionB: "길게 한 번",
      translations: {
        en: {
          optionA: "Short durations multiple times",
          optionB: "Long duration once"
        },
        ja: {
          optionA: "短く何回も行う",
          optionB: "長く1回行う"
        },
        'zh-cn': {
          optionA: "时间短做多次",
          optionB: "时间长做一次"
        }
      }
    },
    {
      id: 18,
      optionA: "스팽킹 하기",
      optionB: "스팽킹 당하기",
      translations: {
        en: {
          optionA: "Spanking the partner",
          optionB: "Being spanked by the partner"
        },
        ja: {
          optionA: "お尻を叩く",
          optionB: "お尻を叩かれる"
        },
        'zh-cn': {
          optionA: "抽打对方屁股",
          optionB: "被对方抽打屁股"
        }
      }
    },
    {
      id: 19,
      optionA: "정상위",
      optionB: "후배위",
      translations: {
        en: {
          optionA: "Missionary position",
          optionB: "Doggy style"
        },
        ja: {
          optionA: "正常位",
          optionB: "後背位"
        },
        'zh-cn': {
          optionA: "传教士式",
          optionB: "后背式"
        }
      }
    },
    {
      id: 20,
      optionA: "애무 받기",
      optionB: "애무 해주기",
      translations: {
        en: {
          optionA: "Receiving foreplay/touch",
          optionB: "Giving foreplay/touch"
        },
        ja: {
          optionA: "愛撫される",
          optionB: "愛撫する"
        },
        'zh-cn': {
          optionA: "接受抚摸/前戏",
          optionB: "抚摸/前戏对方"
        }
      }
    }
  ]
};

export function getLocalizedQuestions(difficulty: Difficulty, lang: string): { id: number; optionA: string; optionB: string }[] {
  const questions = balanceGameQuestions[difficulty];
  return questions.map(q => {
    if (lang !== 'ko' && q.translations && q.translations[lang as keyof typeof q.translations]) {
      const trans = q.translations[lang as keyof typeof q.translations];
      return {
        id: q.id,
        optionA: trans.optionA,
        optionB: trans.optionB
      };
    }
    return {
      id: q.id,
      optionA: q.optionA,
      optionB: q.optionB
    };
  });
}
