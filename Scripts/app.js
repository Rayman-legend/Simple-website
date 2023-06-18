let menu = document.querySelector(".Menu__Header");
let menuBtn = document.querySelector(".header-icon__menu");
let menuBtnIcon = document.querySelector(".header-icon__menu i");

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0";
        menuBtnIcon.classList = "fa fa-times";
    } else {
        menu.style.left = "-240px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})