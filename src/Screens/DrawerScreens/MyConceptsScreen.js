import { StyleSheet, Text, FlatList, View, Image, Button, TouchableOpacity,Alert  } from 'react-native';
import React, { useState, useEffect } from "react";
import { doc,onSnapshot,collection, getDocs,deleteDoc ,where,query,snapshot} from "firebase/firestore";
import { auth, db } from '../../firebase/config'
export default function MyConcepts({ navigation }) {
    const user = auth.currentUser;
    const [data, setData] = useState([]);
    const getData = async () => {
        console.log('get data');
        const querySnapshot = await getDocs(collection(db, "concepts"));
        const newConcepts = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().user_email == user.email) {
                var title = doc.data().title;
                var description = doc.data().description;
                newConcepts.push({ title: title, description: description });
            }

        });
        setData(newConcepts);
    }
    
    useEffect(() => {
        getData();
    }, []);
      console.log(data)
    const deleteData = async (conceptId) => {
        const conceptDocRef = doc(db, 'concepts', conceptId)
    try{
      await deleteDoc(conceptDocRef).then( Alert.alert(
        "Deleted",
        "Concept Deleted",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      ))
    } catch (err) {
      alert(err)
    }
    }

    
    return (
        <View>
            <Text style={styles.titleStyle}> My Concepts</Text>
            <FlatList
                data={data}
                style={styles.container}
                renderItem={({ item }) =>
                    <View style={[styles.card, { flexDirection: 'column' },]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textTitle}>{item.title}</Text>
                            <View>
                                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                                    <Image style={styles.iconStyle} source={require('../../../assets/editIcon.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { deleteData(item.id) }}>
                                <Image style={styles.iconStyle} source={require('../../../assets/trashIcon.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.textContent}>{item.description}</Text>
                    </View>}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    iconStyle: {
        height: 15,
        width: 15,
        paddingTop: 20,
        paddingRight: 20,
        marginLeft: 10,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        paddingTop: 20,
    },
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
        fontWeight: 'bold',
        flex: 1,
    },
    textContent: {
        flex: 1,
        padding: 13,
        fontSize: 14,
    },
});