import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addItem, removeItem} from '../actions/itemAction';

class AddItem extends Component {
  state = {
    item: null,
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.itemInput}
          placeholder="... Добавить "
          value={this.state.item}
          onChangeText={(item) => this.setState({item})}
        />
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.props.add(this.state.item);
            this.setState({item: null});
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Click to add item
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemInput: {
    fontSize: 22,
    marginBottom: 32,
    marginHorizontal: 50,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  touch: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#cee18b',
    width: '60%',
    padding: 8,
    margin: 10,
    marginHorizontal: 50,
    marginBottom: 32,
  },
})

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.itemList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
