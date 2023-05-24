'use strict';

let immages = [
    './img/01.webp',
    '/img/02.webp',
    '/img/03.webp',
    '/img/04.webp',
    '/img/05.webp',
];

let display = document.querySelector('.slider');
let slider_img = '';

for (let i=0; i<immages.length; i++){
    let displayImg = immages[i];
    slider_img += `
        <div class="img-container">
            <img class="img" src="${displayImg}" alt="spiderman">
        </div>`;   
    };

display.innerHTML = slider_img ;



let dBlock = 0;

let pictures = document.getElementsByClassName('img'); 

pictures[dBlock].classList.add('d-block');



let next = document.querySelector('.next');

next.addEventListener('click', function(){

    if (dBlock < immages.length - 1){
        pictures[dBlock].classList.remove('d-block');
        dBlock ++
        pictures[dBlock].classList.add('d-block');
    }


});

let back = document.querySelector('.back');
back.addEventListener('click', function(){

    if (dBlock > 0){
        pictures[dBlock].classList.remove('d-block');
        dBlock--
        pictures[dBlock].classList.add('d-block');
    }

});