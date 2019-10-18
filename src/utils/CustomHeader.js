import React from 'react';
import {
    View, Text, Platform,
    StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default CustomHeader = (props) => {
    const goBackIconName = Platform.OS == 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
    return Platform.select({
        ios:
            <View style={{ flex: 1, alignItems: 'center' }}>

                <View style={{ width: scale(430), height: scale(180), position: 'absolute' }} >
                    <LinearGradient colors={["#4b5320", "#4b5320"]}
                        style={{
                            borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500),
                            width: '100%', height: '100%', alignSelf: 'center'
                        }} >

                    </LinearGradient>
                </View>
                
                <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} >
                    <View style={{ height: scale(180) }} >
                        <View style={{
                            height: scale(60), width: SCREEN_WIDTH,
                            alignSelf: 'center', justifyContent: 'center',
                            //backgroundColor: 'blue',
                        }} >

                            <View style={{
                                borderRadius: scale(40), overflow: 'hidden',  //backgroundColor: 'green',
                                width: scale(40), height: scale(40), marginStart: scale(14)
                            }} >
                                {Platform.OS == 'android' ?
                                    <TouchableNativeFeedback onPress={goBack.bind(null, props.navigation)}
                                        background={TouchableNativeFeedback.Ripple('#1b1b1b', false)}
                                        style={{
                                            width: '100%', height: '100%',
                                            alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Icon name={goBackIconName} size={27} color={'#fff'} />
                                    </TouchableNativeFeedback> :
                                    Platform.OS == 'ios' ?
                                        <TouchableOpacity onPress={goBack.bind(null, props.navigation)}
                                            style={{
                                                width: '100%', height: '100%',
                                                alignItems: 'center', justifyContent: 'center'
                                            }}>
                                            <Icon name={goBackIconName} size={34} color={'#fff'} />
                                        </TouchableOpacity>
                                        : null}
                            </View>

                        </View>

                        <View style={{ alignSelf: 'center', alignItems: 'center' }} >
                            <Text style={styles.title} >{props.headerTitle}</Text>
                        </View>
                    </View>
                    {props.children}
                </ScrollView>
            </View>,

        android:
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{ width: scale(430), height: scale(180), }} >
                    <LinearGradient colors={["#4b5320", "#4b5320"]}
                        style={{
                            borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500),
                            width: '100%', height: '100%', alignSelf: 'center',
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
                                {Platform.OS == 'android' ?
                                    <TouchableNativeFeedback onPress={goBack.bind(null, props.navigation)}
                                        background={TouchableNativeFeedback.Ripple('#1b1b1b', false)}
                                        style={{
                                            width: '100%', height: '100%',
                                            alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Icon name={goBackIconName} size={27} color={'#fff'} />
                                    </TouchableNativeFeedback> :
                                    Platform.OS == 'ios' ?
                                        <TouchableOpacity onPress={goBack.bind(null, props.navigation)}
                                            style={{
                                                width: '100%', height: '100%',
                                                alignItems: 'center', justifyContent: 'center'
                                            }}>
                                            <Icon name={goBackIconName} size={34} color={'#fff'} />
                                        </TouchableOpacity>
                                        : null}
                            </View>

                        </View>

                        <View style={{ alignSelf: 'center', alignItems: 'center' }} >
                            <Text style={styles.title} >{props.headerTitle}</Text>
                        </View>
                    </LinearGradient>
                </View>
                {props.children}
            </ScrollView>
    });


}

function goBack(navigation) {
    navigation.goBack(null);
}

const styles = StyleSheet.create({
    title: {
        fontSize: scale(32),
        color: '#fff'
    }
})
