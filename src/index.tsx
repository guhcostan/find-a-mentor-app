import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { initializeApp } from 'firebase/app';
import { Main } from './navigation/Main';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDl_hY4emiSooxL305EdWQEspehzeNBTro',
  authDomain: 'find-a-mentor-f54a1.firebaseapp.com',
  projectId: 'find-a-mentor-f54a1',
  storageBucket: 'find-a-mentor-f54a1.appspot.com',
  messagingSenderId: '229514994004',
  appId: '1:229514994004:web:13809571f051095520e8c1',
  measurementId: 'G-7M1XBSZR4E',
};

initializeApp(firebaseConfig);

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
