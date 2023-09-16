var lastUpdated = `Last updated: ${document.lastModified}`;
    document.querySelector("#updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
    currentDate.textContent = `${new Date().getFullYear()}`;
//©-River-Rhodes