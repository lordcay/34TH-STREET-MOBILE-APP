// import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from '../registrationUtils';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useRoute} from '@react-navigation/native';
// import LottieView from 'lottie-react-native';
// import { AuthContext } from '../AuthContext';
// import axios from 'axios';



// const PreFinalScreen = () => {

//   const navigation = useNavigation();
//   const route = useRoute();
//   const [userData, setUserData] = useState();
//   useEffect(() => {
//     getAllUserData();
//   }, []);

//   const { token, isLoading,setToken } = useContext(AuthContext);

//   console.log(token)

//   useEffect(() => {
//     // Check if the token is set and not in loading state
//     if (token) {
//       // Navigate to the main screen
//       navigation.navigate('MainStack', { screen: 'Main' });
//     }
//   }, [token, navigation]);
//   const getAllUserData = async () => {
//     try {
//       // Define an array to store data for each screen
//       const screens = [
//         'Name',
//         'Email',
//         'Password',
//         'Birth',
//         'Location',
//         'Gender',
//         'Type',
//         'Dating',
//         'LookingFor',
//         'Hometown',
//         'Photos',
//         'Prompts',
//       ]; // Add more screens as needed

//       // Define an object to store user data
//       let userData = {};

//       // Retrieve data for each screen and add it to the user data object
//       for (const screenName of screens) {
//         const screenData = await getRegistrationProgress(screenName);
//         if (screenData) {
//           userData = {...userData, ...screenData}; // Merge screen data into user data
//         }
//       }

//       // Return the combined user data
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error retrieving user data:', error);
//       return null;
//     }
//   };
//   const clearAllScreenData = async () => {
//     try {
//       const screens = [
//         'Name',
//         'Email',
//         'Birth',
//         'Location',
//         'Gender',
//         'Type',
//         'Dating',
//         'LookingFor',
//         'Hometown',
//         'Photos',
//       ];
//       // Loop through each screen and remove its data from AsyncStorage
//       for (const screenName of screens) {
//         const key = `registration_progress_${screenName}`;
//         await AsyncStorage.removeItem(key);
//       }
//       console.log('All screen data cleared successfully');
//     } catch (error) {
//       console.error('Error clearing screen data:', error);
//     }
//   };
//   const registerUser = async () => {
//     try {
//       const response = await axios
//         .post('http://localhost:4000/register', userData)
//         .then(response => {
//           console.log(response);
//           const token = response.data.token;
//           AsyncStorage.setItem('token', token);
//           setToken(token)
//         });
//       // Assuming the response contains the user data and token

//       // Store the token in AsyncStorage
//       // navigation.replace('Main', {
//       //   screen: 'Home',
//       // });
//       //   navigation.replace('MainStack', {screen: 'Main'});

//         clearAllScreenData();
//     } catch (error) {
//       console.error('Error registering user:', error);
//       throw error; // Throw the error for handling in the component
//     }
//   };
//   console.log('user data', userData);
//   // const navigation = useNavigation();
//   // const route = useRoute();
//   // const [userData, setUserData] = useState();
//   // useEffect(() => {
//   //   getAllUserData();
//   // }, []);

//   //  const { token, isLoading,setToken } = useContext(AuthContext);

//   //  console.log(token)


//   //  const getAllUserData = async () => {
//   //   try {
//   //     // Define an array to store data for each screen
//   //     const screens = [
//   //       'Name',
//   //       'Email',
//   //       'Password',
//   //       'Birth',
//   //       'Location',
//   //       'Gender',
//   //       'Type',
//   //       'Dating',
//   //       'LookingFor',
//   //       'Hometown',
//   //       'Photos',
//   //       'Prompts',
//   //     ]; // Add more screens as needed

//   //     // Define an object to store user data
//   //     let userData = {};

//   //     // Retrieve data for each screen and add it to the user data object
//   //     for (const screenName of screens) {
//   //       const screenData = await getRegistrationProgress(screenName);
//   //       if (screenData) {
//   //         userData = {...userData, ...screenData}; // Merge screen data into user data
//   //       }
//   //     }

