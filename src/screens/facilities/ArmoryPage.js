import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, globalStyles } from '../../utils';

class ArmoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems: 'center'}} >
                <View style={globalStyles.pageContainer} >
                    <Text styles={globalStyles.title} >נשקייה</Text>
                </View>
            </ScrollView>
         );
    }
}
 
export default ArmoryPage;