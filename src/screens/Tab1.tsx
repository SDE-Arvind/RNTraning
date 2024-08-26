import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  TextInput
} from 'react-native';
import { Routes } from '../constants/constant';
import useMovies from '../hooks/useMovies';
import { useDispatch } from 'react-redux'
import { addUser } from '../store/UserSlice';
import { requestWriteStoragePermission } from '../utility/runtimePermission';
import { writeFileToSDCard } from '../utility/filestorage';


function Tab1({ navigation }:any): React.JSX.Element {

  const [movies,error,loading] = useMovies()
  const [name,setName] = useState<string>("")
  const dispatch = useDispatch()

  requestWriteStoragePermission();
  
  const addUserHandler = () =>{
    dispatch(addUser(name))
    writeFileToSDCard(name)
    setName("")
  }
  if(loading){
    return(<ActivityIndicator/>)
  }

  return (
   <View>
        <Text> Tab1 screen</Text>
         {movies?.map((item=><View>
          <Text>{item.title} </Text>
         </View>))}

         <TextInput value={name} style={{borderColor:"black", borderWidth:1, margin:20}}  onChangeText={newText => setName(newText)} />
         <Button title='Add User' onPress={addUserHandler}/>

        <Button title='Go to tab2' onPress={()=>{navigation.navigate(Routes.Tab2)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default Tab1;
