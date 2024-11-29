import React, { useState } from 'react';
import app from '../../firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    console.log(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGooglesignIn = () => {
        // console.log('ok');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginuser = result.user;
                console.log(loginuser);
                setUser(loginuser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }



    const handleSignout = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const handleGithubsignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result=> {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error=> {
            console.log('error', error);
        })
    }

    return (
        <div>
            {
                user ? <button onClick={handleSignout}>Sign Out </button> :
                    <div>
                        <button onClick={handleGooglesignIn}>Google Login</button>
                        <button onClick={handleGithubsignIn}>Github Login</button>
                    </div>

            }
            {
                user && <div>
                    <h3>Name : {user.displayName}</h3>
                    <p>Email : {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;