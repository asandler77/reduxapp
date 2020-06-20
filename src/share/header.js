import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Shopping list</Text>
        <Text> You have {this.props.amount} items to buy. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => {
  return {
    amount: state.itemReducer.itemList.length,
  };
}

export default connect(mapStateToProps)(Header);
