import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import AddItem from './src/share/AddItem';
import {connect} from 'react-redux';
import {removeItem} from './src/actions/itemAction';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>רשימת הקניות</Text>
        <AddItem />
        <FlatList
          data={this.props.items}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={(data) => (
            <Text style={styles.item}>{data.item.name}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  item: {
    backgroundColor: '#f5f6dc',
    marginTop: 16,
    marginHorizontal: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    width: '60%',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  console.log('App ' + state);
  return {
    items: state.itemReducer.itemList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(removeItem(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
