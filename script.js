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
    FOOD_GRID.innerHTML = '';
    const filtered = foodData.filter(food => {
        const matchesSearch = food.name.includes(filter);
        const matchesCategory = currentCategory === 'all' || food.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    filtered.forEach(food => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-icon">${food.icon}</span>
            <span class="card-name">${food.name}</span>
        `;
        card.onclick = () => showDetail(food);
        FOOD_GRID.appendChild(card);
    });
}

function showDetail(food) {
    document.getElementById('foodTitle').innerText = `${food.icon} ${food.name}`;

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
    sourceLinks.innerHTML = '出典：<br>' + food.sources.map(s => `<a href="${s.url}" target="_blank">${s.name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`).join(' | ');

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
