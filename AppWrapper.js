import React from 'react';
import {
  StyleSheet, View, Text,
  ScrollView, Animated, Platform, Dimensions,
  Image, SafeAreaView, Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import { scale } from 'react-native-size-matters';
import { enableScreens } from 'react-native-screens';
import {
  HomePage, BusPage,
  MedicalPage, Pharmacy, Moked6690, Harap, LabServices,
  PhonesPage, GeneralPhones, BahadPhones, MorePhones,
  GalleryPage, WeatherPage,
  InnerBusPage, DiningRoomPage, ShekemPage, PitiaPage,
  FacilitiesPage, SportPage, LaundryPage, BarberPage, OtherFacilitiesPage,
  InfoPage, RookieRights,
  JewishPage, PrayTimes, Lessons, Contact,
  TashPage, Procedures, Yohalam, SoldierRights,
  FoodDelivery
} from './src/screens';

enableScreens();

//import { getStatusBarHeight } from 'react-native-status-bar-height';
//const sbHeight = getStatusBarHeight();

const SCREEN_WIDTH = Dimensions.get('window').width;

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
const mainStackNavConfig = {
  //initialRouteName: 'FacilitiesPage',
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#4b5320', height: scale(55),
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      //backgroundColor: '#4b5320'
     },
    headerForceInset: { top: 'never', bottom: 'never' }, // this removes the SafeArea paddingTop on iOS
    headerLeftContainerStyle: { paddingLeft: scale(6), color: '#fff', },
    headerTintColor: 'white',
    gesturesEnabled: 'true'
    //headerMode: 'screen',
    //headerTransitionPreset: 'uikit'
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      useNativeDriver: true,
      duration: 300,
      timing: Animated.timing,
      easing: Easing.inOut(Easing.ease),
      gesturesEnabled: 'false'
    },
  })
  
}
const bottomNavConfig = {
  //initialRouteName: 'BusPage',
  tabBarOptions: {
    style: {
      backgroundColor: '#eaeed3',
      transform: [{ translateY: scale(1) }], shadowColor: 'transparent', elevation: 0
    }, // these styles are to hide the borderBottom
    labelStyle: {
      fontSize: scale(14),
      fontWeight: 'bold',
      //marginBottom: scale(15),
    },
    inactiveTintColor: '#6b6b6b',
    activeTintColor: '#4169E1',
    indicatorStyle: { backgroundColor: '#4b5320' },
    pressColor: '#5b5b5b',
    //scrollEnabled: true // it's working with hebrew in react-navigation 4 !!!
  },

  tabBarPosition: 'bottom'
}
const secondaryStackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#4b5320', height: scale(50)
    },
    headerLeftContainerStyle: { paddingLeft: scale(6), color: '#fff', },
    headerForceInset: { top: 'never', bottom: 'never' }, // this removes the SafeArea paddingTop on iOS
    headerTintColor: 'white',
    
  },

  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      useNativeDriver: true,
      duration: 300,
      timing: Animated.timing,
      easing: Easing.inOut(Easing.ease),

    },
  })
}
const BusBottomNav = createMaterialTopTabNavigator({
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


}, bottomNavConfig);

const FoodBottomNav = createMaterialTopTabNavigator({
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
}, bottomNavConfig)

/*const FacilitiesStackNav = createStackNavigator({

  FacilitiesPage: {
    screen: FacilitiesPage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        //header: (headerProps) => <CustomHeader props={{headerTitle: 'מתקנים קריתיים', navigation}} />
      };
    }
  },
  
  }, secondaryStackConfig)*/

