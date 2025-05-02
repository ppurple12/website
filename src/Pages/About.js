import React from 'react';
import '../styles.css'; // assuming CSS is in this file

const About = () => {
  return (
    <div className="container about-container">
      <div className="profile-section">
        <img src="me.png" alt="Evan" className="profile-picture" />
        <h1 className="profile-name">Evan Wells</h1>
        <p className="profile-description">
        I was born and raised in North Bay, Ontario and am currently a third-year Computer Science student at Nipissing University.
         I’m a passionate developer who thrives on writing clean, efficient code and solving real-world problems through 
         technology. I value simplicity, collaboration, and creativity, and I’m always eager to learn and explore new 
         tools, frameworks, and development practices.
        </p>
      </div>

      
    
      <h3 className="hobbies-subtitle">Hobbies</h3>

      <div className="hobbies-section">
        <div className="hobby-box">
          <img src="running0.png" alt="Running" className="hobby-icon" />
          <h3 className="hobby-title">Running</h3>
          <p className="hobby-description">
          I got into running last year to add some cardio to my workouts. I didn’t expect to enjoy it as much as I do now. 
          There’s something calming about just heading out and zoning in on the rhythm. These days, I try to run a few 
          times a week and see if I can beat my last time or distance.
          </p>
          <img src={`${process.env.PUBLIC_URL}/shoes.jpg`} alt="Project Screenshot" className="hobby-image"></img>
        </div>
        <div className="hobby-box">
          <img src="pokemon.png" alt="Pokemon Cards" className="hobby-icon" />
          <h3 className="hobby-title">Collecting Pokemon Cards</h3>
          <p className="hobby-description">
          I’ve recently gotten back into collecting Pokémon cards. It’s fun opening packs, organizing them by sets, 
          and hunting for cool pulls. It’s a nice mix of nostalgia and just a fun hobby to unwind with
          —even if I tell myself it's for the “investment.”
          </p>
          <img src={`${process.env.PUBLIC_URL}/cards.JPG`} alt="Project Screenshot" className="hobby-image"></img>
        </div>
        <div className="hobby-box">
          <img src="games0.png" alt="Gaming" className="hobby-icon" />
          <h3 className="hobby-title">Playing Games</h3>
          <p className="hobby-description">
          I like playing games—both board games and video games. I’m all about strategy and playing with friends,
           whether it’s something laid-back or competitive. My favorites right now are Overwatch, Brawlhalla 
           and a board game called King’s Cribbage.
          </p>
          <img src={`${process.env.PUBLIC_URL}/desk.jpg`} alt="Project Screenshot" className="hobby-image"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
