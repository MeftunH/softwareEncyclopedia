import 'react-native-gesture-handler';
import React, { useEffect, useState,createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, AddConceptScreen } from './src/screens'
import DrawerNavigator from './src/navigations/DrawerNavigator'
import { decode, encode } from 'base-64'
import { firebase } from './src/firebase/config'
import { StyleSheet, Button, View, SafeAreaView,StatusBar, Text, Alert } from 'react-native';
import { LogBox,Image } from 'react-native';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const navigationRef = createRef()
const nav = () => navigationRef.current

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App