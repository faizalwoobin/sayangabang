const quotes = {
    happy: [
        { text: "You're like a little ball of sunshine ☀️", image: "images/happy1.jpg" },
        { text: "Your smile is my favorite thing in the world 😊", image: "images/happy2.jpg" }
    ],
    angry: [
        { text: "I’m here for you, always. Even on tough days ❤️", image: "images/angry1.jpg" },
        { text: "Take a deep breath, my love. You got this 💪", image: "images/angry2.jpg" }
    ],
    sad: [
        { text: "You are never alone. I'm always here 💕", image: "images/sad1.jpg" },
        { text: "You are loved beyond words 💖", image: "images/sad2.jpg" }
    ],
    unmotivated: [
        { text: "You are capable of amazing things 💪", image: "images/unmotivated1.jpg" },
        { text: "One step at a time, my love 🌸", image: "images/unmotivated2.jpg" }
    ],
    tired: [
        { text: "Take a deep breath and rest, my love 🌙", image: "images/tired1.jpg" },
        { text: "You deserve rest and kindness 💖", image: "images/tired2.jpg" },
        { text: "Close your eyes, and let go for now 💕", image: "images/tired3.jpg" },
        { text: "Rest, recharge, and shine again ✨", image: "images/tired4.jpg" },
        { text: "I’ll be right here when you wake up ❤️", image: "images/tired5.jpg" },
        { text: "Sleep tight, my love. You’ve done enough for today 💤", image: "images/tired6.jpg" },
        { text: "It’s okay to slow down. You deserve it 🥰", image: "images/tired7.jpg" },
        { text: "Even when tired, you are still so precious 💖", image: "images/tired8.jpg" },
        { text: "Tomorrow is a new day, full of love and rest 💫", image: "images/tired9.jpg" },
        { text: "Sending you the softest hugs to help you relax 🤗", image: "images/tired10.jpg" }
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
