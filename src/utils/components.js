import React from 'react';
import {
    View, Text, Linking, StyleSheet,
    TouchableOpacity, ScrollView
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';

{/* Covid19 information text component */}
export const Covid19TextInfo = ({ text }) => (
    <View style={styles.covid19Container} >
        <Text style={styles.covid19Text}>{text}</Text>
    </View>
);

export const Bullet = ({ text, num }) => (
    num ?
    <View style={[globalStyles.paragraph]} >
        <Text style={{ fontSize: scale(17), marginEnd: scale(8), fontWeight: 'bold' }} >.{num}</Text>
        <Text style={globalStyles.text} >{text}</Text>
    </View> :
    <View style={globalStyles.paragraph} >
        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
            solid size={6} color={'black'} />
        <Text style={globalStyles.text} >{text}</Text>
    </View>
);

export const RTLText = ({ style, children }) => {
    const pair = {writingDirection: 'rtl'};
    style = {...style, ...pair}; // this line combines s with pair
    return (
        <Text style={style} >{children}</Text>
    );
}

const onPhonePress = (phone) => {

    phone = phone.length == 4 ? '073377' + phone : phone;
    callNumber(phone);
}

export const PhoneComponent = ({info, style}) => {
    const { text, phone, bcolor, iconName, width = 180, fontSize = 13,
        shouldIncludeText = true, isFullWidth = true } = info;

    const defaultStyle = isFullWidth ? styles.fullWidthPhoneWrapper : styles.phoneWrapper;
    style = { ...defaultStyle, ...style };
    return (
        <View style={ style } >
            {shouldIncludeText ? <RTLText style={{ color: '#075e54', fontSize: scale(15),
            width: scale(100), // width: scale(85)
            //backgroundColor: 'blue'
            }} >{text} - </RTLText>: null}


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
            <RTLText style={{ color: 'white', fontSize: scale(fontSize) }} >{phone}</RTLText>

        </View>
    );
}

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
    if(phoneNumber.includes('facebook'))
        phoneNumber = 'https://www.' + phone

    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        //.catch(err => console.log(err));
};

const styles = StyleSheet.create({
    phoneWrapper: {
        flexDirection: 'row', marginTop: scale(10),
        alignItems: 'center', justifyContent: 'space-between',

    },
    fullWidthPhoneWrapper: {
        flexDirection: 'row', marginTop: scale(15),
        alignItems: 'center', justifyContent: 'space-between',
        width: '100%',

    },
    btn: {
        justifyContent: 'center',
        height: scale(40), width: scale(180),
        ...borderRadiusStyle(7, false)
    },
    phoneBtnContent: {
        alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
        height: '100%', width: '100%' ,

    },
    covid19Container: {
        width: '100%', paddingVertical: scale(10), backgroundColor: '#e50000',
        justifyContent: 'center', alignItems: 'center', borderColor: '#000',
        borderWidth: scale(5)
    },
    covid19Text: {
        textAlign: 'center', color: 'white', width: '90%',
        fontSize: scale(15), fontWeight: 'bold'
    }
})

export function borderRadiusStyle(borderRadius, isCalledFromWrapper){
    if(Platform.OS == 'ios' && isCalledFromWrapper) return;
    return {
        borderRadius: scale(borderRadius), overflow: 'hidden',
    };
}

export const globalStyles = StyleSheet.create({
    pageContainer: {
        width: '85%',
        marginVertical: scale(15),
    },
    boldTitle: {
        textDecorationLine: 'underline',
        alignSelf: 'center', fontSize: scale(30),
        color: '#4b5320', fontWeight: 'bold'
    },
    paragraph: {
        flexDirection: 'row',
        marginBottom: scale(10),
        //backgroundColor: 'blue'
    },
    text: {
        fontSize: scale(17),
        lineHeight: scale(20),
        writingDirection: 'rtl'
    },

    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    title: {
        textDecorationLine: 'underline',
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(15),
        alignSelf: 'center',
        textAlign: 'center'
    },
    row: { height: scale(60), },
    textAlignCenter: { textAlign: 'center' }

})
