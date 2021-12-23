import React, { useState} from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import HomeStackNavigator from './stack-navigators/HomeStackNavigation'
import AddConceptStackNavigator from './stack-navigators/AddConceptStackNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './tab-navigators/BottomTabNavigator'
import { routes, screens } from '../navigations/RouteItems'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { useNavigation } from '@react-navigation/native';

import RegistrationScreen from './../screens/RegistrationScreen/RegistrationScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const navigation = useNavigation(); 

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name
  const {setAuth} = props;

  return (
    <DrawerContentScrollView drawerContent={({navigation})=> <DrawerContainer setAuth={setAuth} navigation={navigation}/>} {...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.HomeStack
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  const [auth, setAuth] = useState(false); 

  return (
    auth == true 
    ?  
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#551E18',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
        title: 'Home',
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="bell" size={20} color="#fff" />
          </View>
        ),
      }}/>
    </Drawer.Navigator>  :    navigation.navigate('Login')
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
})



export default DrawerNavigator