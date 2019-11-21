import React from 'react'
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, 
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { CustomHeader, PageButton } from '../../../utils';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class JewishPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <CustomHeader {...this.props} headerTitle='יהדות' >
                <View style={styles.pageContainer} >
                            <PageButton info={{ iconName: 'synagogue', pageName: 'PrayTimes', text: 'זמני תפילות', }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'book', iconType: 'OctiIcon', pageName: 'Lessons', text: 'לוח שיעורים' }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'phone', iconType: 'MCIcon', pageName: 'Contact', text: 'צור קשר' }}
                                navigate={this.props.navigation.navigate} />
                            
                        </View>
            </CustomHeader>
        );
    }
}

export default JewishPage;

const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', flex: 1,
        alignSelf: 'center', 
        //backgroundColor: 'blue'
        //marginVertical: scale(15),
    },

})