import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

// ACTION TO TRIGGER WITH useDISPATCH
import { toggleFavorite } from "../redux/newsReducer";

const Card = (props) => {
    console.log("CARD PROPS> ", props);

    const dispatch = useDispatch();
    console.log("CARD DISPATCH > ", dispatch);

    const favToggle = useSelector((state) =>
        state.allNews.favorites.some((article) => article.url === props.url)
    );
    console.log("FAV TOGGLE > ", favToggle);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.navigation.navigate("NewsDetails")}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        // source={require("../../assets/news3.jpg")}
                        source={{ uri: props.image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        {props.title.length > 10
                            ? props.title.slice(0, 30) + "..."
                            : props.title}
                    </Text>
                    <Ionicons
                        name={favToggle ? "bookmark-sharp" : "bookmark-outline"}
                        size={24}
                        color="black"
                        onPress={() => {
                            dispatch(toggleFavorite(props.url));
                        }}
                    />
                </View>
                <View style={styles.decription}>
                    <Text>
                        {props.description.length > 10
                            ? props.description.slice(0, 125) + "..."
                            : props.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
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
    titleText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    decription: {
        height: "30%",
        width: "100%",
        paddingHorizontal: 15
    }
});
export default Card;
