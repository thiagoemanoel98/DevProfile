import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
