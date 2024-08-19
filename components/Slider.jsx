import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View , Text, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Octicons from '@expo/vector-icons/Octicons';
import { router } from 'expo-router';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const flatListRef = useRef();

  const sliderImages = [
    { id: 1, image: require('../assets/images/slider1.png') },
    { id: 2, image: require('../assets/images/slider2.png') },
    { id: 3, image: require('../assets/images/slider3.png') },
    { id: 4, image: require('../assets/images/slider4.png') },
    { id: 5, image: require('../assets/images/slider5.png') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === sliderImages.length - 1) {
        flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        setActiveIndex(0); 
      } else {
        flatListRef.current.scrollToIndex({ animated: true, index: activeIndex + 1 });
        setActiveIndex(activeIndex + 1);
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: Dimensions.get('window').width,
    offset: Dimensions.get('window').width * index,
    index
  });

  const handleScroll = (event) => {
    const width = Dimensions.get('window').width;
    const { contentOffset } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={styles.sliderImage} />
    </View>
  );

  const renderIndicators = () => {
    return sliderImages.map((_, index) => {
      if (index === activeIndex) {
        return <View key={index} style={styles.activeIndex} />;
      }
      return <View key={index} style={styles.inactiveIndex} />;
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.sliderContainer}>
        <Text style={{fontSize:24, fontWeight:'600', color:'white', marginBottom:12}}>Broswer Collections</Text>
        <Pressable onPress={() => router.push('notification')}>
            <Octicons name="heart" size={24} color="white" />
        </Pressable>
      </View>
      <FlatList
        data={sliderImages}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        pagingEnabled={true}
        renderItem={renderItem}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.renderIndicators}>
        {renderIndicators()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    height: 200,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    borderRadius:9
  },
  activeIndex: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: 'red',
  },
  inactiveIndex: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginHorizontal: 6,
  },
  renderIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sliderContainer:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
