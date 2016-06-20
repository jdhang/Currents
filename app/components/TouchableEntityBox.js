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
    let text = this.props.text
    if (this.props.shortenText) {
      text = this.props.text.length > this.props.shortenText
        ? this.props.text.substr(0, this.props.shortenText) + '...'
        : text
    }

    return (
      <TouchableHighlight
        style={[styles.view, this.props.color]}
        onPress={this.props.onPress}>
        <Text
          style={this.props.style || styles.text}>
          {text}
        </Text>
      </TouchableHighlight>
    )
  }
}

TouchableEntityBox.propTypes = {
  color: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
  style: React.PropTypes.array,
  shortenText: React.PropTypes.number

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
