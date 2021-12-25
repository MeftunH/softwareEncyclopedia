import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

const AppBar = () => (
    <Appbar style={styles.center}>

        {/* <Appbar.Action style={styles.addButton} icon="plus" onPress={() => console.log('Pressed mail')} /> */}

        <Text style={styles.titleStyle}>Software Ansiklopedi</Text>

    </Appbar>
);

export default AppBar

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    center: {
        height: 75,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    }
});