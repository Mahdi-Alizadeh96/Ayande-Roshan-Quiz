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


function poetry(verse) {
    
    // <initial set

        const space = '   '; // 3 space must be between each hemistich
        const find = verse.search(space);
        const separateVerse = {
            firstCheck : verse.trim().slice(-1)[0],
            secondCheck : verse.trim()[find - 1]
        }
        
    // initial set>

    // <query in poetryHub

        let result = "شعری برای مشاعره یافت نشد.";

        parvinEtesami.map(item => {
            if (item[0] === separateVerse.firstCheck) result = item;
            if (item[0] === separateVerse.secondCheck) result = item;
        });

    // query in poetryHub>

    return result

};

console.log(poetry("ز سر غیب کس آگاه نیست قصه مخوان   کدام محرم دل ره در این حرم دارد"));

// model ^^^ (((3 spaces)))