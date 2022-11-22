import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = () => {
  return (
    <TextInput
    blurOnSubmit
    autoCapitalization="none"
    autoCorrect={false}
    keyboardType="numeric"
    maxLength={2}
    styles={{ ...styles.input, ...styles }}
    
  />
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})