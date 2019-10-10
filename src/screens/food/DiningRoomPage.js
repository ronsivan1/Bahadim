import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    InteractionManager, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class DiningRoomPage extends React.Component {

    /*static navigationOptions = ({ navigation }) => {
        console.log(navigation.isFocused())
        return {
            tabBarLabel: 'חדר אוכל',
            
        };
    };*/

    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false
        }

        this.tableHeader = [`יום ה` ,`יום ד'`, `יום ג'`, `יום ב'`, `יום א'`]

    }

    componentDidMount() {
        this.props.navigation.setParams({ headerTitle: 'חדר אוכל' })
    }

    render() {
        const flexArr = [3, 3, 3, 3, 3]
        return (
            <View style={styles.container} >
                <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }} >
                    <Row data={this.tableHeader} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
                </Table>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    row: { height: scale(50), },
    text: { textAlign: 'center' }
})

