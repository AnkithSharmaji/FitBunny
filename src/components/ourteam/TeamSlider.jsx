// // TeamSlider.js
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./TeamSlider.css";

// const TeamSlider = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Nazma",
//       role: "Desginer",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
//     },
//     {
//       id: 2,
//       name: "Priyanka",
//       role: "Product Manger",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
//     },
//     {
//       id: 3,
//       name: "Ranjith  1",
//       role: "Product Manger",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
//     },
//     {
//       id: 4,
//       name: "Vazeer",
//       role: "Developer",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
//     },
//     {
//       id: 5,
//       name: "Sulthan",
//       role: "Developer",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
//     },
//     {
//       id: 6,
//       name: "Ankith",
//       role: "Developer",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="team-heading">
//       <h2>Our Team</h2>
//       <Slider {...settings}>
//         {teamMembers.map((member) => (
//           <div key={member.id} className="member-box">
//             <img src={member.image} alt={member.name} />
//             <h3>{member.name}</h3>
//             <p>{member.role}</p>
//             <p>{member.content}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TeamSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamMembers from "./teamMembers";
import "./TeamSlider.css";

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team-heading">
      <h2 style={{ color: "#EC8686", fontSize: "40px", padding: "50px 0" }}>
        Our Team
      </h2>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="member-box">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
