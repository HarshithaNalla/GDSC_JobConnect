import React, { useState } from "react";
import "./style.css"; // Import your CSS file
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signupwithgoogle } from "firebase/auth";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isloading, setisloading]=useState(false);

  const createUser = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        <Navigate to="/Home" />
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    <Navigate to="/Loading" />
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert(userCredential);
        <Navigate to="/Home" />
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = (e) => {
    signOut(auth).then(() => {
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleToggle = () => {
    setActive(!isActive);
    // You can setLoggedIn(true) here if needed
  };


  return ( 
    <div>
      {loggedIn && <Navigate to="/home" />} {/* Redirect if logged in */}
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={createUser}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span> <br />
            <input type="text" placeholder="Name" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Up sign</button>
            <div className="social-icons">
              {/* ... */}
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={signIn}>
            <h1>Sign In</h1>
            <span>or use your email password</span> <br />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit" onClick={()=>{<Navigate to="/Loading" />}}>Sign In</button>
            <div className="social-icons">
              {/* ... */}
            </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div
              className={`toggle-panel toggle-left ${
                isActive ? "container.active" : ""
              }`}
            >
              <h1>Hello User!</h1>
              <p>Enter your details to Know about our web</p>
              <p> already had an account?</p>
              <button className="hidden" onClick={handleToggle} id="login">
                Sign In
              </button>
            </div>
            <div
              className={`toggle-panel toggle-right ${
                isActive ? "container.active" : ""
              }`}
            >
              <h1>
                Hello, Friend! <br /> Welcome back{" "}
              </h1>
              <p>Enter Your Login Details to Explore Our Web</p>
              <button className="hidden" onClick={handleToggle} id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
