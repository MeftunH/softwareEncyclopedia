import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import { onSnapshot, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'
import Accordion from '@gapur/react-native-accordion'; //https://www.npmjs.com/package/@gapur/react-native-accordion


export default function FaqScreen() {
    const [data, setData] = useState([]);
    const [description, setDescription] = useState();
    const [loadingAct, setLoadingAct] = useState(true);
    const [title, setTitle] = useState();

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "FAQ"));
        const faqs = [];
        querySnapshot.forEach((doc) => {
                setDescription(doc.data().description);
                setTitle(doc.data().title);
                faqs.push({ title:title,description: description });

        });
        console.log(faqs);
        setData(faqs);
    }
     useEffect(() => {
        
        if(loadingAct == true){
        getData();
        setLoadingAct(false); 
        }

    });



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
            keyExtractor={(item) => title}
        />
    );

}
const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
    },

});