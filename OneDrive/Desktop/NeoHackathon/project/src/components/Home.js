import React from 'react';
import './Home.css'; // Import CSS for styling
import { BookOpen, Target, Trophy, Calendar, Users, Lightbulb } from 'lucide-react'; // Import icons

const Home = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <h1 className="welcome-heading">Welcome to Your Learning Journey</h1>
      <p className="intro-text">Explore personalized options to enhance your learning experience.</p>
      
      <div className="quick-access">
        <h2>Quick Access</h2>
        <div className="quick-links">
          <div className="link-card">
            <BookOpen className="card-icon" />
            <h3>Study Planner</h3>
            <p>Create and manage your personalized study schedule.</p>
            <button className="link-button" onClick={() => onNavigate('planner')}>Plan Your Study</button>
          </div>
          <div className="link-card">
            <Target className="card-icon" />
            <h3>Set Goals</h3>
            <p>Define and track your learning objectives.</p>
            <button className="link-button" onClick={() => onNavigate('goals')}>Set New Goals</button>
          </div>
          <div className="link-card">
            <Trophy className="card-icon" />
            <h3>Achievements</h3>
            <p>View and celebrate your learning milestones.</p>
            <button className="link-button" onClick={() => onNavigate('achievements')}>View Achievements</button>
          </div>
        </div>
      </div>
      
      <div className="additional-features">
        <h2>Explore More</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <Calendar className="feature-icon" />
            <h3>Upcoming Events</h3>
            <p>Check out workshops, webinars, and live sessions.</p>
            <button className="link-button" onClick={() => onNavigate('events')}>View Calendar</button>
          </div>
          <div className="feature-item">
            <Users className="feature-icon" />
            <h3>Study Groups</h3>
            <p>Join or create study groups with fellow learners.</p>
            <button className="link-button" onClick={() => onNavigate('groups')}>Find Groups</button>
          </div>
          <div className="feature-item">
            <Lightbulb className="feature-icon" />
            <h3>Resource Library</h3>
            <p>Access a wide range of learning materials and tools.</p>
            <button className="link-button" onClick={() => onNavigate('resources')}>Explore Resources</button>
          </div>
        </div>
      </div>
      
      <div className="quote-section">
        <h2>Inspiration for Today</h2>
        <blockquote>"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." - Brian Herbert</blockquote>
      </div>
    </div>
  );
};

export default Home;