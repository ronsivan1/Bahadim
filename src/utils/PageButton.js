import React from 'react'
import {
    View, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    Platform, Image
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import OctiIcon from 'react-native-vector-icons/Octicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, RTLText, callNumber } from './components';

const SCREEN_HEIGHT = Dimensions.get('window').height;

function  PageButton({info}) {
    //const { info } = this.props;
    const navigation = useNavigation();
    
    return (
        <View style={styles.btnWrapper} >
            {Platform.select({
                'android':
                    <TouchableNativeFeedback 
                        onPress={onButtonPress.bind(null, info.pageName, info.pageProps, navigation)}
                        background={TouchableNativeFeedback.Ripple('#98a841', false)}
                        style={styles.btn} delayPressIn={0}  >
                        <ButtonImageBackground {...info} />
                    </TouchableNativeFeedback>,
                'ios': 
                    <TouchableOpacity 
                        onPress={onButtonPress.bind(null, info.pageName, info.pageProps, navigation)}
                        style={styles.btn} activeOpacity={0.45} delayPressIn={0}  >
                    <ButtonImageBackground {...info} />
                </TouchableOpacity>
            })}
        </View>
    )
}

const onButtonPress = (pageName, pageProps, navigation) => {
    pageName != 'caveret' ? navigation.navigate(pageName, pageProps) : callNumber("https://www.caveret.org/")
}

export default PageButton;

const ButtonImageBackground = (info) => {
    //const goodImageBackground = 'https://cdn.pixabay.com/photo/2013/07/13/12/05/army-159125_960_720.png'
    return (
        <ImageBackground imageStyle={{ opacity: 0.7, transform: [{ scaleX: -1 }], }}
            style={{
                width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around',
                flexDirection: 'row', backgroundColor: 'black'
            }}
            source={require('../images/pageButtonImage.jpg')} >
            <RTLText style={{ color: 'white', fontSize: scale(25.9), fontWeight: 'bold', width: '58%', }} >{info.text}</RTLText>

            {info.iconName == 'caveret' ? <Image source={require('../images/caveret.png')} style={{ height: scale(50), width: scale(50), resizeMode: 'contain' }} />
                : info.iconName == 'bahadimTag' ? <Image source={require('../images/bahadimTag.png')} style={{ height: scale(70), width: scale(50), resizeMode: 'contain' }} />
                : info.iconName == 'weirdBahadimLogo' ? <Image source={require('../images/weirdBahadimLogo.png')} style={{ transform:[{translateX: scale(-10)}], height: scale(70), width: scale(70), resizeMode: 'stretch' }} />
                : info.iconName == 'ahshamLogo' ? <Image source={require('../images/ahshamLogo.png')} style={{ height: scale(55), width: scale(55), resizeMode: 'contain' }} />
                    

                        : info.text == 'מכבסה' ? <MIIcon name={info.iconName} size={50} color='white' />
                            : info.iconType == 'MIIcon' ? <MIIcon name={info.iconName} size={50} color='white' />
                                : info.iconType == 'MCIcon' ? <MCIcon name={info.iconName} size={50} color='white' />
                                    : info.iconType == 'OctiIcon' ? <OctiIcon name={info.iconName} size={50} color='white' />
                                        : info.iconType == 'AntDesign' ? <AntDesignIcon name={info.iconName} size={50} color='white' />
                                            : info.iconType == 'IonIcon' ? <IonIcon name={info.iconName} size={50} color='white' />
                                                : info.iconType == 'Entypo' ? <EntypoIcon name={info.iconName} size={50} color='white' />

                                                    : <FAIcon name={info.iconName} size={50} color='white' />}

        </ImageBackground>
    )
};


const styles = StyleSheet.create({

    btnWrapper: {
        ...borderRadiusStyle(10, true),
        width: '100%', height: scale(90),
        //marginVertical: scale(10)
        marginTop: scale(30)
    },
    btn: {
        width: '100%', height: '100%',
        alignItems: 'center', justifyContent: 'center',

        ...borderRadiusStyle(10, false)
    },
})