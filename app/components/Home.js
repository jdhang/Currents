/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import mainColors from '../utils/colors'
import Navbar from './shared/Navbar'
import Loading from './shared/Loading'
import TouchableCategorySection from './TouchableCategorySection'
import EntityMap from './EntityMap'

const API_CALL = 'http://news-explorer.mybluemix.net/api/overview'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      isLoading: true
    }
  }

  _navigate (component, category, type = 'Normal') {
    this.props.navigator.push({
      component: component,
      passProps: {
        title: category,
        data: this.state.data[category]
      },
      type: type
    })
  }

  _extractData (data) {
    let obj = {}
    Object.keys(mainColors).forEach(category => {
      obj[category] = data[category]
    })
    return obj
  }

  fetchData () {
    fetch(API_CALL)
    .then(res => res.json())
    .then(resData => {
      this.setState({
        data: this._extractData(resData),
        isLoading: false
      })
    })
    .done()
  }

  componentDidMount () {
    this.fetchData()
  }

  renderCategorySections () {
    return Object.keys(mainColors).map((category, i) => {
      return (
        <TouchableCategorySection
          key={i}
          sectionName={category}
          bgColor={mainColors[category]}
          onPress={this._navigate.bind(this, EntityMap, category)}
        />
      )
    })
  }

  render () {
    if (this.state.isLoading) {
      <Loading navBarTitle={'Currents'} />
    }

    return (
      <View style={styles.container}>
        <Navbar title={'Currents'} />
        {this.renderCategorySections()}
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
