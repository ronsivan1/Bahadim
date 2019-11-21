import React from 'react';
import {
    View, Text, ScrollView, TextInput, StyleSheet, BackHandler,
    Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback,
     ActivityIndicator, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
//import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { Table, Row, Rows } from 'react-native-table-component';
import { data } from '../../utils';

const { sundayFullData, midWeekFullData, thursdayFullData } = data.bus.innerBuses
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class InnerBusPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false,
            //sundayTableData: [], thursdayTableData: [], fridayTableData: [],
            sundayTableData: sundayFullData,
            midWeekTableData: midWeekFullData,
            thursdayTableData: thursdayFullData,
            search: '',
        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

        this.tableHead = ['יום', 'שעות'];
        


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

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

        setTimeout(() => {
            this.setState({
                interactionsComplete: true,
                //sundayTableData: sundayFullData,
                //thursdayTableData: thursdayFullData,
                //fridayTableData: fridayFullData,
            });
        }, 300)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        if (this.state.search != "") {
            this.setState({
                sundayTableData: sundayFullData,
                thursdayTableData: thursdayFullData,
                midWeekTableData: midWeekFullData,
                search: ''
            })
            return true;
        }
        return false;
    }

    updateSearch(text) {
        const formatQuery = text.toLowerCase();
        const sundayData = _.filter(sundayFullData, row => {
            return doesExistInRow = row.some((cellText) => { // this function checks if there is at least 1 cell that the query exists in, if so it returns true otherwise false
                if (cellText.includes(formatQuery))
                    return true;
            })
        });
        const midWeekData = _.filter(midWeekFullData, row => {
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
        this.setState({
            search: text, sundayTableData: sundayData,
            thursdayTableData: thursdayData, midWeekTableData: midWeekData
        });
    };

    render() {
        //console.log('rendered InnerBusPage')
        if (!this.state.interactionsComplete) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator color={'#4b5320'}
                        size={Platform.OS == 'ios' ? 0 : 45} />
                </View>
                );
        }
        else {

            const imageUri = 'https://upload.wikimedia.org/wikipedia/he/5/5b/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%A7%D7%A8%D7%99%D7%99%D7%AA_%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94_-_%D7%A2%D7%99%D7%A8_%D7%94%D7%91%D7%94%D7%93%D7%99%D7%9D.png';
            const state = this.state;
            const flexArr = [1, 1.5];
            return (
                <TouchableWithoutFeedback onPress={this.blurSearchBar}  >
                    <ScrollView style={{ flex: 1, /*backgroundColor: '#eaeed3'*/ }}
                        contentContainerStyle={{ paddingBottom: scale(40) }} >

                        

                        {/*<SearchBar placeholder='חפש...' lightTheme round ref={search => this.search = search}
                            containerStyle={{ transform: [{ scaleX: -1 }] }} inputStyle={{ transform: [{ scaleX: -1 }] }} //these props meant to flip everything to rtl, consider removing this if forceRtl(true)
                            value={state.search} onChangeText={this.updateSearch} />*/}
                        <View style={{ alignItems: 'center' }} >

                            <Text style={styles.tableTitle} >השעות המוצגות הן השעות שבהן השאטל יוצא מהתחנה הראשונה (מפקדה, בה"ד 10)</Text>
                            <Table style={{ width: '92%', }} borderStyle={{ borderWidth: 0, borderColor: 'lightskyblue' }}>
                                <Row data={this.tableHead} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
                                
                                <Row data={state.sundayTableData[0]} flexArr={flexArr} style={styles.row} textStyle={styles.text} />
                                <Row data={state.sundayTableData[1]} flexArr={flexArr} style={{ height: scale(350) }} textStyle={styles.text} />
                                <Row data={state.sundayTableData[2]} flexArr={flexArr} style={styles.row} textStyle={styles.text} />
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
        marginHorizontal: scale(15),
        fontWeight: 'bold', textDecorationLine: 'underline',
        textAlign: 'center'
    },
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row', },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: scale(230), },
    text: { textAlign: 'center', fontSize: scale(20) }
})

