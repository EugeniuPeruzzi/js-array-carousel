'use strict';

let immages = [
    '/img/01.webp',
    '/img/02.webp',
    '/img/03.webp',
    '/img/04.webp',
    '/img/05.webp',
];

let display = document.querySelector('.slider');
let slider_img = '';

for (let i=0; i<immages.length; i++){
    console.log(immages[i])
    let displayImg = immages[i];
    display.innerHTML += `
    <div class="img-container">
                <img class="img d-none" src="${displayImg}" alt="spiderman">
            </div>
    `;
};

let next = document.querySelector('.next');
let back = document.querySelector('.back')

next = addEventListener('click', function(){
    
})