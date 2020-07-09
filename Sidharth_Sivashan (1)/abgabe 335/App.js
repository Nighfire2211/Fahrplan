import React, { Component } from 'react'; //import React 
import { StyleSheet, Text, View } from 'react-native'; // Hier wird React native importiert
import { createAppContainer, TabNavigator, TabBarBottom} from "react-navigation"; // Hier wird react navigation importiert
import { createDrawerNavigator } from "react-navigation-drawer"; // Hier wird react navigation drawer importiert
import { createBottomTabNavigator } from "react-navigation-tabs"; // Hier wird react navigation tabs importiert
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen.js"; //Hier wird ein screen importiert
import WahlScreen from "./screens/WahlScreen.js"; //Hier wird ein screen importiert
import Aboutscreen from "./screens/UberScreen.js"; //Hier wird ein screen importiert
import MapsScreen from "./screens/MapsScreen.js"; //Hier wird ein screen importiert 
import Fahrplan from "./screens/Fahrplan.js"; //Hier wird ein screen importiert
import Compass from "./screens/compass.js"; //Hier wird ein screen importiert
import einfahr from "./screens/einfahr.js"; //Hier wird ein screen importiert
import foget from "./screens/ForgotPassword.js"; //Hier wird ein screen importiert
import sign from "./screens/SignUpScreen.js"; //Hier wird ein screen importiert
import login from "./screens/LoginScreen.js"; //Hier wird ein screen importiert
import { render } from 'react-dom'; //Hier wird ein screen importiert
import *as firebase from 'firebase'; //Hier wird ein screen importiert

//Hier werden die Firebase konfiguriet
const firebaseConfig = {
  apiKey: "AIzaSyCIEE7l79ee4byY2KwEYZ8nBFyeGB_rbF4",
  authDomain: "probe-241c9.firebaseapp.com",
  databaseURL: "https://probe-241c9.firebaseio.com",
  projectId: "probe-241c9",
  storageBucket: "probe-241c9.appspot.com",
  messagingSenderId: "481617903659",
  appId: "1:481617903659:web:f11fcf9d26af3c48a16a6e",
  measurementId: "G-V13XHTVKE5",
 };
// Hier wird es intilializet
 firebase.initializeApp(firebaseConfig);
// Hier werden die Screen appnavigator verknüpfung erstellt
 const Appnavigator = createStackNavigator({
  einfahr: { screen: einfahr},
  Home: { screen: HomeScreen },
  Wahl: { screen: WahlScreen },
  Aboutus: { screen: Aboutscreen},
  Maps: { screen: MapsScreen },
  Fahrplan: { screen: Fahrplan},
  Compass: { screen: Compass},
  login: { screen: login },
  foget: { screen: foget},
  sign: { screen: sign },
  

},
{
  initialRouteName: "login"
});
//Hier wird AppContainter createAppContainer zugewiessen
const AppContainer = createAppContainer(Appnavigator);
export default class App extends Component{
  render(){
    return(
      //AUSGABE APPCONTAINER
      <AppContainer/>
    );
  }
}
//Hier wird das gestylt.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
