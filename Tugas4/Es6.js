import { TouchableOpacity ,View, Text, TextInput, Alert } from "react-native";
import React, {useState} from "react";
import styles from './css/AppStyle'

// class function
class ClassFunctionCheckFormLulus extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            val:''
       
        }
    }
    render(){

    const SubmitHandlerClass = (value) =>{
        if(isNaN(value))
        {
                Alert.alert('Harus Angka !')
        }
        else
        {
            if(value <= 50 && value >= 0)
            {
                Alert.alert('Maaf, Anda Tidak Lulus')
            }
            else if(value <= 100 && value > 50)
            {
                Alert.alert('Selamat, Anda Lulus')
            }
            else
            {
                Alert.alert('Angka Harus Sekitar Range 1-100')
            }
        }   
    }
        return(
            <View style={styles.main}>
            <View style={styles.events}>
                <View>
                    <Text style={styles.text}>Tugas 4 - ES6</Text>
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="input nilai..."
                        onChangeText={(val) => this.setState({val})}
                    />
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
            <View style={{paddingHorizontal:100, marginBottom:10}}>
            <TouchableOpacity
                style={{
                        alignItems: "center",
                        backgroundColor: "#f194ff",
                        padding: 10,
                        }}
                onPress={() => SubmitHandlerClass(this.state.val)}
            >
                <Text>Submit</Text>
            </TouchableOpacity> 
            </View>
        </View>
        )
    }
}


// arrow function
const ArrowFunctionCheckFormLulus = () =>{
    const [nilai, setNilai] = useState('')
    const submitNilaiHandler = (data) =>{
        if(isNaN(data)){
            Alert.alert('Harus Angka !')
        }else{
            if(data <= 50 && data >= 0){
                Alert.alert('Maaf, Anda Tidak Lulus')
            }else if(data <= 100 && data > 50){
                Alert.alert('Selamat, Anda Lulus')
            }else{
                Alert.alert('Angka Harus Sekitar Range 1-100')
            }
        }
    }
    return(
        <View style={styles.main}>
            <View style={styles.events}>
                <View>
                    <Text style={styles.text}>Tugas 4 - ES6</Text>
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="input nilai..."
                        style={styles.textInput}
                        onChangeText={setNilai}
                    />
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
            <View style={{paddingHorizontal:100, marginBottom:10}}>
            <TouchableOpacity
                style={{
                        alignItems: "center",
                        backgroundColor: "#f194ff",
                        padding: 10,
                        }}
                onPress={()=> submitNilaiHandler(nilai)}
            >
                <Text>Submit</Text>
            </TouchableOpacity> 
            </View>
        </View>
    )
}

export {
    ArrowFunctionCheckFormLulus,
    ClassFunctionCheckFormLulus,
}