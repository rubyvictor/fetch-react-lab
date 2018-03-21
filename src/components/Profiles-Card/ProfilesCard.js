import React from "react";

const ProfilesCard = props => {
  return (
    <div>
      <img
        src={props.imageURL}
        alt="profile thumbnail"
      />
      <h1>{props.title}</h1>
      <h2>{"From: "+props.location}</h2>
      <p>{props.email}</p>
      <p>{props.contact}</p>
      
    </div>
  );
};

export default ProfilesCard;
