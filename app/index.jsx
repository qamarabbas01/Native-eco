import {Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router';
import Button from "../components/Button"


export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black-content"  backgroundColor="white" hidden={false} />
      <View style={styles.header}>
        <Text style={styles.text}>Puff </Text>
        <Text style={styles.text2}>Boutique</Text>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/Airpuffer.png')}  
            resizeMode='contain'
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text3}>Elevate Your Style 🌟</Text>
          <Text style={styles.description}>
            Discover innovative, padded leather jackets for ultimate comfort and style.
          </Text>
          <View>
              <Button title={'Quick Shop Access'} onPress={()=>router.push('home')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 120,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  text2: {
    fontSize: 30,
    fontWeight:'500',
    color: 'green',
    fontFamily: 'Arial',
    marginTop: -20,
    marginLeft:200
  },
  imageContainer: {
    width: '100%',
    height: 500, 
    alignItems: 'center',
  },
  image: {
    width: '300%',
    height: '100%',
  },
  content: {
    padding: 12,
    marginTop: -70,
  },
  text3: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  description: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Verdana',
  },
});
