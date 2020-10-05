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
            <View style={styles.container} >
                <Image style={styles.imgWorkInProgress}
                       source={require('../../images/workInProgress.gif')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    imgWorkInProgress: {
        width: '100%',
        resizeMode: 'cover'
    }
})
