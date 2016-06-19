/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { mainColors, colors } from '../utils/colors'
import Row from './shared/Row'
import Column from './shared/Column'
import TouchableEntitySection from './TouchableEntitySection'
import Navbar from './shared/Navbar'

export default class EntityMap extends Component {

  _handlePress (entity) {
    console.log(entity)
  }

  _handleBackPress () {
    this.props.navigator.pop()
  }

  renderHeader () {
    const bg = StyleSheet.create({
      color: {
        backgroundColor: mainColors[this.props.title]
      }
    })
    return (
      <View style={[styles.header, bg.color]}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    )
  }

  renderTopRow () {
    return (
      <Row>
        <TouchableEntitySection
          data={this.props.data.slice(0, 1)}
          colors={colors[this.props.title].slice(0, 1)}
          style={[styles.text, styles.large]}
          onPress={this._handlePress.bind(this)}
        />
      </Row>
    )
  }

  renderMidRow () {
    return (
      <Row>
        <TouchableEntitySection
          data={this.props.data.slice(1, 3)}
          colors={colors[this.props.title].slice(1, 3)}
          style={[styles.text, styles.medium]}
          onPress={this._handlePress.bind(this)}
          type={'columns'}
        />
      </Row>
    )
  }

  renderBotRow () {
    return (
      <Row size={2}>
        <Column>
          <TouchableEntitySection
            data={this.props.data.slice(3, 6)}
            colors={colors[this.props.title].slice(3, 6)}
            style={[styles.text, styles.small]}
            onPress={this._handlePress.bind(this)}
            type={'rows'}
          />
        </Column>
        <Column>
          <TouchableEntitySection
            data={this.props.data.slice(6, 10)}
            colors={colors[this.props.title].slice(6, 10)}
            style={[styles.text, styles.xsmall]}
            onPress={this._handlePress.bind(this)}
            type={'rows'}
          />
        </Column>
        <Column>
          <Row size={2}>
            <TouchableEntitySection
              data={this.props.data.slice(10, 13)}
              colors={colors[this.props.title].slice(10, 13)}
              style={[styles.text, styles.xsmall]}
              onPress={this._handlePress.bind(this)}
              type={'rows'}
            />
          </Row>
          <Row>
            <TouchableEntitySection
              data={this.props.data.slice(13, 15)}
              colors={colors[this.props.title].slice(13, 15)}
              style={[styles.text, styles.tiny]}
              onPress={this._handlePress.bind(this)}
              type={'columns'}
            />
          </Row>
        </Column>
      </Row>
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
        <View style={styles.section}>
          <View style={styles.grid}>
            {this.renderTopRow()}
            {this.renderMidRow()}
            {this.renderBotRow()}
          </View>
        </View>
      </View>
    )
  }
}

EntityMap.propTypes = {
  data: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func
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
  section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  grid: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center'
  },
  large: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  medium: {
    fontSize: 16,
    fontWeight: '600'
  },
  small: {
    fontSize: 14,
    fontWeight: '600'
  },
  xsmall: {
    fontSize: 12,
    fontWeight: '500',
    padding: 8
  },
  tiny: {
    fontSize: 10,
    padding: 5
  }
})

