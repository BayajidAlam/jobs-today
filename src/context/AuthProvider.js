import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  // create a new user 
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in a existing user 
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  // update a user 
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  }

  // sign out a user 
  const signOutUser = () => {
    return signOut(auth);
  }

  // auth observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
    })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUser,
    signOutUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;