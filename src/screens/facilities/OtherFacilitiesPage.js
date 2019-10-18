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
        this.tableHead = ['מתקן', 'שעות פעילות'];
        this.tableData = [
                        ['אפסנכול', `א'-ה': 8:30-12:45, 13:40-16:40, ימי ו' וערבי חג: 8:00-12:00`],
                        [ 'תחנת דלק', `א'-ה': 7:00-22:00` ],
                        ['מרת"ק', `א'-ה': 8:30-20:00`],
                      ]
        this.armoryRow = ['נשקייה', `א': 9:30-12:00, 13:00-16:30\nב': 08:00-11:30, 13:00-16:30\nג'-ד': 08:00-12:00, 13:00-16:30\nה': 08:00-12:00, 13:00-15:00\nו': 08:00-09:00, אפסוני סגל חריגים`]
        this.libraryRow = ['ספריה', `א'-ד': 8:00-13:00, 14:00-17:00, 19:00-22:00.\nה': 8:30-13:00, 14:00-17:00\nימי ו' וערבי חג: מבואת הספרייה פתוחה כל סוף השבוע`]
        this.gameClubRow = ['מועדון', `א'-ה': 15:30-22:00\nימי ו': 16:00-22:00\nשבת: 13:00-22:00`]
    }
    

    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <Table style={{ width: '92%', marginTop: scale(15) }} borderStyle={{ borderWidth: 0.5, borderColor: 'lightskyblue' }}>
                    <Row data={this.tableHead} flexArr={[ 2, 5 ]} style={styles.head} textStyle={styles.text} />
                    <Row data={this.armoryRow} flexArr={[ 2, 5 ]} style={{ height: scale(120) }} textStyle={styles.text} />
                    <Row data={this.libraryRow} flexArr={[ 2, 5 ]} style={{ height: scale(105) }} textStyle={styles.text} />
                    <Row data={this.gameClubRow} flexArr={[ 2, 5 ]} style={{ height: scale(75) }} textStyle={styles.text} />
                    
                    <Rows data={this.tableData} flexArr={[ 2, 5 ]} style={styles.row} textStyle={styles.text} />
                    
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
    row: { height: scale(50) },
    text: { textAlign: 'center' }
})