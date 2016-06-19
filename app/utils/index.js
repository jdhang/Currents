/* @flow */
'use strict'

import { StyleSheet } from 'react-native'

export default {
  generateColorStyleSheets (colorsArr) {
    return colorsArr.map((color, i) => {
      return StyleSheet.create({
        bg: {
          backgroundColor: colorsArr[i]
        }
      })
    })
  }
}
