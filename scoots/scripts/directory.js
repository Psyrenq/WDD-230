const url = 'json/data.json';

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".company");

gridbutton.addEventListener("click", function () {
display.classList.add("grid");
display.classList.remove("list");
})

listbutton.addEventListener("click", showList);

function showList() {
display.classList.add("list");
display.classList.remove("grid");
}

async function getrentalsdata(url) {
const response = await fetch (url);
const data = await response.json();

displayrentals(data.rentals);

}
getrentalsdata(url);

const displayrentals = (rentals) => {
const cards = document.querySelector('.company');

rentals.forEach ((rentals) => {

let card = document.createElement ('section');
let h3 = document.createElement ('h3');
let image = document.createElement ('img');
let priceone = document.createElement ('div');
let pricetwo = document.createElement ('div');
let pricethree = document.createElement ('div');
let pricefour = document.createElement ('div');

h3.textContent = `${rentals.h3}`;
priceone.textContent = `${rentals.priceone}`;
pricetwo.textContent = `${rentals.pricetwo}`;
pricethree.textContent = `${rentals.pricethree}`;
pricefour.textContent = `${rentals.pricefour}`;
image.setAttribute ('src', rentals.imageurl);
image.setAttribute ('alt', 'Company ${rentals.name}');
h3.setAttribute('class', 'h3');
priceone.setAttribute('class', 'priceone');
pricetwo.setAttribute('class', 'pricetwo');
pricethree.setAttribute('class', 'pricethree');
pricefour.setAttribute('class', 'pricefour');

card.appendChild(image);
card.appendChild(h3);
card.appendChild(priceone);
card.appendChild(pricetwo);
card.appendChild(pricethree);
card.appendChild(pricefour);

cards.appendChild(card);

});
}
//©-River-Rhodes