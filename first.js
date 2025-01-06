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

const navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' from all links and add it to the clicked one
function setActiveLink(event) {
    // Remove 'active' from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add 'active' to the clicked link
    event.currentTarget.classList.add('active');
}

// Attach event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});


let scrollcontainer=document.querySelector(`.post-wrapper`);
let backbtn=document.querySelector(`.prev`);
let nextbtn=document.querySelector(`.next`);


scrollcontainer.addEventListener(`wheel`,(event)=>{
    event.preventDefault();
    scrollcontainer.scrollLeft+=event.deltaY;
    scrollcontainer.style.scrollBehavior=`auto`;

})

nextbtn.addEventListener(`click`,()=>{
    scrollcontainer.style.scrollBehavior=`smooth`;
    scrollcontainer.scrollLeft+=scrollcontainer.offsetWidth;
});

backbtn.addEventListener(`click`,()=>{
    scrollcontainer.style.scrollBehavior=`smooth`;
    scrollcontainer.scrollLeft-=scrollcontainer.offsetWidth;
});


document.addEventListener("DOMContentLoaded", function () {
    var bar = document.getElementById("bar");
    var navbar = document.getElementById("navbar");
    var close = document.getElementById("close");

    if (bar) {
        bar.addEventListener("click", function () {
            navbar.classList.add("active"); // Show the navigation
            bar.style.display = 'none'; // Hide the hamburger menu
        });
    }

    if (close) {
        close.addEventListener("click", function () {
            navbar.classList.remove("active"); // Hide the navigation
            bar.style.display = 'block'; // Show the hamburger menu
        });
    }
});

