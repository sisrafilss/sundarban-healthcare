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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    //Create a password-based account
    const registerNewUserUsingEmailPassword = (name, email, password) => {
        // checking password length only
        if(!passwordCehck(password)) {
            return;
        }
        setIsLoading(true);
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
            }).finally( () => {
                setIsLoading(false);
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
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            
    }


    // handle sign in with google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
             
    }

    // getting current user by observing Auth object
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    })

    // Logging out current user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally( () => {
            setIsLoading(false);
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
        isLoading,
        registerNewUserUsingEmailPassword,
        loginUserUsingEmailPassword,
        signInUsingGoogle,
        logOut,
        setUser,
        setError,
        setIsLoading
    }
}

export default useFirebase;