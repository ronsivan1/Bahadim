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

export default class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <CustomHeader {...this.props} headerTitle='מידע נוסף' >

                        <View style={styles.pageContainer} >
                            <PageButton info={{ iconName: 'people', iconType: 'MIIcon', pageName: 'TashPage', text: 'פרט ות"ש', }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'star-of-david', pageName: 'JewishPage', text: 'יהדות' }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'pistol', iconType: 'MCIcon', pageName: 'RookieRights', text: 'טירונות ורובאות' }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'caveret', pageName: 'caveret', text: 'אתר כוורת' }}
                            navigate={this.props.navigation.navigate} />
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