import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {CSS} from "../Stylesheets/Css"
import { Image, Center, NativeBaseProvider } from "native-base"
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'

const Title = ({judul})=>{
    var i = 0;
    return(
        <View >
            <NativeBaseProvider>
                <View style={{display:'flex', flexDirection:"row", alignItems:'center', marginLeft:10}} >
                <Image
                 size={35}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require('../../images/hori.jpg')
                }
    />
                <View style={CSS.titleCard}>
                <Text style={{
                    fontSize:14,
                    color:'black',
                    fontWeight:'bold',
                    fontFamily: "Cochin",            
                }}>{judul.fullname}</Text>
                <Text style={{
                    fontSize:10,
                    fontFamily: "Cochin",                      
                }}>bandung, Jawa Barat</Text>
                </View>
                </View>
            </NativeBaseProvider>
        </View>
    )
}

const ImageCard = ({gambar})=>{
    return(
        <View style={{marginTop:10}}>
             <NativeBaseProvider>
                        <Image style={CSS.imageCard} source={{uri:gambar.gambar}}></Image>
                 </NativeBaseProvider>            
        </View>
    )
}

const IconSocial = ()=>{
    return(
        <View style={{marginTop:5}}>
             <NativeBaseProvider>
             <View style={{flexDirection:'row', marginLeft:15}}>
                 <Icon  name="hearto" color="red"  size={26} />
                 <Icon1 style={{paddingLeft:12}} name="message-circle" color="black" size={26} />
                 <Icon2 style={{paddingLeft:10, marginTop:1,}} name="ios-paper-plane-outline" color="black" size={23} />	
	</View>     
             </NativeBaseProvider>            
        </View>
    )
}
const Post = ({konten})=>{
    return(
        <View>
            <Text style={CSS.contentText}>
                {<Text style={{fontWeight:'bold'}}>{konten.fullname}</Text>} { <Text> {konten.post.length < 20 ? konten.post : konten.post.substring(0, 50) + '....'} {<Text style={{color:'#a3a3a3'}}>lainya</Text>}</Text>}
            </Text>
        </View>
    )
}

const Commentar = ({navigation})=>{
    return(
        <View style={CSS.ButtonStyle}>
        </View>
    )
}

const Card = ({gotoTestStackScreen, dataMovies}) =>{
    return(
        <View>
            {dataMovies.map((data) =>(
                <View key={data.id} style={CSS.Card}>
            <View>
                <Title key={data.id} judul={data}/>
            </View>
            <View>
                <ImageCard key={data.id} gambar={data}/>
            </View>
            <View>
                <IconSocial />
            </View>                 
            <View>
                <Post key={data.id} konten={data}/>
            </View>
            <View>
                <Commentar navigation={gotoTestStackScreen}/>
            </View>                   
                </View>
            ))}
        </View>
        )
}

export {
    Card,
}
