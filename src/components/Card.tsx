import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';
import { Subtitle, Title } from '../global-components';

type ListItemProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

const OptionCard = styled.TouchableOpacity`
  margin: 20px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.dark2};
  padding: 20px;
`;

export const Card = ({
  title,
  subtitle,
  onPress = () => null,
}: ListItemProps) => {
  return (
    <OptionCard onPress={onPress}>
      <View>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </View>
    </OptionCard>
  );
};
