import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
    <Text>Cart</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'rgb(60, 60, 60)',
    height:"100%",
    paddingTop:30
  }
})