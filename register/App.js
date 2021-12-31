import React, {useState} from "react";
import { Input, VStack, Stack, Center, Text, NativeBaseProvider, StatusBar, View, HStack, Alert, Box, Collapse, IconButton, CloseIcon } from "native-base"
import { TouchableOpacity, Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Register = ({navigation}) => {
  const [fullnameRegister, setFullnameRegister] = useState('')
  const [usernameRegister, setUsernameRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [berhasil, setBerhasil] = useState('')
  const [show, setShow] = React.useState(true)

  const register = async ()=>{
    const response = await fetch('http://10.0.2.2:3000/register',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'        
      },
      body:JSON.stringify({
        fullname:fullnameRegister,
        username:usernameRegister,
        password:passwordRegister,
      })
    })

    const json = await response.json();
    setBerhasil(json.status)
  }


  //succes alert

  const Success = ()=>{
    return(
      <Box w="100%" marginTop={20} marginBottom={5}>
      <Collapse isOpen={show}>
        <Alert w="100%" status="success">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                Done, Registered!
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
                onPress={() => setShow(false)}
              />
            </HStack>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
    )
  }

  return (
    <NativeBaseProvider>
            <StatusBar 
                animated={true}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
      <Center flex={1} px="3" background={'white'}>
      {berhasil == 'berhasil' ? <Success /> : ''}
      <Image source={require('../images/register2.png')} style={{position:'absolute', width:150, height:100, top:0, left:0}} />
      <Image source={require('../images/register4.png')} style={{position:'absolute', width:150, height:100, top:0, right:0}} />

      <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        placeholder="Full name"
        onChangeText={fullnm => setFullnameRegister(fullnm)}
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        placeholder="username"
        onChangeText={usr => setUsernameRegister(usr)}
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        placeholder="Password"
        secureTextEntry={true}        
        onChangeText={pwd => setPasswordRegister(pwd)}
      />
            <Image source={require('../images/register.png')} style={{justifyContent:'flex-end', width:400, height:250, position:'absolute', marginTop:250}} />
    </Stack>
    <View style={{display:'flex', flexDirection:'row', marginTop:-5, marginLeft:'auto', marginRight:50}}>
      <Text onPress={()=> navigation.navigate('Login')} style={{color:'#a3a3a3'}}>back to login</Text>
      <MaterialIcons style={{alignItems:'center', alignSelf:'center'}} color={'#a3a3a3'} name="arrow-forward" size={18} />
    </View>        
        <TouchableOpacity
      style={{
          alignItems: "center",
          backgroundColor: '#0ce4f7',
          width: 150,
          marginTop:15,
          paddingVertical:10,
        }}
        onPress={()=> register()}
>
    <Text color={'white'} fontWeight={'extrabold'}>Sign Up</Text>
    </TouchableOpacity>
      </Center>
    </NativeBaseProvider>
  )
}

export default Register;

