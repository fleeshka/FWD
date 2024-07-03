import React from 'react';

const Bio: React.FC = () => (
  <div className="my-background">
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-details">
          <h3>Brest State Technical University</h3>
          <p>
            Faculty of Electronic Information Systems
            <br /> Programming Mobile Systems
          </p>
        </div>
        <div className="education-dates">
          <p>09/2021 – 07/2023</p>
        </div>
      </div>

      <div className="education-item">
        <div className="education-details">
          <h3>Innopolis University</h3>
          <p>
            Computer Science and Computer Engineering <br /> Data Science and
            Artificial Intelligence
          </p>
        </div>
        <div className="education-dates">
          <p>09/2023 – 07/2027</p>
        </div>
      </div>
    </div>
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <div className="experience-details">
          <h3>Digital Twins Engineer</h3>
          <p>
            Competence Center “Industrial Robotics and <br /> Digital
            Engineering” Republic of Belarus, BrSTU
          </p>
        </div>
        <div className="experience-dates">
          <p>02/2023 – 01/2024</p>
        </div>
      </div>
    </div>
  </div>
);

export default Bio;
