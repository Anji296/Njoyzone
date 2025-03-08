import React, { useState } from "react";

export default function Login({ setPage }) {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim() !== "") {
            localStorage.setItem("user", username);
            setPage("index");
        } else {
            alert("Enter a valid username");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "50px", background: "#121212", color: "white" }}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: "10px", marginBottom: "10px" }}
            />
            <br />
            <button style={{ padding: "10px", background: "orange", border: "none", color: "white" }} onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
