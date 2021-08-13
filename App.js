import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Profile from './screens/profile';
import loadResource from './hooks/loadResource';
export default function App() {
  const isLoadingComplete = loadResource();
  if(!isLoadingComplete){
    return null
  }else{
    return (
      <SafeAreaView style={{flex: 1}}>
          <StatusBar style="auto" />
          <Profile/>
      </SafeAreaView>
    );
  }
}