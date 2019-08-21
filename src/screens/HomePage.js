import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    StatusBar, Dimensions, TouchableOpacity, Image
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const imageUri = 'https://upload.wikimedia.org/wikipedia/he/5/5b/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%A7%D7%A8%D7%99%D7%99%D7%AA_%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94_-_%D7%A2%D7%99%D7%A8_%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D.png';

        return (
            <View style={{ flex: 1, }} >
                <View style={{
                    alignItems: 'center', //backgroundColor: 'blue'
                }} >
                    <LinearGradient colors={["#586125", "#4b5320",]}
                        style={{
                            height: scale(250), width: '160%',
                            borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500)
                        }} >
                        <View style={{
                            marginTop: scale(22), //backgroundColor: 'green', 
                            alignItems: 'center', overflow: 'hidden',
                            height: scale(60), width: '100%', justifyContent: 'space-around', flexDirection: 'row'
                        }} >

                            <View style={{ borderRadius: scale(40), overflow: 'hidden', }} >
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

                        <View style={{ alignSelf: 'center', }} >
                            <Text style={styles.title} >עיר הבה"דים</Text>
                        </View>
                    </LinearGradient>
                    <View style={{ width: '100%', height: scale(250), backgroundColor: 'blue',
                            justifyContent: 'space-around'  }} >
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}} ><Button /><Button /><Button /></View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}} ><Button /><Button /><Button /></View>
                    </View>
                </View>

            </View>
        );
    }
}

const Button = () => {
    return (
        <View style={{ width: scale(90), height: scale(90),
            borderRadius: scale(10), overflow: 'hidden', elevation: 10 }} >
            <TouchableNativeFeedback style={{width: '100%', height: '100%',backgroundColor: 'purple'}} >
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    title: {
        color: '#000',
        fontSize: scale(38),
        color: '#fff'

    }
})

