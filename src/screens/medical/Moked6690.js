import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale } from 'react-native-size-matters';
import { data, globalStyles, Bullet, PhoneComponent } from '../../utils';

export default class Moked6690 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}  >
                <View style={styles.pageContainer} >

                    <Text style={[globalStyles.title, { marginVertical: 0, marginBottom: scale(10) }]} >השירותים הניתנים במוקד</Text>

                    {Object.entries(data.medical.moked6690).map(([k, v]) =>
                        k <= 6 ? <Bullet key={k} text={v} /> : null
                    )}


                    <Text style={[globalStyles.title, {
                        marginVertical: 0, marginBottom: scale(10),
                        marginTop: scale(10)
                    }]} >פירוט שעות פעילות של מוקד ייעוץ אחיות</Text>
                    <Bullet text={data.medical.moked6690['7']} />
                    <Bullet text={data.medical.moked6690['8']} />
                    <Bullet text={data.medical.moked6690['9']} />

                    <View style={{ marginTop: scale(15) }} >
                        <Text style={{
                            fontSize: scale(20), textDecorationLine: 'underline',
                            writingDirection: 'rtl'
                        }} >צור קשר:</Text>

                    </View>

                        <PhoneComponent style={{justifyContent: 'space-evenly'}} info={{ text: 'אזרחי', phone: '03-9489999', bcolor: '#25d366', iconName: 'phone' }} />
                        <PhoneComponent style={{justifyContent: 'space-evenly'}} info={{ text: 'מטכלי', phone: '03-39999', bcolor: '#4b5320', iconName: 'deskphone' }} />
                        <PhoneComponent style={{justifyContent: 'space-evenly'}} info={{ text: 'אפשר גם', phone: '6690*', bcolor: '#F20000', iconName: 'heart' }} />
                        <PhoneComponent style={{justifyContent: 'space-evenly'}} info={{ text: 'מייל אזרחי', phone: 'moked6690@idf.gov.il', bcolor: '#4798cc', iconName: 'email' }} />

                    

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
        width: '88%',
        marginVertical: scale(15),
        //backgroundColor: 'blue'
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

