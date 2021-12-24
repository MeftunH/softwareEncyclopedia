import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import AppBar from './appbar';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../src/firebase/config'
import LinearGradient from 'react-native-linear-gradient';
export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [title, seTitle] = useState('');
    const [description, setDescription] = useState([]);


    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "concepts"));
        const newConcepts = [];
        querySnapshot.forEach((doc) => {
            var title = doc.data().title;
            var description = doc.data().description;
            newConcepts.push({ title: title, description: description });
        });
        setData(newConcepts);
    }

    useEffect(() => {
        getData();
    });
    return (
        <View>
            {/* <AppBar></AppBar> */}
            <FlatList
                data={data}
                style={styles.container}
                renderItem={({ item }) =>
                    <View style={[styles.card, { flexDirection: 'column' },]}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textContent}>{item.description}</Text>
                    </View>}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#d7d7d7'
    },

    container: {
        paddingTop: 10,
    },
    textTitle: {
        paddingBottom: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContent: {
        flex: 1,
        padding: 13,
        fontSize: 14,
    },
});