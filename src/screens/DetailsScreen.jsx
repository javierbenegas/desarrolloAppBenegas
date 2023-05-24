import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {
const food = route.params.product;

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