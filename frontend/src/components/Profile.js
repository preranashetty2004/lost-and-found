import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          navigate("/signin"); // Redirect if not authenticated
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/signin");
      }
    };

    fetchUser();
  }, [navigate]);

  // Extract first letter of email in uppercase
  const getEmailInitial = (email) => (email ? email.charAt(0).toUpperCase() : "");

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-card">
          {/* Profile Icon (First Letter of Email) */}
          <div className="profile-icon">
            {getEmailInitial(user.email)}
          </div>
          {/* User Details */}
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
