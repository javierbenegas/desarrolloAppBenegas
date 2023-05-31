import { StyleSheet, Text, View, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'

const DetailsScreen = () => {
    const dispatch = useDispatch();
    const food = useSelector (state => state.products.selected);

    const handleAddItem = () => {
        dispatch(add_item(food));
    };

    return (
        <View style={styles.container}>
            <Text>{food.name}</Text>
            <Text>{food.description}</Text>
            <Text>${food.price}</Text>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',    
    },
})