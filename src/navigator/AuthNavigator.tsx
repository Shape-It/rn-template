import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Welcome } from '@/screens';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Welcome'}>
      <Stack.Screen
        component={Welcome}
        name={'Welcome'}
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Login} name={'Login'} />
    </Stack.Navigator>
  );
}
