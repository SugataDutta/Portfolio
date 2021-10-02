burger = document.querySelector('.hamburger');
nav = document.querySelector('.navbar');
navlist = document.querySelector('.ul1');



burger.addEventListener('click', ()=>{
    nav.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
})
