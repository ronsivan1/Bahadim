import React from 'react';
import {
  I18nManager, StyleSheet, View, Text,
  ScrollView, Animated, Platform, Dimensions,
  TouchableOpacity, Image, SafeAreaView, Easing,
  InteractionManager, PermissionsAndroid
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer, createDrawerNavigator, StackViewTransitionConfigs,
  createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, DrawerItems
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import { scale } from 'react-native-size-matters';



import {
  HomePage, BusPage, FoodPage, FacilitiesPage,
  MedicalPage, ProblemPage, GalleryPage, WeatherPage,
  InnerBusPage, DiningRoomPage, ShekemPage, PitiaPage
} from './src/screens';

import { useScreens } from 'react-native-screens';
useScreens();

const SCREEN_WIDTH = Dimensions.get('window').width;

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*async checkLocationPermission() {
    try {
      const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      console.log(result)
    }
    catch (err) {
      console.log('err: ' + err)
    }
  }*/

  
  componentDidMount() {
    

    
  }

  render() {
    return (
      <AppNavigationContainer />
    );
  }
}

const BusBottomNav = createBottomTabNavigator({
  BusPage: {
    screen: BusPage,
    navigationOptions: {
      tabBarLabel: 'שאטלים תופסים קו'
    }
  },
  InnerBusPage: {
    screen: InnerBusPage,
    navigationOptions: {
      tabBarLabel: 'שאטלים פנימיים'
    }
  },


}, {
    initialRouteName: 'BusPage',
    swipeEnabled: true,
    tabBarOptions: {
      style: { backgroundColor: '#eaeed3' },
      labelStyle: {
        fontSize: scale(14),
        fontWeight: 'bold',
        marginBottom: scale(15)
      }
    },
  });

const FoodBottomNav = createBottomTabNavigator({
  ShekemPage: {
    screen: ShekemPage,
    navigationOptions: ({ navigation }) => {

      return {
        title: 'שק"ם',
      };
    },
  },
  DiningRoomPage: {
    screen: DiningRoomPage,
    navigationOptions: ({ navigation }) => {
      //console.log(navigation.dangerouslyGetParent().dangerouslyGetParent())
      return {
        title: 'חדר אוכל',
      };
    },
  },
  PitiaPage: {
    screen: PitiaPage,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'פיתייה',
      };
    },
  },




}, {
    defaultNavigationOptions: {
      tabBarButtonComponent: Platform.OS == 'android' ? TouchableNativeFeedback : Platform.OS == 'ios' ? TouchableOpacity : TouchableOpacity
    },
    swipeEnabled: true,
    tabBarOptions: {
      style: { backgroundColor: '#eaeed3', justifyContent: 'space-around' },
      labelStyle: {
        fontSize: scale(14),
        fontWeight: 'bold',
        marginBottom: scale(15)
      },
      tabStyle: { width: SCREEN_WIDTH / 3 }
    },

  })



//let transitionNum = -1;
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
    screen: BusBottomNav,
    navigationOptions: ({ navigation }) => {
      const tabIndex = navigation.state.index;
      const headerTitle = tabIndex == 0 ? 'שאטלים' : 'שאטלים פנימיים';
      return {
        headerTitle: headerTitle,
      };
    },
  },
  FoodPage: {
    screen: FoodBottomNav,
    navigationOptions: ({ navigation }) => {
      const tabIndex = navigation.state.index;
      var tabParams = navigation.state.routes[tabIndex].params;
      tabParams = tabParams == undefined && tabIndex == 0 ? { headerTitle: 'שק"ם' }
        : tabParams == undefined ? {} : tabParams;
      return {
        headerTitle: tabParams.headerTitle,
      };
    },

  },
  FacilitiesPage: {
    screen: FacilitiesPage
  },
  MedicalPage: {
    screen: MedicalPage,
    navigationOptions: () => {
      return {
        headerTitle: 'רפואה'
      };
    }
  },
  ProblemPage: {
    screen: ProblemPage,
    navigationOptions: () => {
      return {
        headerTitle: 'טלפונים חשובים'
      };
    }
  },
  GalleryPage: {
    screen: GalleryPage
  },
  WeatherPage: {
    screen: WeatherPage
  }
}, {
    //initialRouteName: 'FoodPage',
    defaultNavigationOptions: {
      //gesturesEnabled: true,

      headerStyle: {
        backgroundColor: '#4b5320', height: scale(85), paddingTop: scale(20),
      },
      headerLeftContainerStyle: { paddingLeft: scale(6), color: '#fff', },
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

    }),

    /*
        onTransitionStart: (props) => { 
          console.log('onTransitionStart')
          transitionNum = InteractionManager.createInteractionHandle();
          InteractionManager.setDeadline()
         },
        onTransitionEnd: (props) => { 
          console.log('onTransitionEnd')
          if(transitionNum != -1)
            InteractionManager.clearInteractionHandle(transitionNum);
        },
    */
  })



const AppDrawerNavigator = createDrawerNavigator({
  HomePage: {
    screen: HomePageStackNavigator,

    navigationOptions: ({ navigation }) => {
      return {
        title: "דף הבית",
        drawerIcon: () => <Icon name={'md-home'} size={30} />,

      }
    },
  },
}, {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    contentOptions: {
      iconContainerStyle: { alignSelf: 'center', transform: [{ translateX: scale(80) }] },
      labelStyle: { transform: [{ translateX: scale(-40) }] },
      itemStyle: {
        justifyContent: 'flex-end',
      }
    },
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
const pic = 'https://lh3.googleusercontent.com/CvakuCnEPCgBLB1AyfjwfZ5mYyRsnGxx3qCos1uPUKQ3zXDe_vGnj0rbmiEXQe8Xtho';
const Logo = () => (
  <View style={{
    width: scale(300), height: scale(90), marginBottom: scale(20), marginTop: scale(10),
    borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.9,
    justifyContent: 'center'
  }} >
    <View style={{
      width: '100%', height: '90%', marginStart: scale(60),
      justifyContent: 'flex-end'
    }} >
      {/*<Text>אפליקציית עיר הבה"דים החדשה</Text>*/}
      <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
        source={{ uri: nicelogo }} />
    </View>
  </View>
)


const AppNavigationContainer = createAppContainer(AppDrawerNavigator);

export default AppWrapper;
