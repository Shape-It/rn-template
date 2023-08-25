import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Button {
  title: string;
  onPress: any;
  style: any;
  textStyle: any;
}

export const Button: React.FC<Button> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
