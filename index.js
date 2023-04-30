// const form  = document.querySelector('#form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })

const nav = document.querySelector("nav");

window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
})