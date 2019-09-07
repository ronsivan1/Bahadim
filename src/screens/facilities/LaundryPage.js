import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, globalStyles, Paragraph } from '../../utils';

export default class LaundryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //Armory-  <Paragraph text={`שעות פעילות:\nא' 09:30-12:00, 13:00-16:30.\nב' 08:00-11:30, 13:00-16:30.\nג-ד' 08:00-12:00, 13:00-16:30.\nה' 08:00-12:00, 13:00-15:00.`} />
        return ( 
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems: 'center'}} >
                <View style={[globalStyles.pageContainer]} >
                    <Text style={globalStyles.title} >חוקי המכבסה</Text>
                    <Paragraph text={'כל חייל רשאי למסור עד 20 פריטים לכיבוס.'} num={1} />
                    <Paragraph text={'פרטים שיימסרו לידי הזכיין יומדו חזרה לרשות המוסר לאחר 7 ימים מיום מסירת הפריטים.'} num={2} />
                    <Paragraph text={`שירותי הגיהוץ:\nהזכיין יגהץ את מדי הא' אשר נמסרו לכביסה.\nהזכיין יגהץ מדי ב' שנמסרו לכביסה לכל קצין מדרגת סא"ל ולנגדי משמעת.`} num={3} />
                    <View  >
                        <Text style={[globalStyles.title, { fontSize: scale(23), alignSelf: 'flex-start',
                     }]} >פריטים שניתן לשלוח לכביסה</Text>
                        <Paragraph text={`מכנס עבודה`} num={1} />
                        <Paragraph text={`חולצת עבודה`} num={2} />
                        <Paragraph text={`גופיות קיץ`} num={3} />
                        <Paragraph text={`תחתון קיץ`} num={4} />
                        <Paragraph text={`חולצת א'`} num={5} />
                        <Paragraph text={`מכנס א'`} num={6} />
                        <Paragraph text={`סדין`} num={7} />
                        <Paragraph text={`מגבת`} num={8} />
                        <Paragraph text={`ציפה לכרית`} num={9} />
                        <Paragraph text={`גופייה / תחתון חורף`} num={10} />
                        <Paragraph text={`חולצה / מכנס ספורט`} num={11} />
                        <Paragraph text={`כיסוי מיטה`} num={12} />
                        <Paragraph text={`מעיל קבע`} num={13} />
                        <Paragraph text={`ירכית(נשים/צנחנים)`} num={14} />
                        <Paragraph text={`אפוד צמר אישי`} num={15} />
                        <Paragraph text={`חצאית`} num={7} />
                    </View>
                 </View>
            </ScrollView>
         );
    }
}
