import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';
import Header from './components/Header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const linda = Platform.select({
  ios: 'These are linda instructions'
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
    let picture = { uri:'https://thumbs.dreamstime.com/b/four-puppies-japanese-akita-inu-breed-dog-two-months-old-49990433.jpg'};
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Button
        style={styles.button}
          onPress={() => {alert('Hi beautiful!')}}
          title='Press Me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  header: {
    backgroundColor: 'red',
    fontSize: 20,
  },
  button: {
    color: 'red',
  }
});
