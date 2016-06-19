/* @ flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

export default class Navbar extends Component {

  _handleLeftPress () {
    this.props.onLeftPress()
  }

  _handleRightPress () {
    this.props.onRightPress()
  }

  render () {
    return (
      <View style={styles.toolbar}>
        <TouchableHighlight onPress={this._handleLeftPress.bind(this)}>
          <Text style={styles.toolbarButton}>
            {this.props.leftBtnName || ''}
          </Text>
        </TouchableHighlight>
        <Text style={styles.toolbarTitle}>{this.props.title}</Text>
        <TouchableHighlight onPress={this._handleRightPress.bind(this)}>
          <Text style={styles.toolbarButton}>
            {this.props.rightBtnName || ''}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    // backgroundColor: '#2c3e50',
    backgroundColor: '#424242',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarTitle: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600'
  },
  toolbarButton: {
    width: 50,
    color: '#FFF',
    textAlign: 'center'
  }
})
