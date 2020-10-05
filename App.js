import React, {Fragment} from 'react';
import AppWrapper from './AppWrapper';
import {
  StyleSheet,
  I18nManager,
  SafeAreaView,
  StatusBar,
  Platform,
  LogBox,
} from 'react-native';
//import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { enableScreens } from 'react-native-screens';
enableScreens();

LogBox.ignoreLogs(['RCTRootView cancelTouches']);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNavigationBars = () => {
    //changeNavigationBarColor('#eaeed3', true);
    return Platform.select({
      android: <StatusBar backgroundColor="#4b5320" animated />,
      ios: <StatusBar barStyle="light-content" showHideTransition="fade" />,
    });
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.topNavBarIOS}  />
        <SafeAreaView style={styles.bottomNavBar}>
          {this.renderNavigationBars()}
          <AppWrapper />
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  topNavBarIOS: {
    flex: 0,
    backgroundColor: '#4b5320'
  },
  bottomNavBar: {
    flex: 1,
    //backgroundColor: '#eaeed3' // this changes IOS bottom nav color, for Android, react-native-navigation-bar-color is needed
  }
})
