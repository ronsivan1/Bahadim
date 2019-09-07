import React from 'react';
import { View, Text, ScrollView, StyleSheet,} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';

export const Paragraph = ({ text, num }) => (
    num ? 
    <View style={[globalStyles.paragraph]} >
        <Text style={{ fontSize: scale(17), marginEnd: scale(8), fontWeight: 'bold' }} >.{num}</Text>
        <Text style={{ fontSize: scale(17) }} >{text}</Text>
    </View> :
    <View style={globalStyles.paragraph} >
        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
            solid size={6} color={'black'} />
        <Text style={{ fontSize: scale(17) }} >{text}</Text>
    </View>
);

export const globalStyles = StyleSheet.create({
    pageContainer: {
        width: '85%',
        marginVertical: scale(15),
    },
    title: {
        textDecorationLine: 'underline',
        alignSelf: 'center', fontSize: scale(30),
        color: '#4b5320', fontWeight: 'bold'
    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10),
    },
    text: {
        fontSize: scale(17)
    },
})