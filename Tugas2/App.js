import { View, Text, Image, TextInput, StatusBar, Button, TouchableOpacity, Modal, Alert, Switch} from "react-native";
import React, {useState} from 'react';
import styles from './AppStyling'

const App = () =>{

    const [text, setText] = useState('');
    const [isEnable, setEnable] = useState(false)
    const [ModalVisible, setModalVisible] = useState(false)
    const toggleSwitch = () => setEnable(p => !p)       
    return(
    <View style={styles.container}>
        <StatusBar 
            barStyle="white-content" 
            StatusBarAnimation="slide"
            backgroundColor={'black'}
        />
        <View>
            <Text style={styles.text}>Hello world!</Text>
            <Text style={styles.text}>Hello React Native!</Text>
            <Text style={styles.text}>NIM 1103180147</Text>
        </View>
        <View>
            <Image source={require('../images/react.png')} style={{width: 200, resizeMode:'contain'}} />
        </View>
        <View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#f194ff",
            padding: 10,
            paddingHorizontal:20,
          }}
        >
          <Text style={{color:'white', fontWeight:'bold'}}>TOUCH OPACITY</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:10, backgroundColor:'red'}}>
            <Modal 
                animationType="slide"
                visible={ModalVisible}
                onRequestClose = {()=> {
                    setModalVisible(!ModalVisible)
                }}
            >
            <View style={{marginTop:'auto', marginBottom:'auto'
       
       }} >
                <View>
                    <Text style={{textAlign:'center', fontSize:30, marginBottom:50}}>Modal Contoh</Text>
                </View>
                <View style={{paddingHorizontal:100,}}>
                    <Button 
                        title="Hidden Modals"
                        color="#f194ff"
                        onPress={()=> setModalVisible(!ModalVisible)}            
                    />
                </View>
            </View>
            </Modal>
            <Button 
            title="Button & Modals"
            color="#f194ff"
            onPress={()=> setModalVisible(true)}
            ></Button>
        </View>
        <View style={{padding:10}}>
            <TextInput
                style={{
                    height: 40,
                    borderBottomWidth:1, 
                    paddingHorizontal:40,
                    borderColor:"#D0D0D0D0",
                }}
                placeholder="Ketik disini....."
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
        </View>
        <View>
            <Switch
                trackColor={{ false: "#767577" }}
                thumbColor={isEnable ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnable}
            />
        </View>
    </View>
    )
}

export default App;
