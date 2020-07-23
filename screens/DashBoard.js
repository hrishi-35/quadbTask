import React,{useState,useEffect} from 'react';
import {View , Text , FlatList, Image , ScrollView} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import SearchBar from 'react-native-search-bar';

 const list = [
{title:'Pure Veg Places' , img:require('../assets/vegetable.png')},
{title:'Barbecube' , img:require('../assets/barbecue.png')},
{title:'Trending' , img:require('../assets/trend.png')},
{title:'Hygiene Rated' , img:require('../assets/liquid-soap.png')},
]

const list1 = [
{title:'Dominos Pizza' , img:require('../assets/dominos.png')},
{title:'Haldiram' , img:require('../assets/haldiram.png')},
{title:'McDonalds' , img:require('../assets/mcd.jpg')},
{title:'Pizza Hut' , img:require('../assets/pizza.png')},

]

 DashBoard = () => {
const[data,setData]=useState('');


useEffect( ()=>{
	fetch('https://chatapptask.000webhostapp.com/api/fetchApi.php',{
		method:'POST'
	})
	.then((response) => response.json())
  	.then((data) => {
    	console.log(data);
    	setData(data);
  	})
    .catch((error) => {
      console.error('err',error);
    })
   
	 },[]);

		return(<ScrollView>
				<View style={{flex:1}}>
				<SearchBar 
  				placeholder="Search Restaurants, Cuisines, Dishes"
  				
				/>
				<View style={{height:200,marginTop:10 }} >
				<ImageSlider images={[
   				 'https://chatapptask.000webhostapp.com/api/uploads/img1.png',
    			'https://chatapptask.000webhostapp.com/api/uploads/img3.png',
    			'https://chatapptask.000webhostapp.com/api/uploads/img2.png'
  				]} 
  				autoPlayWithInterval={3000} />
  				</View>
  				<FlatList 
					data={list}
					nestedScrollEnabled
					horizontal={true}
					showsHorizontalScrollIndicator={false} 
					keyExtractor={title => list.title}
					renderItem ={({item})=>{
					return (
					<View style={{margin:10,backgroundColor:'#FFF',borderRadius:16,padding:8}}>
					<Image source={item.img}
        			style={{width:120,height:80,resizeMode: "contain"}}/>
					<Text style={{alignSelf:'center',padding:4}}>{item.title}</Text>
					</View>
					)
					}}
				/>
				<Text style={{fontSize:14,marginTop:10,marginLeft:4}}>Trending Near You</Text>
  	
			<FlatList 
			data={data}
			nestedScrollEnabled
			
			showsHorizontalScrollIndicator={false} 
			keyExtractor={id => data.id}
			renderItem ={({item})=>{
				return (
					<View style={{margin:5,borderRadius:12,padding:8,flexDirection:'row'}}>
					<Image source={{uri:item.url}}
        			style={{height:100,width:100,resizeMode: "stretch",borderRadius:8}}/>
        			<View style={{ marginLeft:8}}>
        			<Text style={{padding:4 ,fontSize:16}}>{item.title}</Text>
        			<Text>$10 per person | 50 mins</Text>
        			</View>
					</View>
					)
			}}
			/>
			<Text style={{fontSize:14,marginTop:10,marginLeft:4}}>Top Brands </Text>
			<FlatList 
					data={list1}
					nestedScrollEnabled
					horizontal={true}
					showsHorizontalScrollIndicator={false} 
					keyExtractor={title => list.title}
					renderItem ={({item})=>{
					return (
					<View style={{margin:10,borderRadius:16,padding:8 }}>
					<Image source={item.img}
        			style={{width:150,height:100,resizeMode: "contain",borderRadius: 150 / 2, overflow: "hidden",}}/>
					<Text style={{alignSelf:'center',padding:4}}>{item.title}</Text>
					</View>
					)
					}}
				/>
				</View>
				</ScrollView>
			)
	}

 export default DashBoard;
	
		
	
