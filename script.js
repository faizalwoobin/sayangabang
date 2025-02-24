const quotes = {
    happy: [
        { text: "Sayang, your happiness is the most beautiful thing in my world. Seing you smile makes my heart melt every single time ❤️", image: "images/happy1.jpg" },
        { text: "Princess, your laughter is my favourite song. If I could, I'd replay it forever and ever 🥰", image: "images/happy2.jpg" },
        { text: "Hunny munchkin, you light up my world in ways I never knew were possible. Just being around you makes everything feel right 😘", image: "images/happy3.jpg" },
        { text: "Baby, you are like a little ball of sunshine, warming up even the coldest of days. I love basking in your glow 😍", image: "images/happy4.jpg" },
        { text: "Sayang, you have no idea how much joy you bring into my life. I just want to hold you and keep you safe in my arms forever ❤️", image: "images/happy1.jpg" },
        { text: "Princess, your happiness is my mission. If I could, I’d fill your days with endless love, laughter, and cuddles 🩷", image: "images/happy2.jpg" },
        { text: "Hunny munchkin, do you know how adorable you are when you’re happy? It’s like magic, and I can’t stop falling for you 😍", image: "images/happy3.jpg" },
        { text: "Baby, your smile is my favorite sight, and your happiness is my greatest achievement 😘", image: "images/happy4.jpg" },
        { text: "Sayang, if I could bottle up your happiness, I’d carry it with me everywhere just to remind myself of how lucky I am 💕", image: "images/happy1.jpg" },
        { text: "Princess, you make the world brighter just by being you. I love you more than words can ever say ❤️", image: "images/happy2.jpg" }
    ],
    angry: [
        { text: "Sayang, it’s okay to be angry. No matter what, I’ll always be here for you, holding your hand through it all ❤️", image: "images/angry1.jpg" },
        { text: "Princess, take a deep breath. Let it all out. I’m not going anywhere, and I’ll always be your safe place ❤️", image: "images/angry2.jpg" },
        { text: "Hunny munchkin, I know you’re upset, but I love you endlessly, and I’ll do anything to make you feel better ❤️", image: "images/angry3.jpg" },
        { text: "Baby, let your frustration out, but don’t forget that you’re never alone. I’ll always stand by your side ❤️", image: "images/angry4.jpg" },
        { text: "Sayang, even in your angriest moments, I still adore every bit of you. You are my everything, always ❤️", image: "images/angry1.jpg" },
        { text: "Princess, let’s take a moment together. No words, just me holding you until you feel okay again ❤️", image: "images/angry2.jpg" },
        { text: "Hunny munchkin, if I could, I’d take away all your stress and replace it with love and warmth ❤️", image: "images/angry3.jpg" },
        { text: "Baby, you don’t have to fight battles alone. I’m right here, ready to stand with you, no matter what ❤️", image: "images/angry4.jpg" },
        { text: "Sayang, your feelings are valid, and I respect every single one of them. Just know that I’ll always be here to listen ❤️", image: "images/angry1.jpg" },
        { text: "Princess, even in frustration, I see the love in your eyes. And I want you to know, my love for you never changes ❤️", image: "images/angry2.jpg" }
    ],
    sad: [
        { text: "Sayang, come here, let me hold you. You don’t have to carry this sadness alone, I’m always here for you 💕", image: "images/sad1.jpg" },
        { text: "Princess, even on your hardest days, I see the beauty and strength in you. You are never alone, my love 💕", image: "images/sad2.jpg" },
        { text: "Hunny munchkin, if I could take away your sadness and replace it with happiness, I would do it in a heartbeat 💕", image: "images/sad3.jpg" },
        { text: "Baby, let me be your shoulder to lean on. You mean the world to me, and I will always be here to lift you up 💕", image: "images/sad4.jpg" },
        { text: "Sayang, I know it’s tough right now, but please remember that you are so incredibly loved, cherished, and valued 💕", image: "images/sad1.jpg" },
        { text: "Princess, your heart is too beautiful to be weighed down with sadness. Let me hold you and remind you how loved you are 💕", image: "images/sad2.jpg" },
        { text: "Hunny munchkin, don’t be afraid to cry. I’ll wipe away your tears and remind you that brighter days are ahead 💕", image: "images/sad3.jpg" },
        { text: "Baby, sadness doesn’t define you. You are my beautiful, strong love, and I will always stand by your side 💕", image: "images/sad4.jpg" },
        { text: "Sayang, if you need to rest, rest. If you need to cry, cry. No matter what, I’ll be here, loving you endlessly 💕", image: "images/sad1.jpg" },
        { text: "Princess, I may not be able to fix everything, but I promise to always be your comfort and safe place 💕", image: "images/sad2.jpg" }
    ],
    unmotivated: [
        { text: "YSayang, you are capable, strong, and absolutely amazing. Take your time, and when you’re ready, I’ll be right here cheering for you 🌸", image: "images/unmotivated1.jpg" },
        { text: "Princess, even on your lowest days, I still see the most incredible person in you. I believe in you more than anything 🌸", image: "images/unmotivated2.jpg" },
        { text: "Hunny munchkin, rest if you need to, but never forget that you are destined for great things. I’ll always believe in you 🌸", image: "images/unmotivated3.jpg" },
        { text: "Baby, it’s okay to take a break. Even the strongest hearts need time to recharge. I love you always 🌸", image: "images/unmotivated4.jpg" },
        { text: "Sayang, don’t let doubt steal your light. You are meant to shine, and I’ll always remind you of that 🌸", image: "images/unmotivated1.jpg" },
        { text: "Princess, I know today feels heavy, but even the smallest step forward is still progress. I’m so proud of you 🌸", image: "images/unmotivated2.jpg" },
        { text: "Hunny munchkin, take a deep breath. You don’t have to have it all figured out today. Just know that you are loved endlessly 🌸", image: "images/unmotivated3.jpg" },
        { text: "Baby, the world is brighter because of you. Even on days you feel stuck, you are still my shining star 🌸", image: "images/unmotivated4.jpg" },
        { text: "Sayang, don’t be too hard on yourself. You’re doing better than you think, and I’ll always be proud of you 🌸", image: "images/unmotivated1.jpg" },
        { text: "Princess, no matter what, I believe in you. Even when you don’t see it, I see how strong and amazing you are 🌸", image: "images/unmotivated2.jpg" }
    ],
    tired: [
        { text: "Sayang, you’ve been trying so hard. Rest, my love, and let me take care of you for a while 💖", image: "images/tired1.jpg" },
        { text: "Princess, your body and heart deserve kindness too. Sleep well, and know that I love you endlessly 💖", image: "images/tired2.jpg" },
        { text: "Hunny munchkin, close your eyes and let go of today’s worries. I’ll always be here when you wake up 💖", image: "images/tired3.jpg" },
        { text: "Baby, you don’t have to do everything at once. Take it easy, and I’ll hold you through it al 💖", image: "images/tired4.jpg" },
        { text: "Sayang, even the strongest people need to rest. Recharge, my love, and I’ll be here when you’re ready 💖", image: "images/tired1.jpg" },
        { text: "Princess, wrap yourself in warmth and love. You deserve peace, and I’ll always give it to you 💖", image: "images/tired2.jpg" },
        { text: "Hunny munchkin, sleep well knowing that you are deeply loved and cherished, today and always 💖", image: "images/tired3.jpg" },
        { text: "Baby, you’ve done enough for today. Rest easy, and let me take care of you now 💖", image: "images/tired4.jpg" },
        { text: "Sayang, I hope your dreams are filled with love and comfort. Sleep peacefully, my love 💖", image: "images/tired1.jpg" },
        { text: "Princess, may your rest be deep, your heart be light, and your dreams be sweet. I love you 💖", image: "images/tired2.jpg" }
    ]
};

function showQuotes(feeling) {
    document.getElementById("feelings-container").style.display = "none";
    let quoteContainer = document.getElementById("quote-container");

    let randomIndex = Math.floor(Math.random() * quotes[feeling].length);
    let selectedQuote = quotes[feeling][randomIndex];

    document.getElementById("quote-image").src = selectedQuote.image;
    document.getElementById("quote-text").innerText = selectedQuote.text;

    // Fix: Smooth transition effect
    quoteContainer.style.display = "block";
    setTimeout(() => {
        quoteContainer.style.opacity = 1;
    }, 50);
}

function resetPage() {
    let quoteContainer = document.getElementById("quote-container");

    // Fix: Smooth fade-out transition before hiding
    quoteContainer.style.opacity = 0;
    setTimeout(() => {
        quoteContainer.style.display = "none";
        document.getElementById("feelings-container").style.display = "block";
    }, 500);
}
