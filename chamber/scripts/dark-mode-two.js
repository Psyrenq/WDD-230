//dark-mode
const modeButton = document.querySelector("#mode");
const discover = document.querySelector("main.discover");
const body = document.querySelector("body");
const header = document.querySelector("header");
const date = document.querySelector(".date");
const footer = document.querySelector("footer");
const button = document.querySelector("#menu-button");







modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🐱‍👤")) {
		discover.style.background = "#2c2c2c";
		discover.style.color = "#fff";
        body.style.background = "#000000";
		body.style.color = "#fff";
        header.style.background = "#2c2c2c";
		header.style.color = "#fff";
        date.style.background = "#1f1f1f";
		date.style.color = "#fff";
        footer.style.background = "#2c2c2c";
		footer.style.color = "#fff";
        button.style.background = "#2c2c2c";
        button.style.color = "#fff";
		modeButton.textContent = "😺";
	} else {
		discover.style.background = "#faf8f0";
		discover.style.color = "#000";
		button.style.background = "#faf8f0";
        button.style.color = "#000";
        body.style.background = "#eee";
		body.style.color = "#000";
        header.style.background = "#faf8f0";
		header.style.color = "#000";
        date.style.background = "#ffebcd";
        date.style.color = "#000";
        footer.style.background = "#faf8f0";
		footer.style.color = "#000";
		modeButton.textContent = "🐱‍👤";
	}
});

 //©-River-Rhodes