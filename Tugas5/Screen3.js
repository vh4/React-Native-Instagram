import React from "react";
import { Text, View , TouchableOpacity} from "react-native";
import { AuthContext } from "./components/Context";
import {  Center, NativeBaseProvider, TouchableHighlight,Image} from "native-base"
import Icon from 'react-native-vector-icons/Ionicons'
import IconSocialMedia from 'react-native-vector-icons/Entypo'

function SearchScreen3({dataUsers}) {
	const {signOut} = React.useContext(AuthContext)
	return (
		<View style={{ flex: 1, backgroundColor:'white' }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <View style={{flex: 1, height: 0.5, backgroundColor: '#e3e3e3'}} />
            <View>
                </View>
                <View style={{flex: 1, height: 0.5, backgroundColor: '#e3e3e3'}} />
                </View>
             <NativeBaseProvider>
               <Center>
                 <Image source={require('../images/profile.png')} style={{resizeMode:'cover', width:800, height:200}}></Image>
               </Center>
                 <Center px="1" mt={-20} >
                 <Image
                 size={100}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require("../images/hori2.jpg")
                    }
                    alt="hori2"
    />
  <View style={{display:'flex', flexDirection:'row', marginTop:4}}>
      <IconSocialMedia color={'blue'} name="facebook-with-circle" size={22} />
      <IconSocialMedia color={'blue'} style={{marginLeft:2}}name="twitter-with-circle" size={22} /> 
      <IconSocialMedia color={'blue'} style={{marginLeft:2}} name="linkedin-with-circle" size={22} /> 
    </View>
      <Text onPress={()=> signOut()} style={{textAlign:'center', marginTop:10, fontWeight:'bold', color:'black'}}>{dataUsers[0].toUpperCase()}</Text>
      <Icon size={28} color={'black'} name="arrow-forward-outline" onPress={()=> signOut()}></Icon>
      <View style={{flexDirection:'row',}}>
        <View style={{flex:0.4, borderRightWidth:0.3,}}>
          <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold', color:'black'}}>200</Text>
          <Text style={{textAlign:'center'}}>Postingan</Text>
          </View>
        <View style={{flex:0.4}}>
        <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold',color:'black'}}>100</Text>
          <Text style={{textAlign:'center'}}>Followers</Text>
          </View>
          <View style={{flex:0.4, borderLeftWidth:0.3,}}>
        <Text style={{textAlign:'center', fontSize:24, fontWeight:'bold',color:'black'}}>250</Text>
          <Text style={{textAlign:'center'}}>Following</Text>
          </View>
      </View>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', marginTop:10}}>
        <View style={{width:'33%'}}>
        <Image  source={require('../images/hori1.jpg')} style={{resizeMode:'cover', width:160, height:130, borderWidth:1, borderColor:'white'}}></Image>
        </View>
        <View style={{width:'33%'}}>
        <Image  source={require('../images/hori2.jpg')} style={{resizeMode:'cover', width:160, height:130, borderWidth:1, borderColor:'white'}}></Image>
        </View>   
        <View style={{width:'33%'}}>
        <Image  source={require('../images/hori3.jpg')} style={{resizeMode:'cover', width:160, height:130, borderWidth:1, borderColor:'white'}}></Image>
        </View>   
        <View style={{width:'33%'}}>
        <Image  source={require('../images/hori.jpg')} style={{resizeMode:'cover', width:160, height:130, borderWidth:1, borderColor:'white'}}></Image>
        </View>
      </View>
  </Center>
</NativeBaseProvider>
		</View>
	);
}

export default SearchScreen3;