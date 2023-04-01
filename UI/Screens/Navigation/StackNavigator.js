import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../SettingScreens/UserProfile';
import WalletScreen from '../PaymentScreens/WalletScreen';
import TopUpWallet from '../PaymentScreens/TopUpWallet';
import SearchPage from '../HomeScreens/SearchPage';
import LandingPage from '../HomeScreens/LandingPage';
import TripRoute from '../HomeScreens/TripRoute';

import SearchPage from '../SearchPage';
import TripRoute from '../TripRoute';
import LandingPage from '../LandingPage';
import UserProfile from '../UserProfile';
import WalletScreen from '../WalletScreen';
// import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  // headerTintColor: 'gray',
  headerBackTitle: 'Back',
  // headerShown: false,
  // presentation: 'transparentModal',
  // transitionSpec: {
  //   open: {animation: 'timing', config: {duration: 100}},
  //   close: {animation: 'timing', config: {duration: 100}},
  // },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerTitle: 'Home',
          headerLeft: null,
          presentation: 'transparentModal',
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 100}},
            close: {animation: 'timing', config: {duration: 100}},
          },
        }}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerTitle: 'Home',
          presentation: 'transparentModal',
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 100}},
            close: {animation: 'timing', config: {duration: 100}},
          },
        }}
      />
      <Stack.Screen
        name="TripRoute"
        component={TripRoute}
        options={{
          headerTitle: 'Home',
          presentation: 'transparentModal',
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 100}},
            close: {animation: 'timing', config: {duration: 100}},
          },
        }}
      />
    </Stack.Navigator>
  );
};

const UserProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={({route}) => ({
          headerTitle: 'Settings',
          headerLeft: null,
        })}
      />
    </Stack.Navigator>
  );
};

const WalletNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Wallet/Main"
        component={WalletScreen}
        options={({route}) => ({
          headerTitle: 'My E-Wallet',
          headerLeft: null,
        })}
      />
      <Stack.Screen
        name="Wallet/Topup"
        component={TopUpWallet}
        options={({route}) => ({
          headerTitle: 'Top Up Wallet',
        })}
      />
    </Stack.Navigator>
  );
};

const WalletNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wallet" component={WalletScreen} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, UserProfileNavigator, WalletNavigator};
