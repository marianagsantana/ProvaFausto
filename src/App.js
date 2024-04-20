// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthProvider';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
