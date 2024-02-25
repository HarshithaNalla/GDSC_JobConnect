// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { collection, onSnapshot, doc, getDocs } from "firebase/firestore";
// import db from '../firebase';
// import "./Section.css";
// import { JobProviderForm, ApplyForJobForm, EnrollAsWorkerForm } from "./Forms";
// import { uid } from "../SignUp";

// export default function Section() {
//   const renderWorkers = (workers) => {
//     const workerContainer = document.getElementById("worker_container");
//     workerContainer.innerHTML = "";

//     workers.forEach((worker) => {
//       const workerDiv = document.createElement("div");
//       workerDiv.className = "grid_item";
//       workerDiv.textContent = `Worker: ${worker.name} - Work: ${worker.role}`;
//       workerContainer.appendChild(workerDiv);
//     });
//   };


//   const search_worker=(e)=>
//   {
//     e.preventDefault();
//     const workersCollectionRef = collection(db, "users", "types", "Workers");
//     const search_input= document.getElementById("searchworker").value;
//     const unsub = onSnapshot(
//       workersCollectionRef,
//       (querySnapshot) => {
//         const matchingWorkers = [];
//         querySnapshot.forEach((doc) => {
//           if (doc.data().role === search_input) {
//             matchingWorkers.push(doc.data());
//           }
//         });
//         console.log(matchingWorkers);
//         renderWorkers(matchingWorkers);
//       },
//       (error) => {
//         console.error("Error fetching data:", error);
//       }
//     );
//   }

//   const history = useNavigate();


//   const [activeForm, setActiveForm] = useState(null);

//   const handleFormClick = (formType) => {
//     setActiveForm(formType);
//   };

//   const closeForm = () => {
//     setActiveForm(null);
//   };

//   return (
//     <div className="asdf">
//       <section className="section">
//         <div className="bmc">
//           <h2>Looking for opportunities?</h2>
//           <div className="boxes-container">
//             <div
//               className="box box-job-provider"
//               onClick={() => handleFormClick("jobProvider")}
//             >
//               <h3>Be a Job Provider</h3>
//               <p>Post jobs, manage applications, and hire top talent.</p>
//             </div>
//             <div
//               className="box box-apply-for-job"
//               onClick={() => handleFormClick("applyForJob")}
//             >
//               <h3>Apply for Jobs</h3>
//               <p>Browse open positions and find your dream job.</p>
//             </div>
//             <div
//               className="box box-enroll-as-worker"
//               onClick={() => handleFormClick("enrollAsWorker")}
//             >
//               <h3>Enroll as a Worker</h3>
//               <p>Sign up to connect with potential jobs and employers.</p>
//             </div>
//           </div>
//         </div>
//         <div className={`allforms ${activeForm ? 'show' : ''}`}>
//           {activeForm === "jobProvider" && <JobProviderForm uid={uid} onClose={closeForm} />}
//           {activeForm === "applyForJob" && <ApplyForJobForm uid={uid} onClose={closeForm} />}
//           {activeForm === "enrollAsWorker" && <EnrollAsWorkerForm uid={uid} onClose={closeForm} />}
//           {activeForm && <button className="close-form" onClick={closeForm}>Close Form</button>}
//         </div>
//         <div className="searching">
//           <input placeholder="Search for a worker" id="searchworker"></input>
//           <button id="searchworker" onClick={search_worker}> search </button>
//         </div>
//         <div className="worker_grid" id="worker_container"></div>
//       </section>
//     </div>
//   );
// }



  
//   /* Optional gradient backgrounds for boxes: */
  
//   .box-job-provider {
//     background: linear-gradient(to right, #f9d0c4, #f6b2ab); /* Orange gradient */
//   }
  
//   .box-apply-for-job {
//     background: linear-gradient(to right, #c8e0f3, #b1d0e2); /* Blue gradient */
//   }
  
//   .box-enroll-as-worker {
//     background: linear-gradient(to right, #f2e2c0, #f0dbad); /* Yellow gradient */
//   }
  
//   /* You can add more gradient options or remove them if you prefer */
  
  