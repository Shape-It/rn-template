import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, spacing } from '@/theme';

interface Button {
  title: string;
  onPress: any;
  color: string;
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    marginVertical: spacing.xl,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: spacing.s,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export const Button: React.FC<Button> = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
