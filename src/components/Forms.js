// import { useState } from "react";
import { doc,onSnapshot,setDoc,collection,query,where, addDoc } from "firebase/firestore";
import db from  '../firebase';
import { uid } from "../SignUp";
import { usercred } from "../SignUp";
export const JobProviderForm = ({ userid }) => {
  // const [companyName, setCompanyName] = useState("");
  // const [websiteURL, setWebsiteURL] = useState("");
  // const [contactEmail, setContactEmail] = useState("");
  // const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  // const JobProviderForm = async (e) => {
  //   e.preventDefault();
  //   console.log("ewach");
  //   console.log(usercred);
  //   const providername=document.getElementById('providername');
  //   const providercontact=document.getElementById('providercontact');
  //   if (!providername.value ) return;
  //   const usersCollection = collection(db, 'users');
  //   // const usersid={userid};
  //   console.log(uid);
  //   try {
  //     const newUserDocRef = await addDoc(usersCollection, {
  //       name: 'sri',
  //       user: true,
  //       test:"added",
  //       user_id:uid,
  //     });

  //     console.log('Document added with ID:', newUserDocRef.id);
  //   } catch (error) {
  //     console.error('Error adding document:', error);
  //   }
  // };
  const jpf = async (e)=>
  {
    try {
      // Reference to the "x" collection
      const xCollectionRef = collection(db, 'users');
  
      // Reference to the "types" document within the "x" collection
      const typesDocRef = doc(xCollectionRef, 'types');
  
      // Reference to the "y" collection within the "types" document
      const yCollectionRef = collection(typesDocRef, 'JobProviders');
  
      const newDocRef = doc(yCollectionRef);

      // Data to be added to the "y" collection
      const dataToAdd = {
        company : 'xyz',
        // user_id: uid,
        // Add other fields as needed
      };
  
      // Add the data to the "y" collection
      await setDoc(newDocRef, dataToAdd);
  
      console.log('Data added to "y" collection successfully');
    } catch (error) {
      console.error('Error adding data to "y" collection:', error);
      // Handle errors appropriately
    }
  }
  return (
    <div className="JobProviderForm">
      <h2>Become a Job Provider</h2>
      <label className="form-label">Company Name:</label>
      <input type="text" className="form-input" id="providername" required/>
      <label className="form-label">Website URL:</label>
      <input type="text" className="form-input"id="providerurl" required/>
      <label className="form-label">Contact Email:</label>
      <input type="email" className="form-input" id="provideremail" required />
      <label className="form-label">Contact Phone Number:</label>
      <input type="tel" className="form-input" id="providercontact" required/>
      {/* <button type="submit" className="form-button" onSubmit={jpf}>Sign Up</button> */}
      <button type="submit" onClick={jpf} className="form-button"> sign up</button>
    </div>
  );
};
export const ApplyForJobForm = ({uid}) => {
  const asjf =(e) => {
    e.preventDefault();
    console.log(uid);
  }
  return (

    <div className="ApplyForJobForm">
      <h2>Find Your Dream Job</h2>
      <label className="form-label">Desired Job Title:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Skills and Experience:</label>
      <textarea className="form-input" rows="4"></textarea>
      <label className="form-label">Resume Upload:</label>
      <input type="file" className="form-input" />
      <button type="submit" className="form-button" onClick={asjf} >Submit Application</button>
    </div>
  );
};
export const EnrollAsWorkerForm = ({uid}) => {
  const eaw =(e)=>
  {
    e.preventDefault();
    console.log(uid);
  }
  return (
    <div className="EnrollAsWorkerForm">
      <h2>Connect with Jobs</h2>
      <label className="form-label">First Name:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Last Name:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Skills and Qualifications:</label>
      <textarea className="form-input" rows="4"></textarea>
      <label className="form-label">Location (City, State):</label>
      <input type="text" className="form-input" />
      <button  type="submit" className="form-button" onClick={eaw}>Sign Up</button>
    </div>
  );
};
