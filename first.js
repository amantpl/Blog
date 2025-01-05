const backgroundImages = [
    "url('img/b4.png')",
    "url('img/b1.png')",
    "url('img/b2.png')",
    "url('img/b3.png')",
    "url('img/b5.png')",
    "url('img/b6.png')",
    "url('img/b7.png')",
    "url('img/b8.png')",
    "url('img/b9.png')",
    "url('img/b10.png')",
    "url('img/b11.png')",
    "url('img/b12.png')"
];

const main = document.getElementById('main');

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    main.style.backgroundImage = backgroundImages[randomIndex];
    main.style.backgroundRepeat = 'no-repeat';
    main.style.backgroundSize = 'cover';
    main.style.backgroundPosition = 'center center';
    main.style.backgroundAttachment = 'fixed';
}

// Set the initial background image when the website loads
changeBackgroundImage();
setInterval(changeBackgroundImage, 5000);
