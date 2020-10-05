import React from 'react';
import {
    View, StyleSheet, Linking, ScrollView, Text,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const termsAndConditionsUrl = 'https://ronsivan1.wixsite.com/appbahadim/terms-conditions';
        const privacyPolicyUrl = 'https://ronsivan1.wixsite.com/appbahadim/privacy-policy'
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={styles.pageContainer} >
                    <Text style={styles.title} >אודות האפליקציה</Text>
                    <Paragraph text={'האפליקצייה נועדה לשימושם של החיילים במטרה לרכז את כל המידע הנחוץ על קריית ההדרכה במקום אחד, בצורה יעילה ונוחה למשתמש.'} />
                    <Paragraph text={'בתור מפתח האפליקציה, אני לא אחראי על אף תקלה שנגרמה עקב מידע לא מדוייק שפורסם, השימוש באפליקציה הינו באחריות המשתמש בלבד.'} />
                    <Paragraph text={'האפליקציה אינה האפליקציה ״הרשמית״ של קריית ההדרכה והיא אינה אפליקציה רשמית של צה״ל.'} />
                    <Paragraph text={'האפליקציה אינה דורשת חיבור אינטרנט, אלא עבור הצגת מזג אוויר.'} />
                    <Paragraph text={'האפליקציה פותחה ע״י רון סיון, והלוגו עוצב ע״י אשד שרגל.'} />
                    <View style={styles.paragraph} >
                        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
                                solid size={6} color={'black'} />
                        <Text style={[styles.iosRTLText, { fontSize: scale(15) }]} >הגישה לאפליקציה והשימוש בה, ובכלל זה בתכנים הכלולים בה ובשירותים השונים המוצעים בה, כפופים ל
                            <Text style={styles.linkText} onPress={ () => Linking.openURL(termsAndConditionsUrl)} >תנאי השימוש</Text> ול<Text style={styles.linkText} onPress={ () => Linking.openURL(privacyPolicyUrl)} >מדיניות הפרטיות</Text>.</Text>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

const Paragraph = ({ text }) => {
    return (
        <View style={styles.paragraph} >
            <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
                    solid size={6} color={'black'} />
            <Text style={[styles.iosRTLText, { fontSize: scale(15) }]} >{text}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    pageContainer: {
        width: '100%', marginVertical: scale(15),
        paddingHorizontal: scale(20)
    },
    title: {
        textDecorationLine: 'underline',
        alignSelf: 'center', fontSize: scale(24),
        color: '#4b5320',
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10),
    },
    iosRTLText: {
        writingDirection: 'rtl'
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
});

