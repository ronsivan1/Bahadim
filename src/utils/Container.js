import React from 'react';
import { View,  ActivityIndicator, Dimensions, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.timeoutFunc = this.timeoutFunc.bind(this);
        this.state = { interactionComplete: false }
    }
    timeoutFunc(){
        this.setState({
            interactionsComplete: true,
        });
    }
    componentDidMount() {
        setTimeout(this.timeoutFunc, 300)
    }
    render() { 
        if (!this.state.interactionsComplete) {
            return (
                    <View style={{ width:'100%', height: SCREEN_HEIGHT-scale(200),
                     justifyContent: 'center', alignItems: 'center' }} >
                        <ActivityIndicator color={'#4b5320'}
                    size={Platform.OS == 'ios' ? 0 : 45} />
                    </View>);
        }
        return this.props.children
    }
}