import React from 'react';
import { StyleSheet } from 'react-native';

import styled from 'styled-components';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },

  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary,
  },
});

type ButtonProps = {
  onPress: () => void;
  children: string;
};

const ContainerButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.dark2};
  padding: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.dark2};
  margin: 0 7px;
`;
const TextButton = styled.Text`
  color: ${props => props.theme.colors.white};
  align-self: center;
  font-family: 'Roboto_700Bold';
  font-size: 18;
  font-weight: 500;
`;
export const Button = ({
  onPress = () => {},
  children = '',
  style,
}: ButtonProps) => {
  return (
    <ContainerButton style={style} onPress={onPress}>
      <TextButton>{children}</TextButton>
    </ContainerButton>
  );
};
