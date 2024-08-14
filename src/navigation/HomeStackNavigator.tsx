import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../constants/constant";
import Tab2 from '../screens/Tab2';
import Tab1 from '../screens/Tab1';
import { Button } from "react-native";



export const HomeStackNavigator = () =>{

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName = "Tab1"  >
            <Stack.Screen name={Routes.Tab1} component={Tab1} />
            <Stack.Screen name={Routes.Tab2} component={Tab2} />
        </Stack.Navigator>
    )
}

