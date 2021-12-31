import React, { useEffect, useMemo, useState} from 'react';
import { Image, View, ActivityIndicator, Text} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Home, Watch} from './Home'
import Icon from 'react-native-vector-icons/Ionicons'
import MessageIcon from 'react-native-vector-icons/AntDesign'
import { NativeBaseProvider } from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NineCubesLoader,TextLoader } from 'react-native-indicator';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Login from '../login/App'
import Register from '../register/App'
import { AuthContext  } from './components/Context';

function HomeScreen({tokenPostForHome}) {
	// const gotoTestStackScreen = () => {
	// 	navigation.navigate('Watch');
	// };
	return (
    <Home Post={tokenPostForHome} />
	);
}

function ActionBarIcon() {
	return (
		<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
			<Image
	  				source={ require('../images/instagram.png') }
	  				style={{ width: 120, height: 32}} />
		</View>
	);
  }

  function LeftActionBar (){
	  return(
		<View style={{flexDirection:'row', marginRight:20}}>
		<MessageIcon  name="plussquareo" color="black" size={26} />
		 <MessageIcon style={{paddingLeft:20}} name="hearto" color="black" size={26} />
		<MessageIcon style={{paddingLeft:20, marginTop:1,}} name="message1" color="black" size={23} />	
	</View>
	  )
  }

const Tab = createMaterialBottomTabNavigator();
function TabBottonNavigation({TampilProfile, PostokenAstUser}) {
	return (
		<Tab.Navigator  
			activeColor="black"
			barStyle={{ backgroundColor: 'white' }}
		>
			<Tab.Screen name="Home" component={()=> <HomeScreen tokenPostForHome = {[PostokenAstUser]} />}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Icon name="grid-outline" color='black' size={26} />
						),		
					}}			
			/>
			<Tab.Screen name="About Me" component={Screen1} 
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: ({ color }) => (
						<Icon name="ios-search-outline" color='black' size={26} />
						),		
					}}			
			/>
			<Tab.Screen name="Exprole" component={Screen2} 
				options={{
					tabBarLabel: 'Explore',
					tabBarIcon: ({ color }) => (
						<Icon name="ios-compass-outline" color='black' size={26} />
						),		
					}}						  		
			/>
			<Tab.Screen name="Account" component={()=> <Screen3 dataUsers= {[TampilProfile]} />} 
				options={{
					tabBarLabel: 'Account',
					tabBarIcon: ({ color }) => (
						<Icon name="md-person-outline" color='black' size={26} />
					),		
				}}		  		
			/>			
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

function getHeaderTitle(route, data) {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	// In our case, it's "Feed" as that's the first screen inside the navigator
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
	switch (routeName) {
	  case 'Home':
		return <ActionBarIcon />
	  case 'Exprole':
		return 'My Explore';
	  case 'Account':
		console.log(data)
		return(
			<View style={{display:'flex', flexDirection:'row'}}>
				<Text style={{fontSize:22, fontWeight:'bold', color:'black'}}>{data}</Text>
				<Icon color={'black'} alignItems={'center'} name='chevron-down-outline'  size={22}/>
			</View>
		)
	}
  }

export default function App() {

	// const [isLoading, setIsLoading] = useState(true)
    // const [userToken, setUserToken] = useState(null)

	//using reduce state

	const initialLoginState = {
		isLoading: true,
		username:null,
		userToken:null,
	};

	const loginReducer = (prevState, action) =>{
		switch(action.type){
			case 'LOGIN':
				return {
					...prevState,
					username:action.id,
					userToken:action.token,
				}
			case 'LOGOUT':
				return {
					...prevState,
					username:null,
					userToken:null,
					isLoading:false,
				}
			case 'REGISTER':
				return {
					...prevState,
					username:action.id,
					userToken:action.token,
					isLoading:false
				}
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					userToken:action.token,
					isLoading:false,
				};								
		}
	};

	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
    const authContext = useMemo(()=>({
      signIn: async (Users, token_database)=>{
		console.log(Users)

		let userToken;
		userToken = null
        if(Users.status == 'berhasil'){
			userToken = token_database
			try {
				await AsyncStorage.setItem('userToken', userToken)
				await AsyncStorage.setItem('fullname', Users.data[0].fullname)
				await AsyncStorage.setItem('username', Users.data[0].username)
			  } catch (e) {
				console.log(e)
			  }
		}
		dispatch({ type:'LOGIN', id:Users.username, token:userToken,})
      },
      signOut: async ()=>{

		try {
			await AsyncStorage.removeItem('userToken')
			await AsyncStorage.removeItem('fullname')
			await AsyncStorage.removeItem('username')
		  } catch (e) {
			console.log(e)
		}
		
		dispatch({type:'LOGOUT'})
      },
      signUp:()=>{
		///
      }
    }), [])

    useEffect(() => {
      setTimeout(async()=>{
        
		let userToken;
		userToken = null

		try {
			userToken = await AsyncStorage.getItem('userToken')
		  } catch (e) {
			console.log(e)
		  }
		
		dispatch({type:'REGISTER', token:userToken})
      }, 2000)
    }, [])

    if(loginState.isLoading){
      return(
        <NativeBaseProvider>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
		<View>
      		<NineCubesLoader />
      		<TextLoader text="tunggu" />
    </View>
        </View>
        </NativeBaseProvider>
      )
    }

	const tokenAs = AsyncStorage.getItem('tokenPost')
	const jsonValue =  AsyncStorage.getItem('fullname')
	const usernameVaalue =  AsyncStorage.getItem('username')

	return (
		<AuthContext.Provider value={authContext}>
		<NavigationContainer>
				{loginState.userToken !== null ? (
			<Stack.Navigator>
				<Stack.Screen name="Movies"
				     options={({route}) => ({
						  headerStyle: {
						  elevation: 0, // remove shadow on Android
						  shadowOpacity: 0, // remove shadow on iOS
						  borderBottomWidth: 0 // Just in case.
						},
						    headerLeft:null,
							headerStatusBarHeight:-8,
							headerTitle: getHeaderTitle(route, usernameVaalue._W), 
							 headerRight : props => <LeftActionBar {...props} />,
						    // headerLeft : props => <JudulLogo {...props} />,
						 })}

					component={()=> <TabBottonNavigation TampilProfile={jsonValue._W} PostokenAstUser={tokenAs._W} />} />
				</Stack.Navigator>
				)
				:
				(
					<Stack.Navigator>
						<Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
						<Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
						{/* <Stack.Screen  name="Watch" component={Watch} />						 */}
					</Stack.Navigator>
				)
				}
		</NavigationContainer>
		</AuthContext.Provider>
	);
}
