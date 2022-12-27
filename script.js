const listPhoto = [
    "./public/img/choupi1.jpeg",
    "./public/img/choupi2.jpeg",
    "./public/img/choupi3.jpeg",
    "./public/img/choupi4.jpeg"
];

const btnNext = document.querySelector(".fa-circle-chevron-right");
const btnPrevious = document.querySelector(".fa-circle-chevron-left");
const btnPause = document.querySelector(".fa-pause");
const btnPlay = document.querySelector(".fa-play");
let img = document.querySelector(".player__picture > img");
let imgSrc = document.querySelector("img").getAttribute("src");
let arrayPhotoIndex = listPhoto.indexOf(imgSrc);
let interval = "";

const imgTiming = {
    duration: 1000
};
const imgShowsUp = [{ opacity: 0 }, { opacity: 1 }];

const next = function () {
    if (arrayPhotoIndex === listPhoto.length - 1) {
        arrayPhotoIndex = 0;
        img.setAttribute("src", listPhoto[arrayPhotoIndex]);
    } else {
        arrayPhotoIndex++;
        console.log(arrayPhotoIndex);
        img.setAttribute("src", listPhoto[arrayPhotoIndex]);
    }
    document.getElementById("photo").animate(imgShowsUp, imgTiming);
};

const previous = () => {
    if (arrayPhotoIndex === 0) {
        arrayPhotoIndex = listPhoto.length - 1;
        img.setAttribute("src", listPhoto[arrayPhotoIndex]);
    } else {
        arrayPhotoIndex--;
        console.log(arrayPhotoIndex);
        img.setAttribute("src", listPhoto[arrayPhotoIndex]);
    }
    document.getElementById("photo").animate(imgShowsUp, imgTiming);
};

btnNext.addEventListener("click", function () {
    next();
});

btnPrevious.addEventListener("click", function () {
    previous();
});

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        next();
    }
    if (event.key == "ArrowLeft") {
        previous();
    }
});

btnPlay.addEventListener("click", function () {
    clearInterval(interval);
    next();
    interval = setInterval(next, 2000);
    // NOTE au clic sur play on cache le bouton
    this.classList.add("hide");
    // NOTE au clic sur pause on affiche pause
    document.querySelector(".fa-pause").classList.remove("hide");

});
btnPause.addEventListener("click", function () {
    clearInterval(interval);
    // NOTE au clic sur pause on cache le bouton
    this.classList.add("hide");
    // NOTE au clic sur pause on affiche play
    document.querySelector(".fa-play").classList.remove("hide");
});
const initDisplay = () => {
  btnPlay.click();
}

// SECTION ONGLETS

// NOTE de ne pas sélection les li qui ne sont éventuellement pas concerné le selector li[data-tabtitle] est plus judicieux
const titres = document.querySelectorAll("li[data-tabtitle]");

for (let li of titres) {
    li.addEventListener("click", function () {
        let number = this.getAttribute("data-tabtitle");
        document.querySelector("#tabs > div.active").classList.remove("active");
        document.querySelector("#tab" + number).classList.add("active");
        document.querySelector("ul > li.active").classList.remove("active");
        this.classList.add("active");
    });
}
// NOTE permet d'initialiser les actions a déclancher au démarage de ta page (l'autoplay par exemple)
initDisplay()