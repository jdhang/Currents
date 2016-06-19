/* @flow */
'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  Platform,
} from 'react-native';

import Home from './components/Home'
import PageOne from './components/PageOne'

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index > 0) {
      return (
        <TouchableHighlight onPress={() => {
              if (index > 0) {
                navigator.pop();
              }
          }}>
          <Text style={styles.navBarText}>Back</Text>
        </TouchableHighlight>
      )
    }
  },
  Title: (route, navigator, index, navState) => {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        Current
      </Text>
    )
  },
  RightButton: (route, navigator, index, navState) => {
    if (index > 0) {
      return <Text style={styles.navBarText}>Forward</Text>
    }
  },
}

export default class App extends Component {

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Home':
        return <Home navigator={navigator} route={route} {...this.props} title={'TBDNews'} />
      case 'PageOne':
        return <PageOne navigator={navigator} route={route} {...this.props} title={'TBDNews'} />
    }
  }

  configureScene (route, routeStack) {
    switch (route.id) {
      case 'Modal':
        return Navigator.SceneConfigs.HorizontalSwipeJump
      default:
        return Navigator.SceneConfigs.HorizontalSwipeJump
    }
  }

  componentDidMount () {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content')
    }
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{ flex: 1 }}
        initialRoute={{
          id: 'PageOne',
          component: PageOne
        }}
        renderScene={ this.renderScene }
      />
    );
  }

        // navigationBar={
        //   <Navigator.NavigationBar
        //     routeMapper={ NavigationBarRouteMapper }
        //     style={styles.navBar}
        //   />
        // }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2c3e50',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#FFF',
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
})
