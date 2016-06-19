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

export default class MediumColumn extends Component {
  renderNames () {
    return (
      this.props.data.map((el, i) => {
        let elName = el.name.split(' ').join('\n')
        return (
          <View style={styles.mid} key={i}>
            <Text style={styles.midText}>{elName}</Text>
          </View>
        )
      })
    )
  }

  render () {
    return (
      <View style={styles.midCol}>
        {this.renderNames()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  midCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  mid: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1
  },
  midText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },

})
