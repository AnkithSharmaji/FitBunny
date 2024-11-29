import React, { useEffect } from "react";
import "./privategropmember.css"; // Import your CSS file

const GroupPage = () => {
  useEffect(() => {
    const members = [
      {
        name: "Amit Patel",
        fitnessGoal: "Lose Weight",
        status: "Online",
        profileImage: "profile1.jpg",
      },
      {
        name: "Priya Gupta",
        fitnessGoal: "Build Muscle",
        status: "Offline",
        profileImage: "profile2.jpg",
      },
      {
        name: "Sandeep Sharma",
        fitnessGoal: "Improve Endurance",
        status: "Online",
        profileImage: "profile3.jpg",
      },
      {
        name: "Anjali Singh",
        fitnessGoal: "Increase Flexibility",
        status: "Offline",
        profileImage: "profile4.jpg",
      },
      {
        name: "Rahul Kumar",
        fitnessGoal: "Lose Weight",
        status: "Online",
        profileImage: "profile1.jpg",
      },
      {
        name: "Neha Verma",
        fitnessGoal: "Build Muscle",
        status: "Offline",
        profileImage: "profile2.jpg",
      },
      {
        name: "Rajesh Patel",
        fitnessGoal: "Improve Endurance",
        status: "Online",
        profileImage: "profile3.jpg",
      },
      {
        name: "Pooja Gupta",
        fitnessGoal: "Increase Flexibility",
        status: "Offline",
        profileImage: "profile4.jpg",
      },
    ];

    const memberList = document.getElementById("memberList");

    members.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member-profile");
      memberDiv.innerHTML = `
                <img src="/Assets/Images/userProfilePic.png" alt="${
                  member.name
                }">
                <p>Fitness Goal: ${member.fitnessGoal}</p>
                <div class="status-line ${
                  member.status === "Online"
                    ? "status-online"
                    : "status-offline"
                }">${member.status}</div>
            `;
      memberList.appendChild(memberDiv);
    });
  }, []);

  return (
    <div>
      {/* Header */}
      {/* <header>
                <div className="profile-info">
                    
                    <span>User Name</span>
                    
                    <button>Logout</button>
                </div>
            </header> */}

      {/* Member List */}
      <div className="member-list" id="memberList">
        <h2>Private Member List</h2>
      </div>
    </div>
  );
};

export default GroupPage;
