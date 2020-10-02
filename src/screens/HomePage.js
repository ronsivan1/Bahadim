import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Button as RNButton
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {borderRadiusStyle} from '../utils';

//import { getStatusBarHeight } from 'react-native-status-bar-height';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //this.sbHeight = getStatusBarHeight();
  }
  render() {
    //console.log('rendered HomePage')

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#fff', //'#F5F5DC', // this View defines the height and width of the LG and it's background color.
            width: scale(475),
            height: '35%',
          }}>
          <LinearGradient
            colors={[/*"#586125", */ '#4b5320', '#4b5320']}
            style={{
              height: '100%',
              width: '100%',
              borderBottomRightRadius: scale(500),
              borderBottomLeftRadius: scale(500),
            }}>
            <View
              style={{
                marginTop: 0,
                height: scale(60),
                width: SCREEN_WIDTH,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: scale(10),
                //overflow: 'hidden',
              }}>
              <View
                style={{
                  marginStart: scale(5),
                  borderRadius: scale(25),
                  overflow: 'hidden',
                }}>
                <Image
                  style={{height: scale(45), width: scale(45)}}
                  source={require('../images/bahadimRoundedTag.png')}
                />
              </View>

              <View style={{borderRadius: scale(40), overflow: 'hidden'}}>
                {Platform.OS == 'android' ? (
                  <TouchableNativeFeedback
                    onPress={() => this.props.navigation.openDrawer()}
                    background={TouchableNativeFeedback.Ripple(
                      '#98a841',
                      false,
                    )}
                    style={{
                      width: scale(70),
                      height: scale(70),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="md-menu" size={30} color={'#fff'} />
                  </TouchableNativeFeedback>
                ) : Platform.OS == 'ios' ? (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.openDrawer()}
                    style={{
                      width: scale(60),
                      height: scale(60),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="md-menu" size={30} color={'#fff'} />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            <View style={{alignSelf: 'center', alignItems: 'center'}}>
              <Text style={styles.title}>קריית ההדרכה</Text>
              <Text style={[styles.title, {fontSize: scale(16)}]}>
                ע"ש האלוף אריאל שרון
              </Text>
            </View>
          </LinearGradient>
        </View>
        <SafeAreaView
          style={{
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#fff',
            //height: SCREEN_HEIGHT - (scale(250) + this.sbHeight),
            height: '65%',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%', // height: scale(375)
              /*justifyContent: 'space-around', backgroundColor: 'green',*/
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.buttonsRow}>
              <Button
                buttonInfo={{
                  name: 'ios-bus',
                  text: 'שאטלים',
                  pageName: 'BusPage',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'hamburger',
                  text: 'שק"ם',
                  pageName: 'FoodPage',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'ios-business',
                  text: 'מתקנים קריתיים',
                  pageName: 'FacilitiesPage',
                }}
                navigate={this.props.navigation.navigate}
              />
            </View>
            <View style={styles.buttonsRow}>
              <Button
                buttonInfo={{
                  name: 'md-images',
                  text: 'גלריה',
                  pageName: 'GalleryPage',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'md-call',
                  text: 'טלפונים',
                  pageName: 'PhonesPage',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'md-medkit',
                  text: 'רפואה',
                  pageName: 'MedicalPage',
                }}
                navigate={this.props.navigation.navigate}
              />
            </View>
            <View style={styles.buttonsRow}>
              <Button
                buttonInfo={{
                  name: 'ios-partly-sunny',
                  text: 'מזג אוויר',
                  pageName: 'WeatherPage',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'truck-fast',
                  text: 'משלוחי אוכל',
                  pageName: 'FoodDelivery',
                }}
                navigate={this.props.navigation.navigate}
              />
              <Button
                buttonInfo={{
                  name: 'ios-information-circle',
                  text: 'מידע נוסף',
                  pageName: 'InfoPage',
                }}
                navigate={this.props.navigation.navigate}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const onButtonPress = (pageName, navigate) => {
  navigate(pageName);
};

const Button = (props) => {
  const buttonInfo = props.buttonInfo;
  return (
    <View style={styles.btnWrapper}>
      {Platform.select({
        android: (
          <TouchableNativeFeedback
            onPress={onButtonPress.bind(
              null,
              buttonInfo.pageName,
              props.navigate,
            )}
            background={TouchableNativeFeedback.Ripple('#98a841', false)}
            style={styles.btn}
            delayPressIn={0}>
            <ButtonImageBackground
              buttonInfo={{
                name: buttonInfo.name,
                pageName: buttonInfo.pageName,
                text: buttonInfo.text,
              }}
            />
          </TouchableNativeFeedback>
        ),
        ios: (
          <TouchableOpacity
            onPress={onButtonPress.bind(
              null,
              buttonInfo.pageName,
              props.navigate,
            )}
            style={styles.btn}
            activeOpacity={0.45}
            delayPressIn={0}>
                <ButtonImageBackground
                  buttonInfo={{
                    name: buttonInfo.name,
                    pageName: buttonInfo.pageName,
                    text: buttonInfo.text,
                  }}
                />
          </TouchableOpacity>
        ),
      })}
    </View>
  );
};

const ButtonImageBackground = ({buttonInfo}) => (
  <ImageBackground
    style={{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    source={require('../images/homePageBtnBackground.jpg')}>


    {buttonInfo.name === 'hamburger' ? (
      <FAIcon
        name={buttonInfo.name}
        size={50}
        color="white"
        style={
          Platform.OS === 'ios'
            ? {paddingBottom: scale(6)}
            : {
                /** backgroundColor: 'blue' */
              }
        }
      />
    ) : buttonInfo.name.includes('truck') ? (
      <MCIcon
        name={buttonInfo.name}
        size={50}
        color="white"
        style={
          {
            /** backgroundColor: 'blue' */
          }
        }
      />
    ) : (
      <Icon
        name={buttonInfo.name}
        size={50}
        color="white"
        style={
          {
            /**backgroundColor: 'blue',*/
          }
        }
      />
    )}
    <Text
      style={{
        color: 'white',
        fontSize:
          buttonInfo.pageName === 'FacilitiesPage' ? scale(12) : scale(14),
      }}>
      {buttonInfo.text}
    </Text>



  </ImageBackground>
);

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: scale(38),
    color: '#fff',
  },
  btnWrapper: {
    ...elevationShadowStyle(10),
    ...borderRadiusStyle(10, true),
  },
  btn: {
    width: scale(90),
    height: scale(90),
    alignItems: 'center',
    justifyContent: 'center',
    ...borderRadiusStyle(10, false),
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
