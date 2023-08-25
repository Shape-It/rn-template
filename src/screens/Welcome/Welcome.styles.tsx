import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.l,
    backgroundColor: colors.black,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: spacing.l,
    fontWeight: 'bold',
    color: colors.white,
    lineHeight: spacing.xl,
  },
});
