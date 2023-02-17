import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  // create a new user 
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in a existing user 
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  const authInfo = {
    createUser,
    signInUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;