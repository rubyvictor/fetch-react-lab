import React from "react";
import "./ProfilesCard.css";

const ProfilesCard = props => {
  const genderColorBasedOnTitle = props.gender === "male" ? "mr" : "ms";
  return (
    <div className="profile-card">
      <div className={genderColorBasedOnTitle} id="left">
        <img
          id="profile-thumbnail"
          src={props.imageURL}
          alt="profile thumbnail"
        />
      </div>
      <div id="right">
        <h1>{props.title}</h1>
        <h2>{"Of: " + props.location}</h2>
        <p id="email">{props.email}</p>
        <p>{props.contact}</p>
      </div>
    </div>
  );
};

export default ProfilesCard;
