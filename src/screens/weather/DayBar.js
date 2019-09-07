import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { fetchWeatherDaily } from "./exports/hourlyWeather";
import { lat, lon} from './exports/weatherAPI';

export default class DayBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      perception: 0,
      perceptionDesc: "",
      skyDescription: "Default",
      weatherInfo: "",
      json: "",
      loaded: false,
      skyDescLoaded: false,
  
      currentDay: "",
      maxTemp: 0,
      minTemp: 0,
    };
  }

  componentDidMount() {
    this.getHourLocation();
  }
  getHourLocation() {
    fetchWeatherDaily(lat, lon).then(
      res => {
        //var isFound = this.findHour(res.json, "09");

        this.setState({
          json: res.json,
          loaded: true
        });

        this.getDayInfo();

        //var hour = "" + this.props.hour;
        //this.getHourInfo(hour);
        //hour = this.removeZeroNumber(hour);
        //this.setState({
        //  hourTime: hour
        //});
      }
    );
  }
  getDayInfo() {
    if (!this.state.loaded) {
      this.setState({ currentDay: "" });
      return;
    }

    const { json } = this.state;
    const i = this.props.day;
    var day = json.dailyForecasts.forecastLocation.forecast[i].weekday;
    const maxTemp = Math.round(json.dailyForecasts.forecastLocation.forecast[i].highTemperature);
    const minTemp = Math.round(json.dailyForecasts.forecastLocation.forecast[i].lowTemperature);
    const perception = Math.round(json.dailyForecasts.forecastLocation.forecast[i].precipitationProbability);
    const perceptionDesc = json.dailyForecasts.forecastLocation.forecast[i].precipitationDesc;
    const skyDescription = json.dailyForecasts.forecastLocation.forecast[i].skyDescription;
    day = day == 'Sunday' ? 'ראשון' : day == 'Monday' ? 'שני' : day == 'Tuesday' ? 'שלישי' : 
      day == 'Wednesday' ? 'רביעי' : day == 'Thursday' ? 'חמישי' : day == 'Friday' ? 'שישי' : 'שבת' 
    this.setState({ 
      currentDay: day,
      maxTemp: maxTemp,
      minTemp: minTemp,
      perception: perception,
      perceptionDesc: (perceptionDesc+"").toLowerCase(),
      skyDescription: (skyDescription+"").toLowerCase(),
      skyDescLoaded: true,
    });
  }

  isNight(hour) {
    if (this.state.weatherInfo.includes("night")) return true;
    return false;
  }

  getMorningIconName() {
    if (!this.state.skyDescLoaded) {
      return "md-time";
    }
    // Check for rain
    var rainInfo = (this.state.perceptionDesc+"").toLowerCase();
    if((this.state.perceptionDesc+"") != 0) {
      if(rainInfo.includes("snow") && !rainInfo.includes("late"))
        return "md-snow"
      if(this.isRainy(rainInfo))
        if(rainInfo.includes("early") || rainInfo.includes("morning"))
          return "ios-rainy";
        if(this.containsNoTimeIndication(rainInfo))
          return "ios-rainy";
    }
    
    const skyDesc = this.state.skyDescription+"";
    // Check if there is no time indication like "late" or "early"
    if(this.containsNoTimeIndication(skyDesc))
      if(skyDesc.includes("cloud"))
        return "ios-cloudy"
      if(skyDesc.includes("sunny"))
        return "ios-sunny"

    // Check if there is morning indication 
    if(skyDesc.includes("morning") || skyDesc.includes("early") || skyDesc.includes("afternoon"))
      if(skyDesc.includes("cloud") && skyDesc.includes("sun"))
        return "ios-partly-sunny"
      if(skyDesc.includes("cloud"))
        return "ios-cloudy"
      if(skyDesc.includes("sunny"))
        return "ios-sunny"
    //var randomNumber = Math.floor(Math.random() * 4) + 1;
  }

  isRainy(rain) {
    const rainInfo = rain+"";
    if(rainInfo.includes("rain") || rainInfo.includes("sprinkles") || rainInfo.includes("showers"))
      return true;
  }

  getNightIconName() {
    if (!this.state.skyDescLoaded) {
      return "md-time";
    }
    // Check for rain
    var rainInfo = (this.state.perceptionDesc+"").toLowerCase();
    if((this.state.perceptionDesc+"") != 0) {
      if(rainInfo.includes("snow") && !rainInfo.includes("early"))
        return "md-snow"
      if(this.isRainy(rainInfo))
        if(rainInfo.includes("late") || rainInfo.includes("night"))
          return "ios-rainy";
        if(this.containsNoTimeIndication(rainInfo))
          return "ios-rainy";
    }

    const skyDesc = this.state.skyDescription+"";
    // Check if there is no time indication like "late" or "early"
    if(this.containsNoTimeIndication(skyDesc))
        if(skyDesc.includes("cloud"))
          return "ios-cloudy-night"
    // Check if it contains night time indication
    if(skyDesc.includes("late") || skyDesc.includes("night"))
      if(skyDesc.includes("cloud"))
        return "ios-cloudy-night";

    return "ios-moon";

    
  }
  getIconColor(iconName) {
    if(iconName == "ios-sunny" || iconName == "ios-partly-sunny" ||
        iconName == "ios-moon") return "#FFD017";
    return "white";
  }

  containsNoTimeIndication(desc) {
    const skyDesc = desc+"";
    if(!skyDesc.includes("late") && !skyDesc.includes("night") && !skyDesc.includes("morning")
        && !skyDesc.includes("early") && !skyDesc.includes("afternoon"))
          return true;
  }

  render() {
    var isNightTime = this.isNight(this.state.hourTime);
    var morningIconName = this.getMorningIconName();
    var nightIconName = this.getNightIconName();
    //var weatherIconSize = this.getIconSize(weatherIconName);
    
    return (
      <TouchableOpacity style={[styles.container]}>
        <View style={styles.marginViewStyle}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={[styles.text, { fontSize: 11, marginVertical: 5 }]}>
              {this.state.currentDay + ""}
            </Text>
            <Icon
              name={morningIconName}
              style={{ margin: 5, marginStart: 18 }}
              color={this.getIconColor(morningIconName)}
              size={20}
            />
            <View style={{borderBottomColor: 'white', borderBottomWidth: 0.6, width: 50,
                  transform: ([{rotate: '135deg'}])}}  />

            <Icon
              name={nightIconName}
              style={{ margin: 5, marginEnd: 18 }}
              color={this.getIconColor(nightIconName)}
              size={20}
            />

          </View>
          <View style={styles.perception}>
            <Text style={[styles.text, { color: "#c0d0d8" }]}>
              {this.state.perception}%
            </Text>
            <Icon
              name={"ios-water"}
              style={{ margin: 5 }}
              color="#c0d0d8"
              size={15}
            />
          </View>

          <Text style={[styles.text, { marginVertical: 5, marginStart: 15 }]}>
            {this.state.maxTemp}°{/*this.state.curIndex}° */}
          </Text>
          <View style={{borderBottomColor: 'white', borderBottomWidth: 0.6, width: 50,
                  transform: ([{rotate: '135deg'}])}}  />
          <Text style={[styles.text, { marginVertical: 5, marginEnd: 15 }]}>
            {this.state.minTemp}°{/*this.state.curIndex}° */}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
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
    fontSize: 10.5,
    color: "white"
  }
});
