import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { data, globalStyles } from '../../../utils';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{ width: '92%', marginVertical: scale(15), 
                    alignItems: 'center' }} >

                    <Table style={{ width: '100%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                        <Row data={['יום', 'שעה', 'קהל יעד', 'מיקום', 'המעביר']} flexArr={data.jewish.lessons.flexArr} style={styles.head} textStyle={styles.text} />
                        <Rows data={data.jewish.lessons.tableData} flexArr={data.jewish.lessons.flexArr} style={styles.row} textStyle={styles.text} />

                    </Table>
                    
                    <Text style={[globalStyles.title, { textDecorationLine:'none', fontWeight: 'bold' }]} >כל השיעורים מתקיימים עם המון מצב רוח וכיבוד בבית כנסת "אור עולם" (מבנה 209)</Text>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    title: {
        textDecorationLine: 'underline',
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(15),
        alignSelf: 'center'
    },
    row: { height: scale(60), },
    text: { textAlign: 'center' }
})
