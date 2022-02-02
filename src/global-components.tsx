import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

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
export const TextInput = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
`;
