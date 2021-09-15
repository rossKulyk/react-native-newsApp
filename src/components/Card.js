import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/news3.jpg")}
                    style={styles.image}
                />
            </View>
            <View style={styles.title}>
                <Text>News Title</Text>
                <Fontisto name="favorite" size={24} color="#72bcd4" />
            </View>
            <View style={styles.decription}>
                <Text>News Description</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: 300,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    title: {
        height: "10%",
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    decription: {
        height: "30%",
        width: "100%",
        paddingHorizontal: 15
    }
});
export default Card;
