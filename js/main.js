let adaptMenuBtn = $('.header__menu-open');
let adaptMenu = $('.header__adapt-nav');
let a = $('[data-isOpen]');

$('.header__menu-open').click(() => {
    $('.header__adapt-nav').slideToggle('slow');
})

