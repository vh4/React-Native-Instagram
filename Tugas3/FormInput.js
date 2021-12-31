import React, {useState} from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, Alert, TextInput } from "react-native";
import styles from './css/AppStyle'

const TextJudul = ({data}) =>{ // atau  props => props.data
    return(
        <Text style={styles.text}>{data}</Text>
    )
}

const FormInput = () =>{
    const [todos, setTodos] = useState(
        [
            {text:'Fathoni Waseso Jati', key:'1'},
        ]
    )    
    const [text, setText] = useState('');
    const HandlerChanger = (val) =>{
        setText(val)
    }
    const submitHandler = (text) => {
        setTodos((prevTodos)=>{
            return [
              {text:text, key:Math.random().toString()},
              ...prevTodos
            ]
          })
    }

    return(
        <View style={styles.main}>
            <View style={styles.events}>
                <View>
                    <TextJudul data="| Even Handler | Props | States |" />
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="input nama..."
                        onChangeText={HandlerChanger}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
            <View style={{paddingHorizontal:100, marginBottom:10}}>
            <TouchableOpacity
                onPress={()=> submitHandler(text)}
                style={{
                        alignItems: "center",
                        backgroundColor: "#f194ff",
                        padding: 10,
                        }}
            >
                <Text>Submit</Text>
            </TouchableOpacity> 
            </View>
            <View style={styles.hasil}>
                <View>
                    <Text style={styles.judulHasil}>HASIL FORM</Text>
                </View>
                <View>
                    <ScrollView>
                    { todos.map((data)=> (
                        <View style={{marginBottom:5, marginTop:20}}>
                            <Text style={{textAlign:'center'}}>{data.text}</Text>
                        </View>
                    ) )}
                   </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default FormInput;