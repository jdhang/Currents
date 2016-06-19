/* @flow */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native'

const API_CALL = 'http://news-explorer.mybluemix.net/api/overview'
const CATEGORY = 'Current Events'

export default class PageOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) =>  row1 !== row2,
      }),
      isLoading: true
    }

  }

  fetchData () {
    fetch(API_CALL)
    .then(res => res.json())
    .then(resData => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resData[CATEGORY]),
        isLoading: false
      })
    })
    .done()
  }

  componentDidMount () {
    this.fetchData()
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView()
    }

    return (
      <ListView
        initialListSize={5}
        dataSource={this.state.dataSource}
        renderRow={this.renderNews}
        contentContainerStyle={styles.container}
      />
    )
  }

  renderLoadingView () {
    return (
      <View style={styles.container}>
        <Text>
          Loading the News for you...
        </Text>
      </View>
    )
  }

  renderNews (entity) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{entity.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 64,
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e44ad',
  },
  listText: {
  },
  back: {
    color: '#FFF',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 20,
  }
})
