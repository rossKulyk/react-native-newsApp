import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import Card from "../components/Card";

const Favorites = (props) => {
    // console.log("FAVORITES PROPS > ", props);

    const favorites = useSelector((state) => state.allNews.favorites);
    // console.log("FAVORITES STATE > ", favorites);

    return (
        <FlatList
            data={favorites}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => {
                return (
                    <Card
                        navigation={props.navigation}
                        title={item.title}
                        image={item.urlToImage}
                        description={item.description}
                        url={item.url}
                    />
                );
            }}
        />
    );
};
// const styles = StyleSheet.create({});

export default Favorites;
