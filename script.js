document.addEventListener('DOMContentLoaded', function () {
    // Quotes Transition
    const quotes = [
        "More actions, less words.",
        "A true love story never ends.",
        "You are the source of my joy, the center of my world, and the whole of my heart.",
        "So, I love you because the entire universe conspired to help me find you.",
        "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
        "Women are meant to be loved, not to be understood.",
        "Love is something sent from heaven to worry the hell out of you.",
        "You open your heart knowing that there’s a chance it may be broken one day...",
        "The best thing to hold onto in life is each other.",
        "Love is an irresistible desire to be irresistibly desired.",
        "Wewe ndo tufaha ya macha yangu.",
        "I miss us every day.",
        "I love your mind, your smile, your eyes, your heart...",
        "Life is a series of changes and all I hope for is I am changing for the better.",
        "I MISS OUR CUDDLES.",
        "I MISS OUR KISSES.",
        "I MISS YOUR TOUCH.",
        "NAKUPENDA KAMA SUKARI NA NAKUAMBIA BABY SI SIRI.",
        "You are the BESTEST."
    ];

    let index = 0;
    const quoteElement = document.getElementById("quote");

    function showQuote() {
        quoteElement.innerHTML = `“${quotes[index]}”`;
        index = (index + 1) % quotes.length;
    }

    setInterval(showQuote, 8000); // Change quote every 8 seconds

    showQuote();

    // Shuffling Collage Images
    const collageImages = [
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
        'images/photo4.jpg',
        'images/photo5.jpg',
        'images/photo6.jpg',
        'images/photo7.jpg',
        'images/photo8.jpg',
        'images/photo9.jpg',
        'images/photo10.jpg',
        'images/photo11.jpg',
        'images/photo12.jpg',
        'images/photo13.jpg',
        'images/photo14.jpg',
        'images/photo15.jpg',
        'images/photo16.jpg',
        'images/photo17.jpg',
        'images/photo18.jpg',
        'images/photo19.jpg',
        'images/photo20.jpg',
        'images/photo21.jpg',
        'images/photo22.jpg',
        'images/photo23.jpg',
        'images/photo24.jpg',
        'images/photo25.jpg',
        'images/photo26.jpg'
    ];

    const collage = document.querySelectorAll('.photo-collage img');

    function shufflePhotos() {
        collage.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = collageImages[Math.floor(Math.random() * collageImages.length)];
                    img.style.opacity = '1';
                }, 1000); // Short delay to ensure opacity transition
            }, index * 1000); // Stagger the image changes by 1 second
        });
    }

    setInterval(shufflePhotos, 9000); // Shuffle every 9 seconds
});
