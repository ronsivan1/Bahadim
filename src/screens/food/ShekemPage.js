import React from 'react';
import {
    View, Text, ScrollView, Image, StyleSheet,
    InteractionManager, Platform, ActivityIndicator
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { PhoneComponent } from '../../utils';

export default class ShekemPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false
        }

    }

    componentDidMount() {
        this.props.navigation.setParams({ headerTitle: 'שק"ם' });

        setTimeout(() => {
            //console.log('interaction completed')
            this.setState({
                interactionsComplete: true,
            });
        }, 300)
    }

    render() {
        if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator color={'#4b5320'}
                    size={Platform.OS == 'ios' ? 0 : 45} />
                </View>);
        }
        else {
            const bistopHours = `א'-ד' 7:00-22:00, ה' 7:00-20:30,` + '\n' + `ו' 7:00-13:00`;
            const burger110Hours =  `א'-ד' 21:30-11:00, ה' 18:00-11:00`;
            return (
                
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
                    <View style={styles.pageContainer} >
                        <Text style={styles.title} >המרכז המסחרי</Text>
                        <Paragraph text={'השק"ם בבסיס הוא המרכז המסחרי שנמצא ממול לחדר אוכל, מעבר לגשרים שמחברים ביניהם.'} />
                        <Paragraph text={'מימן למרכז המסחרי ממוקמת המרפאה.'} />

                        <Shop info={{ imageSource: require('../../images/bistopImage.jpg'), imageHeight: 40, resizeMode: 'stretch', openingHours: bistopHours,
                        web: 'http://bistopbhadim.co.il' }} />
                        <Shop info={{ imageSource: require('../../images/shnitzelia.jpg'), imageHeight: 70, resizeMode: 'contain', openingHours: burger110Hours, phone: '08-634-4474',
                        web: 'https://hashnizelia.co.il' }} />
                        <Shop info={{ imageSource: require('../../images/110burger.png'), imageHeight: 70, resizeMode: 'contain', openingHours: burger110Hours,
                        phone: '052-348-1497', web: 'https://110burger.co.il' }} />
                        <Shop info={{ imageSource: require('../../images/coffeetime.png'), imageHeight: 70, resizeMode: 'contain', openingHours: `א'-ה' 6:00-23:00`,
                        phone: '09-7964499', web: 'http://coffeetime.co.il' }} />
                        <Shop info={{ imageSource: require('../../images/shiftzurim.jpg'), imageHeight: 70, resizeMode: 'contain', openingHours: `א'-ד' 9:30-20:00, ה' 8:00-14:00`,
                        phone: '09-7964499', web: 'https://www.facebook.com/shifzurim/' }} />
                        

                    </View>
                </ScrollView>

            );
        }
    }
}

const Shop = ({ info }) => {
    const { imageSource, imageHeight, resizeMode, openingHours, phone, web } = info;
    return (<View style={{  marginVertical: scale(20), width: '100%', }} >
        <View style={{flexDirection: 'row'}} >
            <Image style={{
                height: scale(imageHeight), width: scale(75), resizeMode,
                borderRadius: scale(10)
            }}
                source={imageSource} />
            <View style={{ marginStart: scale(10), justifyContent: 'center', width: '70%', overflow: 'hidden' }} >
                <View style={{}} >
                    <Text style={{ textDecorationLine: 'underline', textAlign: 'left' }} >שעות פתיחה:</Text>
                    <Text style={{ textAlign: 'left' }} >{openingHours} </Text>
                </View>
                
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', //backgroundColor: 'silver', 
                    width: '100%' }} >
                {phone ? <PhoneComponent info={{ shouldContainText: false, phone: phone, bcolor: '#25d366', iconName: 'phone', width: 120, fontSize: 13 }} /> :null}
                <PhoneComponent info={{ shouldContainText: false, phone: web, bcolor: '#0080ff', iconName: 'web', width: 160, fontSize: 11 }} />
            </View>
    </View>)

}

const Paragraph = ({ text }) => {
    return (
        <View style={styles.paragraph} >
            <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
                solid size={6} color={'black'} />
            <Text style={{textAlign: 'left'}} >{text}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', marginVertical: scale(15),

    },
    title: {
        textDecorationLine: 'underline',
        alignSelf: 'center', fontSize: scale(24),
        color: '#4b5320',
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10)
    },
    text: {
        textAlign: 'right'
    },
})

