import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../constants/constant";
import Message from "../screens/Messages";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from 'react';
import backButton from '../assets/backbutton.jpg'

export const MessageStackNavigator = () =>{

    const Stack = createNativeStackNavigator();

    
    return (
        <Stack.Navigator initialRouteName = {Routes.Message}>
            <Stack.Screen name={Routes.Message} component={Message}  
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <BackButton navigation={navigation} />
                    ),
                 })
                }/>
        </Stack.Navigator>
    )
}



const  BackButton = ({navigation}:{navigation:any}) => {
  const handleBackPress = () => {
    // Handle back navigation logic here
    navigation?.navigate(Routes.HomeStack)
  };

  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={backButton}
          style={styles.img} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
backButtonContainer:{
    marginEnd:100,
    justifyContent: 'center',
    alignItems: 'center'
},
img:{
    width: 30, height: 30 
}
})
