import { StyleSheet, View } from "react-native";
import React, { Component } from "react";

export const Seperator = ({height}) => ( 
        <View style={[styles.seperator, {height: parseInt(height)}]}/>
);

const styles = StyleSheet.create({
    seperator: {
        borderRightColor: "#8b969b",
        borderRightWidth: 0.8,
        //borderLeftWidth: 0.3,
        //marginVertical: 10
        //marginHorizontal: 5,
      }
});
 