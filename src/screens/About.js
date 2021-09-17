import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const About = () => {
    //
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5HmcJzOaXuML64fD5KhX9-y54Uv0YrhVIz3bQ3plinXmMET0ElOwFPoczuJUb0fVCHo&usqp=CAU"
                }}
            ></ImageBackground>
            <Text style={styles.description}>React Native News App</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    description: {
        marginTop: 15,
        paddingHorizontal: 15,
        fontSize: 25,
        textAlign: "center",
        color: "#3DB2FF"
    }
}); //
export default About;
