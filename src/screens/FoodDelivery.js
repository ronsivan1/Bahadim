import React from 'react';
import {
    View, Text, ScrollView, Image, StyleSheet,
    InteractionManager, Platform, ActivityIndicator
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { PhoneComponent } from '../utils';
import {Covid19TextInfo} from "../utils/components";

export default class FoodDelivery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false
        }

    }

    /* componentDidMount() {
        setTimeout(() => {
            //console.log('interaction completed')
            this.setState({
                interactionsComplete: true,
            });
        }, 300)
    } */

    render() {
        /*if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator color={'#4b5320'}
                    size={Platform.OS === 'ios' ? 0 : 45} />
                </View>);
        }
        else {*/
            return (

                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
                    <Covid19TextInfo text={'עקב המצב, ייתכן שלא יתאפשרו משלוחים לעיר הבה״דים, פנו למפקדכם למידע נוסף'} />

                    <View style={styles.pageContainer} >
                        <Paragraph text={'מסעדות באזור ירוחם/באר שבע המספקות משלוחים\nעיר הבה״דים'} />

                        <Shop info={{ name: 'סוג של טוסט', imageSource: require('../images/sugShelToast.jpg'), imageHeight: 70, resizeMode: 'stretch', openingHours: 'א׳-ה׳: 19:00-00:00',
                        phone: '052-333-5207', web: 'facebook.com/SugShelToast' }} />
                        <Shop info={{ name: 'פיצה רום ירוחם', imageSource: require('../images/pizzarom.jpg'), imageHeight: 60, resizeMode: 'contain', openingHours: 'א׳-ה׳: 11:00-23:00',
                            phone: '08-634-4474'}} />

                    </View>
                </ScrollView>

            );
        //}
    }
}

const Shop = ({ info }) => {
    const { name, imageSource, imageHeight, resizeMode, openingHours, phone, web } = info;
    return (<View style={{  marginVertical: scale(20), width: '100%', }} >
        <View style={{flexDirection: 'row'}} >
            <Image style={{
                height: scale(imageHeight), width: scale(75), resizeMode,
                borderRadius: scale(10)
            }}
                source={imageSource} />
            <View style={{ marginStart: scale(10), justifyContent: 'center', width: '70%', overflow: 'hidden' }} >
                <View>
                    <Text style={[styles.iosRTLText, { fontSize: scale(14), fontWeight: 'bold' }]} >{name}</Text>
                    <Text style={[styles.iosRTLText, { textDecorationLine: 'underline',}]} >שעות פתיחה:</Text>
                    <Text style={styles.iosRTLText} >{openingHours} </Text>
                </View>

            </View>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', //backgroundColor: 'silver',
                    width: '100%' }} >
            {phone ? <PhoneComponent info={{ shouldIncludeText: false, isFullWidth: false, phone: phone, bcolor: '#25d366', iconName: 'phone', width: 120, fontSize: 13 }} /> :null}
            {web ? <PhoneComponent info={{ shouldIncludeText: false, isFullWidth: false, phone: web, bcolor: '#0080ff', iconName: 'web', width: 160, fontSize: 11 }} /> : null }
        </View>
    </View>)

}

const Paragraph = ({ text }) => {
    return (
        <View style={styles.paragraph} >
            <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
                solid size={6} color={'black'} />
            <Text style={styles.iosRTLText} >{text}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', marginVertical: scale(15),

    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10)
    },
    iosRTLText: {
        writingDirection: 'rtl'
    }

})

