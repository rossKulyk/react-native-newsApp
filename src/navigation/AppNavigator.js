import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";

import NewsList from "../screens/NewsList";
import NewsDetails from "../screens/NewsDetails";
import Favorites from "../screens/Favorites";

// INITIALIZE STACK NAVIGATOR
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//
function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList"
                component={NewsList}
                options={{ title: "All News" }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetails}
                options={{ title: "News Details" }}
            />
        </Stack.Navigator>
    );
}

//
function FavoritesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
    );
}
//
function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Favorites") {
                            iconName = "favorite";
                        }
                        return <Fontisto name={iconName} size={22} />;
                    }
                })}
            >
                {/* PASS-IN HOME-NAVIGATOR INTO TAB-SCREEN COMPONENT*/}
                <Tab.Screen name="Home" component={HomeNavigator} />
                <Tab.Screen name="Favorites" component={FavoritesNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
