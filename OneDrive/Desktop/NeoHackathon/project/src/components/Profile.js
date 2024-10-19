// import React , {useState} from 'react';
// import Home from './Home';
// import Settings from './Settings';

// const Profile = () =>
// {
// const [activePage, setActivePage] = useState("home"); // Control the page rendering
//   const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility
//   const [profileData, setProfileData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     linkedin: "https://linkedin.com/in/johndoe",
//   });

//   // Toggle dropdown menu
//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   // Render different page content based on `activePage`
//   const renderContent = () => {
//     switch (activePage) {
//       case "profile":
//         return <ProfileForm profileData={profileData} setProfileData={setProfileData} />;
//       case "settings":
//         return <Settings />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar setActivePage={setActivePage} />
//       <div className="main-content">{renderContent()}</div>

//       {/* Profile section in the top right */}
//       <div className="profile-container">
//         <div className="profile-circle" onClick={toggleDropdown}>
//           {profileData.firstName[0]} {/* Display the first letter of the user's first name */}
//         </div>
//         {showDropdown && (
//           <div className="dropdown-menu">
//             <a
//               onClick={() => {
//                 setActivePage("profile");
//                 setShowDropdown(false);
//               }}
//             >
//               My Profile
//             </a>
//             <a
//               onClick={() => {
//                 setActivePage("settings");
//                 setShowDropdown(false);
//               }}
//             >
//               Settings
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function Sidebar({ setActivePage }) {
//   return (
//     <div className="sidebar">
//       <h2>Personalized Learning Platform</h2>
//       <nav>
//         <ul>
//           <li><a onClick={() => setActivePage("home")}>Home</a></li>
//           <li><a onClick={() => setActivePage("courses")}>Courses</a></li>
//           <li><a onClick={() => setActivePage("progress")}>Daily Progress</a></li>
//           <li><a onClick={() => setActivePage("achievements")}>Achievements</a></li>
//           <li><a onClick={() => setActivePage("gaming")}>Gaming</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// // Form for the profile section
// function ProfileForm({ profileData, setProfileData }) {
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({ ...profileData, [name]: value });
//   };

//   return (
//     <div className="profile-page">
//       <h1>My Profile</h1>
//       <form>
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={profileData.firstName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={profileData.lastName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={profileData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={profileData.phone}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           LinkedIn ID:
//           <input
//             type="url"
//             name="linkedin"
//             value={profileData.linkedin}
//             onChange={handleInputChange}
//           />
//         </label>
//       </form>
//     </div>
//   );
// }
// export default Profile;
import React, { useState } from 'react';
import Home from './Home';    // Assuming you have a Home component
import Settings from './Settings';    // Assuming you have a Settings component

const Profile = () => {
  const [activePage, setActivePage] = useState("home"); // Control the page rendering
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedin: "https://linkedin.com/in/johndoe",
  });

  // Toggle dropdown menu
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Render different page content based on `activePage`
  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <ProfileForm profileData={profileData} setProfileData={setProfileData} />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
        {renderContent()}
      </div>

      {/* Profile section in the top right */}
      <div className="profile-container">
        <div className="profile-circle" onClick={toggleDropdown}>
          {profileData.firstName[0]} {/* Display the first letter of the user's first name */}
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <a
              onClick={() => {
                setActivePage("profile");
                setShowDropdown(false);
              }}
            >
              My Profile
            </a>
            <a
              onClick={() => {
                setActivePage("settings");
                setShowDropdown(false);
              }}
            >
              Settings
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <h2>Personalized Learning Platform</h2>
      <nav>
        <ul>
          <li><a onClick={() => setActivePage("home")}>Home</a></li>
          <li><a onClick={() => setActivePage("courses")}>Courses</a></li>
          <li><a onClick={() => setActivePage("progress")}>Daily Progress</a></li>
          <li><a onClick={() => setActivePage("achievements")}>Achievements</a></li>
          <li><a onClick={() => setActivePage("gaming")}>Gaming</a></li>
        </ul>
      </nav>
    </div>
  );
}

// Form for the profile section
function ProfileForm({ profileData, setProfileData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          LinkedIn ID:
          <input
            type="url"
            name="linkedin"
            value={profileData.linkedin}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Profile;
