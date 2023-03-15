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
import {store, persistor} from './Redux/store';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  const AppStack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen
              name="DriverRiderSelect"
              component={DriverRiderScreen}
            />
            <AppStack.Screen name="RiderSignup" component={RiderSignupScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
