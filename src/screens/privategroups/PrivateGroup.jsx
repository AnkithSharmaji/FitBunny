import React from "react";
import "./PrivateGroup.css";
const PrivateGroup = () => {
  return (
    <div className="privategroup-container">
      <main>
        <div className="container">
          <div className="left-side">
            <div className="box calendar">
              <h2>Group Name</h2>
              {/*  Calender the API dalna hai ya kuch or */}
              <div className="duration">1st April - 21st April</div>
              <div className="progress-slider"></div>
            </div>

            <div className="box challenges">
              <h2>
                Challenges <button className="add-challenge-btn">+</button>
              </h2>
              <div className="challenge">
                <h3>Challenge Name - Cardio</h3>
                <p>Duration: 1st April - 21st April</p>
                <p>Today's Update: 50% completed</p>
                <button className="update-status-btn">Update Status</button>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="box exercise-details">
              <h2>Exercise Details</h2>
              {/*  yaha par Image dalna hai based on the challenge*/}
              <img src="exercise_image.jpg" alt="Exercise Image" />
              <p>Description of exercise......</p>
              <p>Number of Members: 10</p>
              <button className="view-members-btn">Member List</button>
              <button className="add-member-btn">Add Member</button>
            </div>

            <div className="box invite-friends">
              <h2>Invite Friends</h2>
              <input
                type="email"
                placeholder="Enter friend's email: friend@example.com"
              />
              <button className="send-invite-btn">Send Invite</button>
            </div>
          </div>
        </div>
      </main>

      <footer>{/* Footer content  */}</footer>
    </div>
  );
};

export default PrivateGroup;
