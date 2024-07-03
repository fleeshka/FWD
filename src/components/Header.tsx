import React from 'react';
import profilePhoto from '../images/profilePhoto.jpg';

const Header: React.FC = () => (
  <>
    <header>
      <img src={profilePhoto} alt="my-photo:(" className="my-photo" />
      <div className="profile-info">
        <h1 className="profile-name">Ulyana Chaikouskaya</h1>
        <div className="bio">
          <h2>About me</h2>
          <p>
            I am a first-year bachelor&apos;s student at Innopolis University,
            majoring in Informatics and Computer Engineering. For a long time I
            was interested in robotics and developed digital twins, but I
            changed university and delved into software development and
            artificial intelligence.
          </p>
        </div>
      </div>
    </header>
  </>
);

export default Header;
