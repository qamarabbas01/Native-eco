import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Octicons from '@expo/vector-icons/Octicons';

export default function Details() {
  return (
    <ScrollView style={{paddingTop:30,backgroundColor:'black'}}>


        <Pressable onPress={()=> router.back('')} style={{paddingTop:20, backgroundColor:'black',marginLeft:2}}>
            <Octicons name="arrow-left" size={30} color="white" />
         </Pressable>

         <View style={styles.text2}>
            <Text style={{fontSize:20,fontWeight:'700', color:"white",textAlign:'center'}}>Most Popular Item</Text>
         </View>


   <View style={{justifyContent:'center',alignItems:'center'}}>
   <View style={{display:'flex',flexDirection:'row',gap:12}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Airpuffer1.jpg')} resizeMode='contain' style={styles.image}/>
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
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$400.00</Text>
        </View>
        </View>
     </View>


     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Airpuffer7.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Women Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$210.00</Text>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Airpufffer8.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$225.00</Text>
        </View>
        </View>
     </View>

     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/puffer2.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$320.00</Text>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/puffer3.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$255.00</Text>
        </View>
        </View>
     </View>

     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/puffer7.jpg')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$210.00</Text>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/puffer8.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$225.00</Text>
        </View>
        </View>
     </View>

     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/puffer9.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$210.00</Text>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/hoddy.jpeg')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$25.00</Text>
        </View>
        </View>
     </View>

            <View style={styles.text}>
               <View style={{justifyContent:"center",alignItems:'center',marginBottom:60,marginTop:12 }}>
                <Text style={{color:'white', fontSize:20, fontWeight:'600'}}>You are all caught up 😃</Text>
               </View>
            </View>
   </View>
    </ScrollView>
   
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
    },
    text:{
      borderTopColor:'white',
      borderWidth:2,
      width:'100%',
    },
    text2:{
        borderBottomColor:'white',
        borderWidth:1,
        padding:10,
    }
})