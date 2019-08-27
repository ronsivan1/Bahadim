import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {
  fetchWeatherOpenWeather,
  fetchWeatherCIT
} from "../exports/weatherAPI";
import { iconNames } from "../exports/Phrases";
import { fetchWeatherHourly } from "../exports/hourlyWeather";
import HourBar from "./HourBar";
import { Seperator } from "./Seperator";
import DailySection from "./DailySection";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      comfort: 0,
      maxTemp: 0,
      minTemp: 0,
      weather: "Default",
      skyDescription: "",
      description: "Loading the weather...",
      location: "",
      date: "",
      jsonCIT: "",
      hour: "",
      curDate: new Date().toLocaleTimeString(),
      curHour: "",

      isNextDay: false,
      weatherInfo: "",
      perceptionDesc: "",
      skyDescLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ curHour: this.state.curDate.substring(0, 2) });
    this.getLocation();
  }
  

  getLocation() {
    
    navigator.geolocation.getCurrentPosition(
      posData => {
        fetchWeatherOpenWeather(
          posData.coords.latitude,
          posData.coords.longitude
        ).then(
          res => {
            this.setState({
              weather: res.weather,
              location: res.location
              //date: res.date
            });
          },
          fetchWeatherCIT(
            posData.coords.latitude,
            posData.coords.longitude
          ).then(
            res => {
              var resultDate = res.date + "";
              var tempStr = resultDate.substring(0, resultDate.indexOf("T"));
              var resultStr = this.rearrangeDateString(tempStr);

              this.setState({
                //temp: Math.round(res.temp),
                date: resultStr,
                //comfort: Math.round(res.comfort),
                maxTemp: Math.round(res.maxTemp),
                minTemp: Math.round(res.minTemp),
                //skyDescription: this.switchToCapital(res.skyDescription)
              });
            },
            fetchWeatherHourly(
              posData.coords.latitude,
              posData.coords.longitude
            ).then(res => {
              var curIndex = 0;
              var json = res.json;
              for (var i = 0; i < 40; i++) {
                var wholeTime =
                  "" +
                  json.hourlyForecasts.forecastLocation.forecast[i].localTime;
                var resultHour = wholeTime.substring(0, 2);
                if (resultHour.toString() == ("" + this.state.curHour)) {
                  curIndex = i;
                  break;
                }
              }
              this.setState({
                jsonCIT: res.json,
                temp: Math.round(
                  json.hourlyForecasts.forecastLocation.forecast[curIndex]
                    .temperature
                ),
                comfort: Math.round(
                  json.hourlyForecasts.forecastLocation.forecast[curIndex]
                    .comfort
                ),
                weatherInfo:
                  json.hourlyForecasts.forecastLocation.forecast[curIndex]
                    .iconName,
                perceptionDesc:
                  json.hourlyForecasts.forecastLocation.forecast[curIndex]
                    .perceptionDesc,
                skyDescription: json.hourlyForecasts.forecastLocation.forecast[curIndex]
                            .skyDescription,
                description: json.hourlyForecasts.forecastLocation.forecast[curIndex]
                          .description,
                skyDescLoaded: true,
                
              });
              /*
              const { perceptionDesc } = this.state;
              if ("" + perceptionDesc != "") {
                // if there is rain set the skydescription to rain
                this.setState({ skyDescription: perceptionDesc });
              }*/
            })
          )
        );
        //error => alert(error), { timeout: 10000 };
      },
      error => alert(error),
      { timeout: 10000 }
    );
  }
  getDayOfHour(hour) {
    var day = new Date("2019-02-28"); // Feb 28 2019
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    console.log(nextDay); // Mar 01 2019
    var tomorrowDay = ("" + nextDay).substring(7, 10);
  }
  //Gets a string like "2018-12-30" flips it to "30-12-2018"
  rearrangeDateString(tempStr) {
    var year = tempStr.substring(0, 4);
    var month = tempStr.substring(5, 7);
    var day = tempStr.substring(8, 10);

    var newStr = day + "-" + month + "-" + year;
    return newStr;
  }

  // Example: desc = "Partly sunny", the method returns "Partly Sunny"
  switchToCapital(desc) {
    if(!this.state.skyDescLoaded)
      return "Loading the weather...";
    var descText = desc + "";
    var str = descText.split("");
    str[str.indexOf(" ") + 1] = str[str.indexOf(" ") + 1].toUpperCase();
    return str.join("");
  }

  firstLetterToCapital(desc) {
    var descText = desc + "";
    var arr = descText.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  }

  checkHour(hour) {
    if (hour == 24) return "00";
    if (hour == 25) return "01";
    if (hour == 26) return "02";
    if (hour == 27) return "03";
    return hour;
  }

  getTempIconName(curHour) {
    const { skyDescription, perceptionDesc } = this.state;
    var rainInfo = (perceptionDesc + "").toLowerCase();
    if(!this.state.skyDescLoaded)
      return "md-time";
    if (
      rainInfo.includes("rain") ||
      rainInfo.includes("sprinkles") ||
      rainInfo.includes("showers")
    )
      return "ios-rainy";
    if ((skyDescription + "").includes("Partly")) return "ios-partly-sunny";
    if (this.state.weatherInfo.includes("night")) {
      if (
        (skyDescription + "").includes("Cloud") ||
        (skyDescription + "").includes("cloud")
      )
        return "ios-cloudy-night";
      return "ios-moon";
    }
    return iconNames[this.state.weather].text;
  }
  getTempIconColor(iconName) {
    if (iconName == "ios-rainy") return "white";
    if (iconName == "ios-partly-sunny" || iconName == "ios-cloudy-night")
      return "#b7c6ce";
    if (iconName == "ios-moon") return "#FFD017"; // if icon is moon return yellow

    return iconNames[this.state.weather].color;
  }
  getMainIcon(mainWeatherIconName, mainWeatherIconColor) {
    return (
      <Icon name={mainWeatherIconName} size={45} color={mainWeatherIconColor} />
    );
  }

  checkNextDay(hour, isNextDay) {
    if (isNextDay) return true;
    if (
      hour == "20" ||
      hour == "21" ||
      hour == "22" ||
      hour == "23" ||
      hour == "00"
    )
      if (!isNextDay) return true;
    return false;
  }

  render() {
    const { lat, lng } = this.props;
    var { curHour } = this.state;
    //var curHour = "00";
    var nextDay = false;
    const mainWeatherIconName = this.getTempIconName(curHour);
    const mainWeatherIconColor = this.getTempIconColor(mainWeatherIconName);
    var description = this.firstLetterToCapital(this.state.description);
    return (
      <ScrollView>
        <View style={styles.locationDate}>
          <Icon name={"md-locate"} color={"white"} size={20} />
          <Text style={styles.text}>{this.state.location}</Text>
          <Text style={styles.text}>{this.state.date}</Text>
        </View>
        <View style={[styles.tempInfo]}>
          <View style={[styles.arrow, { top: 10 }]}>
            <Icon
              style={[styles.text, { fontSize: 20 }]}
              name={"ios-arrow-back"}
            />
          </View>

          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text style={styles.tempText}>{this.state.temp}° </Text>
            {this.getMainIcon(mainWeatherIconName, mainWeatherIconColor)}
          </View>

          <View style={[styles.arrow, { top: 10 }]}>
            <Icon
              style={[styles.text, { fontSize: 20 }]}
              name={"ios-arrow-forward"}
            />
          </View>
        </View>
        <View style={styles.tempMaxMin}>
          <Text style={[styles.text, { marginVertical: 10 }]}>
            {this.state.comfort + "° Real Feel"}{" "}
          </Text>
          <View
            style={{
              borderColor: "#A2A2A2",
              borderWidth: 0.3,
              height: 20,
              width: 0.3,
              margin: 10
            }}
          />
          <Text style={styles.text}>
            {" " + this.state.maxTemp + "° / " + this.state.minTemp + "°"}
          </Text>
        </View>
        <View style={styles.center}>
          <Text
            style={[
              styles.text,
              { fontSize: 20, marginVertical: 5, fontWeight: "bold" }
            ]}
          >
            {description}
          </Text>
        </View>

        <View style={styles.bigSeperator} />

        {/* the hourly forecast starts from here */}
        <View style={[styles.hoursContainer, {}]}>
          <Text style={[styles.text]}>Hours</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 1))}
              nextDay={curHour == "00" ? true : nextDay}
            />
            {(nextDay = this.checkNextDay(curHour, nextDay))}
            <Seperator height={130} />
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 4))}
              nextDay={nextDay}
            />
            {(nextDay = this.checkNextDay(curHour, nextDay))}
            <Seperator height={130} />
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 4))}
              nextDay={nextDay}
            />
            {(nextDay = this.checkNextDay(curHour, nextDay))}
            <Seperator height={130} />
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 4))}
              nextDay={nextDay}
            />
            {(nextDay = this.checkNextDay(curHour, nextDay))}
            <Seperator height={130} />
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 4))}
              nextDay={nextDay}
            />
            {(nextDay = this.checkNextDay(curHour, nextDay))}
            <Seperator height={130} />
            <HourBar
              hour={(curHour = this.checkHour(parseInt(curHour) + 4))}
              nextDay={nextDay}
            />
          </View>
        </View>
        {/* ends here */}
        <View
          style={{
            borderBottomColor: "#c4d3db",
            borderBottomWidth: 0.7,
            marginHorizontal: 20,
            marginBottom: 20
          }}
        />

        <DailySection />
        <View
          style={{
            borderBottomColor: "#c4d3db",
            borderBottomWidth: 0.7,
            marginHorizontal: 20,
            marginBottom: 20
          }}
        />
      </ScrollView>
    );
  }
}

export default WeatherPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: "#FFD017"
  },

  hoursContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  topBar: {
    height: 50,
    alignItems: "center",
    flexDirection: "row"
  },
  locationDate: {
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20
  },
  tempInfo: {
    justifyContent: "space-between",
    marginHorizontal: 20,
    flexDirection: "row"
  },
  tempMaxMin: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    flexDirection: "row"
  },
  arrow: {
    alignItems: "center",
    flexDirection: "row"
  },
  bigSeperator: {
    borderBottomColor: "#c4d3db",
    borderBottomWidth: 0.7,
    //borderBottomWidth: 0.3, // this is the thinnest!
    margin: 20
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 4,
    justifyContent: "flex-end",
    margin: 10
  },
  title: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 78,
    color: "white",
    marginBottom: 5
  },
  text: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 16,
    color: "white"
  },
  tempText: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 40,
    color: "white"
  },
  location: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 32,
    color: "white"
  }
});
