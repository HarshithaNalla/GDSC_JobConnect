import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Section.css";
import { JobProviderForm, ApplyForJobForm, EnrollAsWorkerForm } from "./Forms";

export default function Section() {
  const history = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        history("/signup");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const [activeForm, setActiveForm] = useState(null); // Manage active form state

  const handleFormClick = (formType) => {
    setActiveForm(formType);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <div>
      <section className="section">
        <div className="bmc">
        <h2>Looking for opportunities?</h2>
          <div className="boxes-container">
            
            <div
              className="box box-job-provider"
              onClick={() => handleFormClick("jobProvider")}
            >
              <h3>Be a Job Provider</h3>
              <p>Post jobs, manage applications, and hire top talent.</p>
            </div>
            <div
              className="box box-apply-for-job"
              onClick={() => handleFormClick("applyForJob")}
            >
              <h3>Apply for Jobs</h3>
              <p>Browse open positions and find your dream job.</p>
            </div>
            <div
              className="box box-enroll-as-worker"
              onClick={() => handleFormClick("enrollAsWorker")}
            >
              <h3>Enroll as a Worker</h3>
              <p>Sign up to connect with potential jobs and employers.</p>
            </div>
          </div>
        </div>
        {activeForm && (
          <div className={`form-container form-${activeForm}`}>
            <div className="form-inner">
              <button className="close-button" onClick={closeForm}>
                &times;
              </button>
              {activeForm === "jobProvider" && <JobProviderForm />}
              {activeForm === "applyForJob" && <ApplyForJobForm />}
              {activeForm === "enrollAsWorker" && <EnrollAsWorkerForm />}
            </div>
          </div>
        )}
      </section>

      <button onClick={logout}>Log out</button>
    </div>
  );
}
