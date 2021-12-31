import React from "react";
import {StyleSheet} from 'react-native'

const CSS = StyleSheet.create(
    {
        utama:{
            backgroundColor:'white'
        },
        container:{
            flex:1,
            width:'100%',
            paddingTop:0,
            paddingTop:10,
            },
        titleCard:{
            marginLeft:12
         },
         imageCard:{
             width:'100%',
             height:100,
             resizeMode:'cover',
             padding:150,
             justifyContent:'space-between',
             marginBottom:5,
         },
         contentText:{
             paddingHorizontal:12,
             marginBottom:5,
             textAlign:'justify',
             color:'black'
         }, 
         Card:{
             paddingVertical:0,
             marginVertical:2,
             borderRadius:10,
             backgroundColor:"white"
         },
         ButtonStyle:{
             marginBottom:12,
         },
         Recommed:{
            backgroundColor:'#DDDDDD', padding:10, borderRadius:30, marginRight:10
         }
    }
)

export {
    CSS,
}