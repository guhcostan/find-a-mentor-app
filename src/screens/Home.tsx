import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styled from 'styled-components/native';
import { Card } from '../components/Card';
import { MainStackParams } from '../navigation/Main';
import Logo from '../components/Logo';

const screens = [
  {
    title: 'Quero ser mentorado',
    subtitle: 'Estou querendo me desenvolver no mercado',
    target: 'Mentored',
  },
  {
    title: 'Quero ser um mentor',
    subtitle: 'Já tenho experiencia no mercado e gostaria de contribuir',
    target: 'Mentor',
  },
];

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'List'>;
};

const ContainerList = styled.FlatList`
  background-color: ${props => props.theme.colors.dark1};
  flex: 1;
`;
export const Home = ({ navigation }: Props) => {
  return (
    <ContainerList
      data={screens}
      contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
      ListHeaderComponent={() => (
        <View style={{ width: '100%', alignItems: 'center', padding: 30 }}>
          <Logo />
        </View>
      )}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          // @ts-ignore
          // Disabling the next line because all the item.targets are valid - that data just
          // isn't getting picked up by TypeScript
          onPress={() => navigation.push(item.target)}
        />
      )}
    />
  );
};
