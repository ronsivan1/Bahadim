import React from "react";
//import { fetchWeatherHourly } from "./exports/hourlyWeather";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {newIconNames} from './exports/Phrases';
import HourBar from "./HourBar";
import { Seperator } from "./Seperator";
import DayBar from './DayBar';

export default class DailySection extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        curHour: new Date().getHours(),
      }
    }

    checkHour(hour) {
        if(hour == 24) return "00";
        if(hour == 25) return "01";
        if(hour == 26) return "02";
        if(hour == 27) return "03";
        return hour;
      }

      checkNextDay(hour, isNextDay) {
        if(isNextDay) return true;
        if(hour == "20" || hour == "21" || hour == "22" || hour == "23"
            || hour == "00")
          if(!isNextDay)
            return true;
        return false;
      }

    render() { 
        var {curHour, coords} = this.state;
        var nextDay = false;
        return ( 
          <View style={[styles.hoursContainer, {} ]}>
          <Text style={[styles.text]}>ימים</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'  }}>
            <DayBar day={0}
                    nextDay={curHour == "00" ? true : nextDay}/>
            {nextDay = this.checkNextDay(curHour, nextDay)}
            <Seperator height={170}/>
            <DayBar day={1}
                    nextDay={nextDay}/>
            {nextDay = this.checkNextDay(curHour, nextDay)}
            <Seperator height={170}/>
            <DayBar day={2}
                      nextDay={nextDay}/>
            {nextDay = this.checkNextDay(curHour, nextDay)}
            <Seperator height={170}/>
            <DayBar day={3}
                    nextDay={nextDay}/>
            {nextDay = this.checkNextDay(curHour, nextDay)}
            <Seperator height={170}/>
            <DayBar day={4}
                    nextDay={nextDay}/>
            {nextDay = this.checkNextDay(curHour, nextDay)}
            <Seperator height={170}/>
            <DayBar day={5}
                    nextDay={nextDay}/>
          </View>
        </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
      //backgroundColor: "#FFD017"
    },
    hoursContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 16,
        color: "white"
      },
});