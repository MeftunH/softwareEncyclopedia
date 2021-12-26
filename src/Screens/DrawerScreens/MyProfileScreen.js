import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { auth } from '../../firebase/config'
import { onSnapshot, collection, getDocs, where, } from "firebase/firestore";
import { db } from '../../firebase/config'

export default function MyProfileScreen(props) {
    const user = auth.currentUser;
    const [loadingAct, setLoadingAct] = useState(true);
    const [data, setData] = useState([]);
    const [bio, SetBio] = useState();
    const [job, SetJob] = useState();
    const getData = async () => {
        console.log('get data');
        const querySnapshot = await getDocs(collection(db, "users"));
        const newConcepts = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().email == user.email) {
                var bio = doc.data().bio;
                var job = doc.data().job;
                newConcepts.push({ bio: bio, job: job });
            }

        });
        setData(newConcepts);
    }
    console.log(data)
    useEffect(() => {
        
        if(loadingAct == true){
        getData();
    setLoadingAct(false);
        }
        data.map((item) => {
            SetJob(item.job);
            SetBio(item.bio);
        });
    console.log(job) 
    
    });
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.textTitle}>{user.email}</Text>
            </View>
            <View style={styles.SectionStyle}>

                <TextInput
                    value={bio}
                    style={styles.inputStyle}
                    placeholder="Biography"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    returnKeyType="next"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                />
            </View>
            <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    value={job}
                    placeholder="Job Description"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    returnKeyType="next"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                />
            </View>
            <View style={[styles.logoutViewStyle, { flexDirection: 'row' },]}>
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        'Logout',
                        'Are you sure? You want to logout?',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {
                                    return null;
                                },
                            },
                            {
                                text: 'Confirm',
                                onPress: () => {
                                    AsyncStorage.clear();
                                    props.navigation.replace('Auth');
                                },
                            },
                        ],
                        { cancelable: false },
                    );
                }}>
                    <Image style={styles.iconStyle} source={require('../../../assets/logoutIcon.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.logoutTextStyle}>
                    Logout
                </Text>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    iconStyle: {
        height: 15,
        width: 15,
        paddingTop: 20,
        paddingRight: 20,
        marginRight: 10,
    },
    logoutTextStyle: {
        color: 'red',
        fontWeight: 'bold',
    },
    logoutViewStyle: {
        marginTop: 20,
        alignSelf: 'center',
        padding: 10,
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
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#0000',
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
        alignSelf: 'center',
    },
    textContent: {
        flex: 1,
        padding: 0,
        fontSize: 1,
        color: 'red',
    },

});
