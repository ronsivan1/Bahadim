import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    StatusBar, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <View style={styles.container} >
                <Text>GalleryPage.js</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

