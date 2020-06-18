import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemAction';

class AddItem extends Component {
  state = {
    item: null,
  };
  render() {
    return (
      <View>
        <Text>Add item page</Text>
        <TextInput
          placeholder="... Add new item"
          value={this.state.item}
          onChangeText={(item) => this.setState({item})}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.add(this.state.item);
            this.setState({item: null});
          }}>
          <Text>Click to add item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Add item ' + state);

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
