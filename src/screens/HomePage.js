import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    Platform, Dimensions, TouchableOpacity, Image, ImageBackground,
    InteractionManager
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log('rendered BusPage')
        const imageUri = 'https://upload.wikimedia.org/wikipedia/he/5/5b/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%A7%D7%A8%D7%99%D7%99%D7%AA_%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94_-_%D7%A2%D7%99%D7%A8_%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D.png';

        return (
            <View style={{ flex: 1, alignItems: 'center' }} >
                <View style={{
                    backgroundColor: '#eaeed3',//'#F5F5DC', // this View defines the height and width of the LG and it's background color.
                    width: '160%', height: scale(250),
                }} >
                    <LinearGradient colors={["#586125", "#4b5320",]}
                        style={{
                            height: '100%', width: '100%',
                            //height: scale(250), width: '160%', 
                            borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500)
                        }} >

                        <View style={{
                            marginTop: scale(22), height: scale(60), width: '100%',
                            alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row',
                            //overflow: 'hidden', backgroundColor: 'green',
                        }} >

                            <View style={{ borderRadius: scale(40), overflow: 'hidden' }} >
                                <TouchableNativeFeedback onPress={() => this.props.navigation.openDrawer()}
                                    background={TouchableNativeFeedback.Ripple('#98a841', false)}
                                    style={{
                                        width: scale(70), height: scale(70),
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <Icon name="md-menu" size={30} color={'#fff'} />
                                </TouchableNativeFeedback>
                            </View>

                            <View style={{ marginRight: scale(10), borderRadius: scale(25), overflow: 'hidden' }} >
                                <Image style={{ height: scale(45), width: scale(45) }} source={{ uri: imageUri }} />
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', alignItems: 'center' }} >
                            <Text style={styles.title} >קריית ההדרכה</Text>
                            <Text style={[styles.title, { fontSize: scale(16) }]} >ע"ש האלוף אריאל שרון</Text>
                        </View>

                    </LinearGradient>
                </View>
                <View style={{
                    width: '100%', height: SCREEN_HEIGHT - scale(250), justifyContent: 'center',
                    backgroundColor: '#eaeed3'
                }} >
                    <View style={{
                        width: '100%', height: scale(375), //backgroundColor: 'blue',

                        justifyContent: 'space-around'
                    }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                            <Button buttonInfo={{ name: 'ios-business', text: 'מתקנים קריתיים', pageName: 'FacilitiesPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'md-pizza', text: 'אוכל', pageName: 'FoodPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'ios-bus', text: 'שאטלים', pageName: 'BusPage' }} navigate={this.props.navigation.navigate} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}  >
                            <Button buttonInfo={{ name: 'md-medkit', text: 'רפואה', pageName: 'MedicalPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'ios-call', text: 'טלפונים', pageName: 'ProblemPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'md-images', text: 'גלריה', pageName: 'GalleryPage' }} navigate={this.props.navigation.navigate} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}  >
                            <Button buttonInfo={{ name: 'ios-information-circle', text: 'מידע נוסף', pageName: 'MedicalPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'ios-mail', text: 'פנייה למפקד', pageName: 'ProblemPage' }} navigate={this.props.navigation.navigate} />
                            <Button buttonInfo={{ name: 'ios-partly-sunny', text: 'מזג אוויר', pageName: 'WeatherPage' }} navigate={this.props.navigation.navigate} />
                        </View>
                    </View>
                </View>


            </View>
        );
    }
}

const onButtonPress = (pageName, navigate) => {
    navigate(pageName);
}

const Button = (props) => {
    const buttonInfo = props.buttonInfo;
    return (
        <View style={styles.btnWrapper} >
            {Platform.select({
                'android':
                <TouchableNativeFeedback onPress={onButtonPress.bind(null, buttonInfo.pageName, props.navigate)}
                    style={styles.btn} delayPressIn={0}  >
                    <ButtonImageBackground buttonInfo={{ name: buttonInfo.name, pageName: buttonInfo.pageName, text: buttonInfo.text }} />
                </TouchableNativeFeedback>,
                'ios': <TouchableOpacity  onPress={onButtonPress.bind(null, buttonInfo.pageName, props.navigate)}
                    style={styles.btn} activeOpacity={0.6} delayPressIn={0}  >
                    <ButtonImageBackground buttonInfo={{ name: buttonInfo.name, pageName: buttonInfo.pageName, text: buttonInfo.text }} />
                </TouchableOpacity>
            })}

        </View>
    )
}

const ButtonImageBackground = ({ buttonInfo }) => (
    <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
        source={{ uri: 'https://i.pinimg.com/originals/2b/dc/19/2bdc1957378e4fb9be6f47800b49b045.gif' }}>
        <Icon name={buttonInfo.name} size={50} color='white' />
        <Text style={{ color: 'white', fontSize: buttonInfo.pageName == 'FacilitiesPage' ? scale(12) : scale(14), }} >{buttonInfo.text}</Text>

    </ImageBackground>
)

const styles = StyleSheet.create({
    container: { flex: 1 },
    title: {
        fontSize: scale(38),
        color: '#fff'

    },
    btnWrapper: {
        width: scale(90), height: scale(90),
        borderRadius: scale(10), overflow: 'hidden', elevation: 14
    },
    btn: {
        width: '100%', height: '100%',
        alignItems: 'center', justifyContent: 'center'
    }
})

