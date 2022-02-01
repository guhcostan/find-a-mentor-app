import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Main } from './navigation/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider
      theme={{
        colors: {
          background: '#1A1A40',
          blue: '#270082',
          secondary: '#7A0BC0',
          primary: '#FA58B6',
          white: '#ffffff',
          dark: '#09090a',
          dark1: '#121214',
          dark2: '#29292e',
        },
      }}
    >
      <StatusBar style="auto" />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ThemeProvider>
  );
}
