import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initialization from "../Firebase/firebase.init"
import { useState } from "react";

initialization();
const Usefirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    // sign in using google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user
                // console.log(user);
                setUser(user);
            }).catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    }

    return{
        user,
        error,
        signInUsingGoogle,
    }

};

export default Usefirebase;