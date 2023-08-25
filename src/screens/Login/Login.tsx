import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth';
import { Button, Container, TextField } from '@/components';
import { strings } from '@/localization';
import { colors, typography } from '@/theme';

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async () => {
    const user = { name: email, password: password };
    dispatch(authActions.login({ user }));
  };

  return (
    <Container style={styles.container} headerHeight={-70}>
      <View style={styles.content}>
        <TextField
          testID={strings.login.emailPlaceholder}
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholder={strings.login.emailPlaceholder}
          textContentType="emailAddress"
          value={email}
          style={styles.input}
        />
        <TextField
          testID={strings.login.passwordPlaceholder}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          onChangeText={setPassword}
          placeholder={strings.login.passwordPlaceholder}
          textContentType="password"
          value={password}
          style={styles.input}
        />
      </View>
      <Button
        testID={strings.login.title}
        title={strings.login.title}
        onPress={handleLogin}
        style={styles.button}
        textStyle={[styles.centerText, typography.button, { color: colors.white }]}
      />
    </Container>
  );
}
