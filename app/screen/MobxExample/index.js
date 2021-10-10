import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import appState from './counterStore';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    View,
    Image
  } from 'react-native';

const Counter = observer(({ appState }) => {
  return (
    <View>
      <Text>{appState.count}</Text>
      <Button
  onPress={appState.incCounter}
  title="Inc Counter"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  onPress={appState.decCounter}
  title="Dec Counter"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
  )
})


export default function index() {
    return (
    
            <View>
            <Counter appState={appState} />
            </View>
     
    );
}

