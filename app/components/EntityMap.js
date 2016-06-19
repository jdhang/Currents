/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import { colors } from '../utils/colors'
import LargeColumn from './LargeColumn'
import MediumColumn from './MediumColumn'
import SmallColumn from './SmallColumn'

export default class EntityMap extends Component {

  _handlePress () {
    this.props.onPress(this.props.title)
  }

  render () {
    const bg = StyleSheet.create({
      color: {
        backgroundColor: this.props.bgColor
      }
    })

    return (
      <View
        style={[styles.section, bg.color]}>
        <View style={styles.grid}>
          <LargeColumn
            data={this.props.data.slice(0, 1)}
            colors={colors[this.props.title].slice(0, 1)}
          />
          <MediumColumn
            data={this.props.data.slice(1, 3)}
            colors={colors[this.props.title].slice(1, 3)}
          />
          <SmallColumn
            data={this.props.data.slice(3, 16)}
            colors={colors[this.props.title].slice(3, 16)}
          />
        </View>
      </View>
    )
  }
}

EntityMap.propTypes = {
  data: React.PropTypes.array.isRequired,
  bgColor: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  grid: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backdropView: {
    position: 'absolute',
    width: 250,
    // top: ((HEIGHT - 64) / 8) - 30,
    // left: (WIDTH / 2) - (250 / 2),
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: 0.8,
  },
})

