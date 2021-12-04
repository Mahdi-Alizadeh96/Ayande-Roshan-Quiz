const parvinEtesami = [
    "یکی نظر به گل افکند و دیگری بگیاه   ز خوب و زشت چه منظور؟ هر که را نظریست",
    "برون شدن ز خرابات زندگی هشیار   ز خود نرفتن و پیمانه‌ای نپیمودن",
    "وقت سحر، به آینه‌ای گفت شانه‌ای   کاوخ! فلک چه کجرو و گیتی چه تند خوست",
    "ناسازگاری از فلک آمد، وگرنه من   با خاک خوی کردم و با خار ساختم",
    "منظور و مقصدی نشناسد به جز جفا   من با یکی نظاره، جهان را شناختم",
    "روان پاک را آلوده مپسند   حجاب دل مکن روی و ریا را",
    "تو نیکی کن بمسکین و تهیدست   که نیکی، خود سبب گردد دعا را",
    "لاله‌ای با نرگس پژمرده گفت   بین که ما رخساره چون افروختیم",
    "چو غنچه و گل دوشینه صبحدم فرسود   من و تو جای شگفت است گر نفرسائیم",
    "هزار بوته و برگ ار نهان کند ما را   به چشم خیرهٔ گلچین دهر پیدائیم"
]


export default function poetry(verse) {
    let result = [];

    const finalCharecter = verse.slice(-1)[0];
    // 3 space must be between each hemistich
    const space = '   ';
    const find = verse.search(space);
    const separation = [verse[find - 1] , finalCharecter];

    // <query in poetryHub
    let poetryHub = [];

    parvinEtesami.map(item => {
        poetryHub.push([item[0] , item])
    })
    // query in poetryHub>

    // <Find best suggestion for verse
        poetryHub.forEach(item => {
            if(item[0] === separation[1]) {
                result.push(item[1]);
            }
            if(item[0] === separation[0]) {
                result.push(item[1]);
            }
        })
    // Find best suggestion for verse>

    return result[0];
}


// poetry("قضا، نیامده ما را ز باغ خواهد برد   نه میرویم بسودای خود، نه می‌آئیم")

// model ^^^ (((3 spaces)))
