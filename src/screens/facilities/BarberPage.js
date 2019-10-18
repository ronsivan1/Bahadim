import React from 'react';
import {
    View, Text, ScrollView, StyleSheet, Platform,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, callNumber, RTLText, Paragraph } from '../../utils';

class BarberPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    phoneFunc = (number) => () =>  {
        callNumber(number);
    }

    render() { 
        return ( 
            <ScrollView style={{ flex: 1, alignSelf: 'center',
            width: '85%', }} contentContainerStyle={{
                 marginVertical: scale(15), //backgroundColor: 'blue',
                alignItems: 'center', 
            }} >
                
                <View style={{
                        height: scale(180), width: scale(180),
                        borderRadius: scale(60), overflow: 'hidden' }} >
                        {Platform.select({
                            'android':
                                <TouchableNativeFeedback style={styles.mainButton}
                                    onPress={this.phoneFunc('0545562343')}
                                    background={TouchableNativeFeedback.Ripple('#2b2b2b', false)} >
                                    <MainButtonContent />
                                </TouchableNativeFeedback>,
                            'ios':
                                <TouchableOpacity activeOpacity={0.5} style={styles.mainButton}
                                    onPress={this.phoneFunc('0545562343')} >
                                    <MainButtonContent />
                                </TouchableOpacity>
                        })}
                </View>
                
                <View >
                    <Text style={[styles.title, { alignSelf: 'center' }]} >שעות פעילות:</Text>
                    <Paragraph text={`א'-ה' 08:00-18:00\n(הפסקה בין 12:00-13:00)`} />
                    <Paragraph text={`ו', ערבי חג - סגור`} />
                </View>

            </ScrollView>
         );
    }
}

const MainButtonContent = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', /*backgroundColor: 'blue,'*/  }} >
        <MCIcon name={'content-cut'} size={scale(110)} color="white" />
        <RTLText style={{ fontSize: scale(20), color: 'white', fontWeight: 'bold' }} >מספרה</RTLText>
    </View>
)
 
export default BarberPage;

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: '#2b2b2b',
        height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center',
    },
    title: {
        textDecorationLine: 'underline', 
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(20)

    },
})