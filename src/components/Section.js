import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, onSnapshot, doc, getDocs } from "firebase/firestore";
import db from '../firebase';
import "./Section.css";
import { JobProviderForm, ApplyForJobForm, EnrollAsWorkerForm } from "./Forms";
import { uid } from "../SignUp";
import StarRating from "./StarRating";
import React from 'react';
import ReactDOM from 'react-dom';
export default function Section() {
  const renderWorkers = (workers) => {
    const workerContainer = document.getElementById("worker_container");
    workerContainer.innerHTML = "";

    workers.forEach((worker) => {
      const workerDiv = document.createElement("div");
      workerDiv.className = "grid_item";
      // workerDiv.textContent = `Worker: ${worker.name} <br> Work: ${worker.role}`;
      workerDiv.innerHTML=`<p> Worker: ${worker.name} <br> Work: ${worker.role}</p>`;
      // workerContainer.appendChild(workerDiv);
    //   const starRating = React.createElement(StarRating);

    // // Render the StarRating component inside the workerDiv
    // ReactDOM.render(starRating, workerDiv);

    workerContainer.appendChild(workerDiv);
    });
  };


  const search_worker=(e)=>
  {
    e.preventDefault();
    const workersCollectionRef = collection(db, "users", "types", "Workers");
    const search_input= document.getElementById("searchworker").value;
    console.log(search_input);
    const unsub = onSnapshot(
      workersCollectionRef,
      (querySnapshot) => {
        const matchingWorkers = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().role === search_input) {
            matchingWorkers.push(doc.data());
          }
        });
        console.log(matchingWorkers);
        renderWorkers(matchingWorkers);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }

  const history = useNavigate();


  const [activeForm, setActiveForm] = useState(null);

  const handleFormClick = (formType) => {
    setActiveForm(formType);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="asdf">
      <section className="section">
      <div className="searching">
          <input id="searchworker" type="text" placeholder="Search for worker here"/>
          <button  onClick={search_worker}> search </button>
        </div>
        <div className="worker_grid" id="worker_container"></div>
        <div className="bmc">
        <div className="boxes-container">
            
            <div
              className="box box-job-provider animated-border-box-glow"
              onClick={() => handleFormClick("jobProvider")}
            >
               <img
                src="https://cdn.pixabay.com/photo/2015/06/10/07/03/building-804526_1280.jpg"
                alt="Job Provider"
                className="box-image"
              />
              
              <div className="box-content">
              <h3>Be a Job Provider</h3>
              <p>Post jobs, manage applications, and hire top talent.</p>
              </div>
            </div>
            <div
              className="box box-apply-for-job animated-border-box-glow"
              onClick={() => handleFormClick("applyForJob")}
            >
              <img
                src="https://img.freepik.com/premium-vector/businesswoman-businessman-searching-job_70921-174.jpg?size=626&ext=jpg&ga=GA1.1.1133300491.1706738119&semt=ais"
                alt="Apply for Jobs"
                className="box-image"
              />
              <div className="box-content">
              <h3>Apply for Jobs</h3>
              <p>Browse open positions and find your dream job.</p>
              </div>
            </div>
            <div
              className="box box-enroll-as-worker animated-border-box-glow"
              onClick={() => handleFormClick("enrollAsWorker")}
            >
              <img
                src="https://img.freepik.com/free-vector/people-looking-taxi-onboarding-app-screens_23-2148401000.jpg?size=626&ext=jpg&ga=GA1.1.1133300491.1706738119&semt=ais"
                alt="Enroll as a Worker"
                className="box-image"
              />
              <div className="box-content">
              <h3>Enroll as a Worker</h3>
              <p>Sign up to connect with potential jobs and employers.</p>
              </div>
              
            </div>
          </div>
          <div className={`allforms ${activeForm ? 'show' : ''}`}>
          {activeForm === "jobProvider" && <JobProviderForm uid={uid} onClose={closeForm} />}
          {activeForm === "applyForJob" && <ApplyForJobForm uid={uid} onClose={closeForm} />}
          {activeForm === "enrollAsWorker" && <EnrollAsWorkerForm uid={uid} onClose={closeForm} />}
          {activeForm && <button className="close-form" onClick={closeForm}>Close Form</button>}
        </div> 
        </div>
      </section>
    </div>
  );
}