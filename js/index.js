let images = document.querySelectorAll('.infinity-slider img');
let current= 0;

function slider() {
    for(let i = 0; i< images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}


document.querySelector('.infinity-slider').onclick = slider;
