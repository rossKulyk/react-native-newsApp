import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>New App</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#72bcd4",
        padding: 15,
        borderBottomColor: "#fffffF",
        borderBottomWidth: 1
    },
    title: {
        marginTop: 20,
        textAlign: "center",
        color: "white",
        fontSize: 20
    }
});
export default Header;
