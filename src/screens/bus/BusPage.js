import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet, BackHandler,
    Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback,
    InteractionManager, ActivityIndicator, Platform
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
//import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { sundayFullData, thursdayFullData, fridayFullData } from '../../utils/index'

export default class BusPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false,
            //search: '',
            //sundayTableData: [], thursdayTableData: [], fridayTableData: [],
            sundayTableData: sundayFullData,
            thursdayTableData: thursdayFullData,
            fridayTableData: fridayFullData,
            search: '',
        }

        //this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        //this.blurSearchBar = this.blurSearchBar.bind(this);
        //this.updateSearch = this.updateSearch.bind(this);

        this.tableHead = ['עיר', 'מיקום', 'שעות'];
        this.tableHead2 = ['יעד' ,'שעות'];
        
    }

    /*shouldComponentUpdate(nextState, nextProps) {
        return nextState.sundayTableData != this.state.sundayTableData
            || nextState.search != this.state.search
    }*/

    /*InteractionManager.runAfterInteractions(() => {
            console.log('interaction completed')
            this.setState({
                interactionsComplete: true,
            });
        })*/

    /*componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        
        setTimeout(() => {
            this.setState({
                interactionsComplete: true,
            });
        }, 300)
    }*/

    componentWillUnmount() {
        //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    /*handleBackButtonClick = () => {
        if (this.state.search != "") {
            this.search.clear();
            return true;
        }
        return false;
    }*/

    /*updateSearch(text) {
        const formatQuery = text.toLowerCase();
        const sundayData = _.filter(sundayFullData, row => {
            return doesExistInRow = row.some((cellText) => { // this function checks if there is at least 1 cell that the query exists in, if so it returns true otherwise false
                if (cellText.includes(formatQuery))
                    return true;
            })
        });
        const thursdayData = _.filter(thursdayFullData, row => {
            return doesExistInRow = row.some((cellText) => { // this function checks if there is at least 1 cell that the query exists in, if so it returns true otherwise false
                if (cellText.includes(formatQuery))
                    return true;
            })
        });
        const fridayData = _.filter(fridayFullData, row => {
            return doesExistInRow = row.some((cellText) => { // this function checks if there is at least 1 cell that the query exists in, if so it returns true otherwise false
                if (cellText.includes(formatQuery))
                    return true;
            })
        });
        this.setState({
            search: text, sundayTableData: sundayData,
            thursdayTableData: thursdayData, fridayTableData: fridayData
        });
    };*/

    /*blurSearchBar() {
        this.search.blur();
    }*/

    render() {
        //console.log('rendered BusPage')
        if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator color={'#4b5320'}
                    size={Platform.OS == 'ios' ? 0 : 45} />
                </View>);
        }
        else {
            const imageUri = 'https://upload.wikimedia.org/wikipedia/he/5/5b/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%A7%D7%A8%D7%99%D7%99%D7%AA_%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94_-_%D7%A2%D7%99%D7%A8_%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D.png';
            const state = this.state;
            const flexArr = [3, 4, 5];
            return (
                <TouchableWithoutFeedback onPress={this.blurSearchBar}  >
                    <ScrollView style={{ flex: 1, /*backgroundColor: '#eaeed3'*/ }}
                        contentContainerStyle={{ paddingBottom: scale(40) }} >
                        {/*<SearchBar placeholder='חפש...' lightTheme round ref={search => this.search = search}
                            containerStyle={{ transform: [{ scaleX: -1 }] }} inputStyle={{ transform: [{ scaleX: -1 }] }} //these props meant to flip everything to rtl, consider removing this if forceRtl(true)
                            value={state.search} onChangeText={this.updateSearch} />*/}
                        <View style={{ alignItems: 'center' }} >

                            <Text style={styles.tableTitle} >יום ראשון</Text>
                            <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                                <Row data={this.tableHead} flexArr={flexArr}  style={styles.head} textStyle={styles.text} />
                                <Rows data={state.sundayTableData} flexArr={flexArr} style={styles.row} textStyle={styles.text} />

                            </Table>
                            <Text style={styles.tableTitle} >יום חמישי</Text>
                            <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                                <Row data={this.tableHead2} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
                                <Rows data={state.thursdayTableData} flexArr={flexArr} style={styles.row} textStyle={styles.text} />

                            </Table>
                            <Text style={styles.tableTitle} >יום שישי</Text>
                            <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                                <Row data={this.tableHead2} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
                                <Rows data={state.fridayTableData} flexArr={flexArr} style={styles.row} textStyle={styles.text} />

                            </Table>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            );
        }
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

