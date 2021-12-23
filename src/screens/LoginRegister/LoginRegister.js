import React, { useState } from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet, View, Alert} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestoreDb } from '../../firebase/config'
import { addDoc, collection, setDoc, doc} from "firebase/firestore";


export default function LoginRegister(props) {
  const {setAuth} = props;
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

  const loginHandle = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        Alert.alert(
            "Giriş Başarılı",
            "Giriş basarili sekilde oldu.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }

            ]
            , navigation.navigate('Home')
        );
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
            errorCode,
            errorMessage.replace("Firebase:", ""),
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    });
  }

  const registerHandle = async () => {
    createUserWithEmailAndPassword(firebaseAuth, mail, password)
    .then((userCredential) => {
      Alert.alert(
        "Good Job!",
        "You have successfully registered.",
        [
          { text: "OK", onPress: () => setIsLoginScreen(true)}
        ]
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message.replace("Firebase:", "");
      Alert.alert(
        errorCode,
        errorMessage,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    });
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop : 10,
      marginBottom : 10,
      borderWidth: 1,
      padding: 10,
      width : '100%'
    },
    headText : {
      marginTop: 20,
      fontSize : 30,
      width : '100%',
      textAlign : 'center'
    },
    imageButton : {
      marginTop : 10
    },
    button : {
      marginTop : 10,
      marginBottom : 20
    }
  });

  return (
    isLoginScreen == true ? 
    <SafeAreaView>
      <Text style= {styles.headText}>Login</Text>
        <TextInput  
          style={styles.input}
          onChangeText={setMail}
          value={mail}
          placeholder = 'Email adresi'
          autoCapitalize='none'
        />
        <TextInput  
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder = 'Şifre'
          secureTextEntry={true}
          autoCapitalize='none'
        />
        <Button
          onPress={loginHandle}
          style={styles.button}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
          <Button
          onPress={() => setIsLoginScreen(false)}
          style={styles.button}
          title="Register"
          color="#841584"
          accessibilityLabel="Register"
        />
    </SafeAreaView>
    : 
    <SafeAreaView>
    <Text style= {styles.headText}>Register</Text>
      <TextInput  
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder = 'Email adresi'
        autoCapitalize='none'
      />
      <TextInput  
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder = 'Şifre'
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <Button
        onPress={registerHandle}
        style={styles.button}
        title="Register"
        color="#841584"
        accessibilityLabel="Register"
      />
      <Button
        onPress={() => setIsLoginScreen(true)}
        style={styles.button}
        title="Login"
        color="#841584"
        accessibilityLabel="Login"
      />
  </SafeAreaView>
  );
}

