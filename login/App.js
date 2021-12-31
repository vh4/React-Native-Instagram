import React, {useState, useContext} from "react";
import { Input, Icon, Stack, Center, Text, NativeBaseProvider, StatusBar, View } from "native-base"
import { TouchableOpacity, Image, ActivityIndicator } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { AuthContext } from "../Tugas5/components/Context";

const Login = ({navigation}) => {

    const [usernameUser, setUsername] = useState("");
    const [passwordUser, setPassword] = useState("");
    const [error, setError] = useState("")
    const {signIn} = useContext(AuthContext)

    const login = async () =>{

         try {
            const response = await fetch('http://10.0.2.2:3000/login', {
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username:usernameUser,
                    password:passwordUser
                })
            })
            const json = await response.json();
            signIn(json, json.token)
            setError(json.status)
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <NativeBaseProvider>
            <StatusBar 
                animated={true}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
      <Center flex={1} px="3" background={'white'}>
      <Stack space={4} w="100%" alignItems="center">
      <Image source={require('../images/icok.png')} style={{width:400, height:100, position:'absolute', marginTop:-110}} />
      {error == 'gagal' ? <Text style={{textAlign:'center', fontSize:14, color:'#ff3d54'}}>username or password is invalid</Text> : null} 
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
        onChangeText={usr => setUsername(usr)}
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputRightElement={
          <Icon
            as={<MaterialIcons name="visibility-off" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={pwd => setPassword(pwd)}
      />
            <Image source={require('../images/log.png')} style={{justifyContent:'flex-end', width:400, height:250, position:'absolute', marginTop:250}} />
    </Stack>        
    <Text style={{marginTop:10, color:'#c9c9c9'}}>if you don't have a account ? please</Text><Text onPress={()=> navigation.navigate('Register')} style={{color:'#0ce4f7'}}>register</Text>
        <TouchableOpacity
      style={{
          alignItems: "center",
          backgroundColor: '#0ce4f7',
          width: 150,
          marginTop:20,
          paddingVertical:10,
        }}
        onPress={()=> login()}
>
    <Text color={'white'} fontWeight={'extrabold'}>Login</Text>
    </TouchableOpacity>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login;

