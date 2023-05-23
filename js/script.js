'use strict';

let immages = [
    '/img/01.webp',
    '/img/02.webp',
    '/img/03.webp',
    '/img/04.webp',
    '/img/05.webp',
]

let display_img = document.querySelector('.slider')
let slider_img = ''

for (let i=0; i<immages.length; i++){
    console.log(immages[i])
    
    let display_img = immages[i]
    slider_img += `
            <div class="img-container">
                <img class="img" src="${display_img}" alt="spiderman">
            </div>
            `
}

display_img.innerHTML = slider_img