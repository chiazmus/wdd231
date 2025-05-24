const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-40.35&lon=175.61&units=metric&appid=5703424a54df50ef13fb2df0986f0259';
const forcasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-40.35&lon=175.61&units=metric&appid=5703424a54df50ef13fb2df0986f0259';
const currentWeatherObject = document.getElementById('current-weather');
const forcastWeatherObject= document.getElementById('weather-forcast');

const getNextTwoDays = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const today = date.getDay();
    // console.log(today);
    return [days[today], days[(today+1)%7], days[(today+2)%7]];
};

function displayResults(data) {
    const currentTemp = document.createElement('p');
    const weatherIcon = document.createElement('img');
    const captionDesc = document.createElement('p');

    currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `Weather: ${desc}`;

    currentWeatherObject.appendChild(weatherIcon);
    currentWeatherObject.appendChild(captionDesc);
    currentWeatherObject.appendChild(currentTemp);
}

function displayForcast(data){
    // Grabs the data for each day at 12:00 in the afternoon.
    let today = data.list[3].main.temp;
    let tomorrow = data.list[12].main.temp;
    let nextDay = data.list[20].main.temp;

    const todayPara = document.createElement('p');
    const tomorrowPara = document.createElement('p');
    const nextDayPara = document.createElement('p');
    const dayNames = getNextTwoDays();

    todayPara.innerHTML = `Today: <b>${today}&deg;C</b>`;
    tomorrowPara.innerHTML = `${dayNames[1]}: <b>${tomorrow}&deg;C</b>`;
    nextDayPara.innerHTML = `${dayNames[2]}: <b>${nextDay}&deg;C</b>`;

    forcastWeatherObject.appendChild(todayPara);
    forcastWeatherObject.appendChild(tomorrowPara);
    forcastWeatherObject.appendChild(nextDayPara);

}

async function weatherApiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
            // console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(`There was an error in the fetch thingy: ${error}`);
    }
}

async function forcastApiFetch(){
    try {
        const response = await fetch(forcasturl);
        if (response.ok){
            const data = await response.json();
            displayForcast(data);
            // console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(`There was an error in the fetch thingy: ${error}`);
    }
}


weatherApiFetch();
forcastApiFetch();
