const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('slide')
});

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
});