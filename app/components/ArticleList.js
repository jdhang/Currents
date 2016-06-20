/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import { mainColors, colors } from '../utils/colors'
import Navbar from './shared/Navbar'

export default class ArticleList extends Component {

  _handleBackPress () {
    this.props.navigator.pop()
  }

  renderHeader () {
    const bg = StyleSheet.create({
      color: {
        backgroundColor: mainColors[this.props.title]
      },
      entityColor: {
        backgroundColor: colors[this.props.title][this.props.index]
      }
    })

    let subHeaderText = this.props.index < 11
    ? <Text style={styles.subHeaderText}>{this.props.entity.name}</Text>
    : <Text style={styles.subHeaderTextLight}>{this.props.entity.name}</Text>

    return (
      <View>
        <TouchableHighlight
          style={[styles.header, bg.color]}
          onPress={this._handleBackPress.bind(this)}>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </TouchableHighlight>
        <View style={[styles.subHeader, bg.entityColor]}>
          {subHeaderText}
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Navbar
          leftBtnName={'Back'}
          onLeftPress={this._handleBackPress.bind(this)}
          title={'Currents'}
        />
        {this.renderHeader()}
      </View>
    )
  }
}

ArticleList.propTypes = {
  title: React.PropTypes.string.isRequired,
  entity: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  header: {
    paddingTop: 8,
    paddingBottom: 8
  },
  headerText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  subHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 2,
    borderColor: '#E0E0E0'
  },
  subHeaderText: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },
  subHeaderTextLight: {
    color: '#424242',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  }
})
