import React from 'react';
import {
    View, Text, ScrollView, Animated, StyleSheet,
    InteractionManager
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { scale } from 'react-native-size-matters';
import { SearchBar } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class FoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interactionsComplete: false
        }

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
          this.setState({interactionsComplete: true});
        });
      }

    render() {
        if (!this.state.interactionsComplete) {
            return (<Text>loading...</Text>);
        }
        return (
            <View style={styles.container} >
                <Text>FoodPage.js</Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

