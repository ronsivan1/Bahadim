import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale } from 'react-native-size-matters';
import { PhoneComponent, RTLText } from '../utils';

export default class MedicalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}  >
                <View style={styles.pageContainer} >

                    <Text style={{
                        textDecorationLine: 'underline',
                        alignSelf: 'center', fontSize: scale(24),
                        color: '#4b5320',
                    }} >חר"פ עיר הבה"דים</Text>
                    <View style={styles.paragraph} >
                        <DotIcon />
                        <RTLText style={styles.text} >החר"פ או בשמו האחר מרפ"א דרום פועל בימים א'-ה' בין השעות 8:00 ל-17:00. הוא ממוקם בסמוך לקריית ההדרכה, כך שכל דרכי ההגעה לקריית ההדרכה רלוונטיות גם אליו.</RTLText>
                    </View>
                    <View style={styles.paragraph} >
                        <DotIcon />
                        <RTLText style={styles.text} >במרכז יינתנו שירותי רפואה מגוונים, ביניהם: רפואה ראשונית, מומחים, וייעוצים, מרפאת בריאות הנפש, רפואת שיניים, פיזיותרפיה, שירותי דימות, רפואה שלישונית, ריפוי בעיסוק, מכשור וציוד רפואי מתקדם, שירותי מעבדה ובית מרקחת אזורי.</RTLText>
                    </View>

                    {/*<View style={styles.paragraph} >
                        <Text style={styles.text} >"המרכז הרפואי החדש מספק מענה משודרג, מקיף ואיכותי לחיילי צה"ל", אומרת רס"ן גלית בידנר, מפקדת מכלול רפואה שלישונית של מרחב הדרום. "המבנה הוא מודרני, חדיש וטכנולוגי שיכול לספק שירותי רפואה לאלפי החיילים שמשרתים בקריית ההדרכה, ובכך לחסוך מהם נסיעות על חשבון זמן ההכשרות".</Text>
                        <DotIcon />
                    </View>*/}

                    <View style={{ marginTop: scale(15) }} >
                        <Text style={{ fontSize: scale(20), textDecorationLine: 'underline',
                    writingDirection: 'rtl' }} >צור קשר:</Text>

                    </View>

                    <PhoneComponent info={{ text: 'אזרחי', phone: '03-9489999', bcolor: '#25d366', iconName: 'phone' }} />
                    <PhoneComponent info={{ text: 'מטכלי', phone: '03-39999', bcolor: '#4b5320', iconName: 'deskphone' }} />
                    <PhoneComponent info={{ text: 'מקול הלב', phone: '*6690', bcolor: '#F20000', iconName: 'heart' }} />
                    <PhoneComponent info={{ text: 'מייל אזרחי', phone: 'moked6690@idf.gov.il', bcolor: '#4798cc', iconName: 'email' }} />
                </View>
            </ScrollView>
        );
    }
}

const DotIcon = () => {
    return (
        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
            solid size={6} color={'black'} />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageContainer: {
        width: '80%',
        marginVertical: scale(15),
        
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10),

    },
    text: {
        fontSize: scale(15),
        lineHeight: scale(20),
        //writingDirection: 'rtl'
    },
})

