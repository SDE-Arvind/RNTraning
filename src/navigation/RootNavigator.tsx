import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login';
import { HomeNavigator } from "./HomeNavigator";
import { Routes } from "../constants/constant";
import Tab2 from '../screens/Tab2';



export const RootNavigator = () =>{

    const Stack = createNativeStackNavigator();

    
    return (
        <Stack.Navigator initialRouteName = "Login" screenOptions={{headerShown: false}}  >
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.Home} component={HomeNavigator} />
        </Stack.Navigator>
    )
}

