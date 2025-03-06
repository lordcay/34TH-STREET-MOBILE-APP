import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import React, {useState,useEffect,useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const route = useRoute();
  console.log(route)
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [option, setOption] = useState('Create account');
  const { token, isLoading,setToken } = useContext(AuthContext);

  console.log(token)

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        // navigation.navigate('MainStack', { screen: 'Main' });
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainStack' }],
        });
      }
    };
    checkToken();
  }, []);
  

  // useEffect(() => {
  //   // Check if the token is set and not in loading state
  //   if (token) {
  //     // Navigate to the main screen
  //     navigation.navigate('MainStack', { screen: 'Main' });
  //   }
  // }, [token, navigation]);
  

  const signInUser = async () => {
    setOption('Sign In');

    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      console.log(`🔹 Logging in with email: ${email}`);

      const response = await axios.post(
        'http://192.168.0.169:4000/accounts/authenticate',
        { email, password }
      );

      console.log("✅ Login Successful:", response.data);

      const { jwtToken } = response.data; // Backend sends 'jwtToken'
      if (!jwtToken) {
        throw new Error('Token not received!');
      }

      await AsyncStorage.setItem('token', jwtToken);
      setToken(jwtToken);

      Alert.alert('Success', 'Login successful!');

      // Navigate to MainStack
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
    } catch (error) {
      console.error('❌ Login Error:', error?.response?.data || error.message);
      Alert.alert('Error', error?.response?.data?.message || 'Login failed. Try again.');
    }
  };
  // const signInUser = async() => {
  //   setOption('Sign In');


  //     try {
  //       console.log(email);
  //       console.log(password);
  //       const user = {
  //         email: email,
  //         password: password,
  //       };
  //       const response = await axios.post('http://192.168.0.169:4000/accounts/authenticate', user);
  //       console.log('Dfdfd');
  //       const token = response.data.token;
        
  //       // Store the token in AsyncStorage
  //       await AsyncStorage.setItem('token', token);

  //       setToken(token)
  //       // navigation.replace('Main');
  //     } catch (error) {
  //       console.log('error',error);
  //     }
  
  // };
  const createAccount = () => {
    setOption('Create account');

    navigation.navigate('Basic');
  };
  // const handleLogin = () => {
  //   const user = {
  //     email: email,
  //     password: password,
  //   };
  //   axios.post('http://192.168.0.169:4000/login', user).then(response => {
  //     console.log(response);
  //     const token = response.data.token;
  //     AsyncStorage.setItem('auth', token);
  //     router.replace('/(authenticate)/select');
  //   });
  // };
  return (
    <ImageBackground 
    source={require('../assets/bg2.jpg')} 
    style={{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    }}
  >
  
    <SafeAreaView
      style={{flex: 1,  alignItems: 'center'}}>
      <View
       style={{
        height: 200,
        backgroundColor: '#581845',
        width: '100%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        top: -50,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Image
            style={{width: 150, height: 80, resizeMode: 'contain', top: 20,}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 23,
            fontFamily: 'GeezaPro-Bold',
            color: 'white',
          }}>
          34TH STREET
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'GeezaPro-Bold',
            color: '#ffb60a',
            fontWeight: 'bold',
          }}>
          build bonds across schools.
        </Text>
        
      </View>

      <KeyboardAvoidingView>
        {/* <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 25,
              color: '#581845',
            }}>
            build bonds across schools.
          </Text>
        </View> */}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{width: 100, height: 80, resizeMode: 'cover'}}
            source={{
              uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png',
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          {option == 'Sign In' ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: '#581845',
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <MaterialIcons
                  style={{marginLeft: 8}}
                  name="email"
                  size={24}
                  color="white"
                />
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Enter your email"
                  placeholderTextColor={'white'}
                  style={{
                    color: 'white',
                    marginVertical: 10,
                    width: 300,
                    // fontSize: password ? 17 : 17,
                  }}
                />
              </View>

              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: '#581845',
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginTop: 30,
                  }}>
                  <AntDesign
                    style={{marginLeft: 8}}
                    name="lock1"
                    size={24}
                    color="white"
                  />
                  <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    style={{
                      color: 'white',
                      marginVertical: 10,
                      width: 300,
                      //   fontSize: password ? 17 : 17,
                    }}
                    placeholderTextColor="white"
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#ffb600', fontWeight: '800'}}>Keep me logged in</Text>

                <Text style={{color: '#007FFF', fontWeight: '500'}}>
                  Forgot Password
                </Text>
              </View>
            </>
          ) : (
            <View>
              <LottieView
                source={require('../assets/login.json')}
                style={{
                  height: 180,
                  width: 300,
                  alignSelf: 'center',
                  marginTop: 40,
                  justifyContent: 'center',
                }}
                autoPlay
                loop={true}
                speed={0.7}
              />
            </View>
          )}

          <View style={{marginTop: 40}} />

          <Pressable
            onPress={createAccount}
            style={{
              width: 300,
              backgroundColor:
                option == 'Create account' ? '#581845' : 'transparent',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: option == 'Create account' ? 'white' : 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Create account
            </Text>
          </Pressable>

          <Pressable
            onPress={signInUser}
            style={{
              width: 300,
              backgroundColor: option == 'Create account' ? '#581845' : 'transparent',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
              borderRadius: 30,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: option == 'Sign In' ? 'white' : '#ffb60a',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  
});

