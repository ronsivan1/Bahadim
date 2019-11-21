import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    InteractionManager, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { data } from '../../utils';

export default class PitiaPage extends React.Component {

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

        this.tableHeader = ['', `יום א` ,`יום ב'`, `יום ג'`, `יום ד'`, `יום ה'`]


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

    componentDidMount() {
        this.props.navigation.setParams({ headerTitle: 'חדר אוכל' })
    }

    render() {
        const flexArr = [2, 3, 3, 3, 3, 3]
        return (
            <View style={styles.container} >
                <Table style={{ width: '92%', marginTop: scale(15) }} borderStyle={{ borderWidth: 0.5, borderColor: 'lightskyblue' }}>
                    <Row data={this.tableHead} flexArr={[ 2, 5 ]} style={styles.head} textStyle={styles.text} />
                    <Row data={this.armoryRow} flexArr={[ 2, 5 ]} style={{ height: scale(120) }} textStyle={styles.text} />
                    <Row data={this.libraryRow} flexArr={[ 2, 5 ]} style={{ height: scale(105) }} textStyle={styles.text} />
                    <Row data={this.gameClubRow} flexArr={[ 2, 5 ]} style={{ height: scale(75) }} textStyle={styles.text} />
                    
                    <Rows data={this.tableData} flexArr={[ 2, 5 ]} style={styles.row} textStyle={styles.text} />
                    
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

