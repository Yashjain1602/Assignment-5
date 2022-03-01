import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// context api
export default function comp2({ count }) {
    return (
        <View style={StyleSheet.container}>
            <Text>COMPONENT-2</Text>
            <StatusBar style="auto"/>
            <Text style={count >7 ? { color: "green" } : { color: "pink"}}>
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