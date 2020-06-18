import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddItem from './src/share/AddItem';
import {connect} from 'react-redux';
import {removeItem} from './src/actions/itemAction';
import {ListItem, Icon} from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Text>רשימת הקניות</Text>
          <View>
            <AddItem />
            <FlatList
              data={this.props.items}
              keyExtractor={(item, index) => item.key.toString()}
              renderItem={(data) => (
                <ListItem
                  title={data.item.name}
                  bottomDivider
                  rightIcon={
                    <Icon
                      name="delete"
                      size={36}
                      onPress={() => this.props.delete(data.item.key)}
                    />
                  }
                />
              )}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
});

const mapStateToProps = (state) => {
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
