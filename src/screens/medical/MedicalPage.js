import React from 'react'
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, RTLText } from '../../utils';
import { CustomHeader, Container, PageButton } from '../../utils';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MedicalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <CustomHeader {...this.props} headerTitle='רפואה' >

                        <View style={styles.pageContainer} >
                            <PageButton info={{ iconName: 'healing', iconType: 'MIIcon', pageName: 'Pharmacy', text: 'בית מרקחת', }}
                                 />
                            <PageButton info={{ iconName: 'hand-holding-heart', pageName: 'Moked6690', text: 'מוקד מ"קול הלב"' }}
                                 />
                            <PageButton info={{ iconName: 'clinic-medical', pageName: 'Harap', text: 'חר"פ - רופאים מומחים' }}
                                 />
                            <PageButton info={{ iconName: 'lab-flask', iconType: 'Entypo', pageName: 'LabServices', text: 'שירותי מעבדה' }}
                             />
                        </View>
                
            </CustomHeader>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', marginBottom: scale(30),
        justifyContent: 'space-around'
    },

})