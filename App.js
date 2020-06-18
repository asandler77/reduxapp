import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import AddItem from './src/share/AddItem';
import {connect} from 'react-redux';
import {removeItem} from './src/actions/itemAction';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App page</Text>
        <AddItem />
        <FlatList
          data={this.props.items}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={(data) => (
            <Text>{data.item.name}</Text>
            // <ListItem
            //   title={data.item.name}
            //   bottomDivider
            //   rightIcon={
            //     <Icon
            //       name="delete"
            //       size={36}
            //       onPress={() => this.props.delete(data.item.key)}
            //     />
            //   }
            // />
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
