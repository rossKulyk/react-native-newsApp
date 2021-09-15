import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
const NewsList = () => {
    //
    return (
        <View style={styles.container}>
            <Header />
            <Card />
        </View>
        // <View>
        //     <Text>News List Screen</Text>
        // </View>
    );
};

const styles = StyleSheet.create({});

export default NewsList;
