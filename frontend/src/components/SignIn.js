import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = ({ user, setUser }) => {  // ✅ Accept setUser as a prop
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Simulated authentication - storing user credentials
        const storedUser = { email: formData.email, password: formData.password };
        setUser(storedUser);  // ✅ Save user details
      
        navigate("/home");  // ✅ Redirect to Home
      };
      
  
    return (
      <div className="auth-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Sign In</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    );
  };
  
  export default SignIn;
  