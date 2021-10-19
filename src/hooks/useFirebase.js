import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();


    //Create a password-based account
    const registerNewUserUsingEmailPassword = (name, email, password) => {

        if(!passwordCehck(password)) {
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                updateUser();
                console.log(result.user);
                setError('');

            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message)
            });

        const updateUser = () => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
        }
    }

    const loginUserUsingEmailPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
            
    }


    // handle sign in with google
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
             
    }

    // getting current user by observing Auth object
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
            }
        });
    })

    // Logging out current user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }

    // Basic Password Checker
    const passwordCehck = (password) => {
        if (password.length < 6) {
            setError('Password must be more than 6 characters.');
            return false;
        }
        else {
            return true;
        }
    }

    return {
        user,
        error,
        registerNewUserUsingEmailPassword,
        loginUserUsingEmailPassword,
        signInUsingGoogle,
        logOut,
        setUser,
        setError
    }
}

export default useFirebase;