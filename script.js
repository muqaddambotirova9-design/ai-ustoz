// ======================================
// AI USTOZ
// JAVASCRIPT
// ======================================


// ======================================
// 1. TIZIMNI BOSHLASH
// ======================================

function startAI() {

    const mainScreen =
        document.querySelector(".main-screen");

    mainScreen.innerHTML =

        '<div class="terminal">' +

            '<div class="terminal-top">' +

                '<span class="terminal-dot red"></span>' +
                '<span class="terminal-dot yellow"></span>' +
                '<span class="terminal-dot green"></span>' +

                '<span class="terminal-title">' +
                    'AI XOTIRA TIZIMI' +
                '</span>' +

            '</div>' +

            '<div class="terminal-body">' +

                '<div id="terminalText"></div>' +

                '<div id="readyText" class="ready hidden">' +
                    'TIZIM TAYYOR ✓' +
                '</div>' +

                '<button id="continueButton" class="continue-button hidden">' +
                    'DAVOM ETISH →' +
                '</button>' +

            '</div>' +

        '</div>';

    runTerminal();
}


// ======================================
// 2. TERMINAL ANIMATSIYASI
// ======================================

function runTerminal() {

    const terminal =
        document.getElementById("terminalText");

    const lines = [

        "> AI markaziga ulanilmoqda...",

        "> Xavfsiz aloqa o‘rnatilmoqda...",

        "> Til ma’lumotlar bazasi yuklanmoqda...",

        "> Talabalar xotiralari o‘qilmoqda...",

        "> Tabiiy til qayta ishlanmoqda...",

        "> Tabiiy til tizimi: TAYYOR ✓",

        "> His-tuyg‘ular tahlili: TAYYOR ✓",

        "> Ovoz tizimi: TAYYOR ✓",

        "> Xotira tizimi: TAYYOR ✓",

        "> Ustozlarga maxsus tabrik tayyorlanmoqda...",

        "> Barcha tizimlar muvaffaqiyatli ishga tushdi ✓"

    ];

    let index = 0;

    function nextLine() {

        if (index >= lines.length) {

            showReady();

            return;
        }

        const line =
            document.createElement("p");

        line.textContent =
            lines[index];

        line.className =
            "terminal-line";

        terminal.appendChild(line);

        index++;

        setTimeout(
            nextLine,
            600
        );
    }

    nextLine();
}


// ======================================
// 3. TIZIM TAYYOR
// ======================================

function showReady() {

    const ready =
        document.getElementById("readyText");

    const button =
        document.getElementById("continueButton");

    setTimeout(
        function () {

            ready.classList.remove(
                "hidden"
            );

        },
        500
    );

    setTimeout(
        function () {

            button.classList.remove(
                "hidden"
            );

            button.addEventListener(
                "click",
                openAIMessage
            );

        },
        1500
    );
}


// ======================================
// 4. AI TABRIK OYNASI
// ======================================

