// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Image,
//     TouchableOpacity,
//   } from 'react-native';
//   import React, {useState, useEffect} from 'react';
//   import {useNavigation} from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from '../registrationUtils';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';


// const LocationScreen = () => {

//     const navigation = useNavigation();
//     const [region, setRegion] = useState({
//       latitude: 0,
//       longitude: 0,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });
//     const [location, setLocation] = useState('');
//     console.log('location', location);
//     const [coordinates] = useState([
//       {
//         latitude: 12.9716,
//         longitude: 77.5946,
//       },
//       {
//         latitude: 13.0451,
//         longitude: 77.6269,
//       },
//     ]);
//     useEffect(() => {
//       // Get the current location
//       Geolocation.getCurrentPosition(
//         position => {
//           const {latitude, longitude} = position.coords;
//           setRegion({...region, latitude, longitude});
//           // Use reverse geocoding to get the location name from latitude and longitude
//           fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA`,
//           )
//             .then(response => response.json())
//             .then(data => {
//               console.log('date', data);
//               if (data.results.length > 0) {
//                 setLocation(data.results[0].formatted_address);
//               }
//             })
//             .catch(error => console.error('Error fetching location:', error));
//         },
//         error => console.error('Error getting location:', error),
//         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//       );
//     }, []);
  
//     const goToCurrentLocation = () => {
//       // Update the region to the current location
//       Geolocation.getCurrentPosition(
//         position => {
//           const {latitude, longitude} = position.coords;
//           setRegion({...region, latitude, longitude});
//           // Update the location text
//           fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA`,
//           )
//             .then(response => response.json())
//             .then(data => {
//               if (data.results.length > 0) {
//                 setLocation(data.results[0].formatted_address);
//               }
//             })
//             .catch(error => console.error('Error fetching location:', error));
//         },
//         error => console.error('Error getting location:', error),
//         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//       );
//     };
//     const handleMarkerDragEnd = coordinate => {
//       // Use reverse geocoding to get the location name from latitude and longitude
//       fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA`,
//       )
//         .then(response => response.json())
//         .then(data => {
//           console.log('New location:', data);
//           if (data.results.length > 0) {
//             const addressComponents = data.results[0].address_components;
//             let formattedAddress = '';
//             for (let component of addressComponents) {
//               if (component.types.includes('route')) {
//                 formattedAddress += component.long_name + ', ';
//               }
//               if (component.types.includes('sublocality_level_1')) {
//                 formattedAddress += component.long_name + ', ';
//               }
//               if (component.types.includes('locality')) {
//                 formattedAddress += component.long_name + ', ';
//               }
//             }
//             // Remove the trailing comma and space
//             formattedAddress = formattedAddress.trim().slice(0, -1);
//             setLocation(formattedAddress);
//           }
//         })
//         .catch(error => console.error('Error fetching location:', error));
//     };
  
//     const handleNext = () => {
//       saveRegistrationProgress('Location', {location});
//       // Navigate to the next screen
//       navigation.navigate('Gender');
//     };
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={{marginTop: 90, marginHorizontal: 20}}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <View
//             style={{
//               width: 44,
//               height: 44,
//               borderRadius: 22,
//               borderColor: 'black',
//               borderWidth: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <MaterialCommunityIcons
//               name="location-exit"
//               size={26}
//               color="black"
//             />
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
//           Where do you live?
//         </Text>
//         <MapView
//           initialRegion={{
//             latitude: 13.0451,
//             longitude: 77.6269,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           style={{width: '100%', height: 500, marginTop: 20, borderRadius: 5}}>
//           <Marker
//             onDragEnd={e => handleMarkerDragEnd(e.nativeEvent.coordinate)}
//             draggable
//             coordinate={coordinates[1]}>
//             <View
//               style={{backgroundColor: 'black', padding: 12, borderRadius: 20}}>
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: 14,
//                   fontWeight: '500',
//                 }}>
//                 {location}
//               </Text>
//             </View>
//           </Marker>
//         </MapView>
        
//         </View>
//     </SafeAreaView>
//   )
// }

// export default LocationScreen

// const styles = StyleSheet.create({})


// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from 'expo-location';

// const LocationScreen = ({ navigation }) => {
 
//   const [location, setLocation] = useState('');
//   const [region, setRegion] = useState({
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });
//   const [coordinates] = useState([
//     {
//         latitude: 37.7749, // Default to San Francisco
//     longitude: -122.4194,
//     },
//     {
//         latitude: 13.0451, 
//     longitude: 77.6269,
//     }
//   ])

//   useEffect(() => {
//     // Get the current location
//     Geolocation.getCurrentPosition(
//       position => {
//         const {latitude, longitude} = position.coords;
//         setRegion({...region, latitude, longitude});
//         // Use reverse geocoding to get the location name from latitude and longitude
//         fetch(
//           `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA`,
//         )
//           .then(response => response.json())
//           .then(data => {
//             console.log('date', data);
//             if (data.results.length > 0) {
//               setLocation(data.results[0].formatted_address);
//             }
//           })
//           .catch(error => console.error('Error fetching location:', error));
//       },
//       error => console.error('Error getting location:', error),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//   }, []);
//   const [errorMsg, setErrorMsg] = useState(null);

// //   useEffect(() => {
// //     (async () => {
// //       // Request location permissions
// //       let { status } = await Location.requestForegroundPermissionsAsync();
// //       if (status !== 'granted') {
// //         setErrorMsg('Permission to access location was denied');
// //         return;
// //       }

