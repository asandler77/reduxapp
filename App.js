import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import AddItem from './src/share/AddItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App page</Text>
        <AddItem />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
