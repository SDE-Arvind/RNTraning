
import { createDrawerNavigator } from '@react-navigation/drawer';
import Message from '../screens/Messages';
import { Routes } from '../constants/constant';
import { HomeStackNavigator } from './HomeStackNavigator';

export const HomeNavigator = ()=>{
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Tab1">
            <Drawer.Screen name={Routes.HomeStack} component={HomeStackNavigator} />
            <Drawer.Screen name={Routes.Message} component={Message} />
        </Drawer.Navigator>
    )
}