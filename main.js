const mint = document.querySelector('.mint');
const slider = document.querySelector('slider');
const logo = document.querySelector('#logo');
const icecream = document.querySelector('.icecream');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(mint, 1, {height: "0%" }, {height: '80%', ease: Power2.easeInOut })
.fromTo(mint, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, { x: "-100%"}, { x: '0%' ,ease: Power2.easeInOut});