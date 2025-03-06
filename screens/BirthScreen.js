import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState, useEffect} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import {
    getRegistrationProgress,
    saveRegistrationProgress,
  } from '../registrationUtils';

const BirthScreen = () => {

    const navigation = useNavigation();
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
  
    const handleDayChange = text => {
      setDay(text);
      if (text.length == 2) {
        monthRef.current.focus();
      }
    };
  
    const handleMonthChange = text => {
      setMonth(text);
      if (text.length == 2) {
        yearRef.current.focus();
      }
    };
  
    const handleYearChange = text => {
      setYear(text);
    };
    useEffect(() => {
      // Fetch the registration progress data for the "Birth" screen
      getRegistrationProgress('Birth').then(progressData => {
        if (progressData) {
          const {dateOfBirth} = progressData;
          // Split the date of birth string into day, month, and year
          const [dayValue, monthValue, yearValue] = dateOfBirth.split('/');
          // Set the values in the component state
          setDay(dayValue);
          setMonth(monthValue);
          setYear(yearValue);
        }
      });
    }, []);
  
    const handleNext = () => {
      // Check if all the date values are provided
      if (day.trim() !== '' && month.trim() !== '' && year.trim() !== '') {
        // Construct the date string in the desired format
        const dateOfBirth = `${day}/${month}/${year}`;
  
        // Save the current progress data including the date of birth
        saveRegistrationProgress('Birth', {dateOfBirth});
  
        // Navigate to the next screen
        navigation.navigate('Location'); // Or navigate to the appropriate screen
      } else {
        // Handle the case where the user hasn't provided all the date values
        // You can display a message or take appropriate action here
      }
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
          <MaterialCommunityIcons
            name="cake-variant-outline"
            size={26}
            color="#ffb60a"
          />
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
        What's your date of birth?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 80,
          justifyContent: 'center',
        }}>
        {/* Day Input Field */}
        <TextInput
          autoFocus={true}
          style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            padding: 10,
            width: 50,
            fontSize: day ? 20 : 20,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="DD"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleDayChange}
          value={day}
        />

        {/* Month Input Field */}
        <TextInput
          ref={monthRef}
          style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            padding: 10,
            width: 60,
            fontSize: month ? 20 : 20,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleMonthChange}
          value={month}
        />

        {/* Year Input Field */}
        <TextInput
          ref={yearRef}
          style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            padding: 10,
            width: 75,
            fontSize: year ? 20 : 20,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="YYYY"
          keyboardType="numeric"
          maxLength={4}
          onChangeText={handleYearChange}
          value={year}
        />
      </View>
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

export default BirthScreen

const styles = StyleSheet.create({})