import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsList from "../screens/NewsList";
import NewsDetails from "../screens/NewsDetails";

// INITIALIZE STACK NAVIGATOR
const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NewsList" component={NewsList} />
                <Stack.Screen name="NewsDetails" component={NewsDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
