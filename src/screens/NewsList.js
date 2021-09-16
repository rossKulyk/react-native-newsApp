import React, { useEffect } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";

// ALTERNATIVE TO connect(); REACT-REDUX HOOKS
// useSelector-> EQUIVALENT OF MAP STATE TO PROPS, SELECTS DATA FROM THE STATE
// useDispatch -> EQUIVALENT OF MAP DISPATCH, TRIGGERS ACTIONS
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";
import { fetchNews } from "../redux/newsReducer";

const NewsList = (props) => {
    // console.log("NEWS-LIST PROPS> ", props);

    const dispatch = useDispatch();

    // EXECUTED WHEN COMPONENT RENDERS, ADD [DISPATCH] SO ONLY RUNS WHEN INIT DISPATCH
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    // SELECTS NEWS-DATA FROM THE STORE
    const news = useSelector((state) => {
        // console.log("STATE > ", state);
        return state.allNews.news;
    });
    // console.log("ALL-NEWS : ", news);

    return (
        <FlatList
            data={news.articles}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => {
                // console.log("ITEM > ", item);
                return (
                    <Card
                        navigation={props.navigation}
                        title={item.title}
                        image={item.urlToImage}
                        description={item.description}
                    />
                );
            }}
        />
    );
};

export default NewsList;
