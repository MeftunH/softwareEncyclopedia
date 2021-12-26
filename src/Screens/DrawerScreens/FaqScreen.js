import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import { onSnapshot, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import Accordion from '@gapur/react-native-accordion'; //https://www.npmjs.com/package/@gapur/react-native-accordion


export default function FaqScreen() {
    const [data, setData] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "FAQ"), (snapshot) =>
                setData(snapshot.docs.map((doc) => ({ ...doc.data(), title: doc.data().title, description: doc.data().description })))
            ),
        []
    );




    const renderList = ({ item }) => {
        return (
            <View key={item.id}>
                <Accordion headerTitle={item.title}>
                    <Text style={styles.textStyle}>{item.description}</Text>

                </Accordion>
            </View>
        );
    };
    return (
        <FlatList
            data={data}
            renderItem={renderList}
            keyExtractor={(item) => item.id.toString()}
        />
    );

}
const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
    },

});