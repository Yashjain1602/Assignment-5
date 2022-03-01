import React from "react";
import { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCountContext } from '../COMPONENTS/countContextProvider';

export default function Topview(){


  const countContext = useCountContext()
  return (
     <View style={styles.container}>
      <Text style={{color: '#000'}}>{countContext.count}</Text>
      <TouchableOpacity style={{display: 'flex',flexDirection: 'row',backgroundColor: 'blue'}} onPress={()=> countContext.setcount(countContext.count+1)}>
        <Text style={{fontSize: 50,fontFamily: 'sans-serif-condensed',color: 'darkorchid'}}>PRESS ME!</Text>
        </TouchableOpacity>


        <Text style={{color: '#000'}}>{countContext.count2}</Text>
      <TouchableOpacity style={{display: 'flex',flexDirection: 'row',backgroundColor: 'red'}} onPress={()=> countContext.setcount2(countContext.count2+1)}>
        <Text style={{fontSize: 50,fontFamily: 'sans-serif-condensed',color: 'darkorchid'}}>PRESS ME!</Text>
        </TouchableOpacity>


        <Text style={{color: '#000'}}>{countContext.count3}</Text>
      <TouchableOpacity style={{display: 'flex',flexDirection: 'row',backgroundColor: 'green'}} onPress={()=> countContext.setcount3(countContext.count3+1)}>
        <Text style={{fontSize: 50,fontFamily: 'sans-serif-condensed',color: 'darkorchid'}}>PRESS ME!</Text>
        </TouchableOpacity>

    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 5
  },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-evenly",
//     backgroundColor: "rgba(0,0,0,0)",
//     borderWidth: 3,
//     borderColor: "darkorchid",
//     marginVertical: 10,
//     marginLeft: 150,
//     borderRadius: 15,
//     width: 100,
//     paddingVertical: 12,
//     paddingHorizontal: 32
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//     width: 400,
//     height: 800
//   },
//   countContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     margin: "auto"
//   },
//   text: {
//     alignItems: "flex-start",
//     color: "darkorchid",
//     fontSize: 42,
//     fontFamily: 'sans-serif',
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center"
//   }
});