import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
};

export type AuthStackParamList = {
	Login: undefined;
	Welcome: undefined;
	Bootsplash: { onAnimationEnd: () => void };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type WelcomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;
export type BootsplashScreenProps = NativeStackScreenProps<AuthStackParamList, 'Bootsplash'>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
    interface RootParamList extends AuthStackParamList {}
	}
}
