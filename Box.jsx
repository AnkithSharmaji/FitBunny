// SideBySideBoxes.js


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SideBySideBoxes.css';

const SideBySideBoxes = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Private Group</h1>
        <p>Create a closed group for you and your friends</p>
        <div className="arrow-link">
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      </div>
      <div className="box">
        <h1>Public Group</h1>
        <p>Explore open groups to join</p>
        <div className="arrow-link">
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default SideBySideBoxes;



/* SideBySideBoxes.css 

body {
  background-color: black;
  color: white;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100vh;
}

.box {
  width: 550px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.box h2 {
  font-size: 20px;
}

.box p {
  font-size: 16px;
}

.arrow-link {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.arrow-link svg {
  color: white;
  width: 100%;
  height: 100%;
}

*/

                                                          //App.js

                                                          // import React, { useState, useEffect } from 'react';
                                                          // import './App.css';
                                                          // import SideBySideBoxes from './SideBySideBoxes';

                                                          // function App() {
                                                          //   const [color, setColor] = useState('blue');

                                                          //   useEffect(() => {
                                                          //     const intervalId = setInterval(() => {
                                                          //       const colors = ['red', 'green', 'blue', 'orange', 'purple'];
                                                          //       const randomColor = colors[Math.floor(Math.random() * colors.length)];
                                                          //       setColor(randomColor);
                                                          //     }, 1000);

                                                          //     return () => clearInterval(intervalId);
                                                          //   }, []);

                                                          //   return (
                                                          //     <div className="App">
                                                          //       <h2 style={{ color, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Join my </h2> 
                                                          //       <h1 style={{ color, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>FIT Bunny</h1> 
                                                          //       <SideBySideBoxes />
                                                          //     </div>
                                                          //   );
                                                          // }

                                                          // export default App;




//     <link href="https://fonts.googleapis.com/css2?family=Georgia:italic&display=swap" rel="stylesheet">