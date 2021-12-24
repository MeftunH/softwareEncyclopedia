import React, {useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from "react-native";
import { collection, addDoc,storage } from "firebase/firestore"; 
import { db, auth } from '../../src/firebase/config'

export default function AddConcept() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const user = auth.currentUser;

    const handleSave = async()=>{
      
          await addDoc(collection(db, "concepts"), {
          title: title,
          description: description,
          user_email:user.email,
        });

       }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Title"
                value={title} onChangeText={title=>setTitle(title)}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Description"
                value={description} onChangeText={description=>setDescription(description)}
            />
            <Button title="Save" onPress={handleSave}></Button>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,

        color: 'black',
        backgroundColor: 'red',
        alignItems: 'center',
    },
    buttonTextStyle: {
        height: 50,
        color: 'blue',
        backgroundColor: 'yellow',
        alignSelf: 'center',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
