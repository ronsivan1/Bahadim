import React from 'react';
import { Alert, Linking, Platform,
    View, Text, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import { scale } from 'react-native-size-matters';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Paragraph, globalStyles } from './components';

export const sundayFullData = [
    ['קריית שמונה, עצירה בחצור', 'תחנה מרכזית רציף 1', '06:15, 06:45'],
    ['כרמיאל', 'מרכז ביג מול BBB', '06:15, 06:45',],
    ['עפולה', 'קהילת ציון תחנה מרכזית', '06:15 עד 07:30 כל רבע שעה'],
    ['כפר יונה', 'מתחם יצחקי', '07:00, 07:30'],
    ['הרצליה', 'תחנת רכבת הרצליה', '6:30 עד 8:30 כל חצי שעה'],
    ['שיבא תל השומר', 'חניון אוטובוסים ע"י שער צפון', '07:00, 07:30, 07:45, 08:00, 08:30'],
    ['גדרה', 'מרכז גוזלן', '07:30, 08:00'],
    ['פתח תקווה', 'אצטדיון המושבה', '07:00, 07:05, 07:10, 07:20, 07:30, 07:35, 07:45, 08:00, 08:05, 08:15'],
    ['חולון', 'מסוף שרת (סמוך לפארק פרס)', '07:15 עד 09:00 כל רבע שעה'],
    ['ראשון לציון מזרח', 'ראשון לציון תחנת רכבת ראשונים', '07:00 עד 08:45 כל רבע שעה'],
    ['ראשון לציון מערב', `רח' ילדי טהרן (מצפון ובצמוד לסינמה סיטי)`, '07:00 עד 08:30 כל רבע שעה'],
    ['רחובות', 'מסוף הלר בצמוד לתחנת רכבת', '07:15, 07:30 עד 08:30 כל 10 דקות'],
    ['אשקלון', 'תחנה מרכזית רציף 12', '08:30'],
    ['אשדוד', 'ליד בית חב"ד בצמוד לתחנה המרכזית', '07:15 עד 08:45 כל רבע שעה'],
    ['מודיעין', 'מסוף עירוני', '07:00 עד 08:15 כל רבע שעה'],
    ['אילת', 'תחנת אגד', '08:00'],
    ['שהם', 'מרכז חינוכי חבל מודיעין', '07:30 עד 08:30 כל חצי שעה'],
    ['מבשרת ציון', 'שדרות הראל (מול קניון הראל)', '07:00, 08:00'],
    ['ירושלים צפון', 'חניון גבעת התחמושת', '07:00, 07:15, 07:30 עד 09:00 כל חצי שעה'],
    ['ירושלים דרום', 'חניון טדי מול שער 23', '06:45, 07:00, 07:30, 08:00, 08:30, 08:45, 09:00'],
    ['בית שמש', 'כניסה לתחנת רכבת', '07:30, 08:00, 08:30'],
    ['באר שבע צפון', 'חניון רכבת באר שבע צפון אוניברסיטה', '08:00 עד 10:56 עם הגעת הרכבת לתחנה'],
    ['באר שבע מרכז', 'תחנה מרכזית', '07:00 עד 12:50 מתמלא ויוצא'],
];

export const thursdayFullData = [
    ['קריית שמונה, עצירה בחצור ויקנעם', '12:30, 13:00, 13:30, 15:00'],
    ['גדרה', '13:30, 15:00'],
    ['עפולה', '12:30, 13:30, 15:00'],
    ['חיפה', '12:30 עד 16:00 כל חצי שעה, 17:00'],
    ['כפר יונה, עצירה סופית בנתניה', '13:30, 14:00, 15:00, 16:00'],
    ['הרצליה', '13:30, 14:00, 15:00, 16:00'],
    ['תל אביב', '13:30, 13:45, 14:00 עד 17:00 כל חצי שעה'],
    ['פתח תקווה', '13:30 עד 16:00 כל חצי שעה'],
    ['חולון', '13:30, 14:00, 15:00, 16:00'],
    ['ראשון לציון מזרח', '13:30, 13:45, 14:00 עד 16:00 כל חצי שעה'],
    ['ירושלים', '13:30, 13:45, 14:00 עד 17:00 כל חצי שעה'],
    ['מודיעין', '13:30, 14:00, 15:00, 16:00'],
    ['אילת', '13:15'],
    ['אשדוד', '13:30, 14:00, 15:00, 16:00'],
    ['בית שמש, עצירה ברמלה', '13:30, 15:00'],
    ['באר שבע', '14:00, 14:15, 14:20, 14:30, 14:45, 15:15, 15:20, 15:30, 15:45, 16:00, 16:15, 16:30, 16:45, 17:00, 17:30'],
    ['אשקלון, עצירה בקריית גת', '13:30, 15:00'],
    ['כפר סבא', '13:30, 15:00'],
    ['בנימינה', '13:30, 15:00'],
];

