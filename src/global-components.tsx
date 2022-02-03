import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Title = styled.Text`
  font-size: 36px;
  font-family: 'Roboto_700Bold';
  margin-bottom: 12px;
  color: ${props => props.theme.colors.white};
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto_400Regular';
  color: ${props => props.theme.colors.white};
`;

export const ScreenContainer = styled.View`
  background-color: ${props => props.theme.colors.dark1};
  padding: 24px;
  flex: 1;
`;
export const Badge = styled.View`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 1;
  right: 15px;
  top: -20px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto_700Bold';
  margin-left: 4px;
  color: ${props => props.theme.colors.white};
`;

export const TextInput = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
`;
export const MaskedTextInput = styled(TextInputMask)`
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
`;
