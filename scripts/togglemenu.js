"use strict"

function showMenu() {
    let menu = document.getElementById("navbar-mob");
    let button = document.getElementById("menu");

    menu.style.display="block";
    button.onclick = hideMenu;
    setTimeout (() => menu.style.opacity="1", 100);

   menu.style.display === "block" ? setTimeout ( ()=> document.onclick = hideMenu , 100) : document.onclick = "";
   menu.style.display === "block" ? setTimeout ( ()=> document.ontouchmove = hideMenu , 100) : document.ontouchmove = "";

}

function hideMenu() {
    let menu = document.getElementById("navbar-mob");
    let button = document.getElementById("menu");

    menu.style.opacity="0"
    setTimeout (() =>menu.style.display="none",300);
    button.onclick = showMenu;

    menu.style.display === "" ? setTimeout ( ()=> document.onclick = "", 100) : document.onclick = "";
    menu.style.display === "" ? setTimeout ( ()=> document.ontouchmove = "" , 100) : document.ontouchmove = "";
}
