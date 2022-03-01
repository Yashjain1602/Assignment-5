import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// context api
export default function comp1({ count }) {
    return (
        <View style={StyleSheet.container}>
            <Text>COMPONENT-1</Text>
            <StatusBar style="auto"/>
            <Text style={count >5 ? { color: "blue" } : { color: "red"}}>
                {count}
            </Text>
        </View>
    );
}
const styles= StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",
    },
});