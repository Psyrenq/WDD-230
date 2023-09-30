//Menu
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("menu-button").classList.toggle("open");

}
 const x = document.getElementById("menu-button");
 x.onclick = toggleMenu;

//date
var lastUpdated = `Last Modification: ${document.lastModified}`;
    document.querySelector("#update-date").innerText=lastUpdated;
 
const currentDate = document.querySelector("#current-year");
    currentDate.textContent = `${new Date().getFullYear()}`;
    //It's working, so I'm assuming this is the correct method?

//current date
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
 document.querySelector(".date").innerHTML = fullDate;
 //©-River-Rhodes