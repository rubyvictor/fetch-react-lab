import React, { Component } from "react";
import "./ProfilesPage.css";
import ProfileCard from "../Profiles-Card/ProfileCard";

class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=50")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    return this.state.profiles.map((profile, i) => {
      return (
        <div key={i}>
          <ProfilesCard
            imageURL={profile.picture.medium}
            gender={profile.gender}
            title={
              profile.name.title +
              " " +
              profile.name.first +
              " " +
              profile.name.last
            }
            location={profile.location.city}
            email={profile.email}
            contact={profile.cell}
          />
        </div>
      );
    });
  }
}

export default ProfilesPage;
