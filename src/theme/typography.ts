import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { normalize } from '@/utils';

export const typography = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: normalize(50),
    color: colors.white,
  },
  subtitle: {
    fontWeight: '300',
    fontSize: normalize(30),
    color: colors.white,
  },
  button: {
    fontWeight: 'bold',
    fontSize: normalize(25),
    color: colors.black,
  },
});
