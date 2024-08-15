import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Slider from '../../components/Slider'
import Card from '../../components/Card'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
        <View>
          {/* Slider */}
          <Slider/>
          {/* Card */}
          <Card/>
        </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'hsl(0, 0%, 0%)',
    padding:12
  }
})