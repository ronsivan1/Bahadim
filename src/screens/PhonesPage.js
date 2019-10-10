import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    Platform, Dimensions, TouchableOpacity, Image
} from 'react-native';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import { callNumber, borderRadiusStyle, PhoneComponent, RTLText } from '../utils';

export default class PhonesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >

                <View style={{
                    width: '80%', marginVertical: scale(15), //backgroundColor: 'blue',
                    alignItems: 'center'
                }} >
                    {/*<Text style={{textDecorationLine: 'underline', alignSelf: 'center', fontSize: scale(24),color: '#4b5320',}} >פתיחת תקלה</Text>*/}
                    <View style={{
                        height: scale(180), width: scale(180),
                        borderRadius: scale(60), overflow: 'hidden'
                    }} >
                        {Platform.select({
                            'android':
                                <TouchableNativeFeedback style={styles.mainButton}
                                    onPress={() => callNumber('0733772000')}
                                    background={TouchableNativeFeedback.Ripple('#2b2b2b', false)} >
                                    <MainButtonContent />
                                </TouchableNativeFeedback>,
                            'ios':
                                <TouchableOpacity activeOpacity={0.5} style={styles.mainButton}
                                    onPress={() => callNumber('0733772000')} >
                                    <MainButtonContent />
                                </TouchableOpacity>
                        })}
                    </View>

                    <Text style={styles.title} >טלפונים אזרחיים</Text>

                    <PhoneComponent info={{ text: 'מקול הלב', phone: '*6690', bcolor: '#F20000', iconName: 'heart', performCall: true }} />
                    <PhoneComponent info={{ text: 'מייל', phone: 'moked6690@idf.gov.il', bcolor: '#4798cc', iconName: 'email', performCall: true }} />


                    <Text style={styles.title} >טלפונים מטכליים</Text>
                    <PhoneComponent info={{ text: 'מקול הלב', phone: '03-39999', bcolor: '#4b5320', iconName: 'deskphone', performCall: true }} />

                    <View>
                        <RTLText style={{ fontSize: scale(14), textDecorationLine: 'underline', color: '#4b5320', marginTop: scale(15) }} >טיפ:</RTLText>
                        <RTLText style={{ fontSize: scale(14), color: '#4b5320', lineHeight:scale(16) }} >
                            בעזרת טלפון משרדי ניתן להתקשר למספרים אחרים בקריית ההדרכה. לדוגמה: בכדי להתקשר למספר 0733772000 ניתן להתקשר ל2000 עם טלפון משרדי.
                        </RTLText>
                            
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const MainButtonContent = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', /*backgroundColor: 'blue,'*/ marginBottom: scale(10) }} >
        <MCIcon name={'phone'} size={scale(110)} color="white" />
        <RTLText style={{ fontSize: scale(17), color: 'white', fontWeight: 'bold' }} >{'מוקד 2000'}</RTLText>
    </View>
)


const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: '#25d366',
        height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center',
    },
    title: {
        textDecorationLine: 'underline', 
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(20)

    },
})

