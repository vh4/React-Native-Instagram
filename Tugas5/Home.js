import React, {useState, useEffect} from "react";
import {Text, ScrollView, View, StatusBar, Button, TouchableHighlight, Alert} from 'react-native'
import { Card } from "./components/Card";
import {CSS} from './Stylesheets/Css'
import { Image, Center, NativeBaseProvider } from "native-base"
import Icon from 'react-native-vector-icons/Entypo'

const Home =() =>{

    const [post, setPost] = useState([])
    
    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts');
            const json = await response.json();
            setPost(json.post);
    } catch (error) {
        console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
        

    const HeaderRecomendation = () =>{
        return(
            <View style={{flexDirection:'row', marginTop:12,}}>
             <TouchableHighlight>
             <NativeBaseProvider>
                 <Center px={1} flex={1} style={{display:'flex', flexDirection:'row', alignItems:'flex-end',}}>
                 <Image style={{borderTopRightRadius:270, borderWidth:1}}
                 size={85}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require("../images/tony.png")
                    }
                    alt="hori1"

    />
    <View style={{position:'absolute', paddingLeft:70, paddingBottom:4, }}>
        <View style={{backgroundColor:'white', borderRadius:270}}><Icon name="circle-with-plus" style={{fontSize:25, color:'#3881ff', }} /></View>
    </View>
                 </Center>
                 </NativeBaseProvider>
            </TouchableHighlight>
            <TouchableHighlight>
             <NativeBaseProvider>
                 <Center flex={1} px="1">
                 <Image
                 size={85}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require("../images/hori2.jpg")
                    }
                    alt="hori2"

    />
                 </Center>
                 </NativeBaseProvider>
            </TouchableHighlight> 
            <TouchableHighlight>
             <NativeBaseProvider>
                 <Center flex={1} px="1">
                 <Image
                 size={85}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                     require("../images/hori.jpg")
                    }
                    alt="hori3"

    />
                 </Center>
                 </NativeBaseProvider>
            </TouchableHighlight>
            <TouchableHighlight>
             <NativeBaseProvider>
                 <Center flex={1} px="1">
                 <Image
                 size={85}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require("../images/hori1.jpg")
                }
                alt="hori4"
    />
                 </Center>
                 </NativeBaseProvider>
            </TouchableHighlight>
            <TouchableHighlight>
             <NativeBaseProvider>
                 <Center flex={1} px="1">
                 <Image
                 size={85}
                 resizeMode={"contain"}
                 borderRadius={270}
                 source={
                    require("../images/sakura.jpg")
                }
                alt="hori"
    />
                 </Center>
                 </NativeBaseProvider>
            </TouchableHighlight>                                                                
            </View>
            
        )
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={[CSS.utama, ]}>
            <StatusBar 
                animated={true}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingRight:150, marginLeft:12}}>
            <HeaderRecomendation />
        </ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop:10}}>
            <View style={{flex: 1, height: 0.5, backgroundColor: '#e3e3e3'}} />
            <View>
                </View>
                <View style={{flex: 1, height: 0.5, backgroundColor: '#e3e3e3'}} />
                </View>
        <View style={CSS.container}>
            <View>
                <Card dataMovies={post} />
            </View>           
        </View>
      </ScrollView>
    )
}

export {
    Home,
};