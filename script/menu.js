//função para fechar e abrir menu
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active"); // ao clicar aparece e desaparece
    });
});