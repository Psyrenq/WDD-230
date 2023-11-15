//weather API
const temperature =  document.querySelector(".temp");
async function apiFetch() {
const url = `https://api.openweathermap.org/data/2.5/weather?q=fort wayne&units=imperial&appid=618e664a3f16434c493a066f55858ae4`;
try {
const response = await fetch(url);
if (response.ok) {
const data = await response.json();
displayResults(data);
} else {
throw Error(await response.text());
}
} catch (error) {
console.log(error);
}
}

apiFetch();

function displayResults(weatherData) {
temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

const desc = weatherData.weather[0].description;

weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;

windspeed.textContent=weatherData.wind.speed;

};
 //©-River-Rhodes