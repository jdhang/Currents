/* @flow */
'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './app'

class Currents extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('Currents', () => Currents)
