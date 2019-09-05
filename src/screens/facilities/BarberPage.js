import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle } from '../../utils';

class BarberPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems: 'center'}} >
                <Text>BarberPage.js</Text>
            </ScrollView>
         );
    }
}
 
export default BarberPage;