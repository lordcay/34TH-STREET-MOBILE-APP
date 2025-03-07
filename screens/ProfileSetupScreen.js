// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Picker} from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';




// const ProfileSetupScreen = () => {
//     const [sex, setSex] = useState('');
//     const [dob, setDob] = useState(new Date());
//     const [showPicker, setShowPicker] = useState(false);
//     const [showDatePicker, setShowDatePicker] = useState(false);

//   const navigation = useNavigation();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     sex: '',
//     dob: new Date(),
//     email: '',
//     phone: '',
//     origin: '',
//     location: '',
//     degree: '',
//     graduationYear: '',
//     bio: '',
//     photos: [],
//   });

//   const handleNext = () => {
//     if (step < 4) {
//       setStep(step + 1);
//     } else {
//       console.log('Submit:', formData);
//       navigation.navigate('Main');
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <Text>Sex:</Text>
//             <TouchableOpacity onPress={() => setShowPicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.sex}
//                 editable={false} // Read-only input
//                 placeholder="Select Sex"
//               />
//             </TouchableOpacity>
//             {showPicker && (
//               <Picker
//                 selectedValue={formData.sex}
//                 onValueChange={(itemValue) => {
//                   setFormData({ ...formData, sex: itemValue });
//                   setShowPicker(false); // Close picker after selection
//                 }}
//                 style={styles.picker}
//               >
//                 <Picker.Item label="Select" value="" />
//                 <Picker.Item label="Male" value="Male" />
//                 <Picker.Item label="Female" value="Female" />
//                 <Picker.Item label="Other" value="Other" />
//               </Picker>
//             )}
//             {/* <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, sex: text })} /> */}
//             <Text>DOB:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, dob: text })} />
//             <Text>Email:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, email: text })} />
//             <Text>Phone:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, phone: text })} />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Text>Origin:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, origin: text })} />
//             <Text>Location:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, location: text })} />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <Text>Degree:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, degree: text })} />
//             <Text>Graduation Year:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, graduationYear: text })} />
//             <Text>Bio:</Text>
//             <TextInput style={styles.input} onChangeText={(text) => setFormData({ ...formData, bio: text })} />
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <Text>Upload Photos:</Text>
//             <TextInput style={styles.input} placeholder="Upload Photos Feature Here" />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//          <View
//         style={{
//           height: 200,
//           backgroundColor: '#581845',
//           width: '100%',
//           borderBottomLeftRadius: 100,
//           borderBottomRightRadius: 100,
//           top: -50,
//         }}>
//         <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
//           <Image
//             style={{ width: 150, height: 80, resizeMode: 'contain', top: 20 }}
//             source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
//           />
//         </View>
//         <Text style={styles.headerText}>34TH STREET</Text>
//         <Text style={styles.subHeaderText}>Set Up your Account For Best Experince</Text>
//       </View>

//     <View style={styles.container}>
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <View style={styles.iconContainer}>
//             <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="#ffb60a" />
//           </View>
//           <Image
//             style={{ width: 100, height: 40 }}
//             source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
//           />
//         </View>
//       <Text style={styles.header}>Profile Setup ({step}/4)</Text>
//       {renderStep()}
//       <Button title={step < 4 ? 'Next' : 'Submit'} onPress={handleNext} />
//     </View>
//     </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center', marginTop: -120  },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
//   headerText: {
//     marginTop: 20,
//     textAlign: 'center',
//     fontSize: 23,
//     fontFamily: 'GeezaPro-Bold',
//     color: 'white',
//   },
//   subHeaderText: {
//     marginTop: 5,
//     textAlign: 'center',
//     fontSize: 16,
//     fontFamily: 'GeezaPro-Bold',
//     color: '#ffb60a',
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     borderColor: '#581845',
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ProfileSetupScreen;



// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback,
//   Keyboard, SafeAreaView, Image, TouchableOpacity
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const ProfileSetupScreen = () => {
//   const navigation = useNavigation();
//   const [step, setStep] = useState(1);
//   const [showPicker, setShowPicker] = useState(false);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const [formData, setFormData] = useState({
//     sex: '',
//     dob: new Date(),
//     email: '',
//     phone: '',
//     origin: '',
//     location: '',
//     degree: '',
//     graduationYear: '',
//     bio: '',
//     photos: [],
//   });

//   const handleNext = () => {
//     if (step < 4) {
//       setStep(step + 1);
//     } else {
//       console.log('Submit:', formData);
//       navigation.navigate('Main');
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <Text>Sex:</Text>
//             <TouchableOpacity onPress={() => setShowPicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.sex}
//                 editable={false} // Read-only input
//                 placeholder="Select Sex"
//               />
//             </TouchableOpacity>
//             {showPicker && (
//               <Picker
//                 selectedValue={formData.sex}
//                 onValueChange={(itemValue) => {
//                   setFormData({ ...formData, sex: itemValue });
//                   setShowPicker(false); // Close picker after selection
//                 }}
//                 style={styles.picker}
//               >
//                 <Picker.Item label="Select" value="" />
//                 <Picker.Item label="Male" value="Male" />
//                 <Picker.Item label="Female" value="Female" />
//                 <Picker.Item label="Other" value="Other" />
//               </Picker>
//             )}

//             <Text>DOB:</Text>
//             <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.dob.toDateString()}
//                 editable={false} // Read-only input
//                 placeholder="Select DOB"
//               />
//             </TouchableOpacity>
//             {showDatePicker && (
//               <DateTimePicker
//                 value={formData.dob}
//                 mode="date"
//                 display="default"
//                 onChange={(event, selectedDate) => {
//                   setShowDatePicker(false);
//                   if (selectedDate) {
//                     setFormData({ ...formData, dob: selectedDate });
//                   }
//                 }}
//               />
//             )}

//             <Text>Email:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, email: text })}
//             />
//             <Text>Phone:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, phone: text })}
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Text>Origin:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, origin: text })}
//             />
//             <Text>Location:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, location: text })}
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <Text>Degree:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, degree: text })}
//             />
//             <Text>Graduation Year:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, graduationYear: text })}
//             />
//             <Text>Bio:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, bio: text })}
//             />
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <Text>Upload Photos:</Text>
//             <TextInput style={styles.input} placeholder="Upload Photos Feature Here" />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={styles.headerContainer}>
//           <View style={styles.headerIcon}>
//             <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="#ffb60a" />
//           </View>
//           <Image
//             style={styles.logo}
//             source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
//           />
//         </View>

//         <View style={styles.container}>
//           <Text style={styles.header}>Profile Setup ({step}/4)</Text>
//           {renderStep()}
//           <Button title={step < 4 ? 'Next' : 'Submit'} onPress={handleNext} />
//         </View>
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5, backgroundColor: '#F8F8F8'
//   },
//   picker: { height: 50, width: '100%' },
//   headerContainer: {
//     height: 200, backgroundColor: '#581845', width: '100%',
//     borderBottomLeftRadius: 100, borderBottomRightRadius: 100, top: -50,
//     justifyContent: 'center', alignItems: 'center'
//   },
//   headerIcon: { width: 44, height: 44, borderRadius: 22, borderColor: '#581845', borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
//   logo: { width: 100, height: 40 }
// });

// export default ProfileSetupScreen;


// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback,
//   Keyboard, SafeAreaView, Image, TouchableOpacity
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const ProfileSetupScreen = () => {
//   const navigation = useNavigation();
//   const [step, setStep] = useState(1);
//   const [showPicker, setShowPicker] = useState(false);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const [formData, setFormData] = useState({
//     sex: '',
//     dob: new Date(),
//     email: '',
//     phone: '',
//     origin: '',
//     location: '',
//     degree: '',
//     graduationYear: '',
//     bio: '',
//     photos: [],
//   });

//   const handleNext = () => {
//     if (step < 4) {
//       setStep(step + 1);
//     } else {
//       console.log('Submit:', formData);
//       navigation.navigate('Main');
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             {/* Sex Selection with Dropdown Icon */}
//             <Text>Sex:</Text>
//             <TouchableOpacity style={styles.inputContainer} onPress={() => setShowPicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.sex}
//                 editable={false}
//                 placeholder="Select Sex"
//               />
//               <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />
//             </TouchableOpacity>
//             {showPicker && (
//               <Picker
//                 selectedValue={formData.sex}
//                 onValueChange={(itemValue) => {
//                   setFormData({ ...formData, sex: itemValue });
//                   setShowPicker(false);
//                 }}
//                 style={styles.picker}
//               >
//                 <Picker.Item label="Select" value="" />
//                 <Picker.Item label="Male" value="Male" />
//                 <Picker.Item label="Female" value="Female" />
//                 <Picker.Item label="Other" value="Other" />
//               </Picker>
//             )}

//             {/* DOB Selection with Calendar Icon */}
//             <Text>DOB:</Text>
//             <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.dob.toDateString()}
//                 editable={false}
//                 placeholder="Select DOB"
//               />
//               <MaterialCommunityIcons name="calendar" size={24} color="gray" style={styles.icon} />
//             </TouchableOpacity>
//             {showDatePicker && (
//               <DateTimePicker
//                 value={formData.dob}
//                 mode="date"
//                 display="default"
//                 onChange={(event, selectedDate) => {
//                   setShowDatePicker(false);
//                   if (selectedDate) {
//                     setFormData({ ...formData, dob: selectedDate });
//                   }
//                 }}
//               />
//             )}

//             <Text>Email:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, email: text })}
//             />
//             <Text>Phone:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, phone: text })}
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Text>Origin:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, origin: text })}
//             />
//             <Text>Location:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, location: text })}
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <Text>Degree:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, degree: text })}
//             />
//             <Text>Graduation Year:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, graduationYear: text })}
//             />
//             <Text>Bio:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, bio: text })}
//             />
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <Text>Upload Photos:</Text>
//             <TextInput style={styles.input} placeholder="Upload Photos Feature Here" />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={styles.headerContainer}>
//           <View style={styles.headerIcon}>
//             <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="#ffb60a" />
//           </View>
//           <Image
//             style={styles.logo}
//             source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
//           />
//         </View>

//         <View style={styles.container}>
//           <Text style={styles.header}>Profile Setup ({step}/4)</Text>
//           {renderStep()}
//           <Button title={step < 4 ? 'Next' : 'Submit'} onPress={handleNext} />
//         </View>
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//     backgroundColor: '#F8F8F8',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#F8F8F8',
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   picker: { height: 50, width: '100%' },
//   icon: { marginLeft: -30 },
//   headerContainer: {
//     height: 200,
//     backgroundColor: '#581845',
//     width: '100%',
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//     top: -50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerIcon: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     borderColor: '#581845',
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: { width: 100, height: 40 },
// });

// export default ProfileSetupScreen;



// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback,
//   Keyboard, SafeAreaView, Image, TouchableOpacity, Modal
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const ProfileSetupScreen = () => {
//   const navigation = useNavigation();
//   const [step, setStep] = useState(1);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showSexPicker, setShowSexPicker] = useState(false);

//   const [formData, setFormData] = useState({
//     sex: '',
//     dob: new Date(),
//     email: '',
//     phone: '',
//     origin: '',
//     location: '',
//     degree: '',
//     graduationYear: '',
//     bio: '',
//     photos: [],
//   });

//   const handleNext = () => {
//     if (step < 4) {
//       setStep(step + 1);
//     } else {
//       console.log('Submit:', formData);
//       navigation.navigate('Main');
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             {/* Sex Selection with Modal Picker */}
//             <Text>Sex:</Text>
//             <TouchableOpacity style={styles.inputContainer} onPress={() => setShowSexPicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.sex}
//                 editable={false}
//                 placeholder="Select Sex"
//               />
//               <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />
//             </TouchableOpacity>

//             {/* Sex Picker Modal */}
//             <Modal transparent={true} animationType="slide" visible={showSexPicker}>
//               <TouchableWithoutFeedback onPress={() => setShowSexPicker(false)}>
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
//                     <Text style={styles.modalHeader}>Select Sex</Text>
//                     {["Male", "Female", "Other"].map((option) => (
//                       <TouchableOpacity
//                         key={option}
//                         style={styles.modalItem}
//                         onPress={() => {
//                           setFormData({ ...formData, sex: option });
//                           setShowSexPicker(false);
//                         }}
//                       >
//                         <Text style={styles.modalText}>{option}</Text>
//                       </TouchableOpacity>
//                     ))}
//                   </View>
//                 </View>
//               </TouchableWithoutFeedback>
//             </Modal>

//             {/* DOB Selection with Calendar Icon */}
//             <Text>DOB:</Text>
//             <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePicker(true)}>
//               <TextInput
//                 style={styles.input}
//                 value={formData.dob.toDateString()}
//                 editable={false}
//                 placeholder="Select DOB"
//               />
//               <MaterialCommunityIcons name="calendar" size={24} color="gray" style={styles.icon} />
//             </TouchableOpacity>
//             {showDatePicker && (
//               <DateTimePicker
//                 value={formData.dob}
//                 mode="date"
//                 display="default"
//                 onChange={(event, selectedDate) => {
//                   setShowDatePicker(false);
//                   if (selectedDate) {
//                     setFormData({ ...formData, dob: selectedDate });
//                   }
//                 }}
//               />
//             )}

//             <Text>Email:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, email: text })}
//             />
//             <Text>Phone:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, phone: text })}
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Text>Origin:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, origin: text })}
//             />
//             <Text>Location:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, location: text })}
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <Text>Degree:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, degree: text })}
//             />
//             <Text>Graduation Year:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, graduationYear: text })}
//             />
//             <Text>Bio:</Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text) => setFormData({ ...formData, bio: text })}
//             />
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <Text>Upload Photos:</Text>
//             <TextInput style={styles.input} placeholder="Upload Photos Feature Here" />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={styles.container}>
//           <Text style={styles.header}>Profile Setup ({step}/4)</Text>
//           {renderStep()}
//           <Button title={step < 4 ? 'Next' : 'Submit'} onPress={handleNext} />
//         </View>
//       </SafeAreaView>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//     backgroundColor: '#F8F8F8',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#F8F8F8',
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   icon: { marginLeft: -30 },
  
