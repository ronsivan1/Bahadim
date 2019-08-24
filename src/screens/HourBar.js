import React, { Component } from "react";
import { fetchWeatherHourly } from "../exports/hourlyWeather";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { newIconNames } from "../exports/Phrases";

export default class HourBar extends Component {
  state = {
    hourTime: "",
    hourTemprature: 0,
    hourPerception: 0,
    perceptionDesc: "",
    skyDescription: "Default",
    weatherInfo: "",
    json: "",
    loaded: false,
    skyDescLoaded: false,
    curDate: new Date().toLocaleDateString(),
    curIndex: 0,
    curDayTest: "",
    resultDayTest: ""
  };

  componentDidMount() {
    this.getHourLocation();
  }
  getHourLocation() {
    navigator.geolocation.getCurrentPosition(posData => {
      fetchWeatherHourly(
        posData.coords.latitude,
        posData.coords.longitude
      ).then(res => {
        //var isFound = this.findHour(res.json, "09");

        this.setState({
          json: res.json,
          loaded: true
        });
        var hour = "" + this.props.hour;
        this.getHourInfo(hour);
        hour = this.removeZeroNumber(hour);
        this.setState({
          hourTime: hour
        });
      });
    });
  }

  getHourInfo(hour) {
    if (!this.state.loaded) {
      this.setState({ hourTemprature: "" });
      return;
    }
    const { json } = this.state;
    var curDay = parseInt(this.getDayNum().toString());
    for (let i = 0; i < 60; i++) {
      var wholeTime =
        "" + json.hourlyForecasts.forecastLocation.forecast[i].localTime;
      var resultHour = wholeTime.substring(0, 2);
      var resultDay = wholeTime.substring(4, 6);
      
      if ( (hour == resultHour || (resultHour[0] == 0 && hour == resultHour[1])) ) {
        if(  parseInt(resultDay)  == curDay ) { // IF APP IS TAKING TOO MUCH TIME TO LOAD  REMOVE THIS IF STATEMENT
          // for example if hour=7 and resultHour=07, go in
          var hourTemp = Math.round(
            json.hourlyForecasts.forecastLocation.forecast[i].temperature
          );
          var hourPerception = Math.round(
            json.hourlyForecasts.forecastLocation.forecast[i]
              .precipitationProbability
          );
          var hourPerceptionDesc =
            json.hourlyForecasts.forecastLocation.forecast[i].precipitationDesc;
          var hourSkyDescripton =
            json.hourlyForecasts.forecastLocation.forecast[i].skyDescription;
          this.setState({
            hourTemprature: hourTemp,
            hourPerception: hourPerception,
            perceptionDesc: hourPerceptionDesc,
            skyDescription: hourSkyDescripton,
            weatherInfo: json.hourlyForecasts.forecastLocation.forecast[i].iconName,
            skyDescLoaded: true,
            curIndex: i,
            curDayTest: curDay,
            resultDayTest: resultDay,
          });
          return;
        }
      }
    }
    this.setState({ hourTemprature: "non" });
  }

  // if hour is 01 or 02 or 03 remove the zero. so it returns 1 or 2 or 3
  removeZeroNumber(hour) {
    if (hour != "00" && hour[0] == "0") hour = hour[1];
    return hour;
  }

  isNight(hour) {
    if(this.state.weatherInfo.includes("night"))  return true;
    return false;
  }

  getIconName(isNight) {
    if (!this.state.skyDescLoaded) {
      return "md-time";
    }
    var desc = this.state.skyDescription + "";
    var rainInfo = (this.state.perceptionDesc+"").toLowerCase();
    if(rainInfo.includes("snow")) return "ios-snow"
    if((rainInfo.includes("rain") || rainInfo.includes("sprinkles") || rainInfo.includes("showers"))
        && (parseInt(""+this.state.hourPerception) >= 30))
        return "ios-rainy";
    
    if (isNight) {
      if ((desc + "").includes("cloud")) return "ios-cloudy-night";
      else return "ios-moon";
    }

    if (desc.includes(" ")) {
      var newDesc = desc.split(" ").join("_");
      return newIconNames[newDesc].text;
      //return newDesc;
    }
    return newIconNames[desc].text + "";
    //return desc;
  }

  getIconColor(skyDescription, iconName) {
    var desc = skyDescription + "";
    if (!this.state.skyDescLoaded) {
      return "white";
    }
    if(iconName == "ios-rainy" || iconName == "ios-snow") return 'white';
    if (iconName == "ios-moon") return "#FFD017"; // if the icon is moon return yellow

    if (desc.includes(" ")) {
      var newDesc = desc.split(" ").join("_"); // when desc="Partly sunny" newDesc="Partly_sunny"
      return newIconNames[newDesc].color;
    }
    return newIconNames[desc].color;
  }

  getCorrectMonth(month) {
    var newMonth = month+"";
    if(newMonth.length == 1)
      return ("0" + newMonth);
    else return newMonth;
  }

  // USE THIS METHOD TO FIX HOUR PROBLEM
  getDayNum() {
    //return (this.state.isNextDay+"")
    var today = new Date();
    var year = today.getFullYear();
    var month = this.getCorrectMonth(today.getMonth()+1);
    var dayNum = today.getDate();
    var curDay = new Date(year+"-"+this.getCorrectMonth(month)+"-"+dayNum); // Feb 28 2019
    var nextDay = new Date(curDay);
    nextDay.setDate(curDay.getDate() + 1);
    //console.log(nextDay); // Mar 01 2019
    
    if(this.props.nextDay)
      return ("" + nextDay).substring(7, 10);
    else {
      return ("" + curDay).substring(7, 10);
    }
    
  }

  render() {
    var isNightTime = this.isNight(this.state.hourTime);
    var weatherIconName = this.getIconName(isNightTime);
    var weatherIconColor = this.getIconColor(
      this.state.skyDescription,
      weatherIconName
    );
    //var weatherIconSize = this.getIconSize(weatherIconName);

    return (
      <TouchableOpacity style={[styles.container, {}]}>
        <View style={styles.marginViewStyle}>
          <Text style={[styles.text, { marginVertical: 5 }]}>
            {this.state.hourTime}:00{" "}
          </Text>
          <Icon
            name={weatherIconName}
            style={{ margin: 5 }}
            color={weatherIconColor}
            size={20}
          />
          <View style={styles.perception}>
            <Text style={[styles.text, { color: "#c0d0d8" }]}>
              {this.state.hourPerception}%
            </Text>
            <Icon
              name={"ios-water"}
              style={{ margin: 5 }}
              color="#c0d0d8"
              size={15}
            />
          </View>
          <Text style={[styles.text, { marginVertical: 5 }]}>
            {this.state.hourTemprature+""}°
            {/*this.state.curIndex}° */}
          </Text>
        </View>
      </TouchableOpacity>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 55,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
    //backgroundColor: 'green'
  },
  marginViewStyle: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  perception: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  text: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 11,
    color: "white"
  }
});
