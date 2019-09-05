import React from 'react';
import {
    View, Text, Platform, StyleSheet, Dimensions
} from 'react-native';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { borderRadiusStyle } from '.';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const CustomHeader = (props) => {
    const goBackIconName = Platform.OS == 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{alignItems: 'center'}} >
            <LinearGradient colors={["#586125", "#4b5320"]}
                style={{
                    borderBottomRightRadius: scale(180), borderBottomLeftRadius: scale(180),
                    width: '130%', height: scale(200), alignSelf: 'center',
                }} >
                <View style={{
                    marginTop: scale(28), height: scale(60), width: '80%',
                    alignSelf: 'center', justifyContent: 'center',
                    //backgroundColor: 'blue',
                }} >

                    <View style={{
                        borderRadius: scale(40), overflow: 'hidden',  //backgroundColor: 'green',
                        width: scale(40), height: scale(40), marginStart: scale(20)
                    }} >
                        <TouchableNativeFeedback onPress={ goBack.bind(null, props.navigation) }
                            background={TouchableNativeFeedback.Ripple('#1b1b1b', false)}
                            style={{
                                width: '100%', height: '100%',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Icon name={goBackIconName} size={27} color={'#fff'} />
                        </TouchableNativeFeedback>
                    </View>

                </View>

                <View style={{ alignSelf: 'center', alignItems: 'center' }} >
                    <Text style={styles.title} >{props.headerTitle}</Text>
                </View>
            </LinearGradient>
            {props.children}
        </ScrollView>
    )
}

function goBack(navigation) {
    navigation.goBack(null);
}

export default CustomHeader;

const styles = StyleSheet.create({
    title: {
      fontSize: scale(32),
      color: '#fff'
    }
  })
  