import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    StatusBar, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';
import { Button } from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale } from 'react-native-size-matters';
import { callNumber } from '../constants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class MedicalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}  >
                <View style={{
                     width: '80%',
                    marginVertical: scale(15)
                }} >

                    <Text style={{
                        textDecorationLine: 'underline',
                        alignSelf: 'center', fontSize: scale(24),
                        color: '#4b5320',
                    }} >חר"פ</Text>
                    <View style={styles.paragraph} >
                        <Text style={styles.text} >במרכז יינתנו שירותי רפואה מגוונים, ביניהם: רפואה ראשונית, מומחים, וייעוצים, מרפאת בריאות הנפש, רפואת שיניים, פיזיותרפיה, שירותי דימות, רפואה שלישונית, ריפוי בעיסוק, מכשור וציוד רפואי מתקדם, שירותי מעבדה ובית מרקחת אזורי.</Text>
                        <DotIcon />
                    </View>
                    <View style={styles.paragraph} >
                        <Text style={styles.text} >המרכז החדש יפעל בימים א'-ה' בין השעות 8:00 ל-17:00. הוא ממוקם בסמוך לקריית ההדרכה, ובעל כניסה נפרדת ממנה, כך שכל דרכי ההגעה לקריית ההדרכה רלוונטיות גם אליו. </Text>
                        <DotIcon />
                    </View>
                    {/*<View style={styles.paragraph} >
                        <Text style={styles.text} >"המרכז הרפואי החדש מספק מענה משודרג, מקיף ואיכותי לחיילי צה"ל", אומרת רס"ן גלית בידנר, מפקדת מכלול רפואה שלישונית של מרחב הדרום. "המבנה הוא מודרני, חדיש וטכנולוגי שיכול לספק שירותי רפואה לאלפי החיילים שמשרתים בקריית ההדרכה, ובכך לחסוך מהם נסיעות על חשבון זמן ההכשרות".</Text>
                        <DotIcon />
                    </View>*/}

                    <View style={{ marginTop: scale(15) }} >
                        <Text style={{ fontSize: scale(20), textDecorationLine: 'underline'  }} >צור קשר:</Text>
                        
                    </View>

                    <PhoneComponent info={{text: 'אזרחי', phone: '03-9489999',  bcolor: '#25d366', iconName: 'phone'}} />
                    <PhoneComponent info={{text: 'מטכלי', phone: '03-39999',  bcolor: '#4b5320', iconName: 'deskphone'}} />
                    <PhoneComponent info={{text: 'מקול הלב', phone: '*6690',  bcolor: '#F20000', iconName: 'heart'}} />
                    <PhoneComponent info={{text: 'מייל אזרחי', phone: 'moked6690@idf.gov.il', bcolor: '#4798cc', iconName: 'email'}} />
                </View>
            </ScrollView>
        );
    }
}

const PhoneComponent = ({info}) => {
    const { text, phone, bcolor, iconName } = info;
    return (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: scale(10) }} >
            <View style={{ height: scale(35), width: scale(180),
                 borderRadius: scale(7), overflow: 'hidden',  }} >
                <TouchableNativeFeedback style={{
                    backgroundColor: bcolor, flexDirection: 'row',
                    height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'
                }}
                    onPress={() => callNumber(phone)}
                    background={TouchableNativeFeedback.Ripple('#000000', false)} >
                    <Text style={{ color: 'white' }} >{phone}</Text>
                    <Icon name={iconName} size={21} color="white"
                    
                        style={{ marginLeft: scale(5) }}/>
                    
                </TouchableNativeFeedback>
            </View>
            <Text style={{ color: '#075e54', fontSize: scale(15),
            width: scale(85) }} >{text} - </Text>
        </View>
    )
}

const DotIcon = () => {
    return (
        <Icon name={'circle'} style={{ marginTop: scale(7), marginLeft: scale(10) }}
            solid size={6} color={'black'} />
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10)
    },
    text: {
        fontSize: scale(15)
    }
})

