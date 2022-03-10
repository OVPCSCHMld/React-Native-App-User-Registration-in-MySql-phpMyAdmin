import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './components/Home_P';
import SignIn from './components/SignIn_P';
import SignUp from './components/SignUp_P';


export default function App() {
  return (
    <Navigator/>
  );
}

const NavGuide = createStackNavigator({

    LogInPage: {screen: SignIn,}, //screen is a react component
    SignUpPage: {screen: SignUp,},
    HomePage: {screen: Home,},     

});

const Navigator = createAppContainer(NavGuide);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
