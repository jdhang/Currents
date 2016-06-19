'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import utils from '../utils'

const MAX_LENGTH = 16

export default class SmallColumn extends Component {
  renderNames () {
    return (
      this.props.data.map((el, i) => {
        // el.name = el.name.length > MAX_LENGTH ? el.name.substr(0, MAX_LENGTH) + '...' : el.name
        let elName = el.name.split(' ').join('\n')
        return (
          <View style={styles.min} key={i}>
            <Text style={styles.minText}>{elName}</Text>
          </View>
        )
      })
    )
  }

  render () {
    const colors = utils.generateColorStyleSheets(this.props.colors)

    return (
      <View style={styles.minCol}>
        <View style={styles.col}>
          <View style={[styles.min, colors[0].bg]}>
            <Text style={styles.minText}>{this.props.data[0].name}</Text>
          </View>
          <View style={[styles.min, colors[1].bg]}>
            <Text style={styles.minText}>{this.props.data[1].name}</Text>
          </View>
          <View style={[styles.min, colors[2].bg]}>
            <Text style={styles.minText}>{this.props.data[2].name}</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={[styles.min, colors[3].bg]}>
            <Text style={styles.minText}>{this.props.data[3].name}</Text>
          </View>
          <View style={[styles.min, colors[4].bg]}>
            <Text style={styles.minText}>{this.props.data[4].name}</Text>
          </View>
          <View style={[styles.min, colors[5].bg]}>
            <Text style={styles.minText}>{this.props.data[5].name}</Text>
          </View>
          <View style={[styles.min, colors[6].bg]}>
            <Text style={styles.minText}>{this.props.data[6].name}</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.row2}>
            <View style={styles.col}>
              <View style={[styles.min, colors[7].bg]}>
                <Text style={styles.minText}>{this.props.data[7].name}</Text>
              </View>
              <View style={[styles.min, colors[8].bg]}>
                <Text style={styles.minText}>{this.props.data[8].name}</Text>
              </View>
              <View style={[styles.min, colors[9].bg]}>
                <Text style={styles.minText}>{this.props.data[9].name}</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.min, colors[10].bg]}>
              <Text style={styles.minText}>{this.props.data[10].name}</Text>
            </View>
            <View style={[styles.min, colors[11].bg]}>
              <Text style={styles.minText}>{this.props.data[11].name}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  minCol: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  col: {
    flex: 1,
    flexDirection: 'column'
  },
  col2: {
    flex: 2,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  row2: {
    flex: 2,
    flexDirection: 'row'
  },
  min: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5
  },
  minText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center'
  },
})
