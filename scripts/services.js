"use strict"

const srcList = document.getElementsByClassName("service");
const curWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

let current = 0;

if (curWidth <= 1300) {
    srcList[current].style.display = "flex";
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