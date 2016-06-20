/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight
} from 'react-native'
import { mainColors, colors } from '../utils/colors'
import Navbar from './shared/Navbar'
import ArticleView from './ArticleView'


var Query = require('../utils/Query')

export default class ArticleList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) =>  row1 !== row2,
      }),
      isLoading: true
    }
  }

  _handleBackPress () {
    this.props.navigator.pop()
  }

  _handleRowPress (article) {
    this.props.navigator.push({
      component: ArticleView,
      passProps: {
        title: this.props.title,
        entity: this.props.entity,
        index: this.props.index,
        article: article.source.enriched.url
      },
    })
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

  componentDidMount() {
    this.fetchData()
  }

  fetchData () {
    if (Query.fetchCache(this.props.entity)) {
      console.log('in cache', Query.fetchCache(this.props.entity));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(Query.fetchCache(this.props.entity)),
        isLoading: false
      });
      return;
    } else {
      fetch(Query.generate(this.props.entity))
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        Query.saveToCache(this.props.entity, resData.result.docs);
        try {this.setState({
          dataSource: this.state.dataSource.cloneWithRows(resData.result.docs),
          isLoading: false
        })
        } catch(e) {
          console.error(e)
      }})
      .done() 
    }
  }

  fakefetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Query.fetch()),
      isLoading: false
    })
  }

  renderList() {
    if (this.state.isLoading) {
      return (<ActivityIndicatorIOS size='large'/>)
    }

    return (
      <ListView
        initialListSize={5}
        dataSource={this.state.dataSource}
        renderRow={this.renderNews.bind(this)}
        contentContainerStyle={styles.container}

      />
    )
  }

  renderNews(article) {
    return (
      <View style={styles.row}>
        <TouchableHighlight onPress={this._handleRowPress.bind(this, article)}>
          <View>
            <View style={styles.listItem}>
              <Text style={styles.title}>{article.source.enriched.url.title}</Text>
              <Text style={styles.summary}>{article.source.enriched.url.text.trim().replace(/\s\s/g, '')}</Text>
            </View>
          </View>
        </TouchableHighlight>
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
        <View style={styles.center}>
          {this.renderList()}
        </View>
      </View>
    )
  }
}

ArticleList.propTypes = {
  title: React.PropTypes.string.isRequired,
  entity: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  navigator: React.PropTypes.object
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
  },
  listItem: {
    flex: 1,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000'
  },
  summary: {
    fontSize: 14,
    color: '#656565',
    textAlign: 'left'
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    overflow: 'hidden',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  }
})
