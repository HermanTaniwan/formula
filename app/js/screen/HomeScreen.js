import React, {Component} from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet,
	FlatList
} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Formula'
	}

	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				
				<FlatList
  data={[{title: 'Title Text', key: 'item1'}]}
  renderItem={({item}) => <ListItem title={item.key} />}
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