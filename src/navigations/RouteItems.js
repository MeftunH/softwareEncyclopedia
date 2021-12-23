import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  AddConceptStack: 'AddConceptStack',
  AddConcept: 'AddConcept',
}

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.AddConceptStack,
    focusedRoute: screens.AddConceptStack,
    title: 'Add Concept',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="plus" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.AddConcept,
    focusedRoute: screens.AddConceptStack,
    title: 'Add Concept2',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="plus" size={30} color={focused ? '#551E18' : '#000'} />,
  },
]