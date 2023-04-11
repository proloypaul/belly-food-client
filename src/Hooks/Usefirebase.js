import { getAuth, signInWithPopup,createUserWithEmailAndPassword , GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initialization from "../Firebase/firebase.init"
import { useEffect, useState } from "react";

initialization();
const Usefirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState();
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    // sign in using google
    const signInUsingGoogle = (navigation, location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user
                // console.log(user);
                setUser(user);
                setError("");
                const destination = location?.state?.from || "/";
                navigation(destination);
            }).catch(error => {
                // console.log(error.message);
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // onAuth state change signin and sign out process
    // onAuthStateChange signin and signup state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    }, [auth]) 


    // register with email and password
    const registerUsingEmailAndPassword = (email, password, userImage, firstName, lastName, navigation) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) =>{
                // const user = result.user;
                // console.log(user);
                const userName = firstName+ " " + lastName;
                const registeredUser = {email, photoURL: userImage, displayName: userName};
                // console.log(registeredUser);
                setUser(registeredUser);
                // update registered user
                updateProfile(auth.currentUser, {
                    displayName: userName, photoURL: userImage
                }).then(() => {
                    // profile updated!
                }).catch(error => {
                    setError(error.message);
                });

                navigation('/');
                setError("");
            }).catch(error => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

    // sign in using email and password
    const loginWithEmailAndPassword = (email, password, navigation, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user)
                setError('')
                const destination = location?.state?.from || '/';
                navigation(destination)
            }).catch(error => {
                setError(error);
            })
    }

    // signout process
    const signOutProcess = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({})
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    } 
    

    return{
        user,
        error,
        isLoading,
        signInUsingGoogle,
        registerUsingEmailAndPassword,
        loginWithEmailAndPassword,
        signOutProcess
    }

};

export default Usefirebase;