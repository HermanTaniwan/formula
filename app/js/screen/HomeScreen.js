import React, {Component} from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet,
	FlatList
} from 'react-native';


export default class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Formula'
	}

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				
				<FlatList
				  data={[{key: 'a'}, {key: 'b'}]}
				  renderItem={({item}) => <Text>{item.key}</Text>}
				/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});