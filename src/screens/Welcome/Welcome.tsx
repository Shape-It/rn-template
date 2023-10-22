import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Welcome.styles';
import { Button } from '@/components';
import { strings } from '@/localization';
import { typography } from '@/theme';
import { FullLogoIcon } from '@/assets';
import { WelcomeScreenProps } from '@/navigator';

export const Welcome: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const { navigate } = navigation;

  const navigateToLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FullLogoIcon style={styles.icon} />
        <Text style={[styles.centerText, typography.subtitle]}>{strings.welcome.title}</Text>
      </View>
      <Button
        testID={strings.welcome.button}
        title={strings.welcome.button}
        onPress={navigateToLogin}
        style={styles.button}
        textStyle={[styles.centerText, typography.button]}
      />
    </View>
  );
}
