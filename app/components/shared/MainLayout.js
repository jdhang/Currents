/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import Navbar from './Navbar'

export default class MainLayout extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Navbar title={'Currents'} />
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  }
})
