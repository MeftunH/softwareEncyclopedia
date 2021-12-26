
import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import AddConceptScreen from './DrawerScreens/AddConceptScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import FaqScreen from './DrawerScreens/FaqScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from "./TabNavigation/TabNavigator";
import MyConceptsScreen from './DrawerScreens/MyConceptsScreen';
import AboutUsScreen from './DrawerScreens/AboutUsScreen';
import MyProfileScreen from './DrawerScreens/MyProfileScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//tabs
const BottomTabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={32} color="black" />
        }}
      />
      <Tab.Screen
        name="Add Concept"
        component={AddConceptScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={32} color="green" />

        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={32} color="black" />
        }}
      />
    </Tab.Navigator>
  );
};
const AddConceptBottomTabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="Add Concept"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={32} color="black" />
        }}
      />
      <Tab.Screen
        name="Add Concept"
        component={AddConceptScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={32} color="green" />

        }}
      />
       <Tab.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={32} color="black" />
        }}
      />
    </Tab.Navigator>
  );
};
const MyProfileBottomTabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="My Profile"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={32} color="black" />
        }}
      />
      <Tab.Screen
        name="Add Concept"
        component={AddConceptScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={32} color="green" />

        }}
      />
       <Tab.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={32} color="black" />
        }}
      />
    </Tab.Navigator>
  );
};
//stacks
const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabStack}
        options={{
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
        }}
      />
    </Stack.Navigator>
  );
};

const faqScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="FaqScreen"
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
        name="FaqScreen"
        component={FaqScreen}
        options={{
          title: 'FAQ', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const addConceptStack = ({ navigation }) => {
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
        component={AddConceptBottomTabStack}
        options={{
          title: 'Add Concept', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const myConceptsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyConcepts"
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
        name="MyConceptsScreen"
        component={MyConceptsScreen}
        options={{
          title: 'My Concepts', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const aboutUsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyConcepts"
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
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          title: 'About Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const myProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfileScreen"
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
        name="MyProfileScreen"
        component={MyProfileBottomTabStack}
        options={{
          title: 'My Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
//main nav
const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: 'Home' }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="faqScreenStack"
        options={{ drawerLabel: 'FAQ' }}
        component={faqScreenStack}
      />
      <Drawer.Screen
        name="addConceptStack"
        options={{ drawerLabel: 'Add Concept' }}
        component={addConceptStack}
      />
      <Drawer.Screen
        name="myConceptsStack"
        options={{ drawerLabel: 'My Concepts' }}
        component={myConceptsStack}
      />
      <Drawer.Screen
        name="aboutUsStack"
        options={{ drawerLabel: 'About Us' }}
        component={aboutUsStack}
      />
      <Drawer.Screen
        name="MyProfileStack"
        options={{ drawerLabel: 'My Profile' }}
        component={myProfileStack}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;