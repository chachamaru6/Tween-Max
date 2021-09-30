const mint = document.querySelector('.mint');
const slider = document.querySelector('slider');
const logo = document.querySelector('#logo');
const icecream = document.querySelector('.icecream');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(mint,1, {height: "0%"}, {height: '80^'})
