import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { borderRadiusStyle, Bullet, RTLText } from '../../../utils';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class PrayTimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    
        this.flexArr1 = [ 4,2,2 ]
        this.tableData1 = [
            ['שחרית מניין ראשון', '6:15', '6:15' ],
            ['שחרית מניין שני', '7:10', '7:10' ],
            ['מנחה מניין ראשון', '12:35', '13:35' ],
            ['מנחה מניין שני', '13:35', '16:35' ],
            ['ערבית מניין ראשון', '18:30', '20:00' ],
            ['ערבית מניין שני',  '20:30', '21:30' ],
        ];

        this.flexArr2 = [ 3,4,2.5,3,3 ]
        this.tableData2 = [
            ['שחרית', 'מזריחת השמש - 09:00', '40 דקות', 'שעתיים (כולל מוסף)', 'שעה (כולל מוסף)' ],
            ['מנחה', 'מ12:15 - שקיעת החמה', '15 דקות', '30 דקות', '15 דקות' ],
            ['ערבית', 'מחצי שעה לפני שקיעת החמה - 23:30', '15 דקות', '30 דקות', '15 דקות' ],
            
        ];
    }
    render() {
        
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{
                    width: '92%', marginVertical: scale(15),
                    alignItems: 'center'
                }} >

                    <Text style={styles.title} >יום חול</Text>
                    <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                        <Row data={[ '', 'חורף', 'קיץ' ]} flexArr={this.flexArr1} style={styles.head} textStyle={styles.text} />
                        <Rows data={this.tableData1} flexArr={this.flexArr1} style={styles.row1} textStyle={styles.text} />

                    </Table>

                    <Text style={{fontSize: scale(24), color: '#4b5320', marginTop: scale(20),
                    textDecorationLine: 'underline'}} >יום שבת</Text>
                    <Text style={{fontSize: scale(24), color: '#4b5320',}} >לפי לו"ז שבת המפורסם</Text>
                

                    <Text style={styles.title} >משך זמן תפילות המגיע לחייל</Text>
                    <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                        <Row data={[ '', 'זמן תפילה', 'חול', 'שבת/חג', '(לרבות חוה"מ)' ]} flexArr={this.flexArr2} style={styles.head} textStyle={styles.text} />
                        <Rows data={this.tableData2} flexArr={this.flexArr2} style={styles.row2} textStyle={styles.text} />

                    </Table>

                    <Text style={styles.title} >שחרית</Text>
                    <View style={{ width: '100%' }} >
                        <Bullet text={`ימי שני וחמישי: 50 דקות`} />
                        <Bullet text={`חודש לפני הימים הנוראים ועד לערב יום כיפור, למעט ראש השנה ויום כיפור: 30 דקות נוספות על הזמן האמור לעיל עבור סליחות`} />
                        <Bullet text={'ראש השנה ויום כיפור: ארבע שעות \n(כולל מוסף) '} />
                        <Bullet text={'חנוכה, פורים ויום העצמאות: שעה'} />
                        <Bullet text={`ט' באב: שעה ו15 דקות (כולל קריאת מגילה וקינות)`} />
                    
                    </View>

                    <Text style={styles.title} >מנחה</Text>
                    <View style={{ width: '100%' }} >
                        <Bullet text={`יום הכיפורים: שעתיים (כולל נעילה)`} />
                        <Bullet text={`ימי צום: 30 דקות נוספות על הזמן האמור לעיל.`} />
                        
                    </View>

                    <Text style={styles.title} >ערבית</Text>
                    <View>
                        <Bullet text={`יום הכיפורים: שעתיים`} />
                        <Bullet text={'פורים: 45 דקות'} />
                        <Bullet text={'יום העצמאות: 30 דקות'} />
                        <Bullet text={`ט' באב: 45 דקות (כולל קריאת מגילה וקינות)`} />
                    
                    </View>
                    
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
    row1: { height: scale(50), },
    row2: { height: scale(70) },
    text: { textAlign: 'center' }
})