// //       // Get the current location
// //       let currentLocation = await Location.getCurrentPositionAsync({});
// //       setRegion({
// //         latitude: currentLocation.coords.latitude,
// //         longitude: currentLocation.coords.longitude,
// //         latitudeDelta: 0.0922,
// //         longitudeDelta: 0.0421,
// //       });

// //       // Reverse geocoding to get location address
// //       let reverseGeocode = await Location.reverseGeocodeAsync({
// //         latitude: currentLocation.coords.latitude,
// //         longitude: currentLocation.coords.longitude,
// //       });

// //       if (reverseGeocode.length > 0) {
// //         const { street, city, region } = reverseGeocode[0];
// //         setLocation(`${street}, ${city}, ${region}`);
// //       }
// //     })();
// //   }, []);

// //   const handleMarkerDragEnd = async (coordinate) => {
// //     setRegion({
// //       ...region,
// //       latitude: coordinate.latitude,
// //       longitude: coordinate.longitude,
// //     });

// //     // Reverse geocode new coordinates
// //     let reverseGeocode = await Location.reverseGeocodeAsync({
// //       latitude: coordinate.latitude,
// //       longitude: coordinate.longitude,
// //     });

// //     if (reverseGeocode.length > 0) {
// //       const { street, city, region } = reverseGeocode[0];
// //       setLocation(`${street}, ${city}, ${region}`);
// //     }
// //   };

// //   const handleNext = () => {
// //     // Save the location and navigate to the next screen
// //     navigation.navigate('Gender', { location });
// //   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={{ marginTop: 90, marginHorizontal: 20 }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <View
//             style={{
//               width: 44,
//               height: 44,
//               borderRadius: 22,
//               borderColor: 'black',
//               borderWidth: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <MaterialCommunityIcons name="location-exit" size={26} color="black" />
//           </View>
//           <Image
//             style={{ width: 100, height: 40 }}
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
//           }}
//         >
//           Where do you live?
//         </Text>
//         <MapView style={{width: '100%', height: 500, marginTop: 20, borderRadius: 5}}>
//           <Marker draggable coordinate={coordinates[1]}>
//             <View  style={{backgroundColor: 'black', padding: 12, borderRadius: 20}}>
//             <Text
//                 style={{
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: 14,
//                   fontWeight: '500',
//                 }}>
//                 {location}
//               </Text>
//             </View>
//           </Marker>
//         </MapView>
//         {/* <MapView
//           provider={PROVIDER_GOOGLE}
//           region={region}
//           style={{ width: '100%', height: 500, marginTop: 20, borderRadius: 5 }}
//         >
//           <Marker
//             coordinate={{
//               latitude: region.latitude,
//               longitude: region.longitude,
//             }}
//             draggable
//             onDragEnd={(e) => handleMarkerDragEnd(e.nativeEvent.coordinate)}
//           >
//             <View
//               style={{ backgroundColor: 'black', padding: 12, borderRadius: 20 }}
//             >
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: 14,
//                   fontWeight: '500',
//                 }}
//               >
//                 {location || 'Drag me!'}
//               </Text>
//             </View>
//           </Marker>
//         </MapView> */}
//         {/* <TouchableOpacity onPress={handleNext} style={{ marginTop: 20 }}>
//           <MaterialCommunityIcons
//             name="arrow-right-circle"
//             size={45}
//             color="#581845"
//             style={{ alignSelf: 'flex-end' }}
//           />
//         </TouchableOpacity> */}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LocationScreen;

// const styles = StyleSheet.create({});


import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';

const LocationScreen = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Permission Denied', 'Enable location permissions to proceed.');
        return;
      }

      // Get the current location
      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      // Update region and marker
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Reverse geocode to get human-readable location
      let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (reverseGeocode.length > 0) {
        const { street, city, region } = reverseGeocode[0];
        setLocation(`${street}, ${city}, ${region}`);
      }
    })();
  }, []);

  const handleMarkerDragEnd = async (coordinate) => {
    const { latitude, longitude } = coordinate;
    setRegion({ ...region, latitude, longitude });

    // Reverse geocode the new location
    let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (reverseGeocode.length > 0) {
      const { street, city, region } = reverseGeocode[0];
      setLocation(`${street}, ${city}, ${region}`);
    }
  };

  const handleNext = () => {
    saveRegistrationProgress('Location', {location});
    // Navigate to the next screen
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="map-marker" size={26} color="#ffb60a" />
        </View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
          }}
        />
      </View>
      <Text style={styles.title}>Where do you live?</Text>
      <MapView
        region={region}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        onRegionChangeComplete={setRegion}
      >
        <Marker
        // onDragEnd={e => handleMarkerDragEnd(e.nativeEvent.coordinate)}
          draggable
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          onDragEnd={(e) => handleMarkerDragEnd(e.nativeEvent.coordinate)}
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>{location || 'Loading...'}</Text>
          </View>
        </Marker>
      </MapView>
      <TouchableOpacity
           onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 20, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{alignSelf: 'center', marginTop: 20}}
          />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { marginTop: 90, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#581845',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: 100, height: 40, marginLeft: 10 },
  title: { fontSize: 25, fontWeight: 'bold', marginTop: 15 },
  map: { width: '100%', height: 500, marginTop: 20, borderRadius: 5 },
  marker: { backgroundColor: 'black', padding: 8, borderRadius: 5 },
  markerText: { color: 'white', fontSize: 14, fontWeight: '500' },
});

export default LocationScreen;