const moslyUsedHour = '07:00, 08:00';
export const fridayFullData = [
    ['קריית שמונה, עצירה בחצור', moslyUsedHour],
    ['עפולה', moslyUsedHour],
    ['חיפה', '07:00 עד 08:30 כל חצי שעה'],
    ['בנימינה', moslyUsedHour],
    ['כפר יונה', moslyUsedHour],
    ['כפר סבא', moslyUsedHour],
    ['הרצליה', moslyUsedHour],
    ['פתח תקווה', moslyUsedHour],
    ['תל אביב', '07:00 עד 08:30 כל חצי שעה'],
    ['חולון', moslyUsedHour],
    ['ראשון לציון מזרח', moslyUsedHour],
    ['ירושלים', '07:00 עד 08:30 כל חצי שעה'],
    ['מודיעין', moslyUsedHour],
    ['אשדוד', moslyUsedHour],
    ['אשקלון', moslyUsedHour],
    ['בית שמש','07:00'],
    ['באר שבע', '07:15, 07:30, 07:45, 08:15, 08:30, 09:00, 09:30',],
    ['אילת', '07:15'],
];

export const callNumber = (phone) => {
    //console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    }
    else if(Platform.OS === 'android') {
        phoneNumber = `tel:${phone}`;
    }
    if(phoneNumber.includes('@')) {
        phoneNumber = `mailto:${phone}`;
    }
    if(phoneNumber.includes('http'))
        phoneNumber = phone;
    
    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};

// if platform is ios, dont add borderRadius to avoid the weird square behind the button when clicking it.
// if platform is android this will add borderRadius to the btnWrapper so the Ripple won't appear outside of button bounds.
export function borderRadiusStyle(borderRadius, isCalledFromWrapper){
    if(Platform.OS == 'ios' && isCalledFromWrapper) return; 
    return {
        borderRadius: scale(borderRadius), overflow: 'hidden',
    };
}


const onPhonePress = (phone) => callNumber(phone)

export const PhoneComponent = ({info}) => {
    const { text, phone, bcolor, iconName, shouldContainText = true, width = 180, fontSize = 13 } = info;
    return (
        <View style={{flexDirection: 'row', marginTop: scale(10), 
        alignItems: 'center' }} >
            {shouldContainText ? <Text style={{ color: '#075e54', fontSize: scale(15),
            width: scale(85) }} >{text} - </Text>: null}
            
                
                {Platform.select({
                    'android': 
                        <View style={{ borderRadius: scale(7), overflow: 'hidden' }} >
                            <TouchableNativeFeedback style={[styles.btn, { width: scale(width) }]} onPress={onPhonePress.bind(null, phone)}
                            background={TouchableNativeFeedback.Ripple('#3b3b3b', false)} >
                                <PhoneButtonContent info={{phone, iconName, bcolor, fontSize}} />
                            </TouchableNativeFeedback>
                        </View>,
                    'ios': 
                        <TouchableOpacity style={[styles.btn, { width: scale(width) }]} onPress={onPhonePress.bind(null, phone)}
                        activeOpacity={0.5} >
                            <PhoneButtonContent info={{phone, iconName, bcolor, fontSize}} />
                        </TouchableOpacity>,
                })}

            
            
        </View>
    )
}

const PhoneButtonContent = ({info}) => {
    const { phone, iconName, bcolor, fontSize } = info;
    return(
        <View style={[styles.phoneBtnContent, { backgroundColor: bcolor }] } >
            <MCIcon name={iconName} size={21} color="white"
                style={{ marginEnd: scale(5) }}/>
            <Text style={{ color: 'white', fontSize: scale(fontSize) }} >{phone}</Text>
            
        </View>
    );
}

export {
    Paragraph,
    globalStyles
};

const styles = StyleSheet.create({
    btnWrapper: {
        
        ...borderRadiusStyle(7, true)
    },
    btn: {
        justifyContent: 'center',
        height: scale(40), width: scale(180),
        ...borderRadiusStyle(7, false)
    },
    phoneBtnContent: {
        alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
        height: '100%', width: '100%' 
    }
})