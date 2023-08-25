import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { theme } from '@/theme';
import { handleReady, navigationRef } from '@/services';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useIsActiveUser } from '@/store/auth';
import { AnimatedBootSplash } from '@/screens';

export function RootNavigator() {
  const isActiveUser = useIsActiveUser();
  const [bootSplashVisible, setBootSplashVisible] = useState(true);

  if (bootSplashVisible) {
    return <AnimatedBootSplash onAnimationEnd={() => setBootSplashVisible(false)} />;
  }

  return (
    <NavigationContainer theme={theme} onReady={handleReady} ref={navigationRef}>
      {isActiveUser ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
