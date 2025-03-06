// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     TouchableWithoutFeedback,
//     Keyboard,
//   } from 'react-native';
//   import React, {useState,useEffect} from 'react';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import {useNavigation} from '@react-navigation/native';
// import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

// const EmailScreen = () => {
//     const [email, setEmail] = useState('');
//     const navigation = useNavigation();
//     useEffect(() => {
//       getRegistrationProgress('Email').then((progressData) => {
//         if (progressData) {
//           setEmail(progressData.email || '');
//         }
//       });
//     }, []);
  
//     const handleNext = () => {
//       if (email.trim() !== '') {
//           console.log("name",email)
//         // Save the current progress data including the name
//         saveRegistrationProgress('Email', { email });
//       }
//       // Navigate to the next screen
//       navigation.navigate('Password');
//     };
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//     <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
//  <View
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

//         <View style={{marginTop: 10, marginHorizontal: 20}}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <View
//             style={{
//               width: 44,
//               height: 44,
//               borderRadius: 22,
//               borderColor: '#581845',
//               borderWidth: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Fontisto name="email" size={26} color="#ffb60a" />
//           </View>
//           <Image
//             style={{width: 100, height: 40}}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             fontSize: 25,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginTop: 15,
//           }}>
//           Please provide a valid email
//         </Text>

