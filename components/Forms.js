import "./Forms.css"
export const JobProviderForm = () => {
  return (
    <div className="JobProviderForm">
      <h2>Become a Job Provider</h2>
      <label className="form-label">Company Name:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Website URL:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Contact Email:</label>
      <input type="email" className="form-input" />
      <label className="form-label">Contact Phone Number:</label>
      <input type="tel" className="form-input" />
      <button className="form-button">Sign Up</button>
    </div>
  );
};
export const ApplyForJobForm = () => {
  return (
    <div className="ApplyForJobForm">
      <h2>Find Your Dream Job</h2>
      <label className="form-label">Desired Job Title:</label>
      <input type="text" className="form-input" />
      <label className="form-label">Skills and Experience:</label>
      <textarea className="form-input" rows="4"></textarea>
      <label className="form-label">Resume Upload:</label>
      <input type="file" className="form-input" />
      <button className="form-button">Submit Application</button>
    </div>
  );
};
export const EnrollAsWorkerForm = () => {
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
      <button className="form-button">Sign Up</button>
    </div>
  );
};
