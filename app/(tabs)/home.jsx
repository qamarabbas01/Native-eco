import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Slider from '../../components/Slider'
import Products from '../../components/Products'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content"  backgroundColor="white" hidden={false} />
        <View>
          {/* Slider */}
          <Slider/>
          {/* Card */}
          <Products/>
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