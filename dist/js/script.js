//Navbar 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const ToTop = document.querySelector('#toTop');

    if(window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
        ToTop.classList.remove('hidden');
        ToTop.classList.add('flex');
    }else {
        header.classList.remove('navbar-fixed');
        ToTop.classList.remove('flex');
        ToTop.classList.add('hidden');
    }
};


//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//Klik di luar hmbgr
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.toggle('hidden');
    }
})

//Dark mode

const darkToggle = document.querySelector('#darktoggle');
const HTML = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        HTML.classList.add('dark');
        localStorage.theme ='dark';

    } else {

        HTML.classList.remove('dark');
        localStorage.theme ='light';
    }
})

//fixed posisi mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  HTML.classList.add('dark');
  darkToggle.checked = true;
} else {
  HTML.classList.remove('dark');
  darkToggle.checked= false;
}

