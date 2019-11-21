import React from 'react'
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, 
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { CustomHeader, PageButton } from '../../../utils';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class TashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <CustomHeader {...this.props} headerTitle='פרט ות"ש' >
                <View style={styles.pageContainer} >
                            <PageButton info={{ iconName: 'clipboard-text-outline', iconType: 'MCIcon', pageName: 'Procedures', text: 'נהלים', }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'form', iconType: 'AntDesign', pageName: 'Yohalam', text: 'פנייה ליוהל"ם' }}
                                navigate={this.props.navigation.navigate} />
                            <PageButton info={{ iconName: 'ios-people', iconType: 'IonIcon', pageName: 'SoldierRights', text: 'זכויות החייל' }}
                                navigate={this.props.navigation.navigate} />
                            
                        </View>
            </CustomHeader>
        );
    }
}

export default TashPage;

const styles = StyleSheet.create({
    pageContainer: {
        width: '90%', flex: 1,
        alignSelf: 'center', 
        //backgroundColor: 'blue'
        //marginVertical: scale(15),
    },

})