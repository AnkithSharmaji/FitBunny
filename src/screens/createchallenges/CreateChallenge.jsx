import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const CreateChallenge = () => {
  const [challengeTitle, setChallengeTitle] = useState("");
  const [challengeDescription, setChallengeDescription] = useState("");
  // const [challengeType, setChallengeTyp e] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (e) => {
    const date = new Date(e.target.value);
    setStartDate(date);
    // If end date is selected and it is less than start date + 3 days, update end date to start date + 3 days
    if (
      endDate &&
      date &&
      date.getTime() + 3 * 24 * 60 * 60 * 1000 > endDate.getTime()
    ) {
      setEndDate(new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000));
    }
  };

  const handleEndDateChange = (e) => {
    const date = new Date(e.target.value);
    setEndDate(date);
  };

  return (
    <div
      className="createchallenges-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "center",
        paddingTop: "10vh",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          padding: "20px 0",
        }}
      >
        <img
          src="/Assets/Images/userProfilePic.png"
          alt="groupprofilePic"
          style={{
            height: "120px",
            width: "120px",
            borderRadius: "50%",
          }}
        />
        <div style={{ textAlign: "left" }}>
          <h1>Group Name</h1>
          <p>Group Description</p>
          <p>Members: 10</p>
        </div>
      </div>

      {/* <img
        src="/Assets/Images/createprivategroup.jpg"
        alt="creategroupbackground"
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      /> */}
      <Typography variant="h5">
        Create your own challenges and invite friends to be part of your fitness
        journey
      </Typography>
      {/* <Typography>
        Join our vibrant challenges{" "}
        <Link
          to="/joingroup"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            // backgroundColor: "skyblue",
            cursor: "pointer",
          }}
        >
          here
        </Link>{" "}
        and kickstart your fitness journey with the ultimate motivation.{" "}
      </Typography> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "45%",
          }}
        >
          <h2 style={{ alignSelf: "flex-start" }}>Create Challenge</h2>
          <TextField
            label="Challenge Title:"
            type="text"
            value={challengeTitle}
            onChange={(e) => setChallengeTitle(e.target.value)}
            placeholder="Challenge name here..."
            required
            sx={{
              mb: 1,
              width: "90%",
              color: "black",
              backgroundColor: "white",
            }}
          />
          <TextField
            label="Challenge Description:"
            type="text"
            value={challengeDescription}
            onChange={(e) => setChallengeDescription(e.target.value)}
            placeholder="Add Challenge Description"
            required
            sx={{
              mb: 1,
              width: "90%",
              backgroundColor: "white",
              color: "black",
            }}
          />
          {/* <TextField
            label="Challenge Type:"
            type="text"
            value={challengeType}
            onChange={(e) => setChallengeType(e.target.value)}
            placeholder="Yoga/Dance/Cardio"
            required
            sx={{ mb: 1 }}
          /> */}

          <p style={{ textAlign: "left" }}>Challenge Duration</p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "30px",
              padding: "10px 0",
            }}
          >
            <div>
              <label htmlFor="startdate">Start Date:</label>

              <input
                label="Start Date"
                type="date"
                id="startdate"
                style={{ mb: 1 }}
                value={startDate ? startDate.toISOString().split("T")[0] : ""}
                onChange={handleStartDateChange}
                max={
                  endDate
                    ? new Date(endDate.getTime() - 3 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    : null
                }
              />
            </div>
            <div>
              <label htmlFor="enddate">End Date:</label>
              <input
                label="End Date"
                type="date"
                id="enddate"
                style={{ mb: 1 }}
                value={endDate ? endDate.toISOString().split("T")[0] : ""}
                onChange={handleEndDateChange}
                min={
                  startDate
                    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    : null
                }
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 40px",
              backgroundColor: "#00647A",
              color: "white",
              fontWeight: "bold",
              width: "50%",
              alignSelf: "center",
            }}
          >
            Add Challenge
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "45%",
          }}
        >
          <h2 style={{ alignSelf: "flex-start" }}>Select Challenges</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              color: "black",
            }}
          >
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                alignItems: "center",
                backgroundColor: "white",
                textAlign: "left",
              }}
            >
              <div>
                <h4>Challenge Name</h4>
                <small>Description of the challenge</small>
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "4px",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
