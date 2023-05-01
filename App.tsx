/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './UI/Screens/OnboardingScreen';
import LoginScreen from './UI/Screens/LoginScreen';
import DriverRiderScreen from './UI/Screens/SignUpScreens/DriverRiderScreen';
import RiderSignupScreen from './UI/Screens/SignUpScreens/RiderSignupScreen';
import DriverSignupScreen from './UI/Screens/SignUpScreens/DriverSignupScreen';
import DriverSignupScreenTwo from './UI/Screens/SignUpScreens/DriverSignupScreenTwo';
import RideHistory from './UI/Screens/RideHistory';
import RideInfo from './UI/Screens/RideInfo';
import AddressMapScreen from './UI/Screens/AddressMapScreen';


function App(): JSX.Element {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="DriverRiderSelect" component={DriverRiderScreen}/>
        <AppStack.Screen name="RiderSignup" component={RiderSignupScreen} />
        <AppStack.Screen name="DriverSignup" component={DriverSignupScreen} />
        <AppStack.Screen name="DriverSignupTwo" component={DriverSignupScreenTwo} />
        <AppStack.Screen name="RideHistory" component={RideHistory} />
        <AppStack.Screen name="RideInfo" component={RideInfo} />
        <AppStack.Screen name="AddressMapScreen" component={AddressMapScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
