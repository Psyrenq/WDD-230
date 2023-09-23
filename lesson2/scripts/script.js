var lastUpdated = `Last updated: ${document.lastModified}`;
    document.querySelector("#updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
    currentDate.textContent = `${new Date().getFullYear()}`;
    //It's working, so I'm assuming this is the correct method?
//©-River-Rhodes