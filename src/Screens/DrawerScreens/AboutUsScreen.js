import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, } from "firebase/firestore";
import { db } from '../../firebase/config'
export default function AboutUsScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [loadingAct, setLoadingAct] = useState(true);
    var description;
    const getData = async () => {
        const q = query(collection(db, "abaoutUs"));
        const querySnapshot = await getDocs(q);
        const myConcepts = [];
        querySnapshot.forEach((doc) => {
            description = doc.data().description;
            console.log(description);
            myConcepts.push({ description: description });
        });
    }

    useEffect(() => {
        if (loadingAct == true) {
            getData();
            setLoadingAct(false);
        }
    });
    return (
        <View style={[styles.card, { flexDirection: 'column' },]}>
            <Text>{description}</Text>
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
        padding: 13,
        fontSize: 14,
    },
});