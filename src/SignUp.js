import React, { useState } from "react";
import "./style.css"; // Import your CSS file
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
// import { MyContext } from "./MyContext";
import emailjs from "@emailjs/browser";
import Loading from "./Loading";
// import Loading from "./Loading";
let uid;
let usercred;
const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isloading, setisloading] = useState(false);
  let isloading=false;
  const setisloading=(val)=> {
    isloading = val;
    console.log(`Is loading: ${isloading}`);
  }
  const [verified,setverified]=useState(false);
  // const db = fir;
  
  const createUser = async (e) => {
    // load.style.display="block";
    e.preventDefault();
    
    if(verified)
    {
     await setisloading(true);
     console.log(isloading);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.id);
        uid=userCredential.user.uid;
        usercred = userCredential;
        setLoggedIn(true);
        // <Navigate to="/Home" />
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    else
    {
      alert("First verify your email");
    }
    setisloading(false);
  };
  
  const signIn = async (e) => {
    e.preventDefault();
    await setisloading(true);
    console.log(isloading);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        uid=userCredential.user.uid;
        usercred = userCredential;
        // <MyContext.Provider value={userCredential.user.uid}>
        //   {/* <ChildComponent /> */}
        // </MyContext.Provider>;
        // alert(userCredential);
        // <Navigate to="/Home" />
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(error.message);
      });
      setisloading(false);
  };
  

  const logout = (e) => {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    setActive(!isActive);
    // You can setLoggedIn(true) here if needed
  };
  function generateOTP() {
    // Generate a 6 digit random number
    const otp = Math.floor(100000 + Math.random() * 900000);
    // Ensure the number is exactly 6 digits
    return otp.toString().substring(0, 6);
}
const [otp,setotp]=useState("");
const [otpsent,setotpsent]=useState(false);
const service_id="service_t7clnml";
const template_id="template_43s5e4j";
const public_key="4jr4qt1miWuV4Bglg";
const sendotp = async (e)=>
{
  await setotpsent(true);
  console.log(otp);
  setotp(await  generateOTP());
  const templateParams={
    to_name: document.getElementById('otpemail').value,
    message:"Your OTP is :"+otp+" kindly do not share otp with others",
    from_name:"Team Job_Connect",
    reply_to:document.getElementById('otpemail').value
  }
  console.log(templateParams);
  e.preventDefault();
  
  // ab.style.display='none';
  // cd.style.display='block';
  console.log(email);
  console.log(document.getElementById('otpemail').value);
  emailjs.send(service_id,template_id,templateParams,public_key)
  .then((response)=>{
    console.log("Email sent succesfully");
  })
  .catch((error)=>
  {
    console.log("Error occured");
    console.log(error);
  });
  console.log(otp);
}
const verifyotp=(e)=>
{
  e.preventDefault();
  const x=document.getElementById('enteredotp').value;
  console.log(x+" "+otp);
  if(x==otp)
  {
    setverified(true);
  }

}
const ab=document.getElementById('sendotp');
const cd=document.getElementById('verifyotp');

// load.style.display='none';
// cd.style.display='none';
  return (
    <>
    {/* { !isloading && <Loading id="load" />} */}
    <Loading id="load" />
    <div>
      {loggedIn && <Navigate to={"/home"} />}
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={createUser}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span> <br />
            <input type="text" placeholder="Name" />
            <input
              type="email"
              value={email}
              id="otpemail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <div className="otp">
              <input type="text" placeholder="Enter your OTP here" id="enteredotp"/>
               { !otpsent && <button id="sendotp" onClick={sendotp}>send otp</button>}
               { otpsent && <button id="verifyotp" onClick={verifyotp}>Verify OTP</button>}

            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Up sign</button>
            <div className="social-icons">{/* ... */}</div>
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
            <button
              type="submit"
              onClick={() => {
                <Navigate to="/Loading" />;
              }}
            >
              Sign In
            </button>
            <div className="social-icons">{/* ... */}</div>
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
    </>
  );
};
export default SignUp;
export {uid};
export {usercred};