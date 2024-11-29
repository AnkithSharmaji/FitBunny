import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { height } from "@mui/system";
const UserProfile = () => {
  return (
    <Grid item xs={12} md={4}>
      <Paper>User Profile</Paper>
    </Grid>
  );
};

const FitnessProgress = () => {
  return (
    <Grid item xs={12} md={4}>
      <Paper> Fitness Progress Section </Paper>
    </Grid>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("John");
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(6.4);
  const [data, setData] = useState([
    {
      title: "Fitness Enthusiasts Group",
      description: "Connect with like-minded fitness enthusiasts",
      isAdmin: true,
    },
    {
      title: "Fitness Enthusiasts Group",
      description: "Connect with like-minded fitness enthusiasts",
      isAdmin: false,
    },
  ]);
  const editProfileHandler = () => {
    navigate("/editprofile");
  };
  const user = { name: "John", age: 30, weight: 65, height: 6.4 };
  // const data = [
  //   {
  //     title: "Fitness Enthusiasts Group",
  //     description: "Connect with like-minded fitness enthusiasts",
  //     isAdmin: true,
  //   },
  //   {
  //     title: "Fitness Enthusiasts Group",
  //     description: "Connect with like-minded fitness enthusiasts",
  //     isAdmin: false,
  //   },
  // ];
  const handleDeleteGroup = (id) => {
    setData(data.filter((item, index) => index !== id));
  };
  return (
    <div className="profile-container" style={{ padding: "20px" }}>
      <Grid
        container
        spacing={4}
        style={{ color: "black" }}
        sx={{ background: "inherit" }}
      >
        <Grid item xs={12}>
          <Paper sx={{ padding: "10px" }}>
            <h3>User Profile</h3>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <img
                src="/Assets/Images/userProfilePic.png"
                alt="profilePic"
                height="100px"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <h4>{username}</h4>
                <p>
                  Age: {age} | Weight: {weight}kg | Height: {height}
                </p>
                <p>Fitness Goals: Build Muscle, Lose fat</p>
                <button
                  onClick={editProfileHandler}
                  style={{
                    color: "white",
                    backgroundColor: "#00647A",
                    alignSelf: "flex-start",
                    padding: "2px 25px",
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: "10px" }}>
            <h3>Fitness Progress</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  padding: "20px 30px",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#00647A",
                }}
              >
                <h4>16</h4>
                <p>Completed</p>
              </div>
              <div
                style={{
                  padding: "20px 30px",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#00647A",
                }}
              >
                <h4>28</h4>
                <p>In Progress</p>
              </div>

              <div
                style={{
                  padding: "20px 30px",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#00647A",
                }}
              >
                <h4>12</h4>
                <p>Not Started</p>
              </div>
            </div>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Paper sx={{ padding: "10px" }}>
            <h3>Challenges Progress</h3>
            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>30-Day Abs</h4>
                <p>Progress: 60% | Remaining: 10 days</p>
              </div>

              <button
                style={{
                  color: "white",
                  backgroundColor: "#00647A",
                  alignSelf: "flex-end",
                  padding: "2px 25px",
                }}
              >
                View
              </button>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Weekly Cardio</h4>
                <p>Progress: 80% | Remaining: 3 days</p>
              </div>

              <button
                style={{
                  color: "white",
                  backgroundColor: "#00647A",
                  alignSelf: "flex-end",
                  padding: "2px 25px",
                }}
              >
                View
              </button>
            </div>
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper sx={{ padding: "10px" }}>
            <h3>Groups</h3>
            {/* <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Fitness Enthusiasts Group</h4>
                <p>Connect with like-minded fitness enthusiasts</p>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <span>Role: Admin </span>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",

                    padding: "2px 25px",
                  }}
                >
                  Delete Group
                </button>
              </div>
            </div> */}
            <div
              style={{
                display: "flex",
                padding: "10px",
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div
                    style={{
                      alignSelf: "flex-end",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Role: {item.isAdmin ? "Admin" : "Member"}</span>
                    <button
                      onClick={() => handleDeleteGroup(index)}
                      style={{
                        color: "white",
                        backgroundColor: "black",

                        padding: "2px 25px",
                      }}
                    >
                      {item.isAdmin ? "Delete Group" : "Leave Group"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
