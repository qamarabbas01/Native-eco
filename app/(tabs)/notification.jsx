import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Notification() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
     <ScrollView>
        <View style={styles.notifications}>
          <MaterialIcons name="notification-important" size={300} color="white" />   
        </View>
         <View>
           <Text style={styles.text}>No Notification Yet!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'rgb(60, 60, 60)',
    height:"100%",
    paddingTop:30
  },
  notifications:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  }
})