import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [isPortrait, setIsPortrait] = useState(true)

  const statePortrait = () => setIsPortrait(onPortrait)

  const onPortrait = () => {
    const dim = Dimensions.get("screen")
    return dim.height > dim.width
  }
  
  //console.log(isPortrait);  

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait)
    return () => {
      Dimensions.removeEventListener('change', statePortrait)
    }
  }, [])


  const [loaded] = useFonts({
    "Alata-Regular": require('./src/assets/fonts/Alata-Regular.ttf'),
  });

  if (!loaded) return null

  return (
    <ShopNavigator/>
  //      <View style={styles.container}>
  //        <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
  //        <StatusBar style="auto" />
  //      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: "Alata-Regular",
    fontSize: 70,
    color: "blue",
    textAlign: "center",
  },
});
