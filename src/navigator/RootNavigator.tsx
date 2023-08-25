import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { theme } from '@/theme';
import { handleReady, navigationRef } from '@/services';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useIsLogged } from '@/store/auth';
import { AnimatedBootSplash } from '@/screens';

export function RootNavigator() {
  const isLogged = useIsLogged();
  const [bootSplashVisible, setBootSplashVisible] = useState(true);

  if (bootSplashVisible) {
    return <AnimatedBootSplash onAnimationEnd={() => setBootSplashVisible(false)} />;
  }

  return (
    <NavigationContainer theme={theme} onReady={handleReady} ref={navigationRef}>
      {isLogged ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
