import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import Header from '../components/Header';
import Mentor from '../screens/Mentor';
import Mentored from '../screens/Mentored';

export type MainStackParams = {
  List: undefined;
  TextDemo: undefined;
  FormDemo: undefined;
  ButtonDemo: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator screenOptions={{ header: () => <Header /> }}>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ header: () => null }}
    />
    <MainStack.Screen name="Mentor" component={Mentor} />
    <MainStack.Screen name="Mentored" component={Mentored} />
  </MainStack.Navigator>
);
