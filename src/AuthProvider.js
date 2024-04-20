// AuthProvider.js
import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  );
};
