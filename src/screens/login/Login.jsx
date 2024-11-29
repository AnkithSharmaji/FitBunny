// Login Component has an input form with email and password fields, after successful login this page will navigate user to homepage '/'

// Imports
import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./Login.css";
import axios from "axios";
import { login } from "../../slices/authSlice";

// Login Component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Login function will post data to server and on successful verification user will be logged in
  const handleLoginSubmit = async (e) => {
    // alert("HEllo");
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
      // console.log(response.data);
      // If there is no response data received, throw an error
      if (!response.data) {
        setErrorMessage("Please enter the registered email");
        throw new Error(errorMessage);
      }
      // Setting in local storage
      if (rememberMe) {
        localStorage.setItem("email", email);
      }
      console.log(response.data);
      // Navigate to homepage after login success
      toast.success("Login successful!");

      dispatch(login());

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(errorMessage);
    }
  };
  // Function to load saved credentials if "Remember Me" is checked
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
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
          {/* Remember me checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => handleRememberMeChange(e)}
              />
            }
            label="Remember me"
            sx={{ mb: 2 }}
          />
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="wrap"
            marginBottom={2}
          >
            {/* Forgot password */}
            <Grid item>
              <Link to="/resetpassword">Forgot Password?</Link>
            </Grid>
            {/* Login Button */}
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Login me
              </Button>
            </Grid>
          </Grid>
          {/* <GoogleOAuthProvider clientId="288547252790-4habfdkf3t1365t4el3b8i4kn5vaq6jo.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider> */}

          {errorMessage && (
            <Typography variant="body2" color="error" gutterBottom>
              {errorMessage}
            </Typography>
          )}
          <Typography variant="body1" gutterBottom>
            Don't have an account?{" "}
            {/* <Link to="/register">
              <strong>Register</strong>
            </Link> */}
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