//   //     // Return the combined user data
//   //     setUserData(userData);
//   //   } catch (error) {
//   //     console.error('Error retrieving user data:', error);
//   //     return null;
//   //   }
//   // };


//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//     <View style={{marginTop: 80}}>
//     <Text
//         style={{
//           fontSize: 35,
//           fontWeight: 'bold',
//           fontFamily: 'GeezaPro-Bold',
//           marginLeft: 20,
//         }}>
//         All set to register
//       </Text>
//       <Text
//         style={{
//           fontSize: 33,
//           fontWeight: 'bold',
//           fontFamily: 'GeezaPro-Bold',
//           marginLeft: 20,
//           marginRight: 10,
//           marginTop: 10,
//         }}>
//         Setting up your profile for you
//       </Text>
//     </View>

//     <View>
//         <LottieView
//           source={require('../assets/love.json')}
//           style={{
//             height: 260,
//             width: 300,
//             alignSelf: 'center',
//             marginTop: 40,
//             justifyContent: 'center',
//           }}
//           autoPlay
//           loop={true}
//           speed={0.7}
//         />
//       </View>

//       <Pressable
//          onPress={registerUser}
//         style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontWeight: '600',
//             fontSize: 15,
//           }}>
//           Finish registering
//         </Text>
//       </Pressable>
//   </SafeAreaView>
//   )
// }

// export default PreFinalScreen

// const styles = StyleSheet.create({})


// import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from '../registrationUtils';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useRoute} from '@react-navigation/native';
// import LottieView from 'lottie-react-native';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const PreFinalScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [userData, setUserData] = useState();
//   useEffect(() => {
//     getAllUserData();
//   }, []);

//   const { token, isLoading,setToken } = useContext(AuthContext);

//   console.log(token)

//   useEffect(() => {
//     // Check if the token is set and not in loading state
//     if (token) {
//       // Navigate to the main screen
//       navigation.navigate('MainStack', { screen: 'Main' });
//     }
//   }, [token, navigation]);
//   const getAllUserData = async () => {
//     try {
//       // Define an array to store data for each screen
//       const screens = [
//         'Name',
//         'Email',
//         'Password',
//         'Birth',
//         'Location',
//         'Gender',
//         'Type',
//         'Dating',
//         'LookingFor',
//         'Hometown',
//         'Photos',
//         'Prompts',
//       ]; // Add more screens as needed

//       // Define an object to store user data
//       let userData = {};

//       // Retrieve data for each screen and add it to the user data object
//       for (const screenName of screens) {
//         const screenData = await getRegistrationProgress(screenName);
//         if (screenData) {
//           userData = {...userData, ...screenData}; // Merge screen data into user data
//         }
//       }

//       // Return the combined user data
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error retrieving user data:', error);
//       return null;
//     }
//   };
//   const clearAllScreenData = async () => {
//     try {
//       const screens = [
//         'Name',
//         'Email',
//         'Birth',
//         'Location',
//         'Gender',
//         'Type',
//         'Dating',
//         'LookingFor',
//         'Hometown',
//         'Photos',
//       ];
//       // Loop through each screen and remove its data from AsyncStorage
//       for (const screenName of screens) {
//         const key = `registration_progress_${screenName}`;
//         await AsyncStorage.removeItem(key);
//       }
//       console.log('All screen data cleared successfully');
//     } catch (error) {
//       console.error('Error clearing screen data:', error);
//     }
//   };
//   const registerUser = async () => {
//     try {
//       const response = await axios
//       .post('http://172.20.10.2:3000/register', userData)
//         // .post('http://localhost:4000/register', userData)
//         .then(response => {
//           console.log(response);   
//           const token = response.data.token;
//           AsyncStorage.setItem('token', token);
//           setToken(token)
//         });
//       // Assuming the response contains the user data and token

//       // Store the token in AsyncStorage
//       // navigation.replace('Main', {
//       //   screen: 'Home',
//       // });
//       //   navigation.replace('MainStack', {screen: 'Main'});

