import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUp.css';


function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .catch((error) => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => { 
         alert(error.message);
        });
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button onClick={register || signIn} type="submit">Sign In</button>
                <h4><span className="signUp__gray">New to ndITsec Prime? </span><span onClick={register || signIn} className="signUp__link">Sign Up Now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp
