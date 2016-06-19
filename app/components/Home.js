/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'
import Navbar from './shared/Navbar'
import Loading from './shared/Loading'
import TouchableCategorySection from './TouchableCategorySection'
import EntityMap from './EntityMap'

const API_CALL = 'http://news-explorer.mybluemix.net/api/overview'
const CATEGORIES = {
  'Current Events': '#739D34',
  'Sports': '#983351',
  'Finance': '#29526D',
  'Art and Entertainment': '#226666',
  // 'Science',
  // 'Business and Industrial',
  // 'Health and Fitness',
  // 'Education',
  // 'Law, Government and Politics',
  // 'Relogion and Spirituality',
  // 'Technology and Computing'
}

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      isLoading: true,
      singleView: false
    }
  }

  _navigate (id, name, type = 'Normal') {
    this.props.navigator.push({
      id: id,
      passProps: {
        name: name
      },
      type: type
    })
  }

  _handlePress (category) {
    LayoutAnimation.easeInEaseOut()
    this.setState({
      singleView: !this.state.singleView,
      category: category,
      bg: StyleSheet.create({
        color: {
          backgroundColor: CATEGORIES[category]
        }
      })
    })
  }

  _extractData (data) {
    let obj = {}
    Object.keys(CATEGORIES).forEach(category => {
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
    return Object.keys(CATEGORIES).map((category, i) => {
      return (
        <TouchableCategorySection
          key={i}
          sectionName={category}
          bgColor={CATEGORIES[category]}
          onPress={this._handlePress.bind(this)}
        />
      )
    })
  }

  render () {
    if (this.state.isLoading) {
      <Loading navBarTitle={'Currents'} />
    }

    return (
      this.state.singleView
      ? (
        <View style={styles.container}>
          <Navbar
            leftBtnName={'Back'}
            onLeftPress={this._handlePress.bind(this)}
            title={'Currents'}
          />
          <Text style={[styles.header, this.state.bg.color]}>{this.state.category}</Text>
          <EntityMap data={this.state.data[this.state.category]} />
        </View>
      )
      : (
        <View style={styles.container}>
          <Navbar
            title={'Currents'}
          />
          {this.renderCategorySections()}
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  header: {
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: '500',
    fontSize: 20,
    color: '#FAFAFA',
    textAlign: 'center'
  }
})
