import React from 'react';
import {
    View, StyleSheet, Image, Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
import {scale} from 'react-native-size-matters';

export default class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container} >
                    <Image style={styles.imgWorkInProgress}
                           source={require('../images/workInProgress.gif')} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    imgWorkInProgress: {
        width: '100%',
        resizeMode: 'cover'
    }
})

