const rootUrl =
  "http://api.openweathermap.org/data/2.5/weather?&appid=0da4a26338937c50988791666da4ac76&units=metric";

/*
Another great Weather API url just incase:
https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&oneobservation=true&app_id=Nn6jBcCMYo0MvoPjr4Nb&app_code=_fJAXiBt0TCOl39bpP3VFA&latitude=31.79477187&longitude=34.7151843

Great API for hours, but expires in 04/03/19
http://api.worldweatheronline.com/premium/v1/weather.ashx?key=ab3f67bdace343e4b80155929190301&q=31.79477187,34.7151843&num_of_days=2&tp=3&format=json

*/

const tempUrl = "https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&oneobservation=true&app_id=Nn6jBcCMYo0MvoPjr4Nb&app_code=_fJAXiBt0TCOl39bpP3VFA";

export const lat = 31.0559752;
export const lon = 34.8492397;

export const fetchWeatherOpenWeather = (lat, lon) => {
  const url = rootUrl + "&lat=" + lat + "&lon=" + lon;
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
        weather: json.weather[0].main,
        location: json.name
    }))
};

export const fetchWeatherCIT = (lat, lon) => {
  const url = tempUrl + "&latitude=" + lat + "&longitude=" + lon;
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
        temp: json.observations.location[0].observation[0].temperature,
        date: json.observations.location[0].observation[0].utcTime,
        comfort: json.observations.location[0].observation[0].comfort,
        maxTemp: json.observations.location[0].observation[0].highTemperature,
        minTemp: json.observations.location[0].observation[0].lowTemperature,
        skyDescription: json.observations.location[0].observation[0].skyDescription
      }))
};


