import React, {Component} from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import HomeScreen from './screen/HomeScreen.js';
import DetailScreen from './screen/DetailScreen.js';

export default class Main extends Component {
	render(){
		return (
			<App/>
		)
	}
}

const App = StackNavigator({
	Home: {screen: HomeScreen},
	Detail: {screen: DetailScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});