import React, { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice";

import { GoogleLogin } from "@react-oauth/google";

const LoginModal = ({ open, onClose, navToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLoginSuccess = () => {};
  // const handleLoginFailure = () => {};
  const handleLoginSuccess = (response) => {
        console.error('Login success:', response);
        const accessToken = response.access_token;
        // Send the access token to your backend for verification and user handling
    };

    const handleLoginFailure = (error) => {
        console.error('Login failed:', error);
    };


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
      await onClose();

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
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "12vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          p: 3,
          borderRadius: 4,
          maxWidth: "80%",
          width: "auto",
        }}
      >
        {" "}
        <div style={{ display: "flex" }}>
          <Typography variant="h6" sx={{ textAlign: "center", flexGrow: 1 }}>
            Login
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ "&:hover": { backgroundColor: "red" } }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <form onSubmit={handleLoginSubmit} style={{ paddingTop: "8px" }}>
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
                Login
              </Button>
            </Grid>
          </Grid>
          {/* <GoogleOAuthProvider clientId="288547252790-4habfdkf3t1365t4el3b8i4kn5vaq6jo.apps.googleusercontent.com"> */}
          <GoogleLogin
            buttonText="Login with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            scope="profile email"
            // onError={() => {
            //   console.log("Login Failed");
            // }}
          />
          {/*  </GoogleOAuthProvider>  */}

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
            <Typography variant="contained" onClick={navToSignUp}>
              <strong>Sign Up</strong>
            </Typography>
          </Typography>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
