import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

export default function Input({ style, ...restProps }) {


  return (
<TextInput
      blurOnSubmit
      autoCapitalization="none"
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
      style={{ ...styles.input, ...style }}
      {...restProps}
    />
  )
}


const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})