//         clearAllScreenData();
//     } catch (error) {
//       console.error('Error registering user:', error);
//       throw error; // Throw the error for handling in the component
//     }
//   };
//   console.log('user data', userData);
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <View style={{marginTop: 80}}>
//         <Text
//           style={{
//             fontSize: 35,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//           }}>
//           All set to register
//         </Text>
//         <Text
//           style={{
//             fontSize: 33,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//             marginRight: 10,
//             marginTop: 10,
//           }}>
//           Setting up your profile for you
//         </Text>
//       </View>

//       <View>
//         <LottieView
//           source={require('../assets/love.json')}
//           style={{
//             height: 260,
//             width: 300,
//             alignSelf: 'center',
//             marginTop: 40,
//             justifyContent: 'center',
//           }}
//           autoPlay
//           loop={true}
//           speed={0.7}
//         />
//       </View>

//       <Pressable
//         onPress={registerUser}
//         style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontWeight: '600',
//             fontSize: 15,
//           }}>
//           Finish registering
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default PreFinalScreen;

// const styles = StyleSheet.create({});



// import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from '../registrationUtils';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useRoute} from '@react-navigation/native';
// import LottieView from 'lottie-react-native';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const PreFinalScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [userData, setUserData] = useState();
//   useEffect(() => {
//     getAllUserData();
//   }, []);

//   const { token, isLoading,setToken } = useContext(AuthContext);

//   console.log(token)

//   useEffect(() => {
//     // Check if the token is set and not in loading state
//     if (token) {
//       // Navigate to the main screen
//       navigation.replace('MainStack', { screen: 'Main' });
//     }
//   }, [token, navigation]);
//   const getAllUserData = async () => {
//     try {
//       // Define an array to store data for each screen
//       const screens = [
//         'Name',
//         'Email',
//         'Password',
//         // 'Birth',
//         // 'Gender',  // Ensure Gender is included
//         // 'Location',
//         // 'Type',
//         // 'Dating',
//         // 'LookingFor',
//         // 'Hometown',
//         // 'Photos',
//         // 'Prompts',
//       ]; // Add more screens as needed

//       // Define an object to store user data
//       let userData = {};

//       // Retrieve data for each screen and add it to the user data object
//       for (const screenName of screens) {
//         const screenData = await getRegistrationProgress(screenName);
//         if (screenData) {
//           userData = {...userData, ...screenData}; // Merge screen data into user data
//         }
//       }

//       // Return the combined user data
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error retrieving user data:', error);
//       return null;
//     }
//   };
//   const clearAllScreenData = async () => {
//     try {
//       const screens = [
//         'Name',
//         'Email',
//         'Password',
//         // 'Birth',
//         // 'Gender',  // Ensure Gender is included
//         // 'Location',
//         // 'Type',
//         // 'Dating',
//         // 'LookingFor',
//         // 'Hometown',
//         // 'Photos',
//         // 'Prompts',
//       ];
//       // Loop through each screen and remove its data from AsyncStorage
//       for (const screenName of screens) {
//         const key = `registration_progress_${screenName}`;
//         await AsyncStorage.removeItem(key);
//       }
//       console.log('All screen data cleared successfully');
//     } catch (error) {
//       console.error('Error clearing screen data:', error);
//     }
//   };
//   console.log('User Data:', userData);

//   // const registerUser = async () => {
//   //   try {
//   //     if (!userData.email) {
//   //       console.error("email is missing!");
//   //       return;
//   //     }
  
//   //     const response = await axios.post('http://192.168.0.169:4000/register', userData);
//   //     const token = response.data.token;
  
//   //     await AsyncStorage.setItem('token', token);
//   //     setToken(token);
//   //     clearAllScreenData();
//   //   } catch (error) {
//   //     console.error('Error registering user:', error);
//   //   }
//   //   console.log('Registering with:', userData);

//   // };


//   const registerUser = async () => {
//     try {
//       if (!userData.email) {
//         console.error("Email is missing!");
//         return;
//       }
  
//       // Send registration request
//       const response = await axios.post('http://192.168.0.169:4000/signup', userData);
      
//       // Extract user ID and token from response
//       const { token, userId } = response.data;
  
//       // Store token in AsyncStorage
//       await AsyncStorage.setItem('token', token);
//       setToken(token);
  
