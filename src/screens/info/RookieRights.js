import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { PhoneComponent, data } from '../../utils';

export default class RookieRights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.flexArr = [1, 1]
    }
    
    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{
                    width: '85%', marginVertical: scale(15),
                    alignItems: 'center'
                }} >

                    

                </View>
            </ScrollView>
        );
    }
}


