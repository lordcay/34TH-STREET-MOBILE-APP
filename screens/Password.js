import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';

const Password = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);


  const handleNext = () => {
    if (password.trim() !== '') {
      // Save the current progress data including the name
      saveRegistrationProgress('Password', {password});
    }
    // Navigate to the next screen
    navigation.navigate('PreFinal');
    // navigation.navigate('Birth');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>


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
      <View style={{marginTop: 1, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: '#581845',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Fontisto name="email" size={26} color="#ffb60a" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          Please choose your password
        </Text>

        <TextInput
            secureTextEntry={secureText}
          autoFocus={true}
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: password ? 22 : 22,
            marginTop: 25,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="Enter your password"
          placeholderTextColor={'#BEBEBE'}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
  <MaterialCommunityIcons 
    name={secureText ? "eye-off" : "eye"} 
    size={30} 
    style={{alignSelf: 'flex-end', marginTop: -50, marginHorizontal:30}}
  />
</TouchableOpacity>
        <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
          Note: Your details will be safe with us.
        </Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{alignSelf: 'center', marginTop: 20}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({});
