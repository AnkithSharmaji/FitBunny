// Login.js

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { login } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/login`,
        { email, password },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error("Invalid credentials");
      }
      dispatch(login());
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
            autoComplete="email"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
            autoComplete="new-password"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
