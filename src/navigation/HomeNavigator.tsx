
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from '../constants/constant';
import { HomeStackNavigator } from './HomeStackNavigator';
import { MessageStackNavigator } from './MessageStackNavigator';

export const HomeNavigator = ()=>{
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName={Routes.HomeStack} screenOptions={({ route }) => ({
            headerShown: route.name ===  Routes.Message ? false : true })} >
            <Drawer.Screen name={Routes.HomeStack} component={HomeStackNavigator} />
            <Drawer.Screen name={Routes.Message} component={MessageStackNavigator} />
        </Drawer.Navigator>
    )
}