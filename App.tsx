import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { SignIn } from './src/pages/SignIn';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <SignIn />
        </ThemeProvider>
    );
};

export default App;