//   // Modal Styles
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalItem: {
//     padding: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#581845',
//   },
// });

// export default ProfileSetupScreen;



import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback,
  Keyboard, SafeAreaView, Image, TouchableOpacity, Modal, ScrollView, FlatList,Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';



const countries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon",
    "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti",
    "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini (Swaziland)", "Ethiopia", "Gabon", "Gambia",
    "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast (C\u00f4te d'Ivoire)", "Kenya", "Lesotho",
    "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
    "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan",
    "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
  ];

const ProfileSetupScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [showSexPicker, setShowSexPicker] = useState(false);
  const [dob, setDob] = useState(new Date()); // Ensure dob state exists
  const [showOriginPicker, setShowOriginPicker] = useState(false);
  const [showDegree, setShowDegree] = useState(false);
  const [showYearOfGraduation, setshowYearOfGraduation] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [showImagePicker, setShowImagePicker] = useState(false);



  const [formData, setFormData] = useState({
    sex: '',
    dob: new Date(),
    email: '',
    phone: '',
    origin: '',
    location: '',
    degree: '',
    graduationYear: '',
    bio: '',
    photos: [],
  });

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDob(selectedDate); // Update state
    }
  };
  
  const confirmDateSelection = () => {
    setFormData({ ...formData, dob }); // Save final selection
    setShowDatePickerModal(false); // Close picker only after confirmation
  };

  const validateFields = () => {
    if (step === 1 && (!formData.sex || !formData.dob || !formData.email || !formData.phone)) return false;
    if (step === 2 && !formData.origin) return false;
    if (step === 3 && (!formData.degree || !formData.graduationYear || !formData.bio)) return false;
    if (step === 4 && photos.length === 0) return false;
    return true;
  };


  const handleNext = () => {

    if (!validateFields()) {
      Alert.alert("Incomplete Form", "Please fill all required fields before proceeding.");
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log('Submit:', { ...formData, photos });
      navigation.navigate('Main');
    }
  };

    const removePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 6, // Limit to 6 images

      quality: 1,
    });

    if (!result.canceled) {
      setPhotos([...photos, ...result.assets.map(asset => asset.uri)]);
    }
  };

//   const pickImage = async (source) => {
//     let result;
//     if (source === 'camera') {
//       result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
//     } else {
//       result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
//     }

