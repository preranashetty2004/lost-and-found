import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUser }) => {  // ✅ Removed unused `user` prop
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: "include",
            });
            const data = await res.json();
            if (res.ok) {
                setUser(data);  // ✅ Save authenticated user
                navigate("/profile");  // ✅ Redirect to Profile page
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Server error");
        }
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
