import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/input'
import Octicons from '@expo/vector-icons/Octicons';

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
      <View >
        <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>Search</Text>
        <View>
        <Input
            icon={<Octicons name="search" size={20} color={'black'} />}
            placeholder="Search"
            style={styles.input}
          />       
           </View>
      </View>

      <View>
        <Text style={{color:'white', fontSize:14, marginTop:10, textAlign:'center'}}>No Search Yet</Text>
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
    backgroundColor:'white',
    color:'black',
    paddingHorizontal:10,
    borderRadius:10,
    fontWeight:'500',
    fontSize:16,
  },
})