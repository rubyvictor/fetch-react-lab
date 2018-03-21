import React, { Component } from "react";
import "./ProfilesPage.css";
import ProfilesCard from "../Profiles-Card/ProfilesCard";

class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10")
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
            title={profile.name.title+" "+profile.name.first + " "+profile.name.last}
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
