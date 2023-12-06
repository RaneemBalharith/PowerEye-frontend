import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartingPage from '../screens/StartingPage';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import MyRoom from '../screens/MyRoom';
// Import other screens/components
// ... other screen imports

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Starting" component={StartingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MyRoom" component={MyRoom} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default StackNavigator;