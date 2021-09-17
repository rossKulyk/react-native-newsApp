import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

// ACTION TO TRIGGER WITH useDISPATCH
import { toggleFavorite } from "../redux/newsReducer";

const Card = (props) => {
    // console.log("CARD PROPS> ", props);
    const { description, image, title, url } = props;
    // console.log("PROPS TO PAS >>", description, image, title, url);

    const dispatch = useDispatch();

    // RETURN BOOLEAN IF FIND ARTICEL IN THE STATE
    const favToggle = useSelector((state) =>
        state.allNews.favorites.some((article) => article.url === props.url)
    );
    // console.log("FAV TOGGLE > ", favToggle);

    return (
        // WORKS ))
        // <TouchableOpacity
        //     style={styles.container}
        //     onPress={() => {
        //         props.navigation.navigate("NewsDetails", {
        //             description: description,
        //             image: image,
        //             title: title,
        //             url: url
        //         });
        //     }}
        // >
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.navigation.navigate("NewsDetails", {
                    articleUrl: url
                });
            }}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        // source={require("../../assets/news3.jpg")}
                        source={{
                            uri: props.image
                                ? props.image
                                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cityofgraham.com%2Fcity-news%2Fnews%2F&psig=AOvVaw3l6__YV9gGBOTm3-PLn4sW&ust=1631967274808000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjGn4j-hfMCFQAAAAAdAAAAABAD"
                        }}
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
                        {props.description && props.description.length > 10
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
