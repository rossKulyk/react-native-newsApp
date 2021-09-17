import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const NewsDetails = (props) => {
    // console.log("DETAILS PROPS > ", props.route);

    const { articleUrl } = props.route.params;
    // console.log("articleUrl > ", articleUrl);

    const foundArticle = useSelector((state) => {
        return state.allNews.news.articles.filter((article) => {
            return article.url === articleUrl;
        });
    });
    // console.log("FOUND URL > ", foundArticle[0].url);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{foundArticle[0].title}</Text>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: foundArticle[0].urlToImage }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.author}>{foundArticle[0].author}</Text>
                <Text style={styles.description}>
                    {foundArticle[0].description}
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 15
    },
    header: {
        marginHorizontal: 15,
        marginBottom: 15
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200
    },
    content: {
        marginTop: 10,
        paddingHorizontal: 5
    },
    author: {
        marginLeft: 5,
        fontStyle: "italic"
    },
    description: {
        marginTop: 5,
        fontSize: 20
    }
});

export default NewsDetails;
