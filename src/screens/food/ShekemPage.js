import React from 'react';
import {
    View, Text, ScrollView, Image, StyleSheet,
    InteractionManager, Platform, ActivityIndicator
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { PhoneComponent } from '../../utils';

export default class ShekemPage extends React.Component {

    /*static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'שק"ם'
        };
    };*/

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
        }, 350)
    }

    render() {
        if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator size={45} color={'#4b5320'} /></View>);
        }
        return (
            
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={styles.pageContainer} >
                    <Text style={styles.title} >המרכז המסחרי</Text>
                    <Paragraph text={'השק"ם בבסיס הוא המרכז המסחרי שנמצא ממול לחדר אוכל, מעבר לגשרים שמחברים ביניהם.'} />
                    <Paragraph text={'מימן למרכז המסחרי ממוקמת המרפאה.'} />

                    <Shop info={{ imageSource: require('../../images/bistopImage.jpg'), imageHeight: 40, resizeMode: 'stretch', openingHours: '8:00-22:00', phone: '08-634-4474',
                     web: 'http://bistopbhadim.co.il' }} />
                    <Shop info={{ imageSource: require('../../images/shnitzelia.jpg'), imageHeight: 70, resizeMode: 'contain', openingHours: '8:00-22:00', phone: '08-634-4474',
                     web: 'https://hashnizelia.co.il' }} />
                    <Shop info={{ imageSource: require('../../images/110burger.png'), imageHeight: 70, resizeMode: 'contain', openingHours: `א'-ד' 21:30-11:00, ה' 18:00-11:00`,
                     phone: '052-348-1497', web: 'https://110burger.co.il' }} />
                    <Shop info={{ imageSource: require('../../images/coffeetime.png'), imageHeight: 70, resizeMode: 'contain', openingHours: `א'-ד' 21:30-11:00, ה' 18:00-11:00`,
                     phone: '09-7964499', web: 'http://coffeetime.co.il' }} />

                </View>
            </ScrollView>

        );
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
                    <Text style={{ textDecorationLine: 'underline' }} >שעות פתיחה:</Text>
                    <Text style={{ textAlign: 'left' }} >{openingHours} </Text>
                </View>
                <View style={{ flexDirection: 'row', }} >
                    <Text style={{ textDecorationLine: 'underline' }} >טלפון:</Text>
                    <Text>{phone} </Text>

                </View>
                
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', //backgroundColor: 'silver', 
                    width: '100%' }} >
                <PhoneComponent info={{ shouldContainText: false, phone: phone, bcolor: '#25d366', iconName: 'phone', width: 120, fontSize: 13 }} />
                <PhoneComponent info={{ shouldContainText: false, phone: web, bcolor: '#0080ff', iconName: 'web', width: 160, fontSize: 11 }} />
            </View>
    </View>)

}

const Paragraph = ({ text }) => {
    return (
        <View style={styles.paragraph} >
            <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
                solid size={6} color={'black'} />
            <Text>{text}</Text>

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

