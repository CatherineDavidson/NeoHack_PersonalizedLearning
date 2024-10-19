
import React, { useState } from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import './App.css'; 

const App = () => {
  const [profileData, setProfileData] = useState({ name: 'John Doe', role: 'Student' });
  const [courses, setCourses] = useState([
    { id: 1, name: 'React Basics', completed: true },
    { id: 2, name: 'Advanced JavaScript', completed: false }
  ]);
  const [progress, setProgress] = useState({ hoursWorked: 10, completionPercentage: 50 });
  const [achievements, setAchievements] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleCourseCompletion = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, completed: true } : course
    ));
    const completedCourse = courses.find(course => course.id === courseId);
    if (completedCourse && !achievements.includes(completedCourse.name)) {
      setAchievements([...achievements, completedCourse.name]);
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'courses':
        return <Courses courses={courses} onComplete={handleCourseCompletion} />;
      case 'progress':
        return <Progress progress={progress} />;
      case 'achievements':
        return <Achievements achievements={achievements} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 style={{ color:'white' }}>Personalized Learning</h2>
        <nav>
          <ul>
            <li><button onClick={() => handleNavigation('home')}>Home</button></li>
            <li><button onClick={() => handleNavigation('courses')}>Courses</button></li>
            <li><button onClick={() => handleNavigation('progress')}>Daily Progress</button></li>
            <li><button onClick={() => handleNavigation('achievements')}>Achievements</button></li>
            <li>
              <a href="https://gamingwebsite.com" target="_blank" rel="noopener noreferrer">Gaming</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
