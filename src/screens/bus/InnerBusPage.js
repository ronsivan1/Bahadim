import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class InnerBusPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container} >
                <Text>InnerBusPage.js</Text>
            </View>
        );
    }
}
 
export default InnerBusPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})