function openAIMessage() {

    const mainScreen =
        document.querySelector(".main-screen");

    mainScreen.innerHTML =

        '<div class="ai-message">' +

            '<div class="ai-message-icon">' +
                'AI' +
            '</div>' +

            '<div id="aiStatus" class="ai-message-status">' +
                '● AI OVOZ TIZIMI ISHLAMOQDA' +
            '</div>' +

            '<h2>' +
                'USTOZLARGA XABAR' +
            '</h2>' +

            '<p id="aiText">' +
                'Siz uchun maxsus xabar tayyor...' +
            '</p>' +

            // OVOZ BOSHQARUVLARI
            '<div class="voice-controls">' +

                '<button id="voiceButton">' +
                    '🎙 XABARNI ESHITISH' +
                '</button>' +

                '<div class="audio-buttons">' +'<button id="playButton">' +
                        '▶️ Ijro etish' +
                    '</button>' +

                    '<button id="pauseButton">' +
                        '⏸ Pauza' +
                    '</button>' +

                    '<button id="volumeDown">' +
                        '🔉 Ovoz −' +
                    '</button>' +

                    '<button id="volumeUp">' +
                        '🔊 Ovoz +' +
                    '</button>' +

                    '<button id="muteButton">' +
                        '🔇 Ovoz o‘chirish' +
                    '</button>' +

                '</div>' +

            '</div>' +

            // XOTIRA ARXIVI
            '<button id="archiveButton" class="archive-button">' +
                '🧠 AI XOTIRALAR ARXIVI' +
            '</button>' +

        '</div>';

    const voiceButton =
        document.getElementById("voiceButton");

    voiceButton.addEventListener(
        "click",
        speakTeacherMessage
    );

    document.getElementById("playButton")
        .addEventListener(
            "click",
            playAudio
        );

    document.getElementById("pauseButton")
        .addEventListener(
            "click",
            pauseAudio
        );

    document.getElementById("volumeDown")
        .addEventListener(
            "click",
            volumeDown
        );

    document.getElementById("volumeUp")
        .addEventListener(
            "click",
            volumeUp
        );

    document.getElementById("muteButton")
        .addEventListener(
            "click",
            muteAudio
        );

    document.getElementById("archiveButton")
        .addEventListener(
            "click",
            openMemoryArchive
        );
}


// ======================================
// 5. AI OVOZ
// ======================================

let teacherAudio = null;


const messages = [

    "Assalomu alaykum, aziz va hurmatli ustozlar...",

    "Bugun sizga oddiy tabrik emas... balki kelajakdan yuborilgan kichik bir xabar keldi.",

    "Bir lahza tasavvur qiling...",

    "Oradan yillar o'tdi. Texnologiyalar rivojlandi. Sun'iy intellekt hayotimizning ajralmas qismiga aylandi.",

    "Ammo bir narsa o'zgarmadi...",

    "Ustozning shogird qalbiga qoldirgan izi.",

    "Siz bizga faqat bilim bermadingiz.",

    "Siz bizga izlanishni... savol berishni... xato qilishdan qo'rqmaslikni... va eng muhimi — o'zimizga ishonishni o'rgatdingiz.",

    "Bugun biz sun'iy intellektni o'rganayotgan bo'lsak... kelajak texnologiyalarini yaratishga intilayotgan bo'lsak...",

    "Buning ortida, albatta... bizga yo'l ko'rsatgan ustozlarimiz bor.",

    "Sizning har bir darsingiz... har bir nasihatingiz... va bizga bildirgan ishonchingiz uchun... chin qalbimizdan rahmat.",

    "Aziz ustozlar!",

    "Sizni birinchi oktabr — Ustoz va murabbiylar kuni bilan chin qalbimizdan tabriklaymiz!",

    "Sizga mustahkam sog'lik... oilaviy xotirjamlik... cheksiz ilhom... va shogirdlaringizning har bir yutug'idan faxrlanib yashash baxtini tilaymiz.",

    "Siz bergan bilim... bizning kelajagimiz.",

    "Ustozlar bayramingiz muborak bo'lsin!",

    "Hurmat bilan... Kompyuter lingvistikasi talabalari."

];


function speakTeacherMessage() {

    const textElement =
        document.getElementById("aiText");

    const statusElement =
        document.getElementById("aiStatus");

    const iconElement =
        document.querySelector(".ai-message-icon");

    if (teacherAudio) {

        teacherAudio.pause();
        teacherAudio.currentTime = 0;

    }

    textElement.textContent = "";

    teacherAudio = new Audio(
        "audio/ElevenLabs_2026-09-27T10_51_00_yosh ayol_gen_sp100_s50_sb75_v3.mp3"
    );

    teacherAudio.volume = 1;

    statusElement.textContent =
        "● AI OVOZ UZATILMOQDA";

    iconElement.classList.add(
        "speaking"
    );

    teacherAudio.addEventListener(
        "timeupdate",
        function () {if (
                !teacherAudio.duration ||
                isNaN(teacherAudio.duration)
            ) {
                return;
            }

            const progress =
                teacherAudio.currentTime /
                teacherAudio.duration;

            let index =
                Math.floor(
                    progress * messages.length
                );

            if (
                index >= messages.length
            ) {
                index =
                    messages.length - 1;
            }

            textElement.textContent =
                messages[index];

        }
    );

    teacherAudio.addEventListener(
        "ended",
        function () {

            textElement.textContent =
                messages[messages.length - 1];

            statusElement.textContent =
                "● AI OVOZ TIZIMI TAYYOR";

            iconElement.classList.remove(
                "speaking"
            );

        }
    );

    teacherAudio.play()
        .catch(
            function (error) {

                console.log(
                    "Ovoz ishga tushmadi:",
                    error
                );

            }
        );
}


