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
import Weather from "../screens/Weather";

// INIT NAVIGATORS
const Stack = createNativeStackNavigator(); // INITIALIZE STACK NAVIGATOR
const Tab = createBottomTabNavigator(); // INITIALIZE TAB NAVIGATOR
const Drawer = createDrawerNavigator(); // INITIALIZE DRAWER NAVIGATOR

// STACK-NAVIGATOR. MAIN DISPLAY. CONTAINS ALL NEWS SCREEEN && DETAILS SCREEN
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

// TABS-NAVIGATOR. CONTAINS STACK-NAV, HOME/FAVORITE SCREENS
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
            {/* PASS-IN HOME/FAVORITE NAVIGATORs INTO TAB-SCREEN */}
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Favorites" component={FavoritesNavigator} />
        </Tab.Navigator>
    );
}

// BELONGS TO DRAWER SCREEN
function AboutNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

// BELONGS TO DRAWER SCREEN
function WeatherNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Weather" component={Weather} />
        </Stack.Navigator>
    );
}

// DRAWER-NAVIGATOR. CONTAINS TABS-NAV, WEATHER/ABOUT SCREENS
function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="News" component={TabsNavigator} />
                <Drawer.Screen name="Weather" component={WeatherNavigator} />
                <Drawer.Screen name="About" component={AboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
