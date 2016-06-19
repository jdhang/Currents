/* @flow */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import utils from '../utils'
import Row from './shared/Row'
import Column from './shared/Column'
import TouchableEntityBox from './TouchableEntityBox'

export default class TouchableEntitySection extends Component {

  _handlePress (entity) {
    this.props.onPress(entity)
  }

  renderSections () {
    const colors = utils.generateColorStyleSheets(this.props.colors)

    const sections = this.props.data.map((el, i) => {
      // let elName = el.name.split(' ').join('\n')
      return (
        <TouchableEntityBox
          key={i}
          color={colors[i].bg}
          style={this.props.style}
          onPress={this._handlePress.bind(this, el)}
          text={el.name}
          shortenText={this.props.shortenText}
        />
      )
    })

    switch (this.props.type) {
      case 'rows':
        return (
          <Column>
            {sections}
          </Column>
        )
      default:
        return (
          <Row>
            {sections}
          </Row>
        )
    }
  }

  render () {
    return (
      <View style={styles.fill}>
        {this.renderSections()}
      </View>
    )
  }
}

TouchableEntitySection.propTypes = {
  colors: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired,
  onPress: React.PropTypes.func,
  style: React.PropTypes.array,
  type: React.PropTypes.string,
  shortenText: React.PropTypes.number
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  }
})
