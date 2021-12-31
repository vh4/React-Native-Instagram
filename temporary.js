       <View style={{ color:'black',
            display:"flex", justifyContent:'center', alignItems:'center', alignContent:'center', margin:'auto', marginTop:'auto', marginBottom:'auto',
            }}>
            <Image source={require('../images/login.png')} style={{position:'absolute',resizeMode:'cover',}} />
            <View style={{width:200}}>
            {error ? <Text style={{textAlign:'center', fontSize:14, color:'red'}}>username or password is invalid</Text> : null}       
            <Text style={{textAlign:'center', fontSize:16, fontWeight:'900', color:'black'}}>Login</Text>
            <TextInput
                 style={{borderBottomWidth:1,}}
                 placeholder="username"
                 keyboardType="text"
                 onChangeText={usr => setUsername(usr)}
      />
            <TextInput
                style={{borderBottomWidth:1,}}
                 placeholder="password"
                 keyboardType="text"
                 onChangeText={pwd => setPassword(pwd)}

      />
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
            marginTop:20
          }}
          onPress={()=> login()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
            </View>
        </View>