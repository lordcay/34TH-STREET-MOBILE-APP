import { StyleSheet, Text, View, SafeAreaView, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';


const BasicInfo = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground 
    source={require('../assets/bg2.jpg')} 
    style={{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      top: 40,
    }}
  >

    <SafeAreaView style={{flex: 1, }}>
    <View
       style={{
        height: 240,
        backgroundColor: '#581845',
        width: '100%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        top: -50,
        }}>
      <View style={{marginTop: 5}}>
      <Text
          style={{
            marginTop: 60,
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
            fontSize: 20,
            fontFamily: 'GeezaPro-Bold',
            color: '#ffb60a',
            fontWeight: 'bold',

          }}>
          A social hub for MBA minds
        </Text>
        <Text
          style={{
            fontSize: 23,
            // fontWeight: 'bold',
            fontFamily: 'INTER',
            marginLeft: 20,
            marginTop: 10,
            color: 'white',
            textAlign: 'center',
          }}>
          connect, collaborate, and build bonds across schools.
        </Text>
      </View>
      </View>
      {/* <View>
        <LottieView
          source={require('../assets/love.json')}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
            
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View> */}

      <Pressable
      onPress={() => navigation.navigate("Name")}
        style={{backgroundColor: '#581845', padding: 15, marginTop: 'auto', top: -80,}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffb60a',
            fontWeight: '800',
            fontSize: 18,
          }}>
          Enter basic Info
        </Text>
      </Pressable>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})