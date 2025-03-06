// import {createContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//   const [token, setToken] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const login = () => {
//     setToken('token');
//     setIsLoading(false);
//   };

//   const register = () => {
//     setToken('');
//     setIsLoading(false);
//   };

//   const isLoggedIn = async () => {
//     try {
//       setIsLoading(true);
//       const userToken = await AsyncStorage.getItem('token');
//       setToken(userToken);
//       setIsLoading(false);
//     } catch (error) {
//       console.log('error', error);
//     }
//   };
//   useEffect(() => {
//       isLoggedIn()
//   },[token]);
//   useEffect(() => {
//     // Check if token is set and trigger navigation accordingly
//     if (token) {
//       // Perform navigation or any other action
//       console.log('Token set, performing navigation...');
//     }
//   }, [token]);
//   return (
//     <AuthContext.Provider value={{token, isLoading, login, register, setToken}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export {AuthContext, AuthProvider};




// import {createContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//   const [token, setToken] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const login = () => {
//     setToken('token');
//     setIsLoading(false);
//   };

//   const register = () => {
//     setToken('');
//     setIsLoading(false);
//   };

//   const isLoggedIn = async () => {
//     try {
//       setIsLoading(true);
//       const userToken = await AsyncStorage.getItem('token');
//       setToken(userToken);
//       setIsLoading(false);
//     } catch (error) {
//       console.log('error', error);
//     }
//   };
//   useEffect(() => {
//       isLoggedIn()
//   },[token]);
//   useEffect(() => {
//     // Check if token is set and trigger navigation accordingly
//     if (token) {
//       // Perform navigation or any other action
//       console.log('Token set, performing navigation...');
//     }
//   }, [token]);
//   return (
//     <AuthContext.Provider value={{token, isLoading, login, register, setToken}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export {AuthContext, AuthProvider};



import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async (tokenValue) => {
    setIsLoading(true);
    await AsyncStorage.setItem('token', tokenValue);
    setToken(tokenValue);
    setIsLoading(false);
  };

  const register = async () => {
    setIsLoading(true);
    setToken('');
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('token');
    setToken('');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken || '');
    } catch (error) {
      console.log('Error checking login status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ token, isLoading, login, register, logout, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
