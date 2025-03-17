import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn"; // Import SignIn to show if user is null
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Prevent flashing SignIn page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          credentials: "include", // Ensures cookies/session are included
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null); // Reset user state to show SignIn page inside Profile
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <p>Loading user data...</p>; // Prevent flashing the SignIn page
  }

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-card">
          <div className="profile-icon">{user.email.charAt(0).toUpperCase()}</div>
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <button onClick={() => navigate("/")}>Go to Home</button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <SignIn setUser={setUser} /> // Show SignIn component only if user is null
      )}
    </div>
  );
};

export default Profile;
