import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text,Alert } from "react-native";
import { collection, addDoc, storage, getDocs } from "firebase/firestore";
import { db, auth } from '../../firebase/config'
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function AddConcept() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [addedUserEmail, setAddedUserEmail] = useState('');
  const [errortext, setErrortext] = useState('');

  const user = auth.currentUser;

  const handleSave = async () => {
    setErrortext('');

    if (!title) {
      alert('Please fill title');
      return;
    }
    if (!description) {
      alert('Please fill description');
      return;
    }
    setAddedUserEmail(user.email);
    const docRef = await addDoc(collection(db, "concepts"), {
      title: title,
      description: description,
      user_email: user.email,
    }).then(() => {
      Alert.alert(
          "Eklendi",
          "Basariyle Eklendi.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
        );
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(
      errorCode,
      errorMessage.replace("Firebase:" , ""),
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  });;


    // PUSH NOTIFICATION
    const querySnapshot = await getDocs(collection(db, "userData"));

    var expoPushTokens = [];
    await querySnapshot.forEach(async (doc) => {
      expoPushTokens.push(doc.data().expoToken);
    });
    const message = {
      to: expoPushTokens,
      sound: 'default',
      title: `${title} adinda yeni konseptimiz var.Goz atmak ister misin?`,
      body: `${title} adli yeni konsept eklendi`,
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Title"
        value={title} onChangeText={title => setTitle(title)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Description"
        value={description} onChangeText={description => setDescription(description)}
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
