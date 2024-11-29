import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CreateGroupForm = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  // const [challengeType, setChallengeTyp e] = useState("");
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewImage(null);
  };

  // const handleStartDateChange = (e) => {
  //   const date = new Date(e.target.value);
  //   setStartDate(date);
  //   // If end date is selected and it is less than start date + 3 days, update end date to start date + 3 days
  //   if (
  //     endDate &&
  //     date &&
  //     date.getTime() + 3 * 24 * 60 * 60 * 1000 > endDate.getTime()
  //   ) {
  //     setEndDate(new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000));
  //   }
  // };

  // const handleEndDateChange = (e) => {
  //   const date = new Date(e.target.value);
  //   setEndDate(date);
  // };

  const handleReset = () => {
    setGroupName("");
    setGroupDescription("");
    // setStartDate(null);
    // setEndDate(null);
  };

  const handleCreateGroupSubmit = (e) => {
    e.preventDefault();
    // api request and then set the other values to initial values
    handleReset();
    navigate("/createchallenge");
  };

  return (
    <div className="creategroup-container">
      <div
        className="creategroup-form"
        style={{ width: "50%", margin: "auto" }}
      >
        <form
          onSubmit={handleCreateGroupSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "90%",
            backgroundColor: "#CFDBF8",
            padding: "12px",
            marginBottom: "40px",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="imageInput"
          />
          <label
            htmlFor="imageInput"
            style={{
              height: "100px",
              width: "130px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                // borderRadius: "50%",
                // border: "2px solid #ccc",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-around",
                cursor: "pointer",
                margin: "auto",
              }}
            >
              {previewImage ? (
                <>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "50%",
                    }}
                  />
                  <button
                    onClick={handleRemoveImage}
                    style={{
                      backgroundColor: "red",
                      border: "1px solid #ccc",
                      borderRadius: "50%",
                      cursor: "pointer",
                      padding: "4px 8px",
                    }}
                  >
                    X
                  </button>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100px",
                    width: "100px",
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "30px",
                    color: "black",
                  }}
                >
                  <h1>+</h1>
                  <small>
                    <small>Group Icon</small>
                  </small>
                </div>
              )}
            </div>
          </label>
          <TextField
            label="Group Name:"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group name here..."
            required
            sx={{ mb: 1, width: "90%" }}
          />
          <TextField
            label="Group Description:"
            type="text"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            placeholder="Group Description here..."
            required
            sx={{ mb: 1, width: "90%" }}
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
          {/* <input
            label="Start Date"
            type="date"
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
          <input
            label="End Date"
            type="date"
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
          /> */}
          <button
            type="submit"
            style={{
              padding: "10px 40px",
              backgroundColor: "#00647A",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupForm;
