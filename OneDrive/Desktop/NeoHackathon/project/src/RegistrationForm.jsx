// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     qualification: '',
//     institution: '',
//     dob: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/register', formData);
//       console.log('User registered:', response.data);
//     } catch (error) {
//       console.error('Registration error:', error.response ? error.response.data : error.message);
//       setError('Registration failed. Please try again.');
//     }
//   };
  
//   return (
//     <div>
//       <h2>Registration Page</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
//         <label>Qualification:</label>
//         <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
        
//         <label>Institution:</label>
//         <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
        
//         <label>Date of Birth:</label>
//         <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        
//         {error && <p>{error}</p>}
        
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import CSS for styling

const RegistrationForm1 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    qualification: '',
    institution: '',
    dob: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Save data to localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      
      setSuccessMessage('User registered successfully!');
      setError(''); // Clear any previous errors

      // Clear the form
      setFormData({
        email: '',
        password: '',
        qualification: '',
        institution: '',
        dob: '',
      });
    } catch (error) {
      console.error('Error saving user data:', error);
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };
  
  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Institution:</label>
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="input-field"
        />

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm1;