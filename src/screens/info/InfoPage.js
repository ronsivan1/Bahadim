import React from 'react'
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, RTLText } from '../../utils';
import { CustomHeader, Container } from '../../utils';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <CustomHeader {...this.props} headerTitle='מידע נוסף' >
                <Container {...this.props} >
                
                        <View style={styles.pageContainer} >
                            <Button info={{ iconName: 'people', iconType: 'MIIcon', pageName: '', text: 'פרט ות"ש', }}
                                navigate={this.props.navigation.navigate} />
                            <Button info={{ iconName: 'security', iconType: 'MIIcon', pageName: '', text: 'ביטחון מידע' }}
                                navigate={this.props.navigation.navigate} />
                            <Button info={{ iconName: 'star-of-david', pageName: '', text: 'יהדות' }}
                                navigate={this.props.navigation.navigate} />
                            <Button info={{ iconName: 'pistol', iconType: 'MCIcon', pageName: '', text: 'טירונות ורובאות' }}
                                navigate={this.props.navigation.navigate} />
                            <Button info={{ iconName: 'caveret', pageName: '', text: 'אתר כוורת' }}
                            navigate={this.props.navigation.navigate} />
                        </View>
                
                </Container>
            </CustomHeader>
        );
    }
}

const onButtonPress = (pageName, navigate) => {
    navigate(pageName);
}

const Button = (props) => {
    const { info, navigate } = props;
    return (
        <View style={styles.btnWrapper} >
            {Platform.select({
                'android':
                    <TouchableNativeFeedback onPress={onButtonPress.bind(null, info.pageName, navigate)}
                        background={TouchableNativeFeedback.Ripple('#98a841', false)}
                        style={styles.btn} delayPressIn={0}  >
                        <ButtonImageBackground {...info} />
                    </TouchableNativeFeedback>,
                'ios': <TouchableOpacity onPress={onButtonPress.bind(null, info.pageName, navigate)}
                    style={styles.btn} activeOpacity={0.45} delayPressIn={0}  >
                    <ButtonImageBackground {...info} />
                </TouchableOpacity>
            })}
        </View>
    )
}

const ButtonImageBackground = (info) => {
    const goodImageBackground = 'https://cdn.pixabay.com/photo/2013/07/13/12/05/army-159125_960_720.png'
    return (
            <ImageBackground imageStyle={{ opacity: 0.7, transform: [{ scaleX: -1 }], }}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around',
                    flexDirection: 'row', backgroundColor: 'black' }}
                source={{ uri: 'https://wallpaperplay.com/walls/full/4/4/1/32261.jpg' }} >
                <RTLText style={{ color: 'white', fontSize: scale(26), fontWeight: 'bold', width: '58%',  }} >{info.text}</RTLText>

                {info.iconName == 'caveret' ? <Image source={require('../../images/caveret.png')} style={{ height: scale(50), width: scale(50), resizeMode: 'contain' }} /> :
                    info.iconType == 'MIIcon' ? <MIIcon name={info.iconName} size={50} color='white' /> :
                        info.iconType == 'MCIcon' ? <MCIcon name={info.iconName} size={50} color='white' />
                            : <FAIcon name={info.iconName} size={50} color='white' />}
                
            </ImageBackground>
        )
};


const styles = StyleSheet.create({
    container: {
        //flex: 1
    },
    pageContainer: {
        width: '90%', height: SCREEN_HEIGHT-scale(125),
        alignSelf: 'center', 
        justifyContent: 'space-around'
        //marginVertical: scale(15),
    },
    btnWrapper: {
        ...borderRadiusStyle(10, true),
        width: '100%', height: scale(90),
        //marginVertical: scale(10)
    },
    btn: {
        width: '100%', height: '100%',
        alignItems: 'center', justifyContent: 'center',
        ...borderRadiusStyle(10, false)
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: scale(27),
        color: '#4b5320',
    },
    text: {
        fontSize: scale(15),
        color: '#2b2b2b'
    },

})