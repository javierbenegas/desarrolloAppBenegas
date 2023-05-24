import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { COLORS } from '../constants/colors';

const ShopNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
            <Stack.Navigator 
                initialRouteName='Home' 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    headerTintColor: COLORS.quaternary,
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={CategoriesScreen} 
                    options={{
                        title: "MENU",
                    }}
                />
                <Stack.Screen 
                name='Products' 
                component={ProductsScreen} 
                options={({route}) => ({
                    title: route.params.name,
                })}
                />
                <Stack.Screen 
                name='Details' 
                component={DetailsScreen} 
                options={({route}) => ({
                    title: route.params.name,
                    backgroundColor: 'white',
                })}
                />
            </Stack.Navigator>
    );
};

export default ShopNavigator

