'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Dimensions from 'Dimensions'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class LargeColumn extends Component {
  renderNames () {
    return (
      this.props.data.map((el, i) => {
        // let elName = el.name.split(' ').join('\n')
        return (
          <View style={styles.max} key={i}>
            <Text style={styles.maxText}>{el.name}</Text>
          </View>
        )
      })
    )
  }

  render () {
    return (
      <View style={styles.maxCol}>
        {this.renderNames()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  maxCol: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  max: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1
  },
  maxText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
