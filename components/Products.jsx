import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router'

export default function Products() {
    const onPress =()=>{
        router.push('cart')
    }
  return (
    <View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>Popular</Text>
        <Pressable onPress={()=> router.push('productdetails/Details')}>
             <Text style={{ color: 'gray', fontSize: 20, color: 'green', fontWeight: '600' }}>See All</Text>
        </Pressable>
      </View>   

    <View style={{ display:'flex',flexDirection:'row',gap:12 }}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/Airpuffer2.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Cush Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Urban Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$325.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" onPress={onPress} />
            </View>
            
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/Airpuffer3.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air cocoon</Text>
            <Text style={{color:"gray", fontSize:14}}>weekend Collection</Text>
            <View style={{display:"flex" ,flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$450.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
        </View>
        </View>
     </View>


     <View style={{display:'flex',flexDirection:'row',gap:12}}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/Airpuffer6.jpg')} resizeMode='cover' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>luxurious Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Women Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$300.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/Airpuffer6.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Coat</Text>
            <Text style={{color:"gray", fontSize:14}}>Winter Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$350.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
             </View>
        </View>
     </View>


     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/Airpuffer7.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Women Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$250.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>       
         </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/Airpufffer8.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$200.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
        </View>
        </View>
     </View>

     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/puffer2.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$505.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>     
       </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/puffer3.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer Hoddy</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$350.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
        </View>
        </View>
     </View>

     <View style={{display:'flex',flexDirection:'row',gap:12, marginBottom:20}}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/puffer7.jpg')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$425.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>
        </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/puffer8.png')} resizeMode='contain' style={styles.image}/>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:'bold',marginBottom:2}}>Air Puffer</Text>
            <Text style={{color:"gray", fontSize:14}}>Men Collection</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"green", fontWeight:'900', fontSize:20, marginTop:4}}>$235.00</Text>
            <MaterialCommunityIcons name="cart-plus" size={24} color="red" />
            </View>       
         </View>
        </View>
     </View>
    </View>
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