import React from 'react';

import styled from 'styled-components';

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
