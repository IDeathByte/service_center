"use strict"

function showMenu() {
    let menu = document.getElementById("navbar-mob");
    let button = document.getElementById("menu");

    menu.style.display="block";
    setTimeout(()=> menu.style.opacity="1", 0);
    button.onclick = hideMenu;
    document.ontouchstart = hideMenu;
}

function hideMenu() {
    let menu = document.getElementById("navbar-mob");
    let button = document.getElementById("menu");

    setTimeout(()=> menu.style.display="none", 300);
    menu.style.opacity="0";
    button.onclick = showMenu;
    document.ontouchstart = "";
}