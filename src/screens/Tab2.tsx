import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import withAuth from '../hoc/withAuth';


function Tab2(): React.JSX.Element {
  const users = useSelector((state: RootState) => state.userReducer.users)

  return (
   <View>
        <Text> {users.join('\r\n')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default withAuth( Tab2);
