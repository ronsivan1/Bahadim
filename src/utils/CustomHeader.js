import React from 'react';
import {
    View, Text, Platform,
    StyleSheet, Dimensions, ScrollView
} from 'react-native';
import { scale } from 'react-native-size-matters';

export default function CustomHeader(props) {
    //const goBackIconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
    return <View style={{ flex: 1, alignItems: 'center', overflow: 'hidden'}}>

        <View style={{ width: scale(475), height: scale(220),
             position: 'absolute', top: -70 }} >
            <View //LinearGradient colors={["#4b5320", "#4b5320"]}
                style={{
                    borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500),
                    width: '100%', height: '100%', alignSelf: 'center',
                    backgroundColor: '#4b5320'
                }} >

            </View>
        </View>

        <ScrollView style={{ width: '100%' }} overScrollMode='never'
            contentContainerStyle={{ alignItems: 'center', }} >
            <View style={{
                height: scale(150),
                paddingTop: scale(20),
                //backgroundColor: 'blue'
            }} >
                <Text style={styles.title} >{props.headerTitle}</Text>
            </View>
            {props.children}
            {/*<View style={{
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

                        </View>*/}



        </ScrollView>
    </View>

    /*:
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
            <View style={{ width: scale(430), height: scale(180), }} >
                <LinearGradient colors={["#4b5320", "#4b5320"]}
                    style={{
                        borderBottomRightRadius: scale(500), borderBottomLeftRadius: scale(500),
                        width: '100%', height: '100%', alignSelf: 'center',
                        justifyContent:'center'
                    }} >


                    <View style={{ alignSelf: 'center', paddingBottom: scale(60)  }} >
                        <Text style={styles.title} >{props.headerTitle}</Text>
                    </View>
                </LinearGradient>
            </View>
            {props.children}
        </ScrollView>*/


}

function goBack(navigation) {
    navigation.goBack(null);
}

const styles = StyleSheet.create({
    title: {
        fontSize: scale(36),
        color: '#fff'
    }
})
