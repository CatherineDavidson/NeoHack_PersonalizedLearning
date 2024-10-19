import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => <li key={index}>{achievement}</li>)
        ) : (
          <p>No achievements yet. Complete courses to earn achievements!</p>
        )}
      </ul>
    </div>
  );
};

export default Achievements;
