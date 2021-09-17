import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import NewsList from "./src/screens/NewsList";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
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
