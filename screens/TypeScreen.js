import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {useNavigation} from '@react-navigation/native';
  import {
    getRegistrationProgress,
    saveRegistrationProgress,
  } from '../registrationUtils';
  

const TypeScreen = () => {
    const [type, setType] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        getRegistrationProgress('Type').then(progressData => {
          if (progressData) {
            setType(progressData.type || '');
          }
        });
      }, []);

      const handleNext = () => {
        if (type.trim() !== '') {
          // Save the current progress data including the name
          saveRegistrationProgress('Type', {type});
        }
        // Navigate to the next screen
        navigation.navigate('Dating');
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
          What's your sexuality?
        </Text>

        <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
          34th Street users are matched based on these three gender groups. You can
          add more about gender after
        </Text>

        <View style={{marginTop: 30, flexDirection: 'column', gap: 12}}>
        <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
                 <Text style={{fontWeight: '500', fontSize: 15}}>Straight</Text>

                 <Pressable onPress={() => setType('Straight')}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == 'Straight' ? '#581845' : '#F0F0F0'}
              />
            </Pressable>
            </View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
                 <Text style={{fontWeight: '500', fontSize: 15}}>Gay</Text>
                 <Pressable onPress={() => setType('Gay')}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == 'Gay' ? '#581845' : '#F0F0F0'}
              />
            </Pressable>
            </View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '500', fontSize: 15}}>Lesbian</Text>
            <Pressable onPress={() => setType('Lesbian')}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == 'Lesbian' ? '#581845' : '#F0F0F0'}
              />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '500', fontSize: 15}}>Bisexual</Text>
            <Pressable onPress={() => setType('Bisexual')}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == 'Bisexual' ? '#581845' : '#F0F0F0'}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
             <AntDesign name="checksquare" size={26} color="#581845" />
             <Text style={{fontSize: 15}}>Visible on profile</Text>
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

export default TypeScreen

const styles = StyleSheet.create({})