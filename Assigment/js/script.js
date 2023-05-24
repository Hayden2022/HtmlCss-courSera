alert("Hello");
const hamburger_btn = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const main_content = document.querySelector('.main-content');
console.log(hamburger_btn);
console.log(navlinks);

function affiche(){
    // ajoute une classe alla balise navlinks
    navlinks.classList.toggle("affiche");
}

hamburger_btn.addEventListener("click",affiche)