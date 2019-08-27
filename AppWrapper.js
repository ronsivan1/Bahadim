import React from 'react';
import {
  I18nManager, StyleSheet, View, Text,
  ScrollView, Animated, StatusBar, Dimensions,
  TouchableOpacity, Image, SafeAreaView, Easing,
  InteractionManager
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer, createDrawerNavigator, StackViewTransitionConfigs,
  createStackNavigator, createBottomTabNavigator, DrawerItems
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import { scale } from 'react-native-size-matters';
import {
  HomePage, BusPage, FoodPage, FacilitiesPage,
  MedicalPage, ProblemPage, GalleryPage, WeatherPage,
  InnerBusPage,
} from './src/screens';

import { useScreens } from 'react-native-screens';
useScreens();

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

const BusBottomNav = createBottomTabNavigator({
  InnerBusPage: {
    screen: InnerBusPage,
    navigationOptions: {
      tabBarLabel: 'שאטלים פנימיים'
    }
  },
  BusPage: {
    screen: BusPage,
    navigationOptions: {
      tabBarLabel: 'שאטלים תופסים קו'
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



let transitionNum = -1;
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
      return {
        headerTitle: 'שאטלים',
      };
    },
  },
  FoodPage: {
    screen: FoodPage
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
    //initialRouteName: 'ProblemPage',
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
    <View style={{ width: '100%', height: '90%', marginStart: scale(60), 
      justifyContent: 'flex-end' }} >
      {/*<Text>אפליקציית עיר הבה"דים החדשה</Text>*/}
      <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
        source={{ uri: nicelogo }} />
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