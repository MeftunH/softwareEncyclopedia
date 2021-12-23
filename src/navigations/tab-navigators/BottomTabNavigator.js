import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 
import HomeStackNavigator from '../../navigations/stack-navigators/HomeStackNavigation'
import AddConceptStackNavigator from '../stack-navigators/AddConceptStackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import { routes, screens } from '../RouteItems'
import { Text, StyleSheet, View } from 'react-native'

const Tab = createBottomTabNavigator()
const tabOptions = ({ route }) => {
    const item = routes.find(routeItem => routeItem.name === route.name) // get the route config object
  
    if (!item.showInTab) { // hide this tab
      return {
        tabBarButton: () => <View style={{ width: 0 }} />,
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        title: item.title,
      }
    }
  
    return {
      tabBarIcon: ({ focused }) => item.icon(focused),
      tabBarLabel: () => (
        <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
      ),
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    }
  }
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabOptions
    }}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} 
       options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
        ),  
    }} />
     
      <Tab.Screen name="AddConceptStack" component={AddConceptStackNavigator} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="plus" size={30} color={focused ? '#551E18' : '#000'} />
        ),  
    }} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },
    tabContainer: {
      height: 60,
    }
  })
export default BottomTabNavigator