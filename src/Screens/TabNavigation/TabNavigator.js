import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../DrawerScreens/HomeScreen';
import AddConceptScreen from '../DrawerScreens/AddConceptScreen';
import FaqScreen from '../DrawerScreens/FaqScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const homeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    );
  };
  
  const faqScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="FaqScreen">
        <Stack.Screen
          name="FaqScreen"
          component={FaqScreen}
          options={{
            title: 'FAQ', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  const addConceptStack = ({navigation}) => {
      return (
        <Stack.Navigator
          initialRouteName="AddConcept"
          screenOptions={{
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}>
          <Stack.Screen
            name="AddConceptScreen"
            component={AddConceptScreen}
            options={{
              title: 'Add Concept', //Set Header Title
            }}
          />
        </Stack.Navigator>
      );
    };
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homeScreenStack} />
      <Tab.Screen name="FAQ" component={faqScreenStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;