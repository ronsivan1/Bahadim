import React, {Fragment} from 'react';
import AppWrapper from './AppWrapper';
import {
  I18nManager,
  SafeAreaView,
  StatusBar,
  Platform,
  YellowBox,
} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
//import { useScreens } from 'react-native-screens';
//useScreens();

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNavigationBars = () => {
    changeNavigationBarColor('#eaeed3', true);
    return Platform.select({
      android: <StatusBar backgroundColor="#4b5320" animated />,
      ios: <StatusBar barStyle="light-content" showHideTransition="fade" />,
    });
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{flex: 0, backgroundColor: '#4b5320'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: '#eaeed3'}}>
          {this.renderNavigationBars()}
          <AppWrapper />
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
