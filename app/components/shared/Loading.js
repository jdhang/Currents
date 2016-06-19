/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicatorIOS
} from 'react-native'
import Navbar from './Navbar'

export default class Loading extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Navbar title={this.props.navBarTitle} />
        <View style={styles.loading}>
          <ActivityIndicatorIOS size='large' />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    )
  }
}

Loading.propTypes = {
  navBarTitle: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  loading: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '500'
  }
})
