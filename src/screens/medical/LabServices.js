import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale } from 'react-native-size-matters';
import { PhoneComponent, RTLText, globalStyles, data } from '../../utils';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class LabServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.flexArr = [1, 2]
        this.tableData = [
            [`ב', ד'`, '08:00-10:00, 11:00-13:00'],
            [`ג', ה'`, '08:00-10:00, 13:00-16:00']
        ];
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}  >
                <View style={styles.pageContainer} >

                    <Table style={{ width: '100%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                        <Row data={['יום', 'שעות פעילות']} flexArr={this.flexArr} style={globalStyles.head} textStyle={globalStyles.textAlignCenter} />
                        <Rows data={this.tableData} flexArr={this.flexArr} style={globalStyles.row} textStyle={globalStyles.textAlignCenter} />
                    </Table>

                    <Text style={globalStyles.title} >פרטים נוספים</Text>
                    <Text style={globalStyles.text} >{data.medical.labInfo}</Text>

                    <PhoneComponent style={{ marginTop: scale(25) }}
                            info={{ text: "צור קשר", phone: "0733772886", bcolor: '#25d366', iconName: 'phone' }} />

                </View>
            </ScrollView>
        );
    }
}

const DotIcon = () => {
    return (
        <MCIcon name={'circle'} style={{ marginTop: scale(8), marginEnd: scale(8) }}
            solid size={6} color={'black'} />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageContainer: {
        width: '80%',
        marginVertical: scale(15),

    },
    paragraph: {
        flexDirection: 'row',
        marginVertical: scale(10),

    },
    text: {
        fontSize: scale(15),
        lineHeight: scale(20),
        //writingDirection: 'rtl'
    },
})

