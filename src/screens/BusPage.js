import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    StatusBar, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class BusPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{ key: 0, width: 60, title: 'Station' },
            { key: 1, width: 60, title: 'Location' },
            { key: 2, width: 60, title: 'Hours' },],
            data: [{}, {}, {}, {}, {}],
            tableHead: ['Head', 'Head2', 'Head3'],
            tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
            tableData: [
                ['9:30', 'ליד בית חב"ד', 'אשדוד'],
                ['a', 'b', 'c'],
                ['1', '2', '3456\n789'],
                ['a', 'b', 'c'],
            ],
            search: '',
            fullData: []
        }

        this.blurSearchBar = this.blurSearchBar.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        this.setState({ fullData: this.state.tableData })
    }

    updateSearch(text) {
        const formatQuery = text.toLowerCase();
        const data = _.filter(this.state.fullData, row => {
            return doesExistInRow = row.some((cellText) => { // this function checks if there is at least 1 cell that the query exists in, if so it returns true otherwise false
                if (cellText.includes(formatQuery))
                    return true;
            })
        });
        this.setState({ search: text, tableData: data });
    };

    blurSearchBar() {
        this.search.blur();
    }

    render() {
        const imageUri = 'https://upload.wikimedia.org/wikipedia/he/5/5b/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%A7%D7%A8%D7%99%D7%99%D7%AA_%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94_-_%D7%A2%D7%99%D7%A8_%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D.png';
        const state = this.state;
        return (
            <TouchableWithoutFeedback onPress={this.blurSearchBar}  >
                <View style={{ flex: 1, }} >
                    <SearchBar placeholder='חפש...' lightTheme round ref={search => this.search = search}
                        containerStyle={{ transform: [{ scaleX: -1 }] }} inputStyle={{ transform: [{ scaleX: -1 }] }} //these props meant to flip everything to rtl, consider removing this if forceRtl(true)
                        value={state.search} onChangeText={this.updateSearch} />
                    <TableWrapper style={[styles.wrapper, { width: '100%' }]}>
                        <Table style={{ marginTop: scale(10), width: '85%', height: '100%' }} borderStyle={{ borderWidth: 0 }}>
                            <Row data={state.tableHead} flexArr={[1.5, 2, 1.5]} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[1.5, 2, 1.5,]} style={styles.row} textStyle={styles.text} />

                        </Table>
                    </TableWrapper>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: scale(38),
        color: '#fff'

    },
    text: {
        textAlign: 'right'
    },

    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row', backgroundColor: 'gray' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
})

