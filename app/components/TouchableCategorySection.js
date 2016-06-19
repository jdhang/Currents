/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

export default class TouchableEntitySection extends Component {

  _handlePress () {
    this.props.onPress(this.props.sectionName)
  }

  render () {
    const bg = StyleSheet.create({
      color: {
        backgroundColor: this.props.bgColor
      }
    })

    return (
      <View style={[styles.section, bg.color]}>
        <TouchableHighlight
          style={styles.section}
          onPress={this._handlePress.bind(this)}>
          <View style={[styles.shadow, bg.color]}>
            <Text style={styles.title}>{this.props.sectionName}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'column'
  },
  shadow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      height: 1.5,
      width: 0
    },
    shadowOpacity: 0.6,
    margin: 8
  },
  title: {
    width: 250,
    color: '#FAFAFA',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center'
  }
})

