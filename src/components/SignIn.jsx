import React, { use } from 'react';
import { AuthContext } from './contexts/AuthContext';

const SignIn = () => {
    const {signInUser} = use(AuthContext);
    const handleSignIn = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //firebase sign in
        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            const signInInfo = {
               
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime

            }

            //Update signIn info to the database

            fetch('http://localhost:3000/users', {

                method: "PATCH",
                headers:{
                    'content-type': 'application/json'
                },

                body: JSON.stringify(signInInfo)


            })
            .then(res=> res.json())
            .then(data => {
                console.log("After update", data)
            })
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up!</h1>
        <form onSubmit={handleSignIn} className="fieldset">

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Log in</button>
        </form>
      </div>
    </div>
    );
};

export default SignIn;