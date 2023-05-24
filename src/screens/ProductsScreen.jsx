import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductsItem from '../components/ProductsItem';


const ProductsScreen = ({ navigation, route }) => {

    const foods = PRODUCTS.filter( 
        food => food.category === route.params.categoryId 
    ); 
    

    const handleSelectedProduct = (item) => { 
        navigation.navigate("Products", { 
            product: item, 
            name: item.name 
        }) 
    }; 

    const renderProductItem = ({ item }) => { 
        return ( 
            <View style={styles.productItem}>
                <ProductsItem 
                item={item} 
                onSelected={handleSelectedProduct} 
                />
            </View> 
        ) 
    };
    
    return (
        <View style={styles.container}>
        <FlatList 
        data={foods}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        />
    </View>
    )
};

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',   
    },
    productItem: {
        marginTop: 10,
        padding: 15,
        height: 220,
       },
});