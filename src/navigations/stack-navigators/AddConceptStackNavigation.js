import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../RouteItems'

const Stack = createStackNavigator()

const AddConcept = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Locations screen!</Text>
  </View>
)

const AddConceptStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="AddConcept" component={AddConcept} />
    </Stack.Navigator>
  )
}

export default AddConceptStackNavigator