/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

export default class TouchableEntityBox extends Component {
  render () {
    return (
      <TouchableHighlight
        style={[styles.view, this.props.color]}
        onPress={this.props.onPress}>
        <Text
          style={this.props.style || styles.text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}

TouchableEntityBox.propTypes = {
  color: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
  style: React.PropTypes.array
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    textAlign: 'center'
  }
})
