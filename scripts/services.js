"use strict"

//Simple switcher. Not a galery.

const srcList = document.getElementsByClassName("service");
const curWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

document.addEventListener('DOMContentLoaded', screenSizeCheck)
window.onresize = screenSizeCheck;

let current = 0;

function screenSizeCheck() {
    const curWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (curWidth <= 1300) {
        Array.from(srcList).forEach(elem => elem.style.display = "none");
        srcList[current].style.display = "flex";
    } else Array.from(srcList).forEach(elem => elem.style.display = "flex");
}


function scNext(){
    srcList[current].style.display = "none";

    current == srcList.length - 1 ? current = 0 : current++;

    srcList[current].style.display = "flex";

}

function scPrev(){
    srcList[current].style.display = "none";

    current == 0 ? current = srcList.length - 1 : current--;

    srcList[current].style.display = "flex";
}