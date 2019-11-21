import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, RTLText } from '../../utils';
import { CustomHeader, PageButton } from '../../utils';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class FacilitiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <CustomHeader {...this.props} headerTitle='מתקנים קריתיים' >

                <View style={styles.pageContainer} >
                    <PageButton info={{ iconName: 'dumbbell', pageName: 'SportPage', text: 'מרכז הספורט', }}
                        navigate={this.props.navigation.navigate} />
                    <PageButton info={{ iconName: 'local-laundry-service', iconType: 'MCIcon', pageName: 'LaundryPage', text: 'מכבסה' }}
                        navigate={this.props.navigation.navigate} />
                    <PageButton info={{ iconName: 'content-cut', iconType: 'MCIcon', pageName: 'BarberPage', text: 'מספרה' }}
                        navigate={this.props.navigation.navigate} />
                    <PageButton info={{ iconName: 'clock-outline', iconType: 'MCIcon', pageName: 'OtherFacilitiesPage', text: 'מתקנים נוספים' }}
                        navigate={this.props.navigation.navigate} />
                </View>

            </CustomHeader>
        );
    }
}



const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', marginBottom: scale(30),
        alignSelf: 'center',
        justifyContent: 'space-around'
        //marginVertical: scale(15),
    },

})