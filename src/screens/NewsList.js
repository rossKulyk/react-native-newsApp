import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";

const NewsList = (props) => {
    // console.log("NEWS-LIST PROPS> ", props);
    return (
        <View>
            <Header />
            <Card navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default NewsList;
