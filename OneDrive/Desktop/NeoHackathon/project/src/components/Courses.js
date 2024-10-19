import React from 'react';

const Courses = ({ courses, onComplete }) => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.completed ? 'Completed' : 'In Progress'}
            {!course.completed && <button onClick={() => onComplete(course.id)}>Complete Course</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