// ======================================
// 6. IJRO ETISH
// ======================================

function playAudio() {

    if (!teacherAudio) {

        speakTeacherMessage();

        return;
    }

    teacherAudio.play();

    document.getElementById("aiStatus")
        .textContent =
        "● AI OVOZ UZATILMOQDA";

    document.querySelector(
        ".ai-message-icon"
    ).classList.add("speaking");
}


// ======================================
// 7. PAUZA
// ======================================

function pauseAudio() {

    if (!teacherAudio) {
        return;
    }

    teacherAudio.pause();

    document.getElementById("aiStatus")
        .textContent =
        "● OVOZ PAUZADA";

    document.querySelector(
        ".ai-message-icon"
    ).classList.remove("speaking");
}


// ======================================
// 8. OVOZNI PASAYTIRISH
// ======================================

function volumeDown() {

    if (!teacherAudio) {
        return;
    }

    teacherAudio.volume =
        Math.max(
            0,
            teacherAudio.volume - 0.1
        );
}


// ======================================
// 9. OVOZNI BALANDLATISH
// ======================================

function volumeUp() {

    if (!teacherAudio) {
        return;
    }

    teacherAudio.volume =
        Math.min(
            1,
            teacherAudio.volume + 0.1
        );

    teacherAudio.muted = false;
}


// ======================================
// 10. OVOZNI O‘CHIRISH
// ======================================

function muteAudio() {

    if (!teacherAudio) {
        return;
    }

    teacherAudio.muted =
        !teacherAudio.muted;

    const button =
        document.getElementById("muteButton");

    if (teacherAudio.muted) {

        button.textContent =
            "🔊 Ovozni yoqish";

    } else {

        button.textContent =
            "🔇 Ovoz o‘chirish";

    }
}


// ======================================
// 11. AI XOTIRALAR ARXIVI
// ======================================

