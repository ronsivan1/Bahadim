
import React, { Fragment } from 'react';
import AppWrapper from './AppWrapper';
import { I18nManager, SafeAreaView, StatusBar } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomePage from './src/screens/HomePage'


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} >
      <StatusBar translucent backgroundColor={'transparent'}   />
      <AppWrapper />
    </SafeAreaView>
  )
}


export default App;
