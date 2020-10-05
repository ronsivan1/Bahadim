import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale } from 'react-native-size-matters';
import { data, globalStyles } from '../../utils';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default class Pharmacy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.flexArr = [ 1, 2 ]
        this.tableData = [
            [`ב'-ד'`, '08:00-12:00, 13:00-17:00'],
            [`ה'`, '08:00-12:00, 13:00-16:00']
        ];
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}  >
                <View style={styles.pageContainer} >

                    <Table style={{ width: '100%', }} borderStyle={{ borderWidth: 0.5, borderColor: 'lightskyblue' }}>
                        <Row data={['יום', 'שעות פעילות']} flexArr={this.flexArr} style={globalStyles.head} textStyle={globalStyles.textAlignCenter} />
                        <Rows data={this.tableData} flexArr={this.flexArr} style={globalStyles.row} textStyle={globalStyles.textAlignCenter} />
                    </Table>

                    <Text style={globalStyles.title} >פרטים נוספים</Text>
                    <Text style={globalStyles.text} >{data.medical.pharmacyInfo}</Text>
                </View>
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageContainer: {
        width: '90%',
        marginVertical: scale(15),

    },
})

