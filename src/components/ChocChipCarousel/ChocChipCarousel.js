/* eslint-disable no-plusplus, no-console, no-unused-vars */
const CAROUSEL_ITEMS_CLASS_NAME = 'ucarousel-chocchip__items';
const CAROUSEL_ITEM_CLASS_NAME = 'ucarousel-chocchip__item';
const CONTROL_ITEMS = 'ucontrol-panel__items';
const CONTROL_ITEMS_COUNT = 'ucontrol-panel__items-count';
const DEFAULT_ITEM_WIDTH = 210;
const DEFAULT_NUMBER_OF_ITEMS = 9;

const carouselItemsNode = document.getElementsByClassName(CAROUSEL_ITEMS_CLASS_NAME)[0];
const controlNumberOfItemsNode = document.getElementById(CONTROL_ITEMS);
const controlItemsCountLabel = document.getElementById(CONTROL_ITEMS_COUNT);

let currentSlide = 1;
let numberOfItems = DEFAULT_NUMBER_OF_ITEMS;
let itemSize = DEFAULT_ITEM_WIDTH;
let translateZ = getTranslateZ();
let rotate = getRotationDegree();
let items = [];

function getTranslateZ() {
    return Math.round((itemSize / 2) / Math.tan(Math.PI / numberOfItems));
}

function getRotationDegree() {
    return 360 / numberOfItems;
}

function updateItemStyle(index) {
    return `opacity: 1; transform: rotateY(${rotate * index}deg) translateZ(${translateZ}px);`;
}

function updateContainerStyle(index) {
    return `transform: rotateY(${rotate * index}deg) translateZ(-${translateZ}px);`;
}

function createCarouselItemNode(index) {
    const label = document.createElement('h2');
    label.innerHTML = `Slide ${index + 1}`;

    const node = document.createElement('div');
    node.className = CAROUSEL_ITEM_CLASS_NAME;
    node.style = updateItemStyle(index);

    node.appendChild(label);

    return node;
}

function changeSlide(nextSlideIndex) {
    currentSlide = nextSlideIndex;

    const containerIndex = nextSlideIndex * -1;
    carouselItemsNode.style = updateContainerStyle(containerIndex);
}

function next() {
    const nextSlide = (currentSlide % numberOfItems) + 1;
    changeSlide(nextSlide);
}

function prev() {
    const prevSlide = currentSlide === 1 ? numberOfItems : currentSlide - 1;
    changeSlide(prevSlide);
}

function onNumberOfItemsChange(value) {
    controlItemsCountLabel.innerHTML = value;
}

function initSlide() {
    // Set default value to range input
    controlNumberOfItemsNode.value = numberOfItems;

    // Set default value to current items count
    controlItemsCountLabel.innerHTML = numberOfItems;

    carouselItemsNode.style = updateContainerStyle(currentSlide - 1);

    // Insert carousel items and update style
    for (let i = 0; i < numberOfItems; i++) {
        const node = createCarouselItemNode(i);
        carouselItemsNode.appendChild(node);

        // cache generated node
        items.push(node);
    }
}

// Initial
console.log('Initializing carousel ...');
initSlide();
