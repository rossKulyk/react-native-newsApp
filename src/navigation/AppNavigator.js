import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Fontisto } from "@expo/vector-icons";

import NewsList from "../screens/NewsList";
import NewsDetails from "../screens/NewsDetails";
import Favorites from "../screens/Favorites";
import About from "../screens/About";

// INIT NAVIGATORS
const Stack = createNativeStackNavigator(); // INITIALIZE STACK NAVIGATOR
const Tab = createBottomTabNavigator(); // INITIALIZE TAB NAVIGATOR
const Drawer = createDrawerNavigator(); // INITIALIZE DRAWER NAVIGATOR

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
function AboutNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

//
function TabsNavigator() {
    return (
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
            {/* PASS-IN HOME/FAVORITE NAVIGATORs INTO TAB-SCREEN COMPONENT*/}
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Favorites" component={FavoritesNavigator} />
        </Tab.Navigator>
    );
}
//
function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="News" component={TabsNavigator} />
                <Drawer.Screen name="About" component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
