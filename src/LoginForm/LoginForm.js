import React, { useState } from "react";
import "./login.css"; // Uvoz CSS datoteke
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ovdje možeš dodati logiku za provjeru username-a i passworda
    console.log("Podneseni podaci:", { username, password });
    // Na primjer, možeš napraviti poziv API-ju za provjeru podataka
  };

  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Prijava</h2>
        <div className="formGroup">
          <label className="label">Korisničko ime:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="input"
            required
          />
        </div>
        <div className="formGroup">
          <label className="label">Lozinka:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
            required
          />
        </div>
        <button onClick={() => navigate("/")} type="submit" className="button">
          Prijavi se
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
