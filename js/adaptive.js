$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu, .social').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


let headerMenuId = document.querySelector('#headerMenu');
let headerBurgerId = document.querySelector('#headerBurger');


let burgerDescriptionBtn = document.querySelector('#descriptionBtn');
let burgerTrailerBtn = document.querySelector('#trailerBtn');
let burgerReviewBtn = document.querySelector('#reviewBtn');



function burgerOut() {
    burgerDescriptionBtn.addEventListener('click', () => {

    	headerMenuId.classList.remove('active');
    	headerBurgerId.classList.remove('active');
    });	
    burgerTrailerBtn.addEventListener('click', () => {

    	headerMenuId.classList.remove('active');
    	headerBurgerId.classList.remove('active');
    });
    burgerReviewBtn.addEventListener('click', () => {

    	headerMenuId.classList.remove('active');
    	headerBurgerId.classList.remove('active');
    });
}

burgerOut();












// let headerMenuActive = document.querySelector('.header-menu .active');
// let headerBurgerActive = document.querySelector('.header-burger .active');



        // if (headerMenu.classList.contains('active') && headerBurger.classList.contains('active')) {
        //     headerMenu.toggleClass('active');
        //     headerBurger.classList.remove('active');
        // }


        // headerMenu.style.top = '-100%';

        // console.log(headerMenuActive);
        // console.log(headerBurgerActive);















        // if (headerMenu.classList.contains('.active')) {
        // }

        // headerMenuActive.toggleClass('.active');
        // headerBurgerActive.toggleClass('.active');

        // let removeClassActive = document.querySelector('.header-burger.active, .header-menu.active, .social.active').toggleClass('.active');
        //       headerMenuActive.classList.remove('.active');
        // headerBurgerActive.classList.remove('.active');




        // headerMenuActive = headerMenu;
        // headerBurgerActive = headerBurger;
        // });
        // burgerTrailerBtn.addEventListener('click', () => {
        //     headerMenu.style.top = '-100%';
        // });
        // burgerReviewBtn.addEventListener('click', () => {
        //     headerMenu.style.top = '-100%';

        // return removeClassActive;
    


// console.log(burgerDescriptionBtn);
// console.log(burgerTrailerBtn);
// console.log(burgerReviewBtn);
// console.log(headerMenu);