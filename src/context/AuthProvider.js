import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  // create a new user 
  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in a existing user 
  const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  // update a user 
  const updateUser = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo);
  }

  // sign out a user 
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  // auth observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setLoading(false)
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