var lastUpdated = `Last updated: ${document.lastModified}`;
    document.querySelector("#updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
    currentDate.textContent = `${new Date().getFullYear()}`;
//Menu//
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("menu-button").classList.toggle("open");

}
 const x = document.getElementById("menu-button");
 x.onclick = toggleMenu;

//©-River-Rhodes