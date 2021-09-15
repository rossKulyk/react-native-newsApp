import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NewsList from "./src/screens/NewsList";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        // <View>
        //     <NewsList />
        // </View>
        <AppNavigator />
    );
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
});
