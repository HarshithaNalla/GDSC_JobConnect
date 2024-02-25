import React, { useState } from "react";
import "./Forms.css"; // Import your CSS file
import { doc, setDoc, collection, getDocs,where } from "firebase/firestore";
import db from '../firebase';
import { uid } from "../SignUp";
import { usercred } from "../SignUp";

export const JobProviderForm = ({ userid }) => {
  const jpf = async (e) => {
    e.preventDefault();
    try {
      const xCollectionRef = collection(db, 'users');
      const typesDocRef = doc(xCollectionRef, 'types');
      const yCollectionRef = collection(typesDocRef, 'JobProviders');
      const newDocRef = doc(yCollectionRef);

      const dataToAdd = {
        company: document.getElementById('company').value,
        providerurl: document.getElementById('providerurl').value,
        phone: document.getElementById('provideremail').value,
        providercontact: document.getElementById('providercontact').value,
        isjobprovider: true,
        userid: uid,
      };
      console.log(dataToAdd);

      await setDoc(newDocRef, dataToAdd);

      console.log('Data added to "y" collection successfully');
    } catch (error) {
      console.error('Error adding data to "y" collection:', error);
    }
  };

  return (
    <div className="form-inner">
      <h2>Become a Job Provider</h2>
      <label className="form-label">Company Name:</label>
      <input type="text" className="form-input" id="company" required />
      <label className="form-label">Website URL:</label>
      <input type="text" className="form-input" id="providerurl" />
      <label className="form-label">Contact Email:</label>
      <input type="email" className="form-input" id="provideremail" required />
      <label className="form-label">Contact Phone Number:</label>
      <input type="tel" className="form-input" id="providercontact" required />
      <button type="submit" onClick={jpf} className="form-button">
        Sign Up
      </button>
    </div>
  );
};

export const ApplyForJobForm = ({ uid }) => {
  const asjf = async (e) => {
    try {
      const xCollectionRef = collection(db, 'users');
      const typesDocRef = doc(xCollectionRef, 'types');
      const yCollectionRef = collection(typesDocRef, 'JobSeekers');
      const newDocRef = doc(yCollectionRef);

      const dataToAdd = {
        job: document.getElementById('applyingjob').value,
        experience: document.getElementById('applyingexperience').value,
        isjobseeker: true,
        userid: uid,
      };

      await setDoc(newDocRef, dataToAdd);

      console.log('Data added to "y" collection successfully');
    } catch (error) {
      console.error('Error adding data to "y" collection:', error);
    }
  };

  return (
    <div className="form-inner">
      <h2>Find Your Dream Job</h2>
      <label className="form-label">Enter Your Name:</label>
      <input type="text" className="form-input" id="applyingjobname" />
      <label className="form-label">Desired Job Role</label>
      <input type="text" className="form-input" id="applyingjob" />
      <label className="form-label">Experience</label>
      <input type="number" className="form-input" id="applyingjob" />
      <label className="form-label">Skills and Experience:</label>
      <textarea className="form-input" rows="4" id="applyingexperience"></textarea>
      <label className="form-label" id="applyingresume">Resume Upload:</label>
      <input type="file" className="form-input" />
      <button type="submit" className="form-button" onClick={asjf}>
        Submit Application
      </button>
    </div>
  );
};

export const EnrollAsWorkerForm = ({ uid }) => {
  const eaw = async (e) => {
    e.preventDefault();
    try {
      const xCollectionRef = collection(db, 'users');
      const typesDocRef = doc(xCollectionRef, 'types');
      const yCollectionRef = collection(typesDocRef, 'Workers');
      const newDocRef = doc(yCollectionRef);

      const dataToAdd = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        skillsAndQualifications: document.getElementById('skillsAndQualifications').value,
        role:document.getElementById('Job_Role').value,
        location: document.getElementById('location').value,
        isworker: true,
        userid: uid,
      };

      await setDoc(newDocRef, dataToAdd);

      console.log('Data added to "y" collection successfully');
    } catch (error) {
      console.error('Error adding data to "y" collection:', error);
    }
  };

  return (
    <div className="form-inner">
      <h2>Connect with Jobs</h2>
      <label className="form-label">First Name:</label>
      <input type="text" className="form-input" id="firstName" />
      <label className="form-label">Last Name:</label>
      <input type="text" className="form-input" id="lastName" />
      <label className="form-label">Job Role:</label>
      <input type="text" className="form-input" id="Job_Role" />
      <label className="form-label">Skills and Qualifications:</label>
      <textarea className="form-input" rows="4" id="skillsAndQualifications"></textarea>
      <label className="form-label">Location (City, State):</label>
      <input type="text" className="form-input" id="location" />
      <button type="submit" className="form-button" onClick={eaw}>
        Sign Up
      </button>
    </div>
  );
};
