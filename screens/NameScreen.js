// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import React, { useEffect, useState } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const NmaeScreen = () => {
//   const [firstName, setFirstName] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     getRegistrationProgress('Name').then(progressData => {
//       if (progressData) {
//         setFirstName(progressData.firstName || '');
//       }
//     });
//   }, []);

//   const handleNext = () => {
//     if (firstName.trim() !== '') {
//       // Save the current progress data including the name
//       saveRegistrationProgress('Name', { firstName });
//     }
//     // Navigate to the next screen
//     navigation.navigate('Email');
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>

// <View
//        style={{
//         height: 200,
//         backgroundColor: '#581845',
//         width: '100%',
//         borderBottomLeftRadius: 100,
//         borderBottomRightRadius: 100,
//         top: -50,
//         }}>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 25,
//           }}>
//           <Image
//             style={{width: 150, height: 80, resizeMode: 'contain', top: 20,}}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             marginTop: 20,
//             textAlign: 'center',
//             fontSize: 23,
//             fontFamily: 'GeezaPro-Bold',
//             color: 'white',
//           }}>
//           34TH STREET
//         </Text>
//         <Text
//           style={{
//             marginTop: 10,
//             textAlign: 'center',
//             fontSize: 18,
//             fontFamily: 'GeezaPro-Bold',
//             color: '#ffb60a',
//             fontWeight: 'bold',
//           }}>
//           build bonds across schools.
//         </Text>
        
//       </View>
//       {/* <Text style={{marginTop: 50, textAlign: 'center', color: 'gray'}}>
//       A social hub for MBA minds
//       </Text> */}

//       <View style={{marginTop: 1, marginHorizontal: 20}}>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       <View
//             style={{
//               width: 44,
//               height: 44,
//               borderRadius: 22,
//               borderColor: '#581845',
//               borderWidth: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
// <MaterialCommunityIcons
//               name="newspaper-variant-outline"
//               size={26}
//               color="#ffb60a"
//             />      
//                   </View>
//                   <Image
//             style={{width: 100, height: 40}}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
//             }}
//           />
//       </View>
//       <View style={{marginTop: 30}}>
//       <Text
//             style={{
//               fontSize: 25,
//               fontWeight: 'bold',
//               fontFamily: 'GeezaPro-Bold',
//             }}>
//             What's your name?
//           </Text>

//           <TextInput
//             autoFocus={true}
//             value={firstName}
//             onChangeText={text => setFirstName(text)}
//             style={{
//               width: 340,
//               marginVertical: 10,
//               fontSize: firstName ? 22 : 22,
//               marginTop: 25,
//               borderBottomColor: 'black',
//               borderBottomWidth: 1,
//               paddingBottom: 10,
//               fontFamily: 'GeezaPro-Bold',
//             }}
//             placeholder="First name (required)"
//             placeholderTextColor={'#BEBEBE'}
//           />

// <TextInput
//             style={{
//               width: 340,
//               marginVertical: 10,
//               fontSize: firstName ? 22 : 22,
//               marginTop: 25,
//               borderBottomColor: 'black',
//               borderBottomWidth: 1,
//               paddingBottom: 10,
//               fontFamily: 'GeezaPro-Bold',
//             }}
//             placeholder="Last name"
//             placeholderTextColor={'#BEBEBE'}
//           />

// <Text style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>
//             Last Name is optional.
//           </Text>
//       </View>
//       <TouchableOpacity
//           onPress={handleNext}
//           activeOpacity={0.8}
//           style={{marginTop: 30, marginLeft: 'auto'}}>
//           <MaterialCommunityIcons
//             name="arrow-right-circle"
//             size={45}
//             color="#581845"
//             style={{alignSelf: 'center', marginTop: 20}}
//           />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default NmaeScreen

// const styles = StyleSheet.create({})





import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getRegistrationProgress('Name').then(progressData => {
      if (progressData) {
        setFirstName(progressData.firstName || '');
        setLastName(progressData.lastName || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      setErrorMessage('All fields are required.');
      return;
    }

    // Save registration progress
    saveRegistrationProgress('Name', { firstName, lastName });

    // Clear error message if validation passes
    setErrorMessage('');

    // Navigate to the next screen
    navigation.navigate('Email');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          height: 200,
          backgroundColor: '#581845',
          width: '100%',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          top: -50,
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
          <Image
            style={{ width: 150, height: 80, resizeMode: 'contain', top: 20 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
          />
        </View>
        <Text style={styles.headerText}>34TH STREET</Text>
        <Text style={styles.subHeaderText}>build bonds across schools.</Text>
      </View>

      <View style={{ marginTop: 1, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="#ffb60a" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.titleText}>What's your name?</Text>

          {/* First Name Input */}
          <TextInput
            autoFocus
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
              setErrorMessage('');
            }}
            style={styles.inputField}
            placeholder="First name (required)"
            placeholderTextColor={'#BEBEBE'}
          />

          {/* Last Name Input */}
          <TextInput
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
              setErrorMessage('');
            }}
            style={styles.inputField}
            placeholder="Last name (required)"
            placeholderTextColor={'#BEBEBE'}
          />

          {/* Error Message */}
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>

        {/* Next Button */}
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={{ marginTop: 30, marginLeft: 'auto' }}>
          <MaterialCommunityIcons name="arrow-right-circle" size={45} color="#581845" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  headerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'GeezaPro-Bold',
    color: 'white',
  },
  subHeaderText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'GeezaPro-Bold',
    color: '#ffb60a',
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#581845',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
  },
  inputField: {
    width: 340,
    marginVertical: 10,
    fontSize: 22,
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontFamily: 'GeezaPro-Bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
