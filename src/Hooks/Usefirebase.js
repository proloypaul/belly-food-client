import { getAuth, signInWithPopup,createUserWithEmailAndPassword , GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user
                // console.log(user);
                setUser(user);
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
    const registerUsingEmailAndPassword = (email, password, userImage, firstName, lastName) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) =>{
                // const user = result.user;
                // console.log(user);
                const userName = firstName+ " " + lastName;
                const registeredUser = {email, photo_URL: userImage, displayName: userName};
                console.log(registeredUser);
                setUser(registeredUser);
                console.log(user);
            }).catch(error => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
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
        signOutProcess
    }

};

export default Usefirebase;