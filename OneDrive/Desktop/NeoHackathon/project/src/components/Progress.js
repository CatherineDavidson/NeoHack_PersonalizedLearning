import React from 'react';
import './Progress.css'; // You can style this component with CSS

const Progress = ({ progress }) => {
  return (
    <div className="progress-container">
      <h2>Daily Progress</h2>
      <div className="progress-details">
        <div className="progress-item">
          <h3>Hours Worked</h3>
          <p>{progress.hoursWorked} hours</p>
        </div>
        <div className="progress-item">
          <h3>Completion Percentage</h3>
          <p>{progress.completionPercentage}%</p>
        </div>
      </div>

      {/* Display progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress.completionPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
