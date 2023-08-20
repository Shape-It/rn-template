/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Login, Welcome } from '@/screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.welcome}>
      <Stack.Screen
        component={Welcome}
        name={NAVIGATION.welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Login} name={NAVIGATION.login} />
    </Stack.Navigator>
  );
}
