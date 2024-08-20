import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Products() {
  
  return (
  <SafeAreaView style={{padding:12 ,  backgroundColor:'black',height:'100%'}}>
    <ScrollView>
      <View>
        <Text style={{ fontSize:23 , fontWeight:'600', color:'white'}}>Cart Item</Text>
      </View>
    <View style={{ display:'flex',flexDirection:'row',gap:12 }}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Airpuffer2.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Cush Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Urban Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$325.00</Text>
            
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Airpuffer3.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air cocoon</Text>
            <Text style={{color:"gray", fontSize:14}}>weekend Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$450.00</Text>
        </View>
        </View>
     </View>


     <View style={{display:'flex',flexDirection:'row',gap:12}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Airpuffer6.jpg')} resizeMode='cover' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>luxurious Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Women Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$300.00</Text>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Airpuffer6.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Winter Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$350.00</Text>
            </View>
        </View>
     </View>
    </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        padding:10,
        marginTop:20,
    },
    image:{
        width: 160,
        height: 160,
        objectFit: "fill",
        borderRadius: 10,
        marginBottom:10
    }
})