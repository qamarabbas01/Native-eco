import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
      <View >
        <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>Search</Text>
        <View>
          <TextInput style={styles.input}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'rgb(60, 60, 60)',
    height:"100%"
  },
  input:{
    padding:20,
    backgroundColor:'#333',
    marginTop:10,
    color:'white',
    paddingHorizontal:10,
    borderRadius:10,
    fontSize:18,
    fontWeight:'bold'
  }
})