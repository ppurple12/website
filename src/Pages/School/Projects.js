import React from "react";
import '../../styles.css';
function Projects() {
  return (
   <section id="projects" className="projects-page">
     <div className="project-entry">
      <div className="project-text">
        <h2 className="project-title">
          <a href="https://github.com/ppurple12/matlab_project" target="_blank" rel="noopener noreferrer">
            Implementation of GRA Algorithm in MATLAB
          </a>
          <span className="project-date"> · Winter 2025</span>
        </h2>
        <p className="project-description">
        This project focuses on the implementation of the Group Role Assignment (GRA) algorithm within the MATLAB programming environment.
         GRA, part of the Role-Based Collaboration framework, is a decision-making process that optimally assigns agents to tasks based on various
          criteria. Although typically executed in environments like Python or using tools such as CPLEX, this project explores the algorithm’s
           logic and functionality through MATLAB—highlighting both the language’s capabilities and its learning potential.
        </p>
      </div>
      <div className="project-image-wrapper">
        <img src="matlab.png" alt="Project Screenshot" className="project-image" />
      </div>
    </div>

    <div className="project-entry">
      <div className="project-text">
        <h2 className="project-title">
          <a href="https://github.com/ppurple12/workout_app" target="_blank" rel="noopener noreferrer">
            GMRA Workout Optimization Application
          </a>
          <span className="project-date"> · Fall 2024</span>
        </h2>
        <p className="project-description">
          This project developed a workout app using Role-Based Collaboration (RBC) and Group Multi-Role Assignment 
          (GMRA) to dynamically assign exercises based on user goals. Users can input their desired number of exercises 
          and target muscle groups, and the app generates personalized workout plans. Key features include a 3D human body 
          model, exercise assignment via GMRA, and integration with Blender and Three.js for interactive muscle group targeting.
        </p>
      </div>
      <div className="project-image-wrapper">
        <img src="muscles.png" alt="Project Screenshot" className="project-image" />
      </div>
    </div>
   
    <div className="project-entry">
      <div className="project-text">
        <h2 className="project-title">
          <a href="https://github.com/ppurple12/rbcsystem" target="_blank" rel="noopener noreferrer">
          Optimizing Ticket Assignment with GRAABD Algorithm
          </a>
          <span className="project-date"> · Summer 2024</span>
        </h2>
        <p className="project-description">
        A role-based algorithm that assigns IT tickets to technicians by balancing workload and skill fit. Built with Springboot and
         Google OR-Tools, it uses an “Agent Fitness” score—based on task requirements and technician availability—to 
         optimize assignments. This project implements a variant of Group Role Assignment called GRAABD (with Agents' 
         Busyness Degree), providing a scalable and fair solution for dynamic ticket management in IT environments.
        </p>
      </div>
      <div className="project-image-wrapper">
        <img src="tickets.png" alt="Project Screenshot" className="project-image" />
      </div>
    </div>
  </section>
  );
}

export default Projects;