import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataTeman from './DataTeman';
import DetailDataTeman from './DetailDataTeman';
import { enableScreens } from 'react-native-screens';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

enableScreens();

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4CAF50', // Warna hijau daun
        accent: '#388E3C',
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#4CAF50' },
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                >
                    <Stack.Screen name="Home" component={DataTeman} options={{ title: 'Daftar Kontak Teman' }} />
                    <Stack.Screen name="Detail" component={DetailDataTeman} options={{ title: 'Detail Kontak Teman' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}