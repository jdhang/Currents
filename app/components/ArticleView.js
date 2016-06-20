/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ActivityIndicatorIOS,
  WebView
} from 'react-native'
import { mainColors, colors } from '../utils/colors'
import Navbar from './shared/Navbar'

export default class ArticleView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: this.props.article,
      isLoading: true
    }
  }

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
        <View style={[styles.header, bg.color]}>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </View>
        <View style={[styles.subHeader, bg.entityColor]}>
          {subHeaderText}
        </View>
      </View>
    )
  }

  renderLoading() {
    return (<ActivityIndicatorIOS size='large'/>)
  }

  render () {
    return (
      <View style={styles.container}>
        <Navbar
          leftBtnName={'Back'}
          onLeftPress={this._handleBackPress.bind(this)}
          title={'Currents'}
        />
        
        <WebView
          automaticallyAdjustContentInsets={false}
          source={{uri: this.props.article.url}}
          javaScriptEnabled={false}
          domStorageEnabled={true}
          decelerationRate="normal"
          renderLoading={this.renderLoading}
          scrollEnabled={true}
          scalesPageToFit={true}
        />
      </View>
    )
  }
}

ArticleView.propTypes = {
  title: React.PropTypes.string.isRequired,
  entity: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  article: React.PropTypes.object.isRequired,
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
    paddingTop: 8,
    paddingBottom: 8,
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
  },
  center: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  }
})
