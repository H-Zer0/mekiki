const foodData = [
    {
        id: 1,
        name: "トマト",
        category: "野菜",
        icon: "🍅",
        selection: [
            "ヘタが濃い緑色で、ピンと立っているもの",
            "全体がムラなく赤く、皮にハリがあるもの",
            "手に持ったときにずっしりと重みを感じるもの"
        ],
        storage: {
            "常温": "熟していない場合は冷暗所へ（2〜3日）",
            "冷蔵": "ヘタを下にしてポリ袋に入れ、野菜室で保存（1週間）",
            "冷凍": "丸ごと、またはカットして冷凍可能（1ヶ月）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" },
            { name: "てつブログ", url: "https://tetsublog.work/tomato-select/" }
        ]
    },
    {
        id: 2,
        name: "キャベツ",
        category: "野菜",
        icon: "🥬",
        selection: [
            "外葉が濃い緑色で、ツヤがあるもの",
            "巻きがしっかりしていて、ずっしり重いもの（春キャベツは軽い方を）",
            "芯の切り口が白く、50円玉サイズ以下のもの"
        ],
        storage: {
            "冷蔵": "芯をくり抜き濡らしたペーパーを詰め、ポリ袋へ（2週間）",
            "冷凍": "ざく切りにして生のまま冷凍保存袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/cabbage-select/" }
        ]
    },
    {
        id: 3,
        name: "にんじん",
        category: "野菜",
        icon: "🥕",
        selection: [
            "表面の色が鮮やかで、ツヤとハリがあるもの",
            "首の部分が青くなっていないもの",
            "芯の切り口が小さく、黒ずんでいないもの"
        ],
        storage: {
            "冷蔵": "新聞紙で包み、立てて野菜室で保存（2〜3週間）",
            "冷凍": "小さくカットして生のまま、または茹でて冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/carrots-select/" }
        ]
    },
    {
        id: 4,
        name: "豚肉",
        category: "肉",
        icon: "🐷",
        selection: [
            "鮮やかなピンク色で、ツヤがあるもの",
            "脂肪部分が鮮明な白色で、赤身との境目がはっきりしているもの",
            "トレーに『ドリップ（赤い汁）』が出ていないもの"
        ],
        storage: {
            "冷蔵": "ドリップを拭き取り、ラップで密閉してチルド室へ（2〜3日）",
            "冷凍": "小分けにしてラップで平らに包み、保存袋へ（2〜3週間）"
        },
        sources: [
            { name: "Shufoo!", url: "https://www.shufoo.net/plus/shopping_tips/36" }
        ]
    },
    {
        id: 5,
        name: "マグロ（刺身）",
        category: "魚",
        icon: "🐟",
        selection: [
            "色が鮮やかな赤、または淡いピンクのもの",
            "切り口の角がピシッと立っていて、ツヤがあるもの",
            "身に赤い斑点（血栓）がないもの"
        ],
        storage: {
            "冷蔵": "パックから出しペーパーで水分を拭き、ラップしてチルド室（当日〜翌日）",
            "冷凍": "不向き（解凍時に味が落ちやすいため、早めに食べるのがベスト）"
        },
        sources: [
            { name: "丸松（野菜の選び方）", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 6,
        name: "いちご",
        category: "果物",
        icon: "🍓",
        selection: [
            "ヘタのすぐ下まで赤みが強く、ツヤがあるもの",
            "ヘタが鮮やかな緑色で、反り返っているもの",
            "表面のつぶつぶ（種）が赤くなっているもの"
        ],
        storage: {
            "常温": "基本NG。食べる1〜2時間前に冷やす（1〜2日）",
            "冷蔵": "洗わずに乾燥を防げる容器に入れ野菜室（2〜3日）",
            "冷凍": "ヘタを取り、砂糖をまぶして保存袋へ（1ヶ月）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 7,
        name: "たまねぎ",
        category: "野菜",
        icon: "🧅",
        selection: [
            "皮が乾燥していて、ツヤがあるもの",
            "首の部分が締まっていて、カチカチに硬いもの",
            "手に持ったときに重量感があるもの"
        ],
        storage: {
            "常温": "ネット等に入れ、風通しの良い日陰に吊るす（2ヶ月）",
            "冷蔵": "夏場は新聞紙に包んで野菜室へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/onion-select/" }
        ]
    },
    {
        id: 8,
        name: "じゃがいも",
        category: "野菜",
        icon: "🥔",
        selection: [
            "皮にシワがなく、ふっくらと丸みがあるもの",
            "芽が出ておらず、表面が緑色になっていないもの",
            "適度な硬さがあり、重みがあるもの"
        ],
        storage: {
            "常温": "新聞紙に包み、風通しの良い涼しい場所（1ヶ月）",
            "冷蔵": "リンゴと一緒に保存すると芽が出にくい（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/potatoes-select/" }
        ]
    },
    {
        id: 9,
        name: "なす",
        category: "野菜",
        icon: "🍆",
        selection: [
            "皮が濃い紫色でハリがあり、ツヤツヤしているもの",
            "ヘタのトゲが鋭く、触ると痛いくらいのもの",
            "ヘタの切り口が新しく、瑞々しいもの"
        ],
        storage: {
            "冷蔵": "1つずつペーパーで包み、ポリ袋に入れて野菜室（1週間）",
            "冷凍": "生のまま丸ごと、またはカットして冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/eggplant-select/" }
        ]
    },
    {
        id: 10,
        name: "牛肉",
        category: "肉",
        icon: "🥩",
        selection: [
            "赤身が鮮やかな紅色をしているもの",
            "脂肪が乳白色で、赤身との境目がはっきりしているもの",
            "表面にツヤがあり、キメが細かいもの"
        ],
        storage: {
            "冷蔵": "ラップでぴっちり包んでチルド室（3〜5日）",
            "冷凍": "酸化を防ぐため、1回分ずつ密閉して冷凍（1ヶ月）"
        },
        sources: [
            { name: "Shufoo!", url: "https://www.shufoo.net/plus/shopping_tips/36" }
        ]
    },
    {
        id: 11,
        name: "鶏肉",
        category: "肉",
        icon: "🍗",
        selection: [
            "身が鮮やかなピンク色で、透明感とハリがあるもの",
            "皮の毛穴がはっきりと盛り上がっているもの",
            "ドリップが出ておらず、生臭さがないもの"
        ],
        storage: {
            "冷蔵": "水分を拭き取り、酒や塩で下味を付けると長持ち（1〜2日）",
            "冷凍": "下味冷凍がおすすめ。ジップロックで空気を抜く（2〜3週間）"
        },
        sources: [
            { name: "Shufoo!", url: "https://www.shufoo.net/plus/shopping_tips/36" }
        ]
    },
    {
        id: 12,
        name: "サーモン",
        category: "魚",
        icon: "🍣",
        selection: [
            "身の色が鮮やかなオレンジ色をしているもの",
            "白い脂肪の筋（サシ）がくっきりと入っているもの",
            "身に弾力があり、表面が乾いていないもの"
        ],
        storage: {
            "冷蔵": "水分を拭き取り、ラップで包んでチルド室（1〜2日）",
            "冷凍": "一切れずつラップして保存袋に入れ、空気を抜く（2週間）"
        },
        sources: [
            { name: "丸松", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 13,
        name: "りんご",
        category: "果物",
        icon: "🍎",
        selection: [
            "お尻の部分まで黄色〜赤色に色づいているもの",
            "ツルが太くて瑞々しく、シワがないもの",
            "叩いたときに澄んだ音がし、重量感があるもの"
        ],
        storage: {
            "常温": "寒い時期なら新聞紙に包んで冷暗所（1ヶ月）",
            "冷蔵": "乾燥を防ぐためポリ袋に入れ、冷蔵庫（1ヶ月以上）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 14,
        name: "バナナ",
        category: "果物",
        icon: "🍌",
        selection: [
            "付け根が太くしっかりしていて、全体に厚みがあるもの",
            "シュガースポット（黒い点）が出始めた頃が最も甘い",
            "皮に傷がなく、色が鮮やかな黄色いもの"
        ],
        storage: {
            "常温": "スタンドに吊るすか、山を上にして置く（3〜4日）",
            "冷蔵": "1本ずつ新聞紙に包んでポリ袋に入れ、野菜室（1週間）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 15,
        name: "きゅうり",
        category: "野菜",
        icon: "🥒",
        selection: [
            "イボが尖っていて、触ると痛いくらいのもの",
            "太さが均一で、表面にハリとツヤがあるもの",
            "ヘタの部分が瑞々しく、変色していないもの"
        ],
        storage: {
            "冷蔵": "ペーパーで包み、ヘタを上にして立てて野菜室（1週間）",
            "冷凍": "薄切りにして塩揉みし、水気を絞って冷凍（2週間）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/cucumber-select/" }
        ]
    },
    {
        id: 16,
        name: "アジ",
        category: "魚",
        icon: "🐟",
        selection: [
            "身の色が濃く、ピカピカと銀色に輝いている",
            "表面がツヤツヤしている",
            "目が澄んでいて濁っていない"
        ],
        storage: {
            "冷蔵": "内臓を取り除き、水気を拭いてラップ（当日〜翌日）",
            "冷凍": "処理後、水分を拭いてラップし冷凍袋へ（2週間）"
        },
        sources: [
            { name: "丸松", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 17,
        name: "タイ",
        category: "魚",
        icon: "🐟",
        selection: [
            "透明感のある鮮やかな薄ピンク色",
            "身の表面にツヤとハリがある",
            "白い斑点（凍結跡）がないもの"
        ],
        storage: {
            "冷蔵": "水分を拭き取り、ラップで密閉してチルド室（当日〜翌日）",
            "冷凍": "切り身をラップして冷凍袋へ（2週間）"
        },
        sources: [
            { name: "丸松", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 18,
        name: "ホタテ",
        category: "魚",
        icon: "🐚",
        selection: [
            "透明感のある白色または淡いピンク色",
            "表面がツヤツヤしていて、しっとりしている",
            "ベタつきがないもの"
        ],
        storage: {
            "冷蔵": "水気を拭き、ラップで包んでチルド室（当日）",
            "冷凍": "重ならないように並べて冷凍（3週間）"
        },
        sources: [
            { name: "丸松", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 19,
        name: "エビ",
        category: "魚",
        icon: "🦐",
        selection: [
            "透き通った明るい色合いをしている",
            "表面がツルツルしている（ベタつきがない）",
            "頭部や足が黒く変色していない"
        ],
        storage: {
            "冷蔵": "背ワタを取り、酒洗いして水気を拭きチルド室（当日）",
            "冷凍": "下処理後、水分を拭いて冷凍（2週間）"
        },
        sources: [
            { name: "丸松", url: "https://marumatsu-ec.com/column/topic/11/" }
        ]
    },
    {
        id: 20,
        name: "メロン",
        category: "果物",
        icon: "🍈",
        selection: [
            "どっしりと重みがあるもの",
            "網目模様が全体的に均等で盛り上がっている",
            "お尻の部分が少し柔らかく、香りがする（食べ頃）"
        ],
        storage: {
            "常温": "熟すまでは常温保存。食べる2〜3時間前に冷やす",
            "冷蔵": "カットしたものは種を取り、ラップして冷蔵（2〜3日）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 21,
        name: "パイナップル",
        category: "果物",
        icon: "🍍",
        selection: [
            "葉の色が濃く、枯れていないもの",
            "お尻の方から甘い香りがするもの",
            "全体的に黄色みを帯び、ずっしり重いもの"
        ],
        storage: {
            "常温": "追熟しないので早めに食べる。新聞紙で包み冷暗所",
            "冷蔵": "葉を切り落とし、野菜室へ。カット後は密閉容器（2〜3日）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 22,
        name: "みかん・柑橘類",
        category: "果物",
        icon: "🍊",
        selection: [
            "皮のキメが細かく、凹凸が少ないもの",
            "ヘタが小さく、緑色のもの",
            "持ったときに重みがあるもの"
        ],
        storage: {
            "常温": "風通しの良い冷暗所で、カゴなどに入れて保存（1〜2週間）",
            "冷蔵": "乾燥しないよう袋に入れ野菜室（2週間〜）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 23,
        name: "さくらんぼ",
        category: "果物",
        icon: "🍒",
        selection: [
            "粒が大きく、全体が鮮やかな赤色",
            "軸（茎）が太く、鮮やかな緑色",
            "皮にハリとツヤがあるもの"
        ],
        storage: {
            "冷蔵": "温度変化に弱い。洗わずに容器に入れ野菜室（当日〜翌日）",
            "冷凍": "洗って水気を拭き、軸を取って冷凍（1ヶ月）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 24,
        name: "スイカ",
        category: "果物",
        icon: "🍉",
        selection: [
            "黒と緑の縞模様がはっきりしていて濃い",
            "ツルが緑色で付け根が窪んでいる",
            "叩くと「ポンポン」と澄んだ音がする"
        ],
        storage: {
            "常温": "丸ごとなら風通しの良い日陰（2週間程度）",
            "冷蔵": "カット後はラップをして冷蔵庫（2〜3日）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 25,
        name: "桃",
        category: "果物",
        icon: "🍑",
        selection: [
            "ふっくらと丸みがあり、左右対称のもの",
            "全体的に赤く色づき、うぶ毛が綺麗にある",
            "香りが強く、甘い匂いがするもの"
        ],
        storage: {
            "常温": "固い場合は常温で追熟。日光を避けて保存",
            "冷蔵": "柔らかくなったら食べる直前（1時間前）に冷やす"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 26,
        name: "ぶどう",
        category: "果物",
        icon: "🍇",
        selection: [
            "粒の大きさが揃っていて、皮にハリがある",
            "軸が緑色でしっかりしている",
            "表面に白い粉（ブルーム）がついている（新鮮な証拠）"
        ],
        storage: {
            "冷蔵": "洗わずに一房ずつ紙や袋で包み野菜室（3〜5日）",
            "冷凍": "洗って粒を外し、冷凍袋に入れて保存（1ヶ月）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 27,
        name: "梨・洋梨",
        category: "果物",
        icon: "🍐",
        selection: [
            "【梨】形が良く、ずっしりと重いもの",
            "【梨】皮に張りがあり、色ムラがないもの",
            "【洋梨】ふっくらしており、軸がしっかりしているもの"
        ],
        storage: {
            "冷蔵": "乾燥を防ぐため袋に入れ、野菜室（1週間）",
            "常温": "洋梨は固い場合、常温で追熟させる"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 28,
        name: "柿",
        category: "果物",
        icon: "🟠",
        selection: [
            "ヘタが果実に張り付いていて緑色のもの",
            "全体が濃いオレンジ色で均一なもの",
            "ずっしりと重みがあるもの"
        ],
        storage: {
            "常温": "固めが良ければ常温（数日）。熟すと柔らかくなる",
            "冷蔵": "ヘタを濡れたペーパーで覆い、袋に入れ野菜室（1〜2週間）"
        },
        sources: [
            { name: "東京ガス", url: "https://uchi.tokyo-gas.co.jp/topics/3659" }
        ]
    },
    {
        id: 29,
        name: "ピーマン",
        category: "野菜",
        icon: "🫑",
        selection: [
            "濃い緑色で、全体にツヤがある",
            "ヘタの切り口が新しく、変色していない",
            "持ったときに重みがあり、弾力がある"
        ],
        storage: {
            "冷蔵": "水気を拭き、ポリ袋に入れて野菜室（1週間）",
            "冷凍": "種を取り、千切りにして冷凍袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 30,
        name: "白菜",
        category: "野菜",
        icon: "🥬",
        selection: [
            "外葉が大きく、緑色が濃いもの",
            "巻きがしっかりしていて、ずっしり重い",
            "底の切り口が白く、瑞々しいもの"
        ],
        storage: {
            "冷蔵": "芯を取り、新聞紙で包み野菜室（2週間）",
            "冷凍": "ざく切りにしてそのまま冷凍袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 31,
        name: "ほうれん草",
        category: "野菜",
        icon: "🥬",
        selection: [
            "葉が濃い緑色で、肉厚なもの",
            "葉先までピンとしていて、ハリがある",
            "根元の赤みが強いもの（甘みが強い）"
        ],
        storage: {
            "冷蔵": "濡れたペーパーで根元を包み、袋に入れ立てて保存（1週間）",
            "冷凍": "固めに茹でて水気を絞り、ラップで包む（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 32,
        name: "オクラ",
        category: "野菜",
        selection: [
            "鮮やかな緑色で、うぶ毛がびっしり生えている",
            "大きすぎないもの（育ちすぎは硬い）",
            "ヘタの切り口が新しく、黒ずんでいない"
        ],
        storage: {
            "冷蔵": "乾燥に弱いので、ペーパーで包みポリ袋へ（3〜4日）",
            "冷凍": "板ずりして茹で、冷ましてから冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 33,
        name: "ブロッコリー",
        category: "野菜",
        icon: "🥦",
        selection: [
            "つぼみが小さく、密集して硬く締まっている",
            "緑色が濃く、黄色くなっていない",
            "茎の切り口が瑞々しく、スが入っていない"
        ],
        storage: {
            "冷蔵": "袋に入れ、チルド室または野菜室に立てて保存（4〜5日）",
            "冷凍": "小房に分け、固めに茹でてから冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 34,
        name: "アスパラガス",
        category: "野菜",
        selection: [
            "全体的に緑色が濃く、ハリがある",
            "穂先がしっかり締まっている",
            "切り口が乾燥しておらず、変色していない"
        ],
        storage: {
            "冷蔵": "根元を少し水に浸け、コップなどに立てて保存（1週間）",
            "冷凍": "固めに茹でて、ラップに包んで冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 35,
        name: "大葉",
        category: "野菜",
        icon: "🌿",
        selection: [
            "葉の緑色が濃く、黒ずんでいない",
            "葉先までピンとしていて、みずみずしい",
            "香りが強いもの"
        ],
        storage: {
            "冷蔵": "瓶に少量の水を入れ、軸を浸して立てて保存（2週間）",
            "冷凍": "洗って水気を拭き、刻んで冷凍容器へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/perilla-select/" }
        ]
    },
    {
        id: 36,
        name: "とうもろこし",
        category: "野菜",
        icon: "🌽",
        selection: [
            "皮の色が濃い緑色で、鮮度がある",
            "ひげ根が茶色く（熟している）、ふさふさしている",
            "実が先まで詰まっていて、ずっしり重い"
        ],
        storage: {
            "冷蔵": "鮮度が落ちるのが早い。すぐに茹でて冷蔵（2〜3日）",
            "冷凍": "茹でてからラップで包み、冷凍保存袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 37,
        name: "枝豆",
        category: "野菜",
        icon: "🫛",
        selection: [
            "実がパンパンに入っているもの",
            "うぶ毛が濃く、緑色が鮮やかなもの",
            "枝付きのほうが鮮度を保ちやすい"
        ],
        storage: {
            "冷蔵": "鮮度が命。買ったらすぐに茹でる（冷蔵2日）",
            "冷凍": "固めに茹でて、水気を切って冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 38,
        name: "大根",
        category: "野菜",
        selection: [
            "白くてハリがあり、みずみずしいもの",
            "ひげ根が少なく、まっすぐ伸びている",
            "ずっしりと重みがあるもの"
        ],
        storage: {
            "冷蔵": "葉を切り落とし、新聞紙で包んで立てて保存（1〜2週間）",
            "冷凍": "いちょう切りなどにして、保存袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 39,
        name: "れんこん",
        category: "野菜",
        selection: [
            "ふっくらと丸みがあり、太いもの",
            "クリーム色で、傷や変色が少ないもの",
            "切り口の穴が黒ずんでいないもの"
        ],
        storage: {
            "冷蔵": "濡れたペーパーで包み、ポリ袋に入れて野菜室（1週間）",
            "冷凍": "皮をむいて酢水にさらし、水気を拭いて冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 40,
        name: "ごぼう",
        category: "野菜",
        selection: [
            "太さが均一で、ひげ根が少ないもの",
            "泥付きのほうが風味や鮮度が良い",
            "柔らかすぎず、弾力があるもの"
        ],
        storage: {
            "常温": "泥付きなら新聞紙に包んで冷暗所（1ヶ月）",
            "冷蔵": "洗いごぼうはラップで包み野菜室（1週間）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 41,
        name: "舞茸",
        category: "野菜",
        icon: "🍄",
        selection: [
            "カサが肉厚で、色が濃いもの",
            "パリッとしていてハリがある",
            "軸が白くて硬く締まっている"
        ],
        storage: {
            "冷蔵": "水気を嫌うので、そのままパックかペーパーで包む（3〜4日）",
            "冷凍": "小房にほぐして冷凍袋へ（1ヶ月）。旨味が増す"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    },
    {
        id: 42,
        name: "椎茸",
        category: "野菜",
        icon: "🍄",
        selection: [
            "カサがあまり開いておらず、肉厚なもの",
            "カサの裏側が白く、ひだがきれいなもの",
            "軸が太くて短いもの"
        ],
        storage: {
            "冷蔵": "カサを裏返し（ヒダを上）、ペーパーで包んで袋（1週間）",
            "冷凍": "石づきを取り、カサと軸を分けて冷凍（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/bad-siitake/" }
        ]
    },
    {
        id: 43,
        name: "エリンギ",
        category: "野菜",
        icon: "🍄",
        selection: [
            "軸が太くて白く、弾力があるもの",
            "カサのふちが巻き込んでいて、開きすぎていない",
            "変色やぬめりがないもの"
        ],
        storage: {
            "冷蔵": "水気を嫌う。パックのままかペーパーで包む（1週間）",
            "冷凍": "使いやすい大きさに切り、冷凍袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/select-eringi/" }
        ]
    },
    {
        id: 44,
        name: "えのき茸",
        category: "野菜",
        icon: "🍄",
        selection: [
            "カサが小さく、開いていないもの",
            "全体が白く、変色していないもの",
            "袋に水滴がついておらず、締まっているもの"
        ],
        storage: {
            "冷蔵": "水気を嫌う。ペーパーで包んで野菜室（3〜4日）",
            "冷凍": "石づきを取り、ほぐして冷凍袋へ（1ヶ月）"
        },
        sources: [
            { name: "てつブログ", url: "https://tetsublog.work/category/%e9%87%8e%e8%8f%9c%e3%81%ae%e9%81%b8%e3%81%b3%e6%96%b9/" }
        ]
    }
];
// TODO: 今後さらに種類を追加可能

const SEARCH_INPUT = document.getElementById('searchInput');
const FOOD_GRID = document.getElementById('foodGrid');
const CATEGORY_TABS = document.getElementById('categoryTabs');
const DETAIL_MODAL = document.getElementById('detailModal');
const CLOSE_MODAL = document.getElementById('closeModal');

let currentCategory = 'all';

function renderCards(filter = '') {
    FOOD_GRID.textContent = '';
    const filtered = foodData.filter(food => {
        const matchesSearch = food.name.includes(filter);
        const matchesCategory = currentCategory === 'all' || food.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    filtered.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-icon">${food.icon || ''}</span>
            <span class="card-name">${food.name}</span>
        `;
        card.onclick = () => showDetail(food);
        FOOD_GRID.appendChild(card);
    });
}

function showDetail(food) {
    document.getElementById('foodTitle').innerText = `${food.icon || ''} ${food.name}`;

    // 見分け方
    const selectInfo = document.getElementById('selectInfo');
    selectInfo.innerHTML = food.selection.map(item => `
        <div class="info-item">
            <span class="badge bg-select">Check</span> ${item}
        </div>
    `).join('');

    // 保存方法
    const storeInfo = document.getElementById('storeInfo');
    storeInfo.innerHTML = Object.entries(food.storage).map(([type, method]) => `
        <div class="info-item">
            <span class="badge bg-store">${type}</span> ${method}
        </div>
    `).join('');

    // 出典
    const sourceLinks = document.getElementById('sourceLinks');
    sourceLinks.innerHTML = '出典：<br>' + food.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`).join(' | ');

    DETAIL_MODAL.style.display = 'flex';
}

// Event Listeners
SEARCH_INPUT.oninput = (e) => renderCards(e.target.value);

CATEGORY_TABS.onclick = (e) => {
    if (e.target.classList.contains('tab')) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderCards(SEARCH_INPUT.value);
    }
};

CLOSE_MODAL.onclick = () => {
    DETAIL_MODAL.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target === DETAIL_MODAL) {
        DETAIL_MODAL.style.display = 'none';
    }
};

// Initial Render
renderCards();
