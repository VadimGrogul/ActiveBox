let adaptMenuBtn = document.querySelector('.header__menu-open');
let adaptMenu = document.querySelector('.header__adapt-nav');
let a = adaptMenu.getAttribute('data-isOpen');

console.log(a);


adaptMenuBtn.addEventListener('click', function(){
    if(a == 0){
        adaptMenu.style.height = 25 + 'px';
        a = 1;
    } else {
        adaptMenu.style.height = 0;
        a = 0;
    }
})