//         <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
//           Email verification helps us keep your account secure.{' '}
//           <Text style={{color: '#581845', fontWeight: '500'}}>Learn more</Text>
//         </Text>
//         <TextInput
//           autoFocus={true}
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           style={{
//             width: 340,
//             marginVertical: 10,
//             fontSize: email ? 22 : 22,
//             marginTop: 25,
//             borderBottomColor: 'black',
//             borderBottomWidth: 1,
//             paddingBottom: 10,
//             fontFamily: 'GeezaPro-Bold',
//           }}
//           placeholder="Enter your email"
//           placeholderTextColor={'#BEBEBE'}
//         />

// <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
//           Note: You will be asked to verify your email
//         </Text>
//         <TouchableOpacity
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
//         </View>
//     </SafeAreaView>
//     </TouchableWithoutFeedback>
//   )
// }

// export default EmailScreen

// const styles = StyleSheet.create({})




// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import { useNavigation } from '@react-navigation/native';
// import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
// import { Picker } from '@react-native-picker/picker';

// const universities = [
//   { name: 'Choose a university', extension: '' }, // Default selection (placeholder)
//   { name: 'Duke University', extension: '@duke.edu' },
//   { name: 'Kenan-Flagler University', extension: '@kenan-flagler.unc.edu' },
//   { name: 'Cornell University', extension: '@cornell.edu' },
// ];

// const EmailScreen = () => {
//   const [emailUsername, setEmailUsername] = useState('');
//   const [selectedUniversity, setSelectedUniversity] = useState(''); // Set default to empty string
//   const navigation = useNavigation();

//   useEffect(() => {
//     getRegistrationProgress('Email').then((progressData) => {
//       if (progressData) {
//         setEmailUsername(progressData.emailUsername || '');
//         setSelectedUniversity(progressData.selectedUniversity || '');
//       }
//     });
//   }, []);

//   const handleNext = () => {
//     if (!selectedUniversity || selectedUniversity === 'Choose a university') {
//       Alert.alert('Error', 'Please select your university.');
//       return;
//     }
//     if (emailUsername.trim() === '') {
//       Alert.alert('Error', 'Please enter your email username.');
//       return;
//     }

//     const selectedDomain =
//       universities.find((uni) => uni.name === selectedUniversity)?.extension || '';
//     const fullEmail = `${emailUsername}${selectedDomain}`;

//     saveRegistrationProgress('Email', { email: fullEmail, selectedUniversity });

//     // Navigate to the next screen
//     navigation.navigate('Password');
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={styles.keyboardView}
//         >
//         {/* Header Section */}
//         <View style={styles.header}>
//           <View style={styles.logoContainer}>
//             <Image
//               style={styles.logo}
//               source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
//             />
//           </View>
//           <Text style={styles.headerTitle}>34TH STREET</Text>
//           <Text style={styles.headerSubtitle}>build bonds across schools.</Text>
//         </View>

//         {/* Form Section */}
//         <View style={styles.formContainer}>
//           <View style={styles.iconRow}>
//             <View style={styles.iconWrapper}>
//               <Fontisto name="email" size={26} color="#ffb60a" />
//             </View>
//             <Image
//               style={styles.iconImage}
//               source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
//             />
//           </View>

//           <Text style={styles.inputTitle}>Please provide a valid email</Text>
//           <Text style={styles.infoText}>
//             Email verification helps us keep your account secure.{' '}
//             <Text style={styles.learnMore}>Learn more</Text>
//           </Text>

//           {/* University Picker */}
//           <Text style={styles.label}>Select Your University</Text>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={selectedUniversity}
//               onValueChange={(itemValue) => setSelectedUniversity(itemValue)}
//             >
//               {universities.map((uni, index) => (
//                 <Picker.Item key={index} label={uni.name} value={uni.name} />
//               ))}
//             </Picker>
//           </View>

//           {/* Email Username Input */}
//           <Text style={styles.label}>Enter Your Email Username</Text>
//           <View style={styles.emailContainer}>
//             <TextInput
//               autoFocus={true}
//               value={emailUsername}
//               onChangeText={setEmailUsername}
//               style={styles.emailInput}
//               placeholder="your.username"
//               placeholderTextColor={'#BEBEBE'}
//             />
//             {selectedUniversity && selectedUniversity !== 'Choose a university' && (
//               <Text style={styles.emailSuffix}>
//                 {universities.find((uni) => uni.name === selectedUniversity)?.extension || ''}
//               </Text>
//             )}
//           </View>

//           <Text style={styles.noteText}>Note: You will be asked to verify your email</Text>

//           {/* Next Button */}
//           <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={styles.nextButton}>
//             <MaterialCommunityIcons name="arrow-right-circle" size={45} color="#581845" />
//           </TouchableOpacity>
//         </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// export default EmailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   header: {
//     height: 200,
//     backgroundColor: '#581845',
//     width: '100%',
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//     top: -50,
//     alignItems: 'center',
//   },
//   logoContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 25 },
//   logo: { width: 150, height: 80, resizeMode: 'contain', top: 20 },
//   headerTitle: { marginTop: 20, textAlign: 'center', fontSize: 23, color: 'white', fontWeight: 'bold' },
//   headerSubtitle: { marginTop: 10, textAlign: 'center', fontSize: 18, color: '#ffb60a', fontWeight: 'bold' },
//   formContainer: { marginTop: 10, marginHorizontal: 20 },
//   iconRow: { flexDirection: 'row', alignItems: 'center' },
//   keyboardView: { flex: 1 },
//   iconWrapper: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     borderColor: '#581845',
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconImage: { width: 100, height: 40 },
//   inputTitle: { fontSize: 25, fontWeight: 'bold', marginTop: 15 },
//   infoText: { marginTop: 30, fontSize: 15, color: 'gray' },
//   learnMore: { color: '#581845', fontWeight: '500' },
//   label: { marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#581845' },
//     pickerContainer: { borderWidth: 1, borderColor: '#581845', borderRadius: 8, marginTop: 10, height: 50, justifyContent:"center",overflow: 'hidden',  },
//   emailContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     paddingBottom: 10,
//     marginTop: 10,
//   },
//   emailInput: { flex: 1, fontSize: 22 },
//   emailSuffix: { fontSize: 22, color: 'gray' },
//   noteText: { color: 'gray', fontSize: 15, marginTop: 7 },
//   nextButton: { marginTop: 30, marginLeft: 'auto', alignSelf: 'center' },
// });



import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
import { Picker } from '@react-native-picker/picker';

const universities = [
  { name: 'Choose a university', extension: '' },
  { name: 'Duke University', extension: '@duke.edu' },
  { name: 'Kenan-Flagler University', extension: '@kenan-flagler.unc.edu' },
  { name: 'Cornell University', extension: '@cornell.edu' },
  { name: 'Princeton University', extension: '@princeton.edu' },
  { name: 'Massachusetts Institute of Technology (MIT)', extension: '@mit.edu' },
  { name: 'Harvard University', extension: '@g.harvard.edu' },
  { name: 'Stanford University', extension: '@stanford.edu' },
  { name: 'Yale University', extension: '@yale.edu' },
  { name: 'California Institute of Technology (Caltech)', extension: '@caltech.edu' },
  { name: 'University of Pennsylvania', extension: '@upenn.edu' },
  { name: 'Johns Hopkins University', extension: '@jhu.edu' },
  { name: 'Northwestern University', extension: '@u.northwestern.edu' },
  { name: 'Columbia University', extension: '@columbia.edu' },
  { name: 'University of Chicago', extension: '@uchicago.edu' },
  { name: 'University of California, Berkeley', extension: '@berkeley.edu' },
  { name: 'University of California, Los Angeles (UCLA)', extension: '@ucla.edu' },
  { name: 'University of Michigan', extension: '@umich.edu' },
  { name: 'New York University (NYU)', extension: '@nyu.edu' },
  { name: 'University of Southern California (USC)', extension: '@usc.edu' },
  { name: 'Rice University', extension: '@rice.edu' },
  
];

const EmailScreen = () => {
  const [emailUsername, setEmailUsername] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    getRegistrationProgress('Email').then((progressData) => {
      if (progressData) {
        setEmailUsername(progressData.emailUsername || '');
        setSelectedUniversity(progressData.selectedUniversity || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (!selectedUniversity || selectedUniversity === 'Choose a university') {
      setErrorMessage('All fields are required.');
      return;
    }
    if (emailUsername.trim() === '') {
      setErrorMessage('Please enter your email username.');
      return;
    }
  
    // Clear error message if validation passes
    setErrorMessage('');
  
    const selectedDomain =
      universities.find((uni) => uni.name === selectedUniversity)?.extension || '';
    const fullEmail = `${emailUsername}${selectedDomain}`;
  
    saveRegistrationProgress('Email', { email: fullEmail, selectedUniversity });
  
    navigation.navigate('Password');
  };
  



  // const handleNext = () => {
  //   if (!selectedUniversity || selectedUniversity === 'Choose a university') {
  //     // Alert.alert('Error', 'Please select your university.');
  //     setErrorMessage('All fields are required.');
  //     return;
  //   }
  //   if (emailUsername.trim() === '') {
  //     // Alert.alert('Error', 'Please enter your email username.');
  //      // Clear error message if validation passes
  //   setErrorMessage('');

  //     return;
  //   }

  //   const selectedDomain =
  //     universities.find((uni) => uni.name === selectedUniversity)?.extension || '';
  //   const fullEmail = `${emailUsername}${selectedDomain}`;

  //   saveRegistrationProgress('Email', { email: fullEmail, selectedUniversity });

  //   navigation.navigate('Password');
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
              {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
            />
          </View>
          <Text style={styles.headerTitle}>34TH STREET</Text>
          <Text style={styles.headerSubtitle}>build bonds across schools.</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.iconRow}>
            <View style={styles.iconWrapper}>
              <Fontisto name="email" size={26} color="#ffb60a" />
            </View>
            <Image
              style={styles.iconImage}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
            />
          </View>

          <Text style={styles.inputTitle}>Please provide a valid email</Text>
          <Text style={styles.infoText}>
            Email verification helps us keep your account secure.{' '}
            <Text style={styles.learnMore}>Learn more</Text>
          </Text>
              {/* University Picker */}
              <Text style={styles.label}>Select Your University</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedUniversity}
                  onValueChange={(itemValue) => setSelectedUniversity(itemValue)}
                >
                  {universities.map((uni, index) => (
                    <Picker.Item key={index} label={uni.name} value={uni.name} />
                  ))}
                </Picker>
              </View>

              {/* Email Username Input */}
              <Text style={styles.label}>Enter Your Email Username</Text>
              <View style={styles.emailContainer}>
                <TextInput
    autoFocus={true}
    value={emailUsername}
    onChangeText={(text) => {
      setEmailUsername(text);
      if (text.trim() !== '') {
        setErrorMessage(''); // Clear error when user types
      }
    }}
    style={styles.emailInput}
    placeholder="your.username"
    placeholderTextColor={'#BEBEBE'}
  />
                {selectedUniversity && selectedUniversity !== 'Choose a university' && (
                  <Text style={styles.emailSuffix}>
                    {universities.find((uni) => uni.name === selectedUniversity)?.extension || ''}
                  </Text>
                )}

                 
              </View>
              {/* Error Message */}
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

              <Text style={styles.noteText}>Note: You will be asked to verify your email</Text>

              {/* Next Button */}
              <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={styles.nextButton}>
                <MaterialCommunityIcons name="arrow-right-circle" size={45} color="#581845" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContainer: { flexGrow: 1 },
  keyboardView: { flex: 1 },
  header: {
    height: 200,
    backgroundColor: '#581845',
    width: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    top: -50,
    alignItems: 'center',
  },
  logoContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  logo: { width: 150, height: 80, resizeMode: 'contain', top: 20 },
  headerTitle: { marginTop: 20, textAlign: 'center', fontSize: 23, color: 'white', fontWeight: 'bold' },
  headerSubtitle: { marginTop: 10, textAlign: 'center', fontSize: 18, color: '#ffb60a', fontWeight: 'bold' },
  formContainer: { marginTop: 10, marginHorizontal: 20 },
  formContainer: { marginTop: 10, marginHorizontal: 20 },
  iconRow: { flexDirection: 'row', alignItems: 'center' }, 
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#581845',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: { width: 100, height: 40 },
  inputTitle: { fontSize: 25, fontWeight: 'bold', marginTop: 15 },
  infoText: { marginTop: 30, fontSize: 15, color: 'gray' },
  learnMore: { color: '#581845', fontWeight: '500' },
  label: { marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#581845' },
  emailContainer: { flexDirection: 'row', alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 1, paddingBottom: 10, marginTop: 10, overflow: 'hidden' },
  emailInput: { flex: 1, fontSize: 22 },
  emailSuffix: { fontSize: 22, color: 'gray' },
  nextButton: { marginTop: 30, marginLeft: 'auto', alignSelf: 'center' },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
