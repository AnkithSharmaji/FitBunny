import React from "react";
import "./Home.css";
import { useRef, useEffect } from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { groups } from "../../slices/groupsSlice";
import { goals } from "../../slices/goalsSlice";
import GroupItem from "../../components/groupitem/GroupItem";
import GoalItem from "../../components/goalItem/GoalItem";
import Footer from "../../components/footer/Footer";
import GroupBox from "../../components/groupbox/GroupBox.jsx";

import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ExploreButton = () => {
  const handleExploreClick = () => {
    // Scroll to the target section groups
    const targetSection = document.getElementById("groups-container");
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <IconButton
      aria-label="explore"
      color="primary"
      onClick={handleExploreClick}
      sx={{
        color: "#f542c5",
        border: "2px solid white",
        padding: "8px 20px",
        borderRadius: "20px",
        transition: "box-shadow 0.1s",
        "&:hover": {
          boxShadow: "0px 3px 6px rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      Explore
      <KeyboardArrowDownIcon />
    </IconButton>
  );
};

const Home = () => {
  const groupsList = useSelector(groups);
  const goalsList = useSelector(goals);
  console.log(groupsList);

  return (
    <div
      id="homepage-container"
      className="homepage-container"
      style={{ backgroundColor: "black", color: "white", paddingTop: "10vh" }}
    >
      <section
        id="landingpage-banner"
        style={{
          padding: "4vh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-around",
          minHeight: "90vh",
        }}
      >
        {/* <video autoplay muted loop id="video-bg">
          <source
            src="https://videos.pexels.com/video-files/5593047/5593047-sd_640_360_24fps.mp4"
            type="video/mp4"
          />
        </video> */}
        <img
          src="/Assets/Images/websiteLogoHome.jpg"
          alt="websitelogo"
          style={{ width: "300px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "62px",
            lineHeight: "72.66px",
            justifyContent: "flex-start",
            paddingTop: "5vh",
            alignItems: "center",
            fontFamily: "Roboto",
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          <p>Achieve your fitness</p>
          <p>goals and boost your</p>
          <p>well-being</p>
        </div>
        <ExploreButton />
      </section>
      <section
        id="publicprivategroupnav"
        style={{
          minHeight: "100vh",
          marginTop: "5vh",
          fontFamily: "Roboto",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              fontSize: "62px",
              lineHeight: "72.66px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            JOIN OUR
          </p>
          <p
            style={{
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "100px",
              lineHeight: "118px",
              backgroundImage: "linear-gradient(to bottom, #ffffff,#ffdb17)",
            }}
          >
            FITBUNNY
          </p>
        </header>

        <GroupBox />
      </section>
      <section
        id="groups-container"
        style={{ minHeight: "100vh", paddingTop: "100px" }}
      >
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Join our active community of fitness enthusiasts and explore public
          groups!
        </h2>
        <Box
          width="100vw"
          my={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          p={2}
          sx={{ flexWrap: "wrap" }}
        >
          {groupsList.map((group, index) => (
            <GroupItem key={index} group={group} id={index} />
          ))}
        </Box>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
