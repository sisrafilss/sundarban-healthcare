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
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    // handle sign in with google
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message)
            });
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

    return {
        user,
        error,
        registerNewUserUsingEmailPassword,
        loginUserUsingEmailPassword,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;