//let transitionNum = -1;
const HomePageStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        headerBackTitle: 'דף הבית'
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
  
  MedicalPage: {
    screen: MedicalPage, navigationOptions: { headerTitle: 'רפואה', headerTitleStyle: {opacity: 0} }
  },
  Pharmacy: { screen: Pharmacy, navigationOptions: { headerTitle: 'בית מרקחת' } },
  Moked6690: { screen: Moked6690, navigationOptions: { headerTitle: 'מוקד מ"קול הלב"' } },
  Harap: { screen: Harap, navigationOptions: { headerTitle: 'חר"פ' } },
  LabServices: { screen: LabServices, navigationOptions: { headerTitle: 'שירותי מעבדה' } },


  PhonesPage: {
    screen: PhonesPage, navigationOptions: { headerTitle: 'טלפונים חשובים' }
  },
  BahadPhones: { screen: BahadPhones, navigationOptions: { headerTitle: 'לשכות' } },
  GeneralPhones: { screen: GeneralPhones, navigationOptions: { headerTitle: 'כללי' } },
  MorePhones: { screen: MorePhones, navigationOptions: { headerTitle: 'טלפונים נוספים' } },

  GalleryPage: {
    screen: GalleryPage,
    navigationOptions: () => {
      return {
        headerTitle: 'גלריה',
      };
    }
  },
  
  WeatherPage: {
    screen: WeatherPage,
    navigationOptions: () => {
      return {
        headerTitle: 'מזג אוויר'
      };
    }
  },
  FacilitiesPage: {
    screen: FacilitiesPage,
    navigationOptions: {
      headerTitle: 'מתקנים',
      headerTitleStyle: {opacity: 0}, // this hides the headerTitle since we don't want it to display twice
      
    }
  },
  SportPage: { screen: SportPage, navigationOptions: { headerTitle: 'מרכז הספורט',} },
  LaundryPage: { screen: LaundryPage, navigationOptions: { headerTitle: 'מכבסה' } },
  BarberPage: { screen: BarberPage, navigationOptions: { headerTitle: 'מספרה' } },
  OtherFacilitiesPage: { screen: OtherFacilitiesPage, navigationOptions: { headerTitle: 'מתקנים נוספים' } },

  InfoPage: {
    screen: InfoPage, navigationOptions: {
      headerTitle: 'מידע נוסף',
      headerTitleStyle: {opacity: 0}
    }
  },
  RookieRights: { screen: RookieRights, navigationOptions: { headerTitle: 'טירונות ורובאות' } },
  

  JewishPage: { screen: JewishPage, navigationOptions: { headerTitle: 'יהדות', headerTitleStyle: {opacity: 0} } },
  PrayTimes: { screen: PrayTimes, navigationOptions: { headerTitle: 'זמני תפילות' } },
  Lessons: { screen: Lessons, navigationOptions: { headerTitle: 'לוח שיעורים' } },
  Contact: { screen: Contact, navigationOptions: { headerTitle: 'צור קשר' } },

  TashPage: { screen: TashPage, navigationOptions: { headerTitle: 'פרט ות"ש', headerTitleStyle: {opacity: 0} } },
  Procedures: { screen: Procedures, navigationOptions: { headerTitle: 'נהלים' } },
  Yohalam: { screen: Yohalam, navigationOptions: { headerTitle: 'פנייה ליוהל\"ם' } },
  SoldierRights: { screen: SoldierRights, navigationOptions: { headerTitle: 'זכויות החייל' } },

  FoodDelivery: { screen: FoodDelivery, navigationOptions: { headerTitle: 'משלוחי אוכל' } },

}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#4b5320', height: scale(55),
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      //backgroundColor: '#4b5320'
     },
    headerForceInset: { top: 'never', bottom: 'never' }, // this removes the SafeArea paddingTop on iOS
    headerLeftContainerStyle: { paddingLeft: scale(6), color: '#fff', },
    headerTintColor: 'white',
    gesturesEnabled: true,
    gestureDirection: 'inverted'
    //headerMode: 'screen',
    //headerTransitionPreset: 'uikit'
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    transitionSpec: {
      useNativeDriver: true,
      duration: 300,
      timing: Animated.timing,
      easing: Easing.inOut(Easing.ease),
      
    },
  })
})

/*const CustomHeader = ({ props }) => {
  const goBackIconName = Platform.OS == 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  //console.log(props.navigation.actions.goBack());
  return (
    <View style={{
      //backgroundColor: 'transparent',//'#F5F5DC', // this View defines the height and width of the LG and it's background color.
      alignItems: 'center'
    }} >
      <LinearGradient colors={["#586125", "#4b5320",]}
        style={{
          width: '130%', height: scale(200), alignSelf: 'center',
          borderBottomRightRadius: scale(180), borderBottomLeftRadius: scale(180),

        }} >
        <View style={{
          height: scale(60), width: '80%',
          alignSelf: 'center', justifyContent: 'center',
          //backgroundColor: 'blue',
        }} >

          <View style={{
            borderRadius: scale(40), overflow: 'hidden',  //backgroundColor: 'green',
            width: scale(40), height: scale(40), marginStart: scale(20)
          }} >
            <TouchableNativeFeedback onPress={() => { props.navigation.goBack(null) }}
              background={TouchableNativeFeedback.Ripple('#1b1b1b', false)}
              style={{
                width: '100%', height: '100%',
                alignItems: 'center', justifyContent: 'center'
              }}>
              <Icon name={goBackIconName} size={26} color={'#fff'} />
            </TouchableNativeFeedback>
          </View>

        </View>

        <View style={{ alignSelf: 'center', alignItems: 'center' }} >
          <Text style={styles.title} >{props.headerTitle}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}*/


const AppDrawerNavigator = createDrawerNavigator({
  HomePage: {
    screen: HomePageStackNavigator,
    navigationOptions: {
      title: "דף הבית",
      drawerIcon: () => <Icon name={'md-home'} size={30} />,
    }
  }
}, {
  drawerPosition: 'left',
  //overlayColor: 'rgba(0, 0, 0, 0.8)',
  contentOptions: {
    iconContainerStyle: { alignSelf: 'center', /*transform: [{ translateX: scale(80) }]*/ },
    labelStyle: { transform: [{ translateX: scale(20) }] },

  },
  edgeWidth: scale(20),
  //hideStatusBar: true,
  contentComponent: (props) =>
    <CustomDrawerContentComponent {...props} />,
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>

      <Logo />
      <DrawerNavigatorItems {...props} />

    </SafeAreaView>
  </ScrollView>
);

const nicelogo = 'http://rng.org.il/wp-content/uploads/2015/08/%D7%A2%D7%99%D7%A8-%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D-%D7%9C%D7%95%D7%92%D7%95.jpg'
const pic = 'https://lh3.googleusercontent.com/CvakuCnEPCgBLB1AyfjwfZ5mYyRsnGxx3qCos1uPUKQ3zXDe_vGnj0rbmiEXQe8Xtho';
const Logo = () => (
  <View style={{
    width: scale(300), height: scale(90), marginBottom: scale(20),
    borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.9,
    justifyContent: 'center'
  }} >
    <View style={{
      width: scale(120), height: '90%', //backgroundColor: 'blue', 
    }} >
      <Image style={{
        flex: 1, width: null, height: null, resizeMode: 'contain',
      }}
        source={require('./src/images/bahadimLogo.jpg')} />
    </View>
  </View>
)


const AppNavigationContainer = createAppContainer(AppDrawerNavigator);

export default AppWrapper;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(32),
    color: '#fff'
  }
})
