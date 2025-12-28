import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
    };
   
    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;