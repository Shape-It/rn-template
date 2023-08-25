import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigator';
import { Provider as StoreProvider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { hide } from 'react-native-bootsplash';
import { AnimatedBootSplash } from './screens';
import { colors } from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default function App(): JSX.Element {
  const [bootSplashVisible, setBootSplashVisible] = useState(true);

  const bootstrap = () => {
    hide({ fade: true });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <PersistGate persistor={persistor} onBeforeLift={bootstrap}>
            {bootSplashVisible ? (
              <AnimatedBootSplash
                onAnimationEnd={() => {
                  setBootSplashVisible(false);
                }}
              />
            ) : (
              <RootNavigator />
            )}
          </PersistGate>
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
