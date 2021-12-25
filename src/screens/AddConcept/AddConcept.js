import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from "react-native";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
const AddConcept = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Description"
            />
            <Button title='Send' color='red' />
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Send</Text>
            </View>
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

export default AddConcept;