//       // Send OTP email
//       await axios.post('http://192.168.0.169:4000/send-verification-otp', { email: userData.email });
  
//       // Navigate to VerifyOTP screen
//       navigation.navigate('VerifyOTPScreen', { userId, email: userData.email });
  
//       // Clear registration data
//       clearAllScreenData();
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };
  

//   useEffect(() => {
//     const verifyUser = async () => {
//       if (!token) {
//         // navigation.navigate('AuthStack', { screen: 'Login' });

//          navigation.navigate('Login'); // Redirect to registration if no token
//         return;
//       }
  
//       try {
//         // Verify if the user exists
//         const decodedToken = jwtDecode(token);
//         const userId = decodedToken.userId;
  
//         const response = await axios.get(`http://192.168.0.169:4000/users/${userId}`);
//         if (!response.data.user) {
//           console.log('User does not exist. Redirecting to Register.');
//           await AsyncStorage.removeItem('token'); // Remove old token
//           setToken(null);
//           navigation.navigate('Register'); // Redirect to registration
//         } else {
//           navigation.navigate('MainStack', { screen: 'Main' });
//         }
//       } catch (error) {
//         console.log('User verification failed:', error);
//         await AsyncStorage.removeItem('token'); // Remove invalid token
//         setToken(null);
//         navigation.navigate('Register'); // Redirect to registration
//       }
//     };
  
//     verifyUser();
//   }, [token, navigation]);
  
  

//   // const registerUser = async () => {
//   //   try {
//   //     const response = await axios
//   //       .post('http://192.168.0.169:4000/register', userData)
//   //       // .post('http://localhost:3000/register', userData)
//   //       .then(response => {
//   //         console.log(response);
//   //         const token = response.data.token;
//   //         AsyncStorage.setItem('token', token);
//   //         setToken(token)
//   //       });
//   //     // Assuming the response contains the user data and token

//   //     // Store the token in AsyncStorage
//   //     // navigation.replace('Main', {
//   //     //   screen: 'Home',
//   //     // });
//   //     //   navigation.replace('MainStack', {screen: 'Main'});

//   //       clearAllScreenData();
//   //   } catch (error) {
//   //     console.error('Error registering user:', error);
//   //     throw error; // Throw the error for handling in the component
//   //   }
//   // };
//   console.log('user data', userData);
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <View style={{marginTop: 80}}>
//         <Text
//           style={{
//             fontSize: 35,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//           }}>
//           All set to register
//         </Text>
//         <Text
//           style={{
//             fontSize: 33,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//             marginRight: 10,
//             marginTop: 10,
//           }}>
//           Setting up your profile for you
//         </Text>
//       </View>

//       <View>
//         <LottieView
//           source={require('../assets/love.json')}
//           style={{
//             height: 260,
//             width: 300,
//             alignSelf: 'center',
//             marginTop: 40,
//             justifyContent: 'center',
//           }}
//           autoPlay
//           loop={true}
//           speed={0.7}
//         />
//       </View>

//       <Pressable
//         onPress={registerUser}
//         style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontWeight: '600',
//             fontSize: 15,
//           }}>
//           Finish registering
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default PreFinalScreen;

// const styles = StyleSheet.create({});


import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import jwtDecode from 'jwt-decode'; // Import this!
import { AuthContext } from '../AuthContext';
import { getRegistrationProgress } from '../registrationUtils';

const PreFinalScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { token, setToken } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      console.log('Loaded token from AsyncStorage:', storedToken);
      setToken(storedToken);
    };
  
    loadToken();
  }, []);
  

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', { screen: 'Main' });
    }
  }, [token, navigation]);

  const getAllUserData = async () => {
    try {
      const screens = ['Name', 'Email', 'Password']; // Add more if needed
      let userData = {};

      for (const screen of screens) {
        const data = await getRegistrationProgress(screen);
        if (data) {
          userData = { ...userData, ...data };
        }
      }
      setUserData(userData);
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const clearAllScreenData = async () => {
    try {
      const screens = ['Name', 'Email', 'Password'];
      const keys = screens.map(screen => `registration_progress_${screen}`);
      await AsyncStorage.multiRemove(keys);
      console.log('All screen data cleared successfully');
    } catch (error) {
      console.error('Error clearing screen data:', error);
    }
  };


  // const registerUser = async () => {
  //   try {
  //     if (!userData?.email) {
  //       console.error("Email is missing!");
  //       return;
  //     }
  
  //     console.log('Attempting to register user with data:', userData);
  
  //     const response = await axios.post('http://192.168.0.169:4000/accounts/register', userData);
  //     console.log('Register response:', response.data);
  
  //     const { token, userId } = response.data;
  
  //     if (!token) {
  //       console.error("Token is missing from the response!");
  //       return;
  //     }
  
  //     await AsyncStorage.setItem('token', token);
  //     setToken(token);
  
  //     console.log('Stored Token:', await AsyncStorage.getItem('token'));
  
  //     await axios.post('http://192.168.0.169:4000/send-verification-otp', { email: userData.email });
  
  //     navigation.navigate('VerifyOTPScreen', { userId, email: userData.email });
  
  //     clearAllScreenData();
  //   } catch (error) {
  //     console.error('Error registering user:', error?.response?.data || error.message);
  //   }
  // };
  
  // const registerUser = async () => {
  //   try {
  //     if (!userData?.email) {
  //       console.error("Email is missing!");
  //       return;
  //     }
  
  //     const response = await axios.post('http://192.168.0.169:4000/register', userData);
  //     console.log('Register response:', response.data);
  //     const { token, userId } = response.data;
  
  //     if (!token) {
  //       console.error("Token is missing from the response!");
  //       return;
  //     }
  
  //     await AsyncStorage.setItem('token', token);
  //     setToken(token);
  
  //     const storedToken = await AsyncStorage.getItem('token');
  //     console.log('Stored Token:', storedToken);
  
  //     if (!storedToken) {
  //       console.error("Token was not saved in AsyncStorage!");
  //       return;
  //     }
  
  //     await axios.post('http://192.168.0.169:4000/send-verification-otp', { email: userData.email });
  
  //     navigation.navigate('VerifyOTPScreen', { userId, email: userData.email });
  
  //     clearAllScreenData();
  //   } catch (error) {
  //     console.error('Error registering user:', error?.response?.data || error.message);
  //   }
  // };

//   const registerUser = async () => {
//     try {
//         if (!userData?.email) {
//             console.error("Email is missing!");
//             return;
//         }

//         console.log('Attempting to register user with data:', userData);

//         const response = await axios.post('http://192.168.0.169:4000/accounts/register', userData);
//         console.log('Register response:', response.data);

//         const { token, userId } = response.data;

//         if (!token) {
//             console.error("Token is missing from the response!");
//             return;
//         }

//         // Store token in AsyncStorage
//         await AsyncStorage.setItem('token', token);
//         setToken(token);

//         console.log('Stored Token:', await AsyncStorage.getItem('token'));

//         // Navigate to OTP verification screen
//         navigation.navigate('VerifyOTPScreen', { userId, email: userData.email });

//         // Clear temporary registration data
//         clearAllScreenData();
//     } catch (error) {
//         console.error('Error registering user:', error?.response?.data || error.message);
//     }
// };


const registerUser = async () => {
  try {
      if (!userData?.email) {
          console.error("Email is missing!");
          return;
      }

      console.log('Attempting to register user with data:', userData);

      const response = await axios.post('http://192.168.0.169:4000/accounts/register', userData);
      console.log('Register response:', response.data);

      const { token, userId } = response.data;

      if (!userId) {
          console.error("User ID is missing from the response!");
          return;
      }

      //  Do NOT store token yet
      console.log("Navigating to VerifyOTP with:", userId, userData.email);

      //  Navigate to OTP verification screen
      navigation.navigate('VerifyOTPScreen', { userId, email: userData.email });

      // Clear temporary registration data
      clearAllScreenData();
  } catch (error) {
      console.error('Error registering user:', error?.response?.data || error.message);
  }
};

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!token) {
  //       console.log("Token is missing, waiting for token...");
  //       return;
  //     }
  
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       if (!decodedToken?.userId) {
  //         console.error("Invalid token, redirecting to Login");
  //         await AsyncStorage.removeItem('token');
  //         setToken(null);
  //         navigation.navigate('Login');
  //         return;
  //       }
  
  //       const userId = decodedToken.userId;
  //       console.log('Decoded Token User ID:', userId);
  
  //       const response = await axios.get(`http://192.168.0.169:4000/users/${userId}`);
  //       if (!response.data.user) {
  //         console.log('User does not exist. Redirecting to Register.');
  //         await AsyncStorage.removeItem('token');
  //         setToken(null);
  //         navigation.navigate('Register');
  //       } else {
  //         console.log('User verified, navigating to MainStack');
  //         navigation.navigate('MainStack', { screen: 'Main' });
  //       }
  //     } catch (error) {
  //       console.error('User verification failed:', error?.response?.data || error.message);
  //       await AsyncStorage.removeItem('token');
  //       setToken(null);
  //       navigation.navigate('Register');
  //     }
  //   };
  
  //   if (token) {
  //     verifyUser();
  //   }
  // }, [token, navigation]);
  
  
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!token) {
  //       navigation.navigate('Login'); // Redirect to Login if no token
  //       return;
  //     }

  //     try {
  //       const decodedToken = jwtDecode(token);
  //       const userId = decodedToken.userId;

  //       const response = await axios.get(`http://192.168.0.169:4000/users/${userId}`);
  //       if (!response.data.user) {
  //         console.log('User does not exist. Redirecting to Register.');
  //         await AsyncStorage.removeItem('token'); // Remove old token
  //         setToken(null);
  //         navigation.navigate('Register'); // Redirect to registration
  //       } else {
  //         navigation.navigate('MainStack', { screen: 'Main' });
  //       }
  //     } catch (error) {
  //       console.error('User verification failed:', error?.response?.data || error.message);
  //       await AsyncStorage.removeItem('token');
  //       setToken(null);
  //       navigation.navigate('Register');
  //     }
  //   };

  //   verifyUser();
  // }, [token, navigation]);

  useEffect(() => {
    const verifyUser = async () => {
        if (!token) {
            console.log("Token is missing, waiting for token...");
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            if (!decodedToken?.userId) {
                console.error("Invalid token, redirecting to Login");
                await AsyncStorage.removeItem('token');
                setToken(null);
                navigation.navigate('Login');
                return;
            }

            // ✅ Check if the user is verified before auto-login
            const userId = decodedToken.userId;
            console.log('Decoded Token User ID:', userId);

            const response = await axios.get(`http://192.168.0.169:4000/users/${userId}`);
            
            if (!response.data.user || !response.data.user.isVerified) {
                console.log('User not verified. Redirecting to VerifyOTP.');
                navigation.navigate('VerifyOTPScreen', { userId, email: response.data.user.email });
                return;
            }

            console.log('User verified, navigating to MainStack');
            navigation.navigate('MainStack', { screen: 'Main' });

        } catch (error) {
            console.error('User verification failed:', error?.response?.data || error.message);
            await AsyncStorage.removeItem('token');
            setToken(null);
            navigation.navigate('Register');
        }
    };

    if (token) {
        verifyUser();
    }
}, [token, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All set to register</Text>
        <Text style={styles.subtitle}>Setting up your profile for you</Text>
      </View>

      <LottieView
        source={require('../assets/love.json')}
        style={styles.animation}
        autoPlay
        loop
        speed={0.7}
      />

      <Pressable onPress={registerUser} style={styles.button}>
        <Text style={styles.buttonText}>Finish registering</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { marginTop: 80, marginLeft: 20 },
  title: { fontSize: 35, fontWeight: 'bold', fontFamily: 'GeezaPro-Bold' },
  subtitle: { fontSize: 33, fontWeight: 'bold', fontFamily: 'GeezaPro-Bold', marginTop: 10 },
  animation: { height: 260, width: 300, alignSelf: 'center', marginTop: 40 },
  button: { backgroundColor: '#900C3F', padding: 15, marginTop: 'auto' },
  buttonText: { textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 15 },
});
