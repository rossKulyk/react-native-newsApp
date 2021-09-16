import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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

    //
    const news = useSelector((state) => {
        // console.log("STATE > ", state);
        return state.allNews.news;
    });
    console.log("ALL-NEWS : ", news);

    return (
        <View>
            <Card navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default NewsList;
