import React, { useState } from "react";

const EditProfile = () => {
  const editProfileHandler = (e) => {
    e.preventDefault();
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [fitnessGoal, setFitnessGoal] = useState("");

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

  return (
    <div>
      <section
        id="editprofile-container"
        style={{ minHeight: "80vh", marginTop: "30px", padding: "60px 20px" }}
      >
        <h2 style={{ textAlign: "center" }}>Edit Profile</h2>
        <form
          onSubmit={editProfileHandler}
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
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
              height: "150px",
              width: "200px",
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
                    height: "150px",
                    width: "150px",
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "30px",
                  }}
                >
                  <h1>+</h1>
                  <small>Upload Image</small>
                </div>
              )}
            </div>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            id="fullName"
            value={fullName}
            style={{ width: "90%", padding: "4px" }}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            style={{ width: "90%", padding: "4px" }}
            type="number"
            placeholder="Age"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height"
            name="height"
            id="height"
            value={height}
            style={{ width: "90%", padding: "4px" }}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight"
            name="weight"
            id="weight"
            value={weight}
            style={{ width: "90%", padding: "4px" }}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Fitness Goals"
            name="fitnessGoal"
            id="fitnessGoal"
            value={fitnessGoal}
            style={{ width: "90%", padding: "4px" }}
            onChange={(e) => setFitnessGoal(e.target.value)}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#00647A",
              padding: "4px 80px",
              width: "90%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditProfile;
