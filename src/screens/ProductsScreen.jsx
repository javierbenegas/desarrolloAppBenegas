import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProduct, selectedProduct } from '../store/actions/products.action';

import ProductsItem from '../components/ProductsItem';


const ProductsScreen = ({ navigation }) => {
    const filteredProducts = useSelector((state) => state.products.filteredProduct);
    const categorySelected = useSelector((state) => state.categories.selected);
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(filteredProduct(categorySelected.id));
}, []);


const handleSelectedProduct = item => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("Details", {
        name: item.name,
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
        data={filteredProducts}
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