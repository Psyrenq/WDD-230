const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else{
	visitsDisplay.textContent= `First time visiting`
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);

todayDisplay.textContent = Date.now();