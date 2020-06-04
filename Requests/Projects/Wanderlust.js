// Foursquare API Info
const clientId = 'CRDN2EZWD1TPJQNV2Z2I2TBRKN4LZFNNT3HWYYCVEDRINQ1S';
const clientSecret = 'OEW2A1LPGQ431ZZ5J5HOT4ORXRSY3JPDD4KDRWSSFFHZYQBQ';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '1cb3d6fd58b8d4b2cf40021010e725ef';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200604`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    }
  } catch(error) {
    console.log(error);
  }
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    
  } catch(error) {
    console.log(error);
  }
}



const genIndex = () => {
  return Math.floor(Math.random() * 5);
}

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue) => {
    // Add your code here:
    let index = genIndex();
    console.log(index);
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = venueIcon.prefix+'bg_64'+venueIcon.suffix;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}



const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}



const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.city}</p>
    <p>${location.country}</p>`;
  }
  
  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  }
  
  const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);




const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)