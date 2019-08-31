import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    InteractionManager, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { SearchBar } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class PitiaPage extends React.Component {

    /*static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'פיתייה'
        };
    };*/

    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false
        }

    }

    componentDidMount() {
        this.props.navigation.setParams({ headerTitle: 'פיתייה' })
      }

    render() {
        return (
            <View style={styles.container} >
                <Text>Page</Text>
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

