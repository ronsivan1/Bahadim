import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { PhoneComponent, data, globalStyles, Bullet } from '../../../utils';

export default class Yohalam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.flexArr = [1, 1]
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{
                    width: '85%', 
                    
                }} >

                    <Text style={globalStyles.title} >למי אפשר לפנות?</Text>
                    <Bullet text='מפקד ישיר / מפקד יחידה' />
                    <Bullet text='ממונת יוהל"ם ביחידה' />
                    <Bullet text='רופא או קב"ן היחידה' />
                    <Bullet text='מהו"ת (מרכז התמודדות ותמיכה)' />

                    <Text style={globalStyles.title} >אפשרויות טיפול</Text>
                    <Bullet text='הגשת תלונה במצ"ח (אופן הטיפול בתלונה ייקבע ע"י הפרקליטות: כתב אישום / דין משמעתי / סגירת התיק).' />
                    <Bullet text='הגשת תלונה במשטרת ישראל (במידה והאירוע אירע בנסיבות אזרחיות)' />
                    <Bullet text='אי הגשת תלונה' />
                    <Bullet text='תמיכה רגשית במהו"ת' />
                    <Bullet text='שיחה פיקודית' />

                    <PhoneComponent
                    info={{ text: 'ממונת יוהל"ם מפקדת קריית ההדרכה', phone: '2620', bcolor: '#25d366', iconName: 'phone' }} />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    title: {
        textDecorationLine: 'underline',
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(15),
        alignSelf: 'center'
    },
    row: { height: scale(60), },
    text: { textAlign: 'center' }
})
