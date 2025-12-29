import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setloading] = useState(true);

    // console.log(loading,user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        auth,
        loading,
        setloading,
        updateUser,
    };
   
    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;