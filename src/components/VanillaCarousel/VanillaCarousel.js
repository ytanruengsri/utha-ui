/* eslint-disable no-plusplus, no-console */
const carouselItemsClassName = 'ucarousel-vanilla__item';

// Get carousel items once
const items = document.getElementsByClassName(carouselItemsClassName);
const itemsLength = items.length;

let currentSlide = 1;

function changeSlide(nextSlideIndex) {
    currentSlide = nextSlideIndex;

    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    items[currentSlide - 1].style.display = 'block';
}

function next() {
    const nextSlide = (currentSlide % itemsLength) + 1;
    changeSlide(nextSlide);
}

function prev() {
    const prevSlide = currentSlide === 1 ? itemsLength : currentSlide - 1;
    changeSlide(prevSlide);
}

// Initial
console.log('Initializing carousel ...');
changeSlide(currentSlide);
