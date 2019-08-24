import React from 'react';
import {
  I18nManager, StyleSheet, View, Text,
  ScrollView, Animated, StatusBar, Dimensions,
  TouchableOpacity, Image, SafeAreaView, Easing
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator, StackViewTransitionConfigs,
   createStackNavigator, DrawerItems } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import { scale } from 'react-native-size-matters';
import {HomePage, BusPage, FoodPage, FacilitiesPage,
   MedicalPage, ProblemPage, GalleryPage, WeatherPage} from './src/screens';

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

const HomePageStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  BusPage: { 
    screen: BusPage,
   },
   FoodPage: {
     screen: FoodPage
   },
   FacilitiesPage: {
     screen: FacilitiesPage
   },
   MedicalPage: {
    screen: MedicalPage
  },
  ProblemPage: {
    screen: ProblemPage
  },
  GalleryPage: {
    screen: GalleryPage
  },
  WeatherPage: {
    screen: WeatherPage
  }
}, {
  //initialRouteName: 'BusPage',
  defaultNavigationOptions: {
    gesturesEnabled: true,
      headerStyle: {backgroundColor: '#4b5320', height: scale(85), paddingTop: scale(20) },
      headerLeftContainerStyle: { paddingLeft: scale(6), color: '#fff' },
      headerTintColor: 'white',
    
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      useNativeDriver: true,
      duration: 350,
      timing: Animated.timing,
      easing: Easing.inOut(Easing.ease),

    },

  })

})


const AppDrawerNavigator = createDrawerNavigator({
  HomePage: {
    screen: HomePageStackNavigator,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "דף הבית",  }
    },
  },
  BusPage: {
    screen: BusPage,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "שאטלים", }
    },
  }
}, {
  
  contentOptions: {  itemStyle: { alignItems: 'flex-end' }  },
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