//     if (!result.canceled) {
//       setPhotos([...photos, result.uri]);
//     }
//     setShowImagePicker(false);
//   };

  const removeImage = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* Sex Selection with Modal Picker */}
            <Text>Sex:</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowSexPicker(true)}>
              <TextInput
                style={styles.input}
                value={formData.sex}
                editable={false}
                placeholder="Select your sex" // Visible placeholder
                placeholderTextColor="#999" // Grey color for better visibility
              />
              <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />
            </TouchableOpacity>

            {/* Sex Picker Modal */}
            <Modal transparent={true} animationType="slide" visible={showSexPicker}>
              <TouchableWithoutFeedback onPress={() => setShowSexPicker(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Select Sex</Text>
                    {["Male", "Female", "Other"].map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.modalItem}
                        onPress={() => {
                          setFormData({ ...formData, sex: option });
                          setShowSexPicker(false);
                        }}
                      >
                        <Text style={styles.modalText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            {/* DOB Selection with Modal Date Picker */}
            <Text>DOB:</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePickerModal(true)}>
              <TextInput
                style={styles.input}
                value={formData.dob.toDateString()}
                editable={false}
                placeholder="Select DOB"
              />
              <MaterialCommunityIcons name="calendar" size={24} color="gray" style={styles.icon} />
            </TouchableOpacity>

            {/* DOB Picker Modal */}
            <Modal transparent={true} animationType="slide" visible={showDatePickerModal}>
              <TouchableWithoutFeedback onPress={() => setShowDatePickerModal(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Select Date of Birth</Text>
                    <DateTimePicker
                      value={formData.dob}
                      mode="date"
                      display="spinner"
                      textColor="black"  // Ensure visibility
                      themeVariant="dark"  // Use dark theme for contrast
                      onChange={handleDateChange}
                    />
                    <TouchableOpacity onPress={confirmDateSelection}>
                      <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

                         <Text>Email:</Text>
             <TextInput
               style={styles.inputs}
               onChangeText={(text) => setFormData({ ...formData, email: text })}
             />
             <Text>Phone:</Text>
             <TextInput
               style={styles.inputs}
               onChangeText={(text) => setFormData({ ...formData, phone: text })}
             />
          </>
        );

              case 2:
        return (
          <>
            <Text>Nationality:</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowOriginPicker(true)}>
            <TextInput
                style={styles.input}
                value={formData.origin}
                editable={false}
                placeholder="Select your country"
                placeholderTextColor="#999"
              />
                            <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />

            {/* <TextInput style={styles.inputs} onChangeText={(text) => setFormData({ ...formData, origin: text })} /> */}
            </TouchableOpacity>

            <Modal transparent={true} animationType="slide" visible={showOriginPicker}>
              <TouchableWithoutFeedback onPress={() => setShowOriginPicker(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Select Country</Text>
                    <ScrollView style={{ maxHeight: 300 }}>
                      {countries.map((country) => (
                        <TouchableOpacity
                          key={country}
                          style={styles.modalItem}
                          onPress={() => {
                            setFormData({ ...formData, origin: country });
                            setShowOriginPicker(false);
                          }}
                        >
                          <Text style={styles.modalText}>{country}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
            {/* <Text>Location:</Text>
            <TextInput style={styles.inputs} onChangeText={(text) => setFormData({ ...formData, location: text })} /> */}
            
          </>
        );
    //   case 2:
    //     return (
    //       <>
    //         <Text>Origin:</Text>
    //         <TextInput
    //           style={styles.input}
    //           onChangeText={(text) => setFormData({ ...formData, origin: text })}
    //         />
    //         <Text>Location:</Text>
    //         <TextInput
    //           style={styles.input}
    //           onChangeText={(text) => setFormData({ ...formData, location: text })}
    //         />
    //       </>
    //     );
      case 3:
        return (
          <>
            <Text>Degree:</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDegree(true)}>
            <TextInput
                style={styles.input}
                value={formData.degree}
                editable={false}
                placeholder="Select your Degree" // Visible placeholder
                placeholderTextColor="#999" // Grey color for better visibility
              />
              <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />

</TouchableOpacity>

{/* Degree Picker Modal */}
<Modal transparent={true} animationType="slide" visible={showDegree}>
              <TouchableWithoutFeedback onPress={() => setShowDegree(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Select Degree</Text>
                    {["Bachelors", "Masters","Ph.D", "MBA", "Other"].map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.modalItem}
                        onPress={() => {
                          setFormData({ ...formData, degree: option });
                          setShowDegree(false);
                        }}
                      >
                        <Text style={styles.modalText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
            <Text>Graduation Year:</Text>
           <TouchableOpacity style={styles.inputContainer} onPress={() => setshowYearOfGraduation(true)}>
            <TextInput
                style={styles.input}
                value={formData.graduationYear}
                editable={false}
                placeholder="Select your Degree" // Visible placeholder
                placeholderTextColor="#999" // Grey color for better visibility
              />
              <MaterialCommunityIcons name="chevron-down" size={24} color="gray" style={styles.icon} />

</TouchableOpacity>


{/* YOG Picker Modal */}
<Modal transparent={true} animationType="slide" visible={showYearOfGraduation}>
              <TouchableWithoutFeedback onPress={() => setshowYearOfGraduation(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Select Graduation Year</Text>
                    {["2025", "2026","2027", "2028", "2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040"].map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.modalItem}
                        onPress={() => {
                          setFormData({ ...formData, graduationYear: option });
                          setshowYearOfGraduation(false);
                        }}
                      >
                        <Text style={styles.modalText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
            <Text>Bio:</Text>
            <TextInput
              style={styles.inputss}
              onChangeText={(text) => setFormData({ ...formData, bio: text })}
            />
          </>
        );
      case 4:
        return (
          <>
            <Text>Upload Photos:</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImages}>
            <Text style={styles.uploadText}>Select Photos</Text>
          </TouchableOpacity>

          <FlatList
              data={photos}
              horizontal
              showsHorizontalScrollIndicator={false} // Enables scrolling
              pagingEnabled // Makes scrolling snap to each image
        scrollEventThrottle={16} // Improves scrolling response
        snapToAlignment="center" // Aligns images properly
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.imageList}
              renderItem={({ item, index }) => (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item }} style={styles.uploadedImage} />
                  <TouchableOpacity style={styles.deleteIcon} onPress={() => removeImage(index)}>
                    <MaterialCommunityIcons name="close-circle" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              )}
            />

          {/* <ScrollView horizontal>
            {photos.map((photo, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri: photo }} style={styles.imagePreview} />
                <TouchableOpacity onPress={() => removeImage(index)}>
                  <MaterialCommunityIcons name="close-circle" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView> */}

          {/* Image Picker Modal */}
          <Modal transparent animationType="slide" visible={showImagePicker}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalHeader}>Choose an Option</Text>
                <TouchableOpacity style={styles.modalButton} onPress={() => pickImage('camera')}>
                  <Text style={styles.modalButtonTexts}>Take a Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={() => pickImage('gallery')}>
                  <Text style={styles.modalButtonTexts}>Select from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={() => setShowImagePicker(false)}>
                  <Text style={styles.modalButtonTexts}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          </>
        );
      default:
        return null;
    }
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
         <Text style={styles.subHeaderText}>Set Up your Account For Best Experince</Text>
         </View>

        <View style={styles.container}>
          <Text style={styles.header}>Profile Setup ({step}/4)</Text>
          {renderStep()}
          <Button title={step < 4 ? 'Next' : 'Submit'} onPress={handleNext} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center',marginTop:120, },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop:-120},
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  inputs: {
         borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5, backgroundColor: '#F8F8F8'
       },
  inputss: {
         borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5, backgroundColor: '#F8F8F8', height:120,
       },
  icon: { marginLeft: -30 },
  
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
//   modalContainers: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContents: { width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },

  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalItem: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#581845',
  },
  modalButton: {
    backgroundColor: '#581845',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalButtonTexts: {
    color: 'white',
    fontWeight: 'bold',
  },
     headerText: {
     marginTop: 20,
     textAlign: 'center',
     fontSize: 23,
     fontFamily: 'GeezaPro-Bold',
     color: 'white',
   },
   subHeaderText: {
     marginTop: 5,
     textAlign: 'center',
     fontSize: 16,
     fontFamily: 'GeezaPro-Bold',
     color: '#ffb60a',
     fontWeight: 'bold',
   },
   uploadButton: { backgroundColor: '#581845', padding: 10, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
  uploadText: { color: 'white', fontSize: 16 },
  imageContainer: { marginRight: 10, alignItems: 'center' },
  imagePreview: { width: 100, height: 100, borderRadius: 10, marginBottom: 5 },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,backgroundColor: 'white',
    borderRadius: 12,

  },
  imageList: { marginTop: 10, paddingHorizontal: 5 },


});

export default ProfileSetupScreen;
