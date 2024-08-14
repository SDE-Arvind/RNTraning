import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native';
import { Routes } from '../constants/constant';
import useMovies from '../hooks/useMovies';

function Tab1({ navigation }:any): React.JSX.Element {

  const [movies,error,loading] = useMovies()
 
  if(loading){
    return(<ActivityIndicator/>)
  }

  return (
   <View>
        <Text> Tab1 screen</Text>
         {movies?.map((item=><View>
          <Text>{item.title} </Text>
         </View>))}
        <Button title='Go to tab2' onPress={()=>{navigation.navigate(Routes.Tab2)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default Tab1;