function openMemoryArchive() {

    const mainScreen =
        document.querySelector(".main-screen");

    mainScreen.innerHTML =

        '<div class="memory-archive">' +

            '<div class="archive-header">' +

                '<div class="archive-icon">' +
                    'AI' +
                '</div>' +

                '<div>' +

                    '<div class="archive-status">' +
                        '● XOTIRA TIZIMI ISHLAMOQDA' +
                    '</div>' +

                    '<h2>' +
                        'AI XOTIRALAR ARXIVI' +
                    '</h2>' +

                '</div>' +

            '</div>' +

            '<p class="archive-intro">' +
                'Ustozlarimizga oid qadrli xotiralar raqamli arxivda saqlanmoqda...' +
            '</p>' +

            '<div class="memory-list">' +

                '<div class="memory-card">' +
                    '<span class="memory-number">01</span>' +
                    '<div>' +
                        '<h3>USTOZNING BIRINCHI DARSI</h3>' +
                        '<p>Ilk bilimlar, ilk savollar va katta orzular boshlangan kun.</p>' +
                    '</div>' +
                '</div>' +

                '<div class="memory-card">' +
                    '<span class="memory-number">02</span>' +
                    '<div>' +
                        '<h3>BIRINCHI ILHOM</h3>' +
                        '<p>Ustozning birgina so‘zi kelajakdagi katta maqsadga sabab bo‘lgan.</p>' +
                    '</div>' +
                '</div>' +

                '<div class="memory-card">' +
                    '<span class="memory-number">03</span>' +
                    '<div>' +
                        '<h3>SHOGIRD YUTUG‘I</h3>' +
                        '<p>Bugungi yutuqlar ortida kechagi ustozlarning mehnati bor.</p>' +
                    '</div>' +
                '</div>' +

                '<div class="memory-card">' +
                    '<span class="memory-number">04</span>' +
                    '<div>' +
                        '<h3>KELAJAKKA QOLDIRILGAN IZ</h3>' +
                        '<p>Ustoz bergan bilim vaqt o‘tishi bilan emas, avlodlar bilan yashaydi.</p>' +
                    '</div>' +
                '</div>' +

            '</div>' +

            '<div class="archive-footer">' +
                'XOTIRA HOLATI: <span>DOIMIY</span>' +
            '</div>' +

            '<button id="finalButton" class="final-button">' +
                '✨ YAKUNIY TABRIK' +
            '</button>' +

            '<button id="backButton" class="back-button">' +
                '← ORTGA QAYTISH' +
            '</button>' +

        '</div>';

    document.getElementById("finalButton")
        .addEventListener(
            "click",
            openFinalMessage
        );

    document.getElementById("backButton")
        .addEventListener(
            "click",
            openAIMessage
        );
}// ======================================
// 12. YAKUNIY TABRIK
// ======================================

function openFinalMessage() {

    const mainScreen =
        document.querySelector(".main-screen");

    mainScreen.innerHTML =

        '<div class="final-message">' +

            '<div class="final-stars">' +
                '✦　✧　✦' +
            '</div>' +

            '<div class="final-icon">' +
                '🎓' +
            '</div>' +

            '<p class="final-label">' +
                'KOMPYUTER LINGVISTIKASI TALABALARIDAN' +
            '</p>' +

            '<h1>' +
                'AZIZ USTOZLAR!' +
            '</h1>' +

            '<div class="final-line"></div>' +

            '<p class="final-text">' +

                'Siz bizga faqat bilim emas, ' +
                'balki orzu qilishni, izlanishni, ' +
                'savol berishni va har bir qiyinchilikdan ' +
                'qo‘rqmasdan oldinga intilishni o‘rgatdingiz.' +

                '<br><br>' +

                'Bugun biz kelajak sari qadam tashlayotgan ' +
                'bo‘lsak, bu yo‘lda bizga yo‘l ko‘rsatgan ' +
                'ustozlarimizning o‘rni beqiyos.' +

                '<br><br>' +

                'Har bir bergan bilimingiz, ' +
                'har bir samimiy so‘zingiz va ' +
                'bizga bildirgan ishonchingiz uchun ' +
                'chin qalbimizdan minnatdormiz.' +

                '<br><br>' +

                'Sizning mehnatingiz — bizning kelajagimiz. ' +
                'Sizning bergan bilimingiz esa ' +
                'qalbimizda abadiy yashaydi.' +

            '</p>' +

            '<div class="final-wish">' +

                '✨ USTOZ VA MURABBIYLAR KUNINGIZ MUBORAK BO‘LSIN! ✨' +

            '</div>' +

            '<p class="final-signature">' +
                'Hurmat va minnatdorlik bilan,' +
                '<br>' +
                '<strong>Kompyuter lingvistikasi talabalari</strong>' +
            '</p>' +

            '<button id="homeButton" class="home-button">' +
                '⌂ BOSHLANG‘ICH SAHIFAGA QAYTISH' +
            '</button>' +

        '</div>';


    document.getElementById("homeButton")
        .addEventListener(
            "click",
            returnHome
        );
}


// ======================================
// 13. BOSHLANG‘ICH SAHIFAGA QAYTISH
// ======================================

function returnHome() {

    location.reload();

}