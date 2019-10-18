import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, Paragraph, RTLText } from '../../utils';

export default class SportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems: 'center'}} >
                <View style={styles.pageContainer} >
                    <Text style={styles.title} >בריכת שחייה</Text>
                    <Paragraph text={`שעות פתיחת הבריכה:\nא'-ה' 06:30-9:00, 17:00-21:00`} />
                    <Paragraph text={`ימים מגדריים בנים: ב' 20:00-21:00, ד' 7:30-9:00`} />
                    <Paragraph text={`ימים מגדריים בנות: ב' 6:30-8:00, ד' 20:00-21:00`} />
                    <RTLText style={{ fontSize: scale(20), color: '#4b5320',
                     textDecorationLine: 'underline', fontWeight: 'bold', 
                     marginBottom: scale(10) }} >דברים שחשוב לדעת: </RTLText>
                    <ImportantInfoParagraph text='הרחצה מותנית באישור רפואי חתום.' />
                    <ImportantInfoParagraph text='ההגעה לבריכת השחייה מחויבת במד"ס מלא ותקני.' />
                    <ImportantInfoParagraph text='באימונים בבריכה יש להצטייד במכנס וחולצת דרייפיט.' />
                    <ImportantInfoParagraph text='בעת הרחצה ניתן ללבוש בגדי ים.' />
                    <ImportantInfoParagraph text='אין להיכנס לבריכה ללא מציל.' />
                    <ImportantInfoParagraph text='אזורי הבריכה כולל המדשאות הינם אזורים ללא עישון.' />

                    <Text style={styles.title} >חדר כושר</Text>
                    <Paragraph text={`שעות פתיחת החדר כושר:\nא'-ה' 6:00-22:00, ו' 6:00-13:00`} />
                    <Paragraph text={`הפסקות:\n8:00-8:30, 12:00-12:45, 18:00-18:45`} />
                    <Paragraph text={`ימים מגדריים בנים: ב' 20:00-22:00, ד' 8:00-10:00`} />
                    <Paragraph text={`ימים מגדריים בנות: ב' 6:00-7:30, ד' 20:00-22:00`} />
                    <RTLText style={{ fontSize: scale(20), color: '#4b5320',
                     textDecorationLine: 'underline', fontWeight: 'bold', 
                     marginBottom: scale(10) }} >דברים שחשוב לדעת: </RTLText>
                    <ImportantInfoParagraph text='הכניסה לחד"כ בליווי מנוי וחוגר יחד בלבד, אין להגיע ללא חוגר או מנוי לחדר כושר. מי שמגיע עם מנוי מזויף תשלל ממנו הזכות להתאמן בחדר הכושר.' />
                    <ImportantInfoParagraph text='ההגעה לחד"כ מחוייבת בהבאת מגבת אישית לכל מתאמן. חייל אשר לא יביא מגבת אישית לא יורשה להתאמן!' />
                    <ImportantInfoParagraph text='ללא גופיות, ללא מחשוף, ללא חולצה לבנה (מותר דרייפיט לבנה בלבד).' />
                    <ImportantInfoParagraph text='חובה מכנס מעל טייץ, ומכנס עד הברך בלבד (חל איסור להגיע רק עם חולצה ארוכה מעל טייץ).' />
                    <ImportantInfoParagraph text='לפני התחלת האימון בחד"כ המתאמן נדרש לחתום על הצהרה רפואית.' />
                    <ImportantInfoParagraph text='כל קצין, נגד, חייל מעל גיל 23 או מתחת לפרופיל 72 נדרש להצטייד באישור רופא המאשר לו להתאמן בחדר הכושר.' />
                </View>
            </ScrollView>
         );
    }
}

const ImportantInfoParagraph = ({ text }) => (
    <View style={[styles.paragraph, { marginVertical: scale(5), marginStart: scale(12) }]} >
        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
            solid size={6} color={'black'} />
        <RTLText style={{ fontSize: scale(15), lineHeight: scale(20) }} >{text}</RTLText>
    </View>
)

const styles = StyleSheet.create({
    pageContainer: {
        width: '80%',
        marginVertical: scale(15),
    },
    title: {
        textDecorationLine: 'underline',
        alignSelf: 'center', fontSize: scale(30),
        color: '#4b5320',
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10),
    },
    text: {
        fontSize: scale(17)
    },
})