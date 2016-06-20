/* @flow */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native'

const CATEGORY = 'Current Events'
const Query = require('./Query.js')
var ArticleView = require('./ArticleView');

const fetched = Query.fetch();

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
    // fetch(ENTITY)
    // .then(res => res.json())
    // .then(resData => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(fetched),
        isLoading: false
      })
    // })
    // .done()
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
        dataSource={this.state.dataSource}
        renderRow={this.renderNews.bind(this)}
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
  rowPressed(article) {
    console.log(article.url);
    this.props.navigator.push({
      title: 'Article',
      component: ArticleView,
      passProps: {article: article}
    })
  }

  renderNews (article) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(article.source.enriched.url)}>
      <View>
      <View style={styles.listItem}>
        <Text style={styles.title}>{article.source.enriched.url.title}</Text>
        <Text style={styles.score}>{article.source.enriched.url.enrichedTitle.docSentiment.score}</Text>
      </View>
      <View style={styles.separator}/>
      </View>
      </TouchableHighlight>
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
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  back: {
    color: '#FFF',
  },
  summary: {
    fontSize: 14,
    color: '#656565'
  },
   separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
})
