
import React, {useState} from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import styles from './css/AppStyle'

const ButtonClickEvent = ({setJustifyContent}) => {

    return(
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'center',}}>
        <View style={{height:50, paddingHorizontal:4}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('flex-start')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Flex Start</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:50, paddingHorizontal:10}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('flex-end')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Flex End</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:50, paddingHorizontal:10}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('center')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Center</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:50, paddingHorizontal:10}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('space-between')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Space Between</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:50, paddingHorizontal:10}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('space-around')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Space Around</Text>
            </TouchableOpacity>
        </View>
        <View style={{height:50, paddingHorizontal:10}}>
            <TouchableOpacity
                style={styles.ButtonOpacity}
                onPress={() =>{setJustifyContent('space-evenly')}}
            >
                <Text style={{color:'white', fontWeight:'bold'}}>Space Evently</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const DesignComponentJustifyContent = ({dataJustifyConten}) =>{
   

    return(
        <View style={[styles.countainer, {justifyContent:dataJustifyConten, flexDirection:"row", position:'relative'}]}>
            <View style={[styles.box, { backgroundColor: "powderblue" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box, { backgroundColor: "steelblue" }]} />
        </View>
        )

}

const Design = () => {

    const [justifyContent, setJustifyContent] = useState('flex-start')

    return(
    <View>
        <View style={{width:'100%', height:'80%'}}>
            <DesignComponentJustifyContent dataJustifyConten={justifyContent} />
        </View>
        <View style={{marginTop:70}}>
            <ButtonClickEvent setJustifyContent={setJustifyContent} />
        </View>
    </View>
    )
}

export default Design;