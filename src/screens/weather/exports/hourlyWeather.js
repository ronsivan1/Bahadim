const rootUrl =
  "https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_hourly&app_id=Nn6jBcCMYo0MvoPjr4Nb&app_code=_fJAXiBt0TCOl39bpP3VFA";

export const fetchWeatherHourly = (lat, lon) => {
  const url = rootUrl + "&latitude=" + lat + "&longitude=" + lon;
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      json: json
    }));
};

const dailyWeatherUrl = "https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg"
//&latitude=31.05676872&longitude=34.84594398 this is habahadim :)

export const fetchWeatherDaily = (lat, lon) => {
  const url = dailyWeatherUrl + "&latitude=" + lat + "&longitude=" + lon;
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      json: json
    }));
};


/*
  for (let i = 0; i < 168; i++) {
    var indexTime = "" +jsonObj.hourlyForecasts.forecastLocation.forecast[i].localTime
    var indexHour = indexTime.substring(0, 3);
    return indexHour;
}*/
