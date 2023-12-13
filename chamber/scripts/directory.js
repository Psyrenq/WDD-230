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

async function getdirectorydata(url) {
const response = await fetch (url);
const data = await response.json();

displayrentals(data.directory);

}
getdirectorydata(url);

const displayrentals = (directory) => {
const cards = document.querySelector('.company');

directory.forEach ((directory) => {

let card = document.createElement ('section');
let h3 = document.createElement ('h3');
let address = document.createElement ('div');
let phone = document.createElement ('div');
let websiteurl = document.createElement ('a');
let image = document.createElement ('img');
let memb = document.createElement ('div');

h3.textContent = `${directory.name}`;
address.textContent = `${directory.address}`;
phone.textContent = `${directory.phone}`;
websiteurl.textContent = `${directory.websiteurl}`;
memb.textContent = `${directory.membership}`;

image.setAttribute ('src', directory.imageurl);
image.setAttribute ('alt', 'Company ${directory.name}');
h3.setAttribute('class', 'h3');
address.setAttribute('class', 'address');
phone.setAttribute('class', 'phone');
websiteurl.setAttribute('href', 'websiteurl')
memb.setAttribute('class', 'memb');

card.appendChild(image);
card.appendChild(h3);
card.appendChild(address);
card.appendChild(phone);
card.appendChild(memb);
card.appendChild(websiteurl);

cards.appendChild(card);

});
}
//©-River-Rhodes