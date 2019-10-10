import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle } from '../../utils';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class OtherFacilitiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.tableHead = ['מתקן', 'יום', 'שעות פעילות'];
        this.tableData = [[ 'תחנת דלק', `א'-ה'`, '7:00-22:00' ],
                        [ 'אפסנכול', `א'-ה'\n-----\nימי ו' וערבי חג`, '8:30-12:45, 13:40-16:40\n-----\n8:00-12:00' ],
                        ['מרת"ק', `א'-ה'`, '8:30-20:00']
                        ]
        this.libraryRow = ['ספריה', `א'-ד'\n-----\nה'\n-----\nימי ו' וערבי חג`, '8:00-13:00, 14:00-17:00, 19:00-22:00\n----\n8:30-13:00, 14:00-17:00\n----\nמבואת הספרייה פתוחה כל סוף השבוע'];
        this.gameClubRow = ['מועדון', `א'-ה'\n-----\nימי ו'\n-----\nשבת`, '15:30-22:00\n----\n16:00-22:00\n----\n13:00-22:00']
    }
    

    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <Table style={{ width: '92%', marginTop: scale(15) }} borderStyle={{ borderWidth: 0.5, borderColor: 'lightskyblue' }}>
                    <Row data={this.tableHead} flexArr={[ 2, 2.5, 4.5 ]} style={styles.head} textStyle={styles.text} />
                    <Rows data={this.tableData} flexArr={[ 2, 2.5, 4.5 ]} style={styles.row} textStyle={styles.text} />
                    <Row data={this.libraryRow} flexArr={[ 2, 2.5, 4.5 ]}  style={{ height: scale(140) }} textStyle={styles.text} />
                    <Row data={this.gameClubRow} flexArr={[ 2, 2.5, 4.5 ]}  style={{ height: scale(100) }} textStyle={styles.text} />
                    
                </Table>
            </ScrollView>
        );
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