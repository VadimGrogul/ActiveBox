

$(window).on('scroll', function(){
    if($(this).scrollTop() > 500) {
        $('.header').css({'background-color' : 'rgba(58, 62, 100, 0.9)'})
    } else {
        $('.header').css({'background-color' : 'transparent'})
    } 
})

let menu = $('.header__adapt-nav').attr('data-isOpen');


$('.header__menu-open').click(() => {
    if(menu == 0) {

        $('.header__adapt-nav').css({'height' : '22px', 'paddingTop' : '2rem'});

        $('.header__adapt-nav').css({'height' : '35px', 'paddingTop' : '2rem'});

        menu = 1;
    } else {
        $('.header__adapt-nav').css({'height' : '0', 'paddingTop' : '0'});
        menu = 0;
    }
})

let currentImageIndex = 0;
let images = ['./img/girl.png', './img/a.jpg', './img/b.jpg', './img/c.jpg'];
let imgBlock = $('.clients__photo');

    for(let i = 0; i < images.length; i++) {
        imgBlock.eq(i).css('backgroundImage', 'url(' + images[i] + ')');
    }

    $('.slider-wrap').eq(currentImageIndex).css('opacity', '1');

function autoSlider() {
    
    $('.slider-wrap').eq(currentImageIndex).css('opacity', '0');
    $('.clients-slider__circles-item').eq(currentImageIndex).removeClass('clients-slider__circles-item--active');
    
    currentImageIndex += 1;
    
    if(currentImageIndex == $('.slider-wrap').length) {
        currentImageIndex = 0;   
    }

    $('.clients-slider__circles-item').eq(currentImageIndex).addClass('clients-slider__circles-item--active');

    $('.slider-wrap').eq(currentImageIndex).css('opacity', '1');
    
    
}



    
setInterval(autoSlider, 3000)


console.log($('.slider-wrap').length);
