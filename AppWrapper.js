import React from 'react';
import {
  I18nManager, StyleSheet, View, Text,
  ScrollView, Animated, StatusBar, Dimensions,
  TouchableOpacity, Image, SafeAreaView, 
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator,
   createStackNavigator, DrawerItems } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import HomePage from './src/screens/HomePage';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <AppNavigationContainer />
    );
  }
}

class Profile extends React.Component {
  render() {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("HomePage") }} >
        <Text style={{ color: 'black' }} >Profile</Text>
      </TouchableOpacity>
    </View>);
  }
}
const HomePageStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        /*headerStyle: { backgroundColor: 'transparent', marginTop: scale(30) }, // this hides the ripple that crosses the header lines
        headerLeft: (
          <View style={{ borderRadius: scale(40), overflow: 'hidden', }} >
            <TouchableNativeFeedback onPress={() => navigation.openDrawer()}
              background={TouchableNativeFeedback.Ripple('#2b2b2b', false)}
              style={{
                width: scale(70), height: scale(70),
                alignItems: 'center', justifyContent: 'center'
              }}>
              <Icon name="md-menu" size={30} />
            </TouchableNativeFeedback>
          </View>
        ),
        headerRight: (
          <View style={{ marginRight: scale(10), borderRadius: scale(25), overflow: 'hidden' }} >
            <Image style={{ height: scale(45), width: scale(45) }} source={{ uri: imageUri }} />
          </View>
        )*/
      };
    }
  },
  Profile: { screen: Profile }
})

const AppDrawerNavigator = createDrawerNavigator({
  HomePage: {
    screen: HomePageStackNavigator,
  },
  TestPage: {
    screen: HomePage
  }
}, {
  edgeWidth: scale(20),
  hideStatusBar: true,
  contentComponent: (props) => 
    <CustomDrawerContentComponent {...props} />,
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>

      <Logo />
      <DrawerItems {...props} />

    </SafeAreaView>
  </ScrollView>
);

const nicelogo = 'http://rng.org.il/wp-content/uploads/2015/08/%D7%A2%D7%99%D7%A8-%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D-%D7%9C%D7%95%D7%92%D7%95.jpg'

const Logo = () => (
  <View style={{
    width: scale(300), height: scale(90), marginBottom: scale(20), marginTop: scale(10),
    borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.9,
    justifyContent: 'center'
  }} >
    <View style={{ width: '50%', height: '90%', marginStart: scale(10), backgroundColor: 'blue' }} >
      <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
        source={{ uri: 'https://lh3.googleusercontent.com/CvakuCnEPCgBLB1AyfjwfZ5mYyRsnGxx3qCos1uPUKQ3zXDe_vGnj0rbmiEXQe8Xtho' }} />
    </View>
  </View>
)

const AppNavigationContainer = createAppContainer(AppDrawerNavigator);

export default AppWrapper;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: scale(45),
    width: scale(55),
    marginRight: scale(8)
  },
  headerRight: {
    backgroundColor: '#fff',
    marginRight: scale(10),
    width: scale(55),
    height: scale(55),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});