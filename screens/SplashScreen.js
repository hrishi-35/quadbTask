import React,{useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

 SplashScreen =({navigation})=>{

	//useEffect(()=>{
		setInterval(()=>{navigation.navigate('Zomato')}, 3000);
	//	},[]);
 	
		return(
				<View style={styles.container}>
    			<ImageBackground source={require('../assets/splash.png')} style={styles.image}>
      			
    			</ImageBackground>
  				</View>
			)
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

 export default SplashScreen;
	
		
	
