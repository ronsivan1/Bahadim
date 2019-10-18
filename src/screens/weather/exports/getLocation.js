import { fetchWeatherOpenWeather, fetchWeatherCIT } from "./weatherAPI";
import { fetchWeatherHourly } from "./hourlyWeather";

export const getLocation = () => {
    var arr = ["nope", "nah"];
  navigator.geolocation.getCurrentPosition(posData => {
    fetchWeatherOpenWeather(
      posData.coords.latitude,
      posData.coords.longitude
    ).then(
      res => ({
        //var convertedTemp = res.temp - 273.15; // Converting temperature from Kelvin to C°
        //var resultDate = res.date + "";resultDate.substring(0, resultDate.indexOf("T"))

        weather: res.weather,
        location: res.location
      }),
      fetchWeatherCIT(posData.coords.latitude, posData.coords.longitude).then(
        res => {
          /*
            var resultDate = res.date + "";
            var tempStr = resultDate.substring(0, resultDate.indexOf("T"));
            var resultStr = rearrangeDateString(tempStr);*/

          arr.push( Math.round(res.temp));
          arr.push(  rearrangeDateString(
            (res.date + "").substring(0, (res.date + "").indexOf("T")) ) );

            return ({
                arr: arr
            });
        },
        
        fetchWeatherHourly(
          posData.coords.latitude,
          posData.coords.longitude
        ).then(res => ({
          jsonCIT: res.json,
          hour: findHour(res.json, "09")
        }))
      )
    );
    error => alert(error), { timeout: 10000 };
  });
  
};
const rearrangeDateString = (tempStr) => {
    var year = tempStr.substring(0, 4);
    var month = tempStr.substring(5, 7);
    var day = tempStr.substring(8, 10);
    
    var newStr = day + "-" + month + "-" + year;
    return newStr;
}

const findHour = (json, hour) => {
  for (let i = 0; i < 168; i++) {
    var indexTime =
      "" + json.hourlyForecasts.forecastLocation.forecast[i].localTime;
    var resultHour = indexTime.substring(0, 2);
    if (hour == resultHour) return "Found! index=" + i;
  }
};
