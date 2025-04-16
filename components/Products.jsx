import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

export default function Products() {
    const onPress = () => {
        router.push('cart');
    };

    const products = [
        { id: 1, image: require('../assets/images/Airpuffer2.png'), title: 'Cush Coat', description: 'Urban Collection', price: 325.00 },
        { id: 2, image: require('../assets/images/Airpuffer3.png'), title: 'Air Cocoon', description: 'Weekend Collection', price: 450.00 },
        { id: 3, image: require('../assets/images/Airpuffer6.jpg'), title: 'Luxurious Coat', description: 'Women Collection', price: 300.00 },
        { id: 4, image: require('../assets/images/Airpuffer6.png'), title: 'Air Coat', description: 'Winter Collection', price: 350.00 },
        { id: 5, image: require('../assets/images/Airpuffer7.png'), title: 'Puffer', description: 'Women Collection', price: 250.00 },
        { id: 6, image: require('../assets/images/Airpufffer8.png'), title: 'Puffer Hoodie', description: 'Men Collection', price: 200.00 },
        { id: 7, image: require('../assets/images/puffer2.png'), title: 'Puffer Hoodie', description: 'Men Collection', price: 505.00 },
        { id: 8, image: require('../assets/images/puffer3.png'), title: 'Air Puffer Hoodie', description: 'Men Collection', price: 350.00 },
        { id: 9, image: require('../assets/images/puffer7.jpg'), title: 'Air Puffer', description: 'Men Collection', price: 425.00 },
        { id: 10, image: require('../assets/images/puffer8.png'), title: 'Air Puffer', description: 'Men Collection', price: 235.00 },
        { id: 11, image: require('../assets/images/Airpuffer2.png'), title: 'Cush Coat', description: 'Urban Collection', price: 325.00 },
        { id: 12, image: require('../assets/images/Airpuffer3.png'), title: 'Air Cocoon', description: 'Weekend Collection', price: 450.00 },
        { id: 13, image: require('../assets/images/Airpuffer6.jpg'), title: 'Luxurious Coat', description: 'Women Collection', price: 300.00 },
        { id: 14, image: require('../assets/images/Airpuffer6.png'), title: 'Air Coat', description: 'Winter Collection', price: 350.00 },
        { id: 15, image: require('../assets/images/Airpuffer7.png'), title: 'Puffer', description: 'Women Collection', price: 250.00 },
        { id: 16, image: require('../assets/images/Airpufffer8.png'), title: 'Puffer Hoodie', description: 'Men Collection', price: 200.00 },
        { id: 17, image: require('../assets/images/puffer2.png'), title: 'Puffer Hoodie', description: 'Men Collection', price: 505.00 },
        { id: 18, image: require('../assets/images/puffer3.png'), title: 'Air Puffer Hoodie', description: 'Men Collection', price: 350.00 },
        { id: 19, image: require('../assets/images/puffer7.jpg'), title: 'Air Puffer', description: 'Men Collection', price: 425.00 },
        { id: 20, image: require('../assets/images/puffer8.png'), title: 'Air Puffer', description: 'Men Collection', price: 235.00 },
        { id: 21, image: require('../assets/images/Airpuffer2.png'), title: 'Cush Coat', description: 'Urban Collection', price: 325.00 },
    ];

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>Popular</Text>
                <Pressable onPress={() => router.push('productdetails/Details')}>
                    <Text style={{ color: 'green', fontSize: 20, fontWeight: '600' }}>See All</Text>
                </Pressable>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                {products.map((product) => (
                    <View key={product.id} style={styles.imageContainer}>
                        <Image source={product.image} resizeMode="contain" style={styles.image} />
                        <View>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>{product.title}</Text>
                            <Text style={{ color: 'gray', fontSize: 14 }}>{product.description}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'green', fontWeight: '900', fontSize: 20, marginTop: 4 }}>${product.price.toFixed(2)}</Text>
                                <MaterialCommunityIcons name="cart-plus" size={24} color="red" onPress={onPress} />
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 10,
        marginTop: 20,
        width: '48%', // Adjust width for two items per row
    },
    image: {
        width: '100%',
        height: 160,
        objectFit: 'fill',
        borderRadius: 10,
        marginBottom: 10,
    },
});