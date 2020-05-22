import React from 'react';
import {
    View, Text, ScrollView, TextInput, StyleSheet, BackHandler,
    Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback,
    InteractionManager, ActivityIndicator, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
//import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { data } from '../../utils';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class DiningRoomPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false,
            
        }

        this.tableHead = [ '', 'יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה' ];
    }


    componentDidMount() {
    }

    render() {
        //console.log('rendered BusPage')
        /*if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator color={'#4b5320'}
                        size={Platform.OS == 'ios' ? 0 : 45} />
                </View>
                );
        }
        else {*/

            const state = this.state;
            const flexArr = [2.7, 3, 3, 3, 3, 3];
            return (
                    <ScrollView style={{ flex: 1, /*backgroundColor: '#eaeed3'*/ }}
                        contentContainerStyle={{ paddingBottom: scale(40) }} >


                        <View style={{ alignItems: 'center', marginTop: scale(15) }} >

                            <Table style={{ width: '95%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                                <Row data={this.tableHead} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
                                <Rows data={data.food.pitiaTable} flexArr={flexArr} style={styles.row} textStyle={styles.text} />

                            </Table>
                            
                        </View>
                    </ScrollView>
            );
        //}
        
    }
}


const styles = StyleSheet.create({
    tableTitle: {
        color: '#4b5310',
        fontSize: scale(27),
        marginVertical: scale(25),
        fontWeight: 'bold', textDecorationLine: 'underline'
    },
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row', },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: scale(50), },
    text: { textAlign: 'center' }
})

