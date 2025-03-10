import { StyleSheet, Text, View,SafeAreaView,Pressable,TouchableOpacity,Image, TextInput } from 'react-native'
import React ,{useState,useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const HomeTownScreen = () => {
  const [hometown,setHometown] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
      getRegistrationProgress('Hometown').then(progressData => {
        if (progressData) {
          setHometown(progressData.hometown || '');
        }
      });
    }, []);
  
    const handleNext = () => {
      if (hometown.trim() !== '') {
        // Save the current progress data including the name
        saveRegistrationProgress('Hometown', {hometown});
      }
      // Navigate to the next screen
      navigation.navigate('Photos');
    };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
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
            <AntDesign name="hearto" size={22} color="#ffb60a" />
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
          Where's your home Town?
        </Text>

        <TextInput
          value={hometown}
          onChangeText={(text) => setHometown(text)}
          autoFocus={true}
          style={{
            width: 340,
            marginVertical: 10,
            fontSize: hometown ? 22 : 22,
            marginTop: 45,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="HomeTown"
          placeholderTextColor={'#BEBEBE'}
        />


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
  )
}

export default HomeTownScreen

const styles = StyleSheet.create({})