const right = document.querySelector('.right');
const left = document.querySelector('.left');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.images');

let slideNumber = 1;
let imgLength = images.length;

function moveRight() {

    if(slideNumber < imgLength){
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
    }
    else{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
    }
}

function moveLeft() {
    if(slideNumber > 1){
        slideNumber--;
        slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
    }
    else{
        slideNumber = imgLength;
        slider.style.transform = `translateX(-${(imgLength - 1) * 800}px)`;
    }
}

right.addEventListener('click', moveRight);
left.addEventListener('click', moveLeft);

setInterval(moveRight, 7000)





// Condition: if (slideNumber > 1) checks if we're not already on the first slide. If true, it decreases slideNumber and translates the slider back.
// Else block: If we are on the first slide, it moves the slider to the last image by setting slideNumber to imgLength.

