'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

export default class Row extends Component {
  render () {
    const styles = StyleSheet.create({
      col: {
        flex: this.props.size || 1,
        flexDirection: 'column',
        alignItems: 'stretch'
      }
    })

    return (
      <View style={styles.col}>
        {this.props.children}
      </View>
    )
  }
}

Row.propTypes = {
  size: React.PropTypes.number
}
