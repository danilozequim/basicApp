import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import CadastrarScreen from "../screens/CadastrarScreen";


const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                }
            }}>
            <Stack.Screen name="Login" component={LoginScreen}
                options={{ headerShown: true }} />
            <Stack.Screen name="Cadastrar" component={CadastrarScreen} />

        </Stack.Navigator>
    );
}