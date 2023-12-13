const temp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const feel = document.querySelector(`#feelslike`);
const humid = document.querySelector('#humidity');
console.log(temp)
console.log(description)
console.log(feel)
console.log(humid)

async function apiFetch(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=43769af0eeae93d592ac47faaefbc782&units=imperial`;
        try{
            const response = await fetch(url);
            if (response.ok){
                const data = await response.json();
                displayResults(data);
            }else{
                throw Error (await response.text());
            }
            }catch(error){
                console.log(error);
            }
        }
        apiFetch();

    function displayResults (weatherData){
        temp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
        description.textContent= `${weatherData.weather[0].description}`;
        humid.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
        feel.innerHTML = `${weatherData.main.feels_like.toFixed(0)}`;

       const weatherIcon = document.querySelector('#weather-icon');

        const desc = weatherData.weather[0].description;

        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
    };

   async function getnextweather(){
       const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=43769af0eeae93d592ac47faaefbc782&units=imperial');
       const data = await response.json();
       displaynextweather(data);
   }
   getnextweather();

   async function displaynextweather(weather) {
    console.log(weather);
                                                            
    const tomorrow = weather.list[9].main.temp;
    const nextDay = weather.list[17].main.temp;
    const andTheNext = weather.list[25].main.temp;
    
    let temp1 = document.querySelector("#temp1");
    let temp2 = document.querySelector("#temp2");
    let temp3 = document.querySelector("#temp3");

    temp1.innerHTML = `${weather.list[9].main.temp.toFixed(0)}`;
    temp2.innerHTML = `${weather.list[17].main.temp.toFixed(0)}`;
    temp3.innerHTML = `${weather.list[25].main.temp.toFixed(0)}`;

   }
 //©-River